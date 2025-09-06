import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
=======
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
