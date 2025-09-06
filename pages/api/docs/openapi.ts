import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const openapiSpec = {
      openapi: '3.0.3',
      info: {
        title: 'Zion OS API',
        version: 'v1',
        description: 'Zion OS API generated from internal spec'
      },
      servers: [
        {
          url: 'https://api.zion.os'
        }
      ],
      paths: {
        '/api/disputes': {
          get: {
            summary: 'List disputes',
            responses: {
              '200': {
                description: 'List of disputes'
              }
            }
          }
        }
      }
    };

    res.status(200).json(openapiSpec);
  } catch (error) {
    console.error('OpenAPI error:', error);
    res.status(500).json({ error: 'Failed to get OpenAPI spec' });
  }
}