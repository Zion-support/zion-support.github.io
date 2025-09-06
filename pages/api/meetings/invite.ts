import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({,
    error: 'Method not allowed' })
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({,
    error: 'Missing fields' });
    if (!url || !key) return res.status(200).json({,
    ok: true, s,
    kipped: true });
    const supabase = createClient(url, key);
    await supabase.channel(`project_${projectId}_calls`).send({,
    type: 'broadcast', e,
    vent: 'call_invite', p,
    ayload: { projectId, roomName, inviterName } });
    return res.status(200).json({,
    ok: true })
  } catch (e) {
    console.error(e);
    return res.status(200).json({,
    ok: true, s,
    kipped: true })
  }
}