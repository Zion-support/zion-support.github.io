import { NextApiRequest, NextApiResponse } from 'next';

function toOpenApi() {
  return {
    openapi: '3.0.0',
    info: {
      title: 'Zion Tech Group API',
      version: '1.0.0',
      description: 'API documentation for Zion Tech Group services'
    },
    servers: [
      {
        url: 'https://api.ziontechgroup.com',
        description: 'Production server'
      }
    ],
    paths: {
      '/api/health': {
        get: {
          summary: 'Health check',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: { type: 'string' },
                      timestamp: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(toOpenApi());
    return;
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}