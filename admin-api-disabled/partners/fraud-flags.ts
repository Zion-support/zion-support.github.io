import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { code } = req.query;
    
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Partner code is required' });
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code);

    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }

    const counts = new Map<string, number>();
    data?.forEach((event: { ip_address: string; created_at: string }) => {
      const ip = event.ip_address || 'unknown';
      counts.set(ip, (counts.get(ip) || 0) + 1);
    });

    const flags: Array<{ ip: string; count: number }> = [];
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
        flags.push({ ip, count });
      }
    });

    return res.status(200).json({ flags });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}