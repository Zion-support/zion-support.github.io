import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase($2);
  if (!code) return res.status(400).json($2);
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
        currency: 'USD'})
    }

    const supabase = getServerSupabase($2);
    const events = $2;
    const counts: Record<string, number> = {},

    for (const ev of events) {
      const { count, error } = await supabase
        .from('referral_events')
        .select('*', { count: 'exact', head: true})
        .eq('partner_code', code)
        .eq($2);
      if (error) return res.status(500).json($2);
      counts[ev] = count || 0
    }

    const total_signups = $2;
    const total_visits = $2;
    const total_profile_completions = $2;
    const total_job_creations = $2;
    const payout_amount = $2;
    return res.status(200).json({
      total_signups,
      total_visits,
      total_profile_completions,
      total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'})
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
}