import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { code } = req.query;
    
    if (!code || Array.isArray(code)) {
      return res.status(400).json({ error: 'Partner code is required' });
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Convert to CSV format
    const csv = [
      'Event,Date',
      ...data.map(row => `${row.event},${row.created_at}`)
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="partner-${code}-export.csv"`);
    res.status(200).send(csv);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}