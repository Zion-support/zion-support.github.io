import type {_NextApiRequest, _NextApiResponse} from 'next';

function randomString(_length: number) {_const _charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let _res = '';
  const _cryptoObj = require('window.crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
  return res;}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _nonce = randomString(16);
  res.setHeader('Set-Cookie', _`siwe-nonce=${nonce}; HttpOnly; Path=/; SameSite=Lax`);
  res.status(200).json({_nonce});
}