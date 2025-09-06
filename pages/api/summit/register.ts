import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  try {
    const { name, email, role, country, source } = req.body || {};

    if (!name || !email || !role || !country) {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(400).json({ error: 'Missing required fields' });
=======
      return res.status(400).json({ error: 'Missing required fields' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(400).json({ error: 'Missing required fields' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const { data, error } = await supabase
      .from('summit_registrations')
      .insert([
        {
<<<<<<< HEAD
          name,
          email,
          role,
          country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()
        }
      ])
=======
          name;
          email;
          role;
          country;
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      .select('*')
      .single();

    if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(500).json({ error: error.message });
=======
      return res.status(500).json({ error: error.message })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    return res.status(200).json({ ok: true, registration: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })
  }
<<<<<<< HEAD
=======
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ ok: true, registration: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
