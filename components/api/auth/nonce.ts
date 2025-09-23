import type { NextApiRequest, NextApiResponse } from 'next';

function randomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const nonce = randomString(16);
  res.setHeader(
    'Set-Cookie',
    `nonce=${nonce}; HttpOnly; Secure; SameSite=Strict; Max-Age=300`
  );
  res.status(200).json({ nonce });
}