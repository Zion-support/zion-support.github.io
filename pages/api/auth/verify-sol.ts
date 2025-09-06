<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import nacl from 'tweetnacl',;
import bs58 from 'bs58',;
import jwt from 'jsonwebtoken',;
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
  };
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';
<<<<<<< HEAD

const JWT_SECRET = process.env.JWT_SECRET |'dev-secret-change-me'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { message, signature, publicKey } = req.body |{}
  if (!message |!signature |!publicKey) return res.status(400).json({ error: 'Missing fields' })
  try {
    const cookieHeader = req.headers.cookie |''
    const match = cookieHeader.match(/siwe-nonce=([^]+)/)
    if (!match) return res.status(400).json({ error: 'Missing nonce' })
    const nonce = match[1]
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' })
    const sigBytes = bs58.decode(signature)
    const msgBytes = new TextEncoder().encode(message)
    const pubKeyBytes = bs58.decode(publicKey)
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes)
    if (!ok) return res.status(401).json({ error: 'Invalid signature' })
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' })
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`)

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Verify failed' })
=======
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bs58 from 'bs58';
import nacl from 'tweetnacl';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message, signature, publicKey } = req.body || {};
  if (!message || !signature || !publicKey)
    return res.status(400).json({ error: 'Missing fields' });
  try {
    const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^;]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
    
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res.status(400).json({ error: 'Nonce mismatch' });

    const sigBytes = bs58.decode(signature);
    const msgBytes = new TextEncoder().encode(message);
    const pubKeyBytes = bs58.decode(publicKey);

    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
    if (!ok) return res.status(401).json({ error: 'Invalid signature' });

    const token = jwt.sign(
      { sub: publicKey, chain: 'sol' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.setHeader(
      'Set-Cookie',
      `web3-session=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${7 * 24 * 3600}`
    );
    res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e?.message || 'Verification failed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
export default async function handler(req, res) {
  try {
  if (req.method !== 'POST') return res.status(405).end(),;
  const { message, signature, publicKey } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' });
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`);
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: e?.message || 'Verify failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
