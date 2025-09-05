import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        leaders: [
          { code: 'aihub', _profile_completions: 9},
          {_code: 'modelmasters', _profile_completions: 7},
          {_code: 'promptpro', _profile_completions: 5}]});
    }

    const _supabase = getServerSupabase();
    const _startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const {_data, _error} = await supabase
      .from('referral_events')
      .select('partner_code, event, created_at')
      .gte('created_at', startOfMonth.toISOString());
    if (error) return res.status(500).json({_error: error.message});

    const _map = new Map<string, number>();
    for (const row of data || []) {_if (row.event !== 'profile_completed') continue;
      const _key = row.partner_code as string;
      map.set(key, _(map.get(key) || 0) + 1);}

    const _leaders = Array.from(map.entries())
      .map(_([code, _profile_completions]) => ({_code, _profile_completions}))
      .sort(_(a, _b) => b.profile_completions - a.profile_completions)
      .slice(0, 10);

    return res.status(200).json({_leaders});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}