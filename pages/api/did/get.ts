<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { address } = req.query as { address?: string };
    if (!address) {
      return res.status(400).json({ error: 'Missing address' });
    }

    const data = store[String(address).toLowerCase()] || null;
    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
