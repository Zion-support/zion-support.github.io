import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string')
    return res.status(400).send('Invalid email');
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write
<<<<<<< HEAD
<<<<<<< HEAD
    const isPlaceholder =
      (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true });
=======
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const { data, error } = await supabase
      .from('email_signups')
<<<<<<< HEAD
<<<<<<< HEAD
      .insert({
        email: normalized,
        source: 'mobile-launch',
        created_at: new Date().toISOString(),
      })
=======
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      .select('*')
      .single();

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
<<<<<<< HEAD
<<<<<<< HEAD
        return res.status(200).json({ ok: true, duplicate: true });
=======
        return res.status(200).json({ ok: true, duplicate: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
      return res.status(500).send(error.message || 'Database error')
    }

    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).send(e?.message || 'Unexpected error');
  }
=======
        return res.status(200).json({ ok: true, duplicate: true })
      }
      return res.status(500).send(error.message || 'Database error')
    }

    return res.status(200).json({ ok: true, data })
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error')
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).send(e?.message || 'Unexpected error')
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
