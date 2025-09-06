import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
}
