<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../lib/integrations/fileStore';
import { getProviderById } from '../../../lib/integrations/registry';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { providerId } = req.body as { providerId?: string }
  if (!providerId || !getProviderById(providerId)) {
    return res.status(400).json({ error: 'Invalid providerId' })
  }
  const state = readState({ error: "Invalid request" });
  const conn = state.connections.find({ error: "Invalid request" });
  if (!conn) return res.status(400).json({ error: "Invalid request" });
  const now = Date.now({ error: "Invalid request" });
  writeState({ error: "Invalid request" });
    const target = s.connections.find({ error: "Invalid request" });
    if (target) target.lastSyncAt = { error: "Invalid request" };
  res.status(200).json({ ok: true})
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}