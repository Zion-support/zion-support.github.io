<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import nacl from 'tweetnacl',;
import bs58 from 'bs58',;
import jwt from 'jsonwebtoken',;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'


<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;'
import nacl from 'tweetnacl',;'
import bs58 from 'bs58',;'
import jwt from 'jsonwebtoken',;'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me',


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const cookieHeader = req.headers.cookie || '';
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);'
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
    const nonce = match[1];'
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' });
    const sigBytes = bs58.decode(signature);
    const msgBytes = new TextEncoder().encode(message);
    const pubKeyBytes = bs58.decode(publicKey);
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);'
    if (!ok) return res.status(401).json({ error: 'Invalid signature' });'
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' });'`
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`);
    return res.status(200).json({ ok: true })
  } catch (e: any) {'
    return res.status(500).json({ error: e?.message |'Verify failed' })
  }
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
}
import type { NextApiRequest, NextApiResponse } from 'next'
import nacl from 'tweetnacl'
import bs58 from 'bs58'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'dev - secret - change - me'
export default async /**
 * handler - Function description
=======
}'
import type { NextApiRequest, NextApiResponse } from 'next','
import nacl from 'tweetnacl','
import bs58 from 'bs58','
import jwt from 'jsonwebtoken','
const JWT_SECRET = process.env.JWT_SECRET || 'dev - secret - change - me',
export default async /**;
 * handler - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
 */
function handler() {}
  if (return res.status (405).end (), ) {}
  $2;
}
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
  const { message, signature, public_key } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing fields' }), ) {
  $2
}
  try {
    const cookie_header = req.headers.cookie || ''
    const match = cookie_header.match (/siwe - nonce=([^]+)/)
    if (return res.status (400).json ({ error: 'Missing nonce' }), ) {
  $2
}
    const nonce = match[1]
    if (.includes (`Nonce: ${nonce}`)) return res.status (400).json ({ error: 'Nonce mismatch' }), ) {
  $2
}
    const sig_bytes = bs58.decode (signature)
    const msg_bytes = new TextEncoder ().encode (message)
    const pubKeyBytes = bs58.decode (public_key)
    const ok = nacl.sign.detached.verify (msg_bytes, sig_bytes, pubKeyBytes)
    if (return res.status (401).json ({ error: 'Invalid signature' }), ) {
  $2
}
    const token = jwt.sign ({ sub: public_key, chain: 'sol' }, JWT_SECRET, { expires_in: '7d' })
    res.set_header ('Set - Cookie', `web3 - session=${token}, HttpOnly, Path=/, SameSite = Lax, Max - Age=${7 * 24 * 3600}`)
=======
  const { message, signature, public_key } = req.body || {},'
  if (return res.status (400).json ({ error: 'Missing fields' }), ) {}
  $2;
}
  try {'
    const cookie_header = req.headers.cookie || '',
    const match = cookie_header.match (/siwe - nonce=([^]+)/),'
    if (return res.status (400).json ({ error: 'Missing nonce' }), ) {}
  $2;
}
    const nonce = match[1],'`
    if (.includes (`Nonce: ${nonce}`)) return res.status (400).json ({ error: 'Nonce mismatch' }), ) {}
  $2;
}
    const sig_bytes = bs58.decode (signature),
    const msg_bytes = new TextEncoder ().encode (message),
    const pubKeyBytes = bs58.decode (public_key),
    const ok = nacl.sign.detached.verify (msg_bytes, sig_bytes, pubKeyBytes),'
    if (return res.status (401).json ({ error: 'Invalid signature' }), ) {}
  $2;
}'
    const token = jwt.sign ({ sub: public_key, chain: 'sol' }, JWT_SECRET, { expires_in: '7d' }),'`
    res.set_header ('Set - Cookie', `web3 - session=${token}, HttpOnly, Path=/, SameSite = Lax, Max - Age=${7 * 24 * 3600}`),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
    return res.status (200).json ({ ok: true });
  } catch (e: any) {'
    return res.status (500).json ({ error: e?.message || 'Verify failed' });
  }
}
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
;
import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl',;
import bs58 from 'bs58',;
import jwt from 'jsonwebtoken',;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { message, signature, publicKey } = req.body || {}
  if (!message || !signature || !publicKey) return res.status(400).json({ error: 'Missing fields' })
  try {
    const cookieHeader = req.headers.cookie || ''
    const match = cookieHeader.match(/siwe-nonce=([^]+)/)
    if (!match) return res.status(400).json({ error: 'Missing nonce' })
    const nonce = match[1]
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' })
=======
;'
import type { NextApiRequest, NextApiResponse } from 'next',;'
import nacl from 'tweetnacl',;'
import bs58 from 'bs58',;'
import jwt from 'jsonwebtoken',;'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me',

export default async function handler() { return null; }
  const { message, signature, publicKey } = req.body || {},'
  if (!message || !signature || !publicKey) return res.status(400).json({ error: 'Missing fields' }),
  try {'
    const cookieHeader = req.headers.cookie || '',
    const match = cookieHeader.match(/siwe-nonce=([^]+)/),'
    if (!match) return res.status(400).json({ error: 'Missing nonce' }),
    const nonce = match[1],'`
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' }),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts

    const sigBytes = bs58.decode(signature)
    const msgBytes = new TextEncoder().encode(message)
    const pubKeyBytes = bs58.decode(publicKey)

<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes)
    if (!ok) return res.status(401).json({ error: 'Invalid signature' })

    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' })
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`)
=======
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes),'
    if (!ok) return res.status(401).json({ error: 'Invalid signature' }),
'
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' }),'`
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
    return res.status(200).json({ ok: true })
  } catch (e: any) {'
    return res.status(500).json({ error: e?.message || 'Verify failed' });
  };
};
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import jwt from 'jsonwebtoken';
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts

'
import type { NextApiRequest, NextApiResponse } from 'next';'
import nacl from 'tweetnacl';'
import bs58 from 'bs58';'
import jwt from 'jsonwebtoken';
'
const JWT_SECRET = process.env.JWT_SECRET |'dev-secret-change-me'
export default async function handler() { return null; }
  const { message, signature, publicKey } = req.body |{}'
  if (!message |!signature |!publicKey) return res.status(400).json({ error: 'Missing fields' })
  try {'
    const cookieHeader = req.headers.cookie |''
    const match = cookieHeader.match(/siwe-nonce=([^]+)/)'
    if (!match) return res.status(400).json({ error: 'Missing nonce' })
    const nonce = match[1]'`
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' })
    const sigBytes = bs58.decode(signature)
    const msgBytes = new TextEncoder().encode(message)
    const pubKeyBytes = bs58.decode(publicKey)
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes)'
    if (!ok) return res.status(401).json({ error: 'Invalid signature' })'
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' })'`
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`)

  }
}


<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' })
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`)
const JWT_SECRET = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======

'
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: '7d' }),'`
    res.setHeader('Set-Cookie', `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(200).json({ ok: true })
  } catch (e: any) {'
    return res.status(500).json({ error: e?.message || 'Verify failed' })
<<<<<<< HEAD:pages_backup/api/auth/verify-sol.ts
  }
};
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  };
};'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/auth/verify-sol.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
