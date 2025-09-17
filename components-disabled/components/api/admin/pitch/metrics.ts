import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const data = {
    totalSlides: 10,
    completedSlides: 8,
    completionRate: 80,
    lastUpdated: new Date().toISOString(),
  };

  res.status(200).json(data);
}