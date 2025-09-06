import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
=======
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string };
  if (!address) return res.status($1).json({$2});
  const data = store[String(address).toLowerCase()] || null;
<<<<<<< HEAD
  return res.status(200).json({ data });
=======
  return res.status(200).json({ data })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
