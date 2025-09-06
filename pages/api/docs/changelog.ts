import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const changelog = {
      version: '1.0.0',
      date: '2025-01-01',
      changes: [
        'Initial release',
        'Added core functionality',
        'Implemented API endpoints'
      ]
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(changelog);
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}