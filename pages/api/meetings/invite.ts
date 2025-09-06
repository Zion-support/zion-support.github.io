import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
<<<<<<< HEAD

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName)
      return res.status(400).json({ error: 'Missing fields' });
    if (!url || !key) return res.status(200).json({ ok: true, skipped: true });

=======
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status($1).json({$2});
    if (!url || !key) return res.status($1).json({$2});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({
      type: 'broadcast',
      event: 'call_invite',
      payload: { projectId, roomName, inviterName },
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
    return res.status(200).json({ ok: true, skipped: true });
  }
=======
    console.error(e),
    return res.status(200).json({ ok: true, skipped: true })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
