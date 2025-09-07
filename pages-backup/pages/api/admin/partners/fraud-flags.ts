<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code parameter' });
  
  try {
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code);

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    const flags: any[] = [];
    
    // Simple fraud detection logic
    if (data && data.length > 0) {
      const ipCounts = new Map();
      data.forEach(event => {
        const ip = event.ip_address || 'unknown';
        ipCounts.set(ip, (ipCounts.get(ip) || 0) + 1);
      });

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method Not Allowed');
    }
    
    return res.status(200).json({
      flags: []
    });
=======
      ipCounts.forEach((count, ip) => {
        if (count > 30 && ip !== 'unknown') {
          flags.push({
            type: 'suspicious_ip'
            severity: 'medium'
            ip
            count
            note: 'High number of events from a single IP in 7 days' 
          });
        }
      });
    }
    return res.status(200).json({ flags });
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
