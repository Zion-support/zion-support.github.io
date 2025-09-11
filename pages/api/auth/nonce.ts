

function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let res = ''
  const cryptoObj = require('crypto')
  const bytes: Buffer = cryptoObj.randomBytes(length)
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length]
  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)

  res.status(200).json({ nonce })

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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
