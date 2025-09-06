import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || ''
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='))
  if (match) return decodeURIComponent(match.split('=')[1]),
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' }),
  try {
    const userId = getUserId(req)

function getUserId(_req: NextApiRequest): string {_const _cookie = req.headers.cookie || '';
  const _match = cookie.split(';').map(_(c) => c.trim()).find(_(c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed'});
  try {_const _userId = getUserId(req);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const { error} = await supabase
      .from('notifications')
      .delete()
      .eq('user_id', userId),

    if (error) return res.status(200).json({ ok: true }),

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}