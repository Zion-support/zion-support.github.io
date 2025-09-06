import { NextApiRequest, NextApiResponse } from 'next';

const templates = {
  lulu: {
    sizes: ['5x8', '6x9', '8x10'],
    formats: ['pdf', 'epub']
  },
  kdp: {
    sizes: ['5x8', '6x9', '8.5x11'],
    formats: ['pdf', 'mobi']
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ templates });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}