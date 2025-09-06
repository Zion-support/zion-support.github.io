import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '',
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id=')),
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}


=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    const userId = getUserId(req),
    const { id } = req.body as { id?: string },
    if (!id) return res.status(400).json({ error: 'Missing id' }),

    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId),



    return res.status(200).json({ ok: true })
  } catch (e) {

=======
    return res.status(500).json({ error: 'Unexpected error' })
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
