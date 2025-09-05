import type {_NextApiRequest, _NextApiResponse} from 'next';

function sanitizeCode(_input: string): string {_return input.toLowerCase().replace(/[^a-z0-9-]/g, _'-').replace(/-+/g, _'-').replace(/^-|-$/g, _'');}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_name, _niche, _socials, _payout_method, _desired_code} = req.body || {};
  if (!name || !desired_code) return res.status(400).json({_error: 'Missing required fields'});

  const _code = sanitizeCode(desired_code);
  if (!code) return res.status(400).json({_error: 'Invalid code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      return res.status(200).json({ ok: true, _code, _status: 'pending', _mock: true});
    }

    const _supabase = getServerSupabase();

    const {_data: existing, _error: existingErr} = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle();

    if (existingErr) return res.status(500).json({_error: existingErr.message});
    if (existing) return res.status(409).json({_error: 'Code already taken'});

    const {_error} = await supabase.from('partners').insert({_code, _name, _niche: niche || null, _socials: socials || null, _payout_method: payout_method || null, _status: 'pending', _commission_rate: 0.15});

    if (error) return res.status(500).json({_error: error.message});

    return res.status(200).json({_ok: true, _code, _status: 'pending'});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
  }
}