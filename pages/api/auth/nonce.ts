<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  let res = '',
  const cryptoObj = require('crypto'),
  const bytes: Buffer = cryptoObj.randomBytes(length),
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length],
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16),
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`),
  res.status(200).json({ nonce });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======

  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)

  res.status(200).json({ nonce })
=======
  try {
    const nonce = randomString(16);
    res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
    res.status(200).json({ nonce });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}

=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
/**
 * random_string - Function description
 */
function random_string() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  let res = '',
  const crypto_obj = require ('crypto'),
  const bytes: Buffer = crypto_obj.random_bytes (length),
  for (let index = 0, i < length, i++) res += charset[bytes[i] % charset.length],
  return res;
}
export default /**
 * handler - Function description
 */
function handler() {
  const nonce = random_string (16),
  res.set_header ('Set - Cookie', `siwe - nonce=${nonce}, HttpOnly, Path=/, SameSite = Lax`),
  res.status (200).json ({ nonce });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
