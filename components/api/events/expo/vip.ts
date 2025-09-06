import type { NextApiRequest, NextApiResponse } from 'next';
const allowlist = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || '').toLowerCase($2);
  if (!address) return res.status(400).json($2);
  res.status(200).json({ allowed: allowlist.has(address) })
}