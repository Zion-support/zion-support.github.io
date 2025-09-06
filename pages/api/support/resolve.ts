import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id } = req.body as { id: string },
  if (!id) return res.status(400).json({ error: 'id required' });
  const requests = null;
    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true })
};
