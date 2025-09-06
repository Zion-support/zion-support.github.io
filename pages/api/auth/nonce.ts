import type { NextApiRequest, NextApiResponse } from 'next';
function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
<<<<<<< HEAD
  return res;
=======
  return res
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
<<<<<<< HEAD
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}; HttpOnly; Path=/; SameSite=Lax`);
  res.status(200).json({ nonce });
=======
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
  res.status(200).json({ nonce })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}