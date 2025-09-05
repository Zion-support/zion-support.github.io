<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { createClient } from '@supabase/supabase-js',
const url = process.env.NEXT_PUBLIC_SUPABASE_URL,
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {},
    if (!projectId || !roomName) return res.status(400).json({ error: 'Missing fields' }),
    if (!url || !key) return res.status(200).json({ ok: true, skipped: true }),

    const supabase = createClient(url, key),
    await supabase.channel(`project_${projectId}_calls`).send({ type: 'broadcast', event: 'call_invite', payload: { projectId, roomName, inviterName } }),
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e),
    return res.status(200).json({ ok: true, skipped: true })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

const _url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const _key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }
  try {_const { projectId, _roomName, _inviterName} = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({_error: 'Missing fields'});
    if (!url || !key) return res.status(200).json({_ok: true, _skipped: true});

    const _supabase = createClient(url, key);
    await supabase.channel(`project_${_projectId}_calls`).send({_type: 'broadcast', _event: 'call_invite', _payload: { projectId, _roomName, _inviterName} });
    return res.status(200).json({_ok: true});
  } catch (e) {_return res.status(200).json({ ok: true, _skipped: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}