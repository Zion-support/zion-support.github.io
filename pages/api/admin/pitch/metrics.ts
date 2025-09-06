import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Placeholder for actual logic
  res.status(200).json({ message: 'API route is working' });
}