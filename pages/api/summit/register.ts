import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });  }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  try {
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {
<<<<<<< HEAD
      return res.status(400).json({ error: 'Missing required fields' });    }
=======
      return res.status(400).json({ error: 'Missing required fields' })
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const { data, error } = await supabase
      .from('summit_registrations')
      .insert([
        {
          name,
    email,
          role,
<<<<<<< HEAD
          country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString(),
        },
      ])      .select('*')
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true, registration: data });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' });
  }
=======
    country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])
      .select('*')
      .single(),
    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ ok: true, registration: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Unknown error' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
