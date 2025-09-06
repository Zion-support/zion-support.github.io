import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(201).json(created)
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}