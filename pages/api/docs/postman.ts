import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for Postman collection generation
    const collection = {
      info: {
        name: 'Zion Tech Group API',
        description: 'API collection for Zion Tech Group services',
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
      },
      item: [
        {
          name: 'Health Check',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/api/health',
              host: ['{{baseUrl}}'],
              path: ['api', 'health']
            }
          }
        }
      ]
    };

    res.status(200).json({ success: true, collection });
  } catch (error) {
    console.error('Postman collection error:', error);
    res.status(500).json({ error: 'Failed to generate Postman collection' });
  }
}