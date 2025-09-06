import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  try {
    if (usingPlaceholder) {
      return res.status(200).json({
<<<<<<< HEAD
        total_signups: 12,
        total_visits: 180,
        total_profile_completions: 7,
        total_job_creations: 5,
        conversion_rate: 7 / 12,
        payout_amount: 210,
        currency: 'USD',
      });
=======
        total_signups: 12, total_visits: 180,
        total_profile_completions: 7, total_job_creations: 5,
        conversion_rate: 7 / 12, payout_amount: 210,
        currency: 'USD'})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    const supabase = getServerSupabase();

<<<<<<< HEAD
    const events = [
      'visit',
      'signup',
      'profile_completed',
      'job_created',
      'hire',
    ] as const;
    const counts: Record<string, number> = {};

     = await supabase
=======
    const events = ['visitsignupprofile_completedjob_createdhire'] as const;
    const counts: Record<string, number> = {};

    for (const ev of events) {
      const { count, error } = await supabase
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        .from('referral_events')
        .select('*', { count: 'exact', head: true })
        .eq('partner_code', code)
        .eq('event', ev);
      if (error) return res.status(500).json({ error: error.message });
<<<<<<< HEAD
      counts[ev] = count || 0;
=======
      counts[ev] = count || 0
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    const total_signups = counts['signup'] || 0;
    const total_visits = counts['visit'] || 0;
    const total_profile_completions = counts['profile_completed'] || 0;
    const total_job_creations = counts['job_created'] || 0;

<<<<<<< HEAD
    const payout_amount =
      total_profile_completions * 30 + total_job_creations * 50;
=======
    const payout_amount = total_profile_completions * 30 + total_job_creations * 50;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    return res.status(200).json({
      total_signups,
      total_visits,
      total_profile_completions,
      total_job_creations,
<<<<<<< HEAD
      conversion_rate: total_signups
        ? total_profile_completions / total_signups
        : 0,
      payout_amount,
      currency: 'USD',
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
=======
      conversion_rate: total_signups ? total_profile_completions / total_signups : 0, payout_amount,
      currency: 'USD'})
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
