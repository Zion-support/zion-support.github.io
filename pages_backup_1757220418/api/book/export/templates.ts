import { NextApiRequest, NextApiResponse } from 'next';

const templates = {
  lulu: {
    sizes: [
      { name: 'A4', width: 210, height: 297 },
      { name: 'A5', width: 148, height: 210 }
    ]
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json(templates);
} 