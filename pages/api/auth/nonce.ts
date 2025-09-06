import type { NextApiRequest, NextApiResponse } from 'next';

function randomString(length: number) {
<<<<<<< HEAD
<<<<<<< HEAD
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
=======
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
<<<<<<< HEAD
<<<<<<< HEAD
  return res;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
  res.setHeader(
    'Set-Cookie',
    `siwe-nonce=${nonce}; HttpOnly; Path=/; SameSite=Lax`
  );
  res.status(200).json({ nonce });
=======
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
  res.status(200).json({ nonce })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
  res.status(200).json({ nonce })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
