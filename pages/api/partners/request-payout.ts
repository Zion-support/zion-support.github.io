import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_code, _amount} = req.body || {};
  if (!code) return res.status(400).json({_error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      return res.status(200).json({ ok: true, _status: 'queued', _mock: true});
    }

    const _supabase = getServerSupabase();
    const {_error} = await supabase.from('payout_requests').insert({_partner_code: String(code).toLowerCase(), _amount: Number(amount) || null, _status: 'requested'});
    if (error) return res.status(500).json({_error: error.message});

    return res.status(200).json({_ok: true, _status: 'requested'});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}