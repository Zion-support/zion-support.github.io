import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postmanCollection = {
    info: {
      name: 'Zion OS API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [],
    variable: []
  };

  res.status(200).json(postmanCollection);
} 