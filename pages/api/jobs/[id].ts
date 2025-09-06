import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', 'GET, PATCH');
  res.status(405).end('Method Not Allowed');
}