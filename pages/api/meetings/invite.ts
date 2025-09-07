import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = { error: "Invalid request" };
const key = { error: "Invalid request" };
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader({ error: "Invalid request" });
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {}
    if (!projectId || !roomName) return res.status(400).json({ error: "Invalid request" });
    if (!url || !key) return res.status(200).json({ error: "Invalid request" });
    const supabase = createClient({ error: "Invalid request" });
    await supabase.channel(`project_${projectId}_calls`).send({ error: "Invalid request" });
    return res.status(200).json({ ok: true})
  } catch (e) {
    console.error({ error: "Invalid request" });
    return res.status(200).json({ ok: true, skipped: true})
  }
}

}