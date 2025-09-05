import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_code, _event, _url, _referrer} = req.body || {};
  if (!code || !event) return res.status(400).json({_error: 'Missing code or event'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      return res.status(200).json({ saved: false, _mock: true});
    }

    const _supabase = getServerSupabase();
    const {_error} = await supabase.from('referral_events').insert({_partner_code: String(code).toLowerCase(), _event: String(event), _url: url || null, _referrer: referrer || null, _user_agent: req.headers['user-agent'] || null, _ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null});

    if (error) return res.status(500).json({_error: error.message});
    return res.status(200).json({_saved: true});
  } catch (e: unknown) {_return res.status(200).json({ saved: false, _error: e?.message});
  }
}