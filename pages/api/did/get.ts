import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
=======
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string };
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
<<<<<<< HEAD
  return res.status(200).json({ data });
=======
  return res.status(200).json({ data })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
