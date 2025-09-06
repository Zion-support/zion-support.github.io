import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function getUserId(req: NextApiRequest): string {
<<<<<<< HEAD
  const cookie = null;
    if (error) return res.status(200).json({ ok: true }), // tolerate in dev

=======
  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    const userId = getUserId(req);
    const { id } = req.body as { id?: string }
    if (!id) return res.status(400).json({ error: 'Missing id' });
<<<<<<< HEAD
    const { error } = await supabase
=======

    
}

const { error } = await supabase
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (error) return res.status(200).json({ ok: true }); // tolerate in dev
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(200).json({ ok: true });
 
} catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
<<<<<<< HEAD
  }
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
