import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'DELETE');
    return res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);
    if (error) return res.status(200).json({ ok: true });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(200).json({ ok: true })

  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
