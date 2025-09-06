import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const postmanCollection = {
      info: {
        name: 'Zion OS API',
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
      },
      item: [
        {
          name: 'Disputes - List',
          request: {
            method: 'GET',
            header: [
              {
                key: 'Authorization',
                value: 'Bearer {{token}}',
                disabled: false
              }
            ],
            url: {
              raw: '{{baseUrl}}/api/disputes',
              host: ['{{baseUrl}}'],
              path: ['api', 'disputes']
            }
          }
        },
        {
          name: 'Disputes - Create',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Authorization',
                value: 'Bearer {{token}}',
                disabled: false
              },
              {
                key: 'Content-Type',
                value: 'application/json'
              }
            ],
            url: {
              raw: '{{baseUrl}}/api/disputes',
              host: ['{{baseUrl}}'],
              path: ['api', 'disputes']
            },
            body: {
              mode: 'raw',
              raw: JSON.stringify({
                description: 'Sample dispute',
                reporterId: 'user-123'
              }, null, 2)
            }
          }
        }
      ],
      variable: [
        {
          key: 'baseUrl',
          value: 'https://api.zion.os'
        },
        {
          key: 'token',
          value: 'your-jwt-token-here'
        }
      ]
    };

    res.status(200).json(postmanCollection);
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to generate Postman collection'
    });
  }
} 