import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';
const JWT_SECRET = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end($2);
  const { message, signature, publicKey } = req.body || {},
  if (!message || !signature || !publicKey) return res.status(400).json($2);
  try {
    const cookieHeader = $2;
    const match = $2;
    if (!match) return res.status(400).json($2);
    const nonce = $2;
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json($2);
    const sigBytes = bs58.decode($2);
    const msgBytes = new TextEncoder().encode($2);
    const pubKeyBytes = bs58.decode($2);
    const ok = nacl.sign.detached.verify($2);
    if (!ok) return res.status(401).json($2);
    const token = jwt.sign($2);
    res.setHeader($2);
    return res.status(200).json({ ok: true})
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Verify failed' })
  }
}