import type { NextApiRequest, NextApiResponse } from 'next';

    // Basic validation
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')

  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body |{}
  if (!email |typeof email !== 'string') return res.status(400).send('Invalid email');

  try {
    // Basic validation
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    const isPlaceholder =
      (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true });    }
    }

    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')
      .insert({
        email: normalized
        source: 'mobile-launch'
        created_at: new Date().toISOString()
      })      .select('*')      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })  }      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status (500).send (e?.message || 'Unexpected error');
}
}
    return res.status(500).send(e?.message || 'Unexpected error');
}
    return res.status(500).send(e?.message || 'Unexpected error');

}
