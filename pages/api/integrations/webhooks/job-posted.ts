import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { job } = req.body as { job?: Record<string, any> },
  if (!job) return res.status(400).json({ error: 'Missing job payload' });
  const state = null;
  res.status(200).json({ ok: true, results })
}