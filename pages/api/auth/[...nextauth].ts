import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Implement authentication logic here
  res.status(405).end('Method Not Allowed');
}