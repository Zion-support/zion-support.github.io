import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      const _csv = 'event, _timestamp\nvisit, _2025-01-01T00:00:00Z\nsignup, _2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', _'text/csv');
      res.setHeader('Content-Disposition', _`attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv);
    }

    const _supabase = getServerSupabase();
    const {_data, _error} = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', {_ascending: false});

    if (error) return res.status(500).json({_error: error.message});

    const _rows = [['event', 'timestamp'], ...(data || []).map(_(r: unknown) => [r.event, r.created_at])];
    const _csv = rows.map(r => r.join(',')).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${_code}-referrals.csv"`);
    return res.status(200).send(csv);
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}