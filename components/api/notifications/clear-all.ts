import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';

function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split(';').map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const userId = getUserId(req);

=======


function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  const cookie = req.headers.cookie || '';

  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);

  if (req && req.method !== 'DELETE')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {function getUserId(req: NextApiRequest): string {
  const cookie = req && req.headers.cookie || '';
  const match = cookie && cookie.split().map((c) => c && c.trim()).find((c) => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);



  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const userId = getUserId(req);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId);

<<<<<<< HEAD
    if (error) return res.status(200).json({ ok: true });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
=======
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
}






}

    const { error} = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId),

    if (error) return res.status(200).json({ ok: true }),

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })

  }

}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
