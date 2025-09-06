<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

function randomString(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
  return res;
}


function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let res = ''
  const cryptoObj = require('crypto')
  const bytes: Buffer = cryptoObj.randomBytes(length)
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length]
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)
<<<<<<< HEAD

=======
  res.status(200).json({ nonce })

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
