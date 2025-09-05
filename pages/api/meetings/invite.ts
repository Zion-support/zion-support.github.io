<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { createClient } from '@supabase/supabase-js',;
;
const url = process.env.NEXT_PUBLIC_SUPABASE_URL,;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST'),;
    return res.status(405).json({ error:'Method not allowed' }),;
  }
  try {;
    const { projectId, roomName, inviterName } = req.body || {},;
    if (!projectId || !roomName) return res.status(400).json({ error:'Missing fields' }),;
    if (!url || !key) return res.status(200).json({ ok:true, skipped:true }),;
;
    const supabase = createClient(url, key),;
    await supabase.channel(`project_${projectId}_calls`).send({ type:'broadcast', event:'call_invite', payload:{ projectId, roomName, inviterName } }),;
    return res.status(200).json({ ok:true }),;
  } catch (e) {;
    console.error(e),;
    return res.status(200).json({ ok:true, skipped:true }),;
  }
=======
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
    return res.status(200).json({ ok: true, skipped: true })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}