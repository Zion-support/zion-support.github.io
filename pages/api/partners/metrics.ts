import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      return res.status(200).json({
        total_signups: 12, _total_visits: 180, _total_profile_completions: 7, _total_job_creations: 5, _conversion_rate: 7 / 12, _payout_amount: 210, _currency: 'USD'});
    }

    const _supabase = getServerSupabase();

    const _events = ['visit', 'signup', 'profile_completed', 'job_created', 'hire'] as const;
    const counts: Record<string, number> = {};

    for (const ev of events) {_const { count, _error} = await supabase
        .from('referral_events')
        .select('*', {_count: 'exact', _head: true})
        .eq('partner_code', code)
        .eq('event', ev);
      if (error) return res.status(500).json({_error: error.message});
      counts[ev] = count || 0;
    }

    const _total_signups = counts['signup'] || 0;
    const _total_visits = counts['visit'] || 0;
    const _total_profile_completions = counts['profile_completed'] || 0;
    const _total_job_creations = counts['job_created'] || 0;

    const _payout_amount = total_profile_completions * 30 + total_job_creations * 50;

    return res.status(200).json({_total_signups, _total_visits, _total_profile_completions, _total_job_creations, _conversion_rate: total_signups ? total_profile_completions / total_signups : 0, _payout_amount, _currency: 'USD'});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}