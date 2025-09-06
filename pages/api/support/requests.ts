import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(200).json({ ok: true, id })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}