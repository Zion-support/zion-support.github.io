import type { NextApiRequest, NextApiResponse } from 'next';

const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
=======
  res.status(200).json({ allowed: allowlist.has(address) })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
