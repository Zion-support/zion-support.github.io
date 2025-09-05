<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import nacl from 'tweetnacl',
import bs58 from 'bs58',
import jwt from 'jsonwebtoken',
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end(),
  const { message, signature, publicKey } = req.body || {},
  if (!message || !signature || !publicKey) return res.status(400).json({ error: 'Missing fields' }),
  try {
    const cookieHeader = req.headers.cookie || '',
    const match = cookieHeader.match(/siwe-nonce=([^]+)/),
    if (!match) return res.status(400).json({ error: 'Missing nonce' }),
    const nonce = match[1],
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' }),

    const sigBytes = bs58.decode(signature),
    const msgBytes = new TextEncoder().encode(message),
    const pubKeyBytes = bs58.decode(publicKey),

    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes),
    if (!ok) return res.status(401).json({ error: 'Invalid signature' }),

    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' }),
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`),
    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Verify failed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';

const _JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  const { message, _signature, _publicKey} = req.body || {};
  if (!message || !signature || !publicKey) return res.status(400).json({_error: 'Missing fields'});
  try {_const _cookieHeader = req.headers.cookie || '';
    const _match = cookieHeader.match(/siwe-nonce=([^;]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce'});
    const _nonce = match[1];
    if (!String(message).includes(`Nonce: ${_nonce}`)) return res.status(400).json({_error: 'Nonce mismatch'});

    const _sigBytes = bs58.decode(signature);
    const _msgBytes = new TextEncoder().encode(message);
    const _pubKeyBytes = bs58.decode(publicKey);

    const _ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
    if (!ok) return res.status(401).json({_error: 'Invalid signature'});

    const _token = jwt.sign({_sub: publicKey, _chain: 'sol'}, JWT_SECRET, {_expiresIn: '7d'});
    res.setHeader('Set-Cookie', `web3-session=${_token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${_7 * 24 * 3600}`);
    return res.status(200).json({_ok: true});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Verify failed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}