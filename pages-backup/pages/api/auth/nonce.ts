<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
>>>>>>> origin/main

function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const nonce = randomString(16);
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
  res.status(200).json({ nonce })
}
<<<<<<< HEAD
=======
  const nonce = randomString(16)
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`)

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
