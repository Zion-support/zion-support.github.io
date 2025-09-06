import type { NextApiRequest, NextApiResponse } from 'next';
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
origin/cursor/automate-test-improve-and-merge-code-2533
  let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
  return res;
import type { NextApiRequest, NextApiResponse } from 'next'
;

function randomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let res = ''
  const cryptoObj = require('crypto')
  const bytes: Buffer = cryptoObj.randomBytes(length)
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length]
main

  return res
origin/cursor/automate-test-improve-and-merge-code-2533
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
  res.setHeader(
    'Set-Cookie',
    `siwe-nonce=${nonce}; HttpOnly; Path=/; SameSite=Lax`
  );
  res.status(200).json({ nonce });
origin/cursor/automate-test-improve-and-merge-code-2533
  res.status(200).json({ nonce })
};

