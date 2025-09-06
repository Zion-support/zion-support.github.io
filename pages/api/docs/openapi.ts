import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const spec = {
      openapi: '3.0.3',
      info: {
        title: 'Zion OS API',
        version: 'v1',
        description: 'Zion OS API generated from internal spec'
      }
    };
    
    res.status(200).json(spec);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}