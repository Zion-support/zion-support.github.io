<<<<<<< HEAD
<<<<<<< HEAD
const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' });
    const sigBytes = bs58.decode(signature);
    const msgBytes = new TextEncoder().encode(message);
    const pubKeyBytes = bs58.decode(publicKey);
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
    if (!ok) return res.status(401).json({ error: 'Invalid signature' });
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' });
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`);
    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Verify failed' })
  }
}
import type { NextApiRequest, NextApiResponse } from 'next',
import nacl from 'tweetnacl',
import bs58 from 'bs58',
import jwt from 'jsonwebtoken',
const JWT_SECRET = process.env.JWT_SECRET || 'dev - secret - change - me',
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end (), ) {
  $2
}
  const { message, signature, public_key } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing fields' }), ) {
  $2
}
  try {
    const cookie_header = req.headers.cookie || '',
    const match = cookie_header.match (/siwe - nonce=([^]+)/),
    if (return res.status (400).json ({ error: 'Missing nonce' }), ) {
  $2
}
    const nonce = match[1],
    if (.includes (`Nonce: ${nonce}`)) return res.status (400).json ({ error: 'Nonce mismatch' }), ) {
  $2
}
    const sig_bytes = bs58.decode (signature),
    const msg_bytes = new TextEncoder ().encode (message),
    const pubKeyBytes = bs58.decode (public_key),
    const ok = nacl.sign.detached.verify (msg_bytes, sig_bytes, pubKeyBytes),
    if (return res.status (401).json ({ error: 'Invalid signature' }), ) {
  $2
}
    const token = jwt.sign ({ sub: public_key, chain: 'sol' }, JWT_SECRET, { expires_in: '7d' }),
    res.set_header ('Set - Cookie', `web3 - session=${token}, HttpOnly, Path=/, SameSite = Lax, Max - Age=${7 * 24 * 3600}`),
    return res.status (200).json ({ ok: true });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || 'Verify failed' });
  }
}
;
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
import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';

  }
}

  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
