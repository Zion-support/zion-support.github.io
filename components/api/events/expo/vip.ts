import type { NextApiRequest, NextApiResponse } from 'next';

const allowlist = new Set<string>(
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  const address = String(req && req.query.address || '').toLowerCase();
  if (!address) return res && res.status(400).json({ allowed: false });
  res && res.status(200).json({ allowed: allowlist && allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const address = String(req && req.query.address || '').toLowerCase();
  if (!address) return res && res.status(400).json({ allowed: false });
  res && res.status(200).json({ allowed: allowlist && allowlist.has(address) })
}
