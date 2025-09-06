import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const store = null;
    return res.status(200).json(updated)
  }

  res.status(405).json({ error: "Method not allowed" });
}
