import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  try {
=======
    return res.status(405).json({ error: 'Method not allowed' });
=======
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const userId = getUserId(req);
    const { id } = req.body as { id?: string };
    if (!id) return res.status(400).json({ error: 'Missing id' });

    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);

<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev
=======
<<<<<<< HEAD
<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev
=======
    if (error) return res.status(200).json({ ok: true }), // tolerate in dev
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    return res.status(200).json({ ok: true });
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error' });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error' });
  }
=======
    if (error) return res.status(200).json({ ok: true }), // tolerate in dev

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: 'Unexpected error' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
