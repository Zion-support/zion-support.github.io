import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const supabase = getServerSupabase();
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    
    const { data, error } = await supabase
      .from('referral_events')
      .select('partner_code, event')
      .gte('created_at', startOfMonth.toISOString());

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Calculate scores
    const scores: Record<string, number> = {};
    data.forEach(row => {
      if (!scores[row.partner_code]) {
        scores[row.partner_code] = 0;
      }
      scores[row.partner_code] += row.event === 'signup' ? 10 : 1;
    });

    const leaderboard = Object.entries(scores)
      .map(([code, score]) => ({ code, score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    res.status(200).json({ leaderboard });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}