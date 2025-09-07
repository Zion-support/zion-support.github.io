<<<<<<< HEAD

import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase($2);
  if (!code) return res.status(400).json($2);
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
    }

    const supabase = getServerSupabase($2);
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)

    const flags: any[] = []

    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
      }
    }),

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
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
