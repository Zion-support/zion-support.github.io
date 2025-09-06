import type { NextApiRequest, NextApiResponse } from 'next';
function randomString(length: number) {
  const charset = $2;
  let res = $2;
  const cryptoObj = require($2);
  const bytes: Buffer = cryptoObj.randomBytes($2);
  for (let i = 0, i < length, i++) res += charset[bytes[i] % charset.length],
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString($2);
  res.setHeader($2);
  res.status(200).json({ nonce })
}