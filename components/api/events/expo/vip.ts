import type { NextApiRequest, NextApiResponse } from 'next';
const allowlist = null;
  res.status(200).json({ allowed: allowlist.has(address) })
}