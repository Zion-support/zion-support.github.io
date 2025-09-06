import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' }),

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key'

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  try {_if (usingPlaceholder) {
      return res.status(200).json({
        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
        currency: 'USD'})
    }

    const supabase = getServerSupabase()

    const events = ['visitsignupprofile_completedjob_createdhire'] as const

    for (const ev of events) {_const { count, _error} = await supabase
        .from('referral_events')
        .select('*', {_count: 'exact', _head: true})
        .eq('partner_code', code)
        .eq('event', ev),
      if (error) return res.status(500).json({ error: error.message }),
      counts[ev] = count || 0
    }

    const total_signups = counts['signup'] || 0
    const total_visits = counts['visit'] || 0
    const total_profile_completions = counts['profile_completed'] || 0
    const total_job_creations = counts['job_created'] || 0

    const payout_amount = total_profile_completions * 30 + total_job_creations * 50

    return res.status(200).json({
      total_signups,
      total_visits,
      total_profile_completions,
      total_job_creations,
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0,
      payout_amount,
      currency: 'USD'})
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}