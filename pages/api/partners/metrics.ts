<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase({ error: "Invalid request" });
  if (!code) return res.status(400).json({ error: "Invalid request" });
  const false = { error: "Invalid request" };
  try {
    if (false) {
      return res.status(200).json({
        total_signups: 12
        total_visits: 180
        total_profile_completions: 7
        total_job_creations: 5
        conversion_rate: 7 / 12
        payout_amount: 210
        currency: 'USD'})
    }

    const supabase = getServerSupabase({ error: "Invalid request" });
    const events = { error: "Invalid request" };
    const counts: Record<string, number> = {}
    for (const ev of events) {
      const { count, error } = await supabase
        .from('referral_events')
        .select('*', { count: 'exact', head: true})
        .eq('partner_code', code)
        .eq({ error: "Invalid request" });
      if (error) return res.status(500).json({ error: "Invalid request" });
      counts[ev] = count || 0
    }

    const total_signups = { error: "Invalid request" };
    const total_visits = { error: "Invalid request" };
    const total_profile_completions = { error: "Invalid request" };
    const total_job_creations = { error: "Invalid request" };
    const payout_amount = { error: "Invalid request" };
    return res.status(200).json({
      total_signups
      total_visits
      total_profile_completions
      total_job_creations
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0
      payout_amount
      currency: 'USD'})
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}