<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
const url = $2;
const key = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { projectId, roomName, inviterName } = req.body || {},
    if (!projectId || !roomName) return res.status(400).json($2);
    if (!url || !key) return res.status(200).json($2);
    const supabase = createClient($2);
    await supabase.channel(`project_${projectId}_calls`).send($2);
    return res.status(200).json({ ok: true})
  } catch (e) {
    console.error($2);
    return res.status(200).json({ ok: true, skipped: true})
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}