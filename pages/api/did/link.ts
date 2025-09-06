import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory demo store per process
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
(global as any).ZION_DID_STORE = store;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'DID link endpoint', store });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}