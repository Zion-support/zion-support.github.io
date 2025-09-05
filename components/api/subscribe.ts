import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email} = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');

  try {_// Basic validation
    const _normalized = email.trim().toLowerCase();
    const _isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');

    // If placeholders are still used, _just accept without DB write
    const _isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, _simulated: true});
    }

    const {_data, _error} = await supabase
      .from('email_signups')
      .insert({_email: normalized, _source: 'mobile-launch', _created_at: new Date().toISOString()})
      .select('*')
      .single();

    if (error) {_if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, _duplicate: true});
      }
      return res.status(500).send(error.message || 'Database error');
    }

    return res.status(200).json({_ok: true, _data});
  } catch (e: unknown) {_return res.status(500).send(e?.message || 'Unexpected error');}
}