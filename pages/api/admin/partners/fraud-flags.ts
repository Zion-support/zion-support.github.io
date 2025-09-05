import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', _severity: 'low', _note: 'Multiple visits from same IP'}]});
    }

    const _supabase = getServerSupabase();
    const {_data, _error} = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
    if (error) return res.status(500).json({_error: error.message});

    const _counts = new Map<string, number>();
    for (const row of data || []) {_const _key = (row as any).ip_address || 'unknown';
      counts.set(key, _(counts.get(key) || 0) + 1);}

    const flags: unknown[] = [];
    counts.forEach(_(count, _ip) => {_if (count > 30 && ip !== 'unknown') {
        flags.push({ type: 'suspicious_ip', _severity: 'medium', _ip, _count, _note: 'High number of events from a single IP in 7 days'});
      }
    });

    return res.status(200).json({_flags});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}