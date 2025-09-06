import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function toPostman() {
  return {
    info: {
      name: 'Zion OS API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`,
        request: {
          method: ep.method,
          header: [{ key: 'Authorization', value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],
          url: {
            raw: `{{baseUrl}}${ep.path}`,
            host: ['{{baseUrl}}'],
            path: ep.path.replace(/^\//, '').split('/')
          },
<<<<<<< HEAD
          body: ep.requestBodySchema
            ? { mode: 'raw', raw: JSON.stringify({}, null, 2) }
            : undefined,
        },
=======
function toPostman() {
  return {
    info: {
      
      name: 'Zion OS API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: v1.sections.flatMap((section) =>
      section.endpoints.map((ep) => ({
        name: `${section.title} - ${ep.title}`,
        request: {
          method: ep.method,
          header: [{ key: 'Authorization', value: 'Bearer {{token}}', disabled: !(ep.auth || []).includes('jwt') }],
          url: {
            raw: `{{baseUrl}}${ep.path}`,
            host: ['{{baseUrl}}'],
            path: ep.path.replace(/^\//, '').split('/')
          },
          body: ep.requestBodySchema ? { mode: 'raw', raw: JSON.stringify({}, null, 2) } : undefined
        }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          body: ep.requestBodySchema ? { mode: 'raw', raw: JSON.stringify({}, null, 2) } : undefined
        }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }))
    ),
    variable: [
      { key: 'baseUrl', value: 'https://api.zion.os' },
<<<<<<< HEAD
<<<<<<< HEAD
      { key: 'token', value: '' },
    ],
=======
      { key: 'token', value: '' }
    ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(toPostman());
<<<<<<< HEAD
=======
      { key: 'token', value: '' }]}
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(toPostman())
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
