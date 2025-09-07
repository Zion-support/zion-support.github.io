import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
const JWT_SECRET = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end($2);
  const { message, signature, address, chainId } = req.body || {},
  if (!message || !signature || !address) return res.status(400).json($2);
  try {
    const recovered = ethers.utils.verifyMessage(message, signature).toLowerCase($2);
    if (recovered !== String(address).toLowerCase()) {
      return res.status(401).json({ error: 'Invalid signature' })
    }
    const cookieHeader = $2;
    const match = $2;
    if (!match) return res.status(400).json($2);
    const nonce = $2;
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json($2);
    const token = jwt.sign({ sub: address.toLowerCase(), chain: 'evm', chainId }, JWT_SECRET, { expiresIn: '7d' }),
    res.setHeader($2);
    return res.status(200).json({ ok: true})
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Verify failed' })
  }
}