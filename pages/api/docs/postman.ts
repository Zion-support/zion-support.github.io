import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const collection = {
      info: {
        name: 'Zion OS API',
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
      },
      item: []
    };
    
    res.status(200).json(collection);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}