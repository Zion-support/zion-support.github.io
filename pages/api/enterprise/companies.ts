
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
    return res.status(201).json(created)

  }

res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
