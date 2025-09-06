import { ApiDocsSpec } from './types';
  ]
}
export default v1;

  ];

const baseUrl = 'https://api && api.zion.os';

const v1: ApiDocsSpec = {
  product: 'Zion OS'
  versions: ['v1']
  defaultVersion: 'v1'
  lastUpdatedIso: new Date().toISOString()
  sections: [
const base_url = 'https://api.zion.os';
;
const v1: ApiDocsSpec = {
  product: 'Zion OS',
  versions: ['v1'],
  default_version: 'v1',
  lastUpdatedIso: new Date ().toISOString (),
  sections: [;
    {

      id: 'auth',
      title: 'Auth (JWT, OAuth, Wallet)',

          ],
          versions: ['v1']
  openapi: '3.0.0',
  info: {
    title: 'Zion OS API',
    version: '1.0.0',
    description: 'Zion OS API Documentation'
  },
  servers: [{ url: baseUrl }],
  paths: {
    '/v1/nation/stats': {
      get: {
        summary: 'Get Nation Stats',
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: { type: 'object' }
              }
            }
          }
        }
      ]
    },

      id: 'talent'
      title: 'Talent Profiles'

      endpoints: [
        {
          id: 'talent-get'
          title: 'Get Talent Profile'
          description: 'Fetch a talent profile by ID.'
          path: '/v1/talent/{talentId}'
          method: 'GET'
          visibility: 'public'
          auth: ['jwt']
          params: { talentId: 'The UUID of the talent' }
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' }, skills: { type: 'array', items: { type: 'string' } } } }
          samples: [

            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r && r.json())` },
            { language: 'python', code: `import requests\nrequests && nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }

          ],
          versions: ['v1']
        }
      ]
    },

      id: 'jobs'
      title: 'Job Listings'

      endpoints: [
        {
          id: 'jobs-list'
          title: 'List Jobs'
          description: 'List job postings with optional filters.'
          path: '/v1/jobs'
          method: 'GET'
          visibility: 'public'
          auth: ['jwt']
          query: { q: 'Search text', status: 'open|closed' }
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } }, nextPage: { type: 'string' } } }
          samples: [

const baseUrl = 'https://api.zion.os';

const baseUrl = 'https://api.zion.os';
const v1: ApiDocsSpec = {

  openapi: '3.0.0',
  info: {
    title: 'Zion OS API',
    version: '1.0.0',
    description: 'Zion OS API Documentation'
  },
  servers: [{ url: baseUrl }],
  paths: {
    '/v1/nation/stats': {
      get: {
        summary: 'Get Nation Stats',
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: { type: 'object' }
              }
            }
          }

        }
      ];
    }

            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r && r.json())` },
            { language: 'python', code: `import requests\nrequests ;

  ];

  }

  ];

  }
};
export default v1;
  ];
}
;
export default v1;
;
