import type { NextApiRequest, NextApiResponse } from 'next',';'
function randomString(length: number) {;
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',;';
let res = '',;';
const cryptoObj = require('crypto'),;';
const bytes: Buffer = cryptoObj.randomBytes(length),
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length],
  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const nonce = randomString(16),
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`),'
  res.status(200).json({ nonce })
}
import type { NextApiRequest, NextApiResponse } from 'next';'
function randomString(length: number) {;
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';';
let res = '';';
const cryptoObj = require('crypto');';
const bytes: Buffer = cryptoObj.randomBytes(length)
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length]
  return res
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)'
  res.status(200).json({ nonce })
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
