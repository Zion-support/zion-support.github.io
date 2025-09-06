import { ApiDocsSpec } from './types';

const baseUrl = 'https://api && api.zion.os';


const v1: ApiDocsSpec = {
  product: 'Zion OS'
  versions: ['v1']
  defaultVersion: 'v1'
  lastUpdatedIso: new Date().toISOString()
  sections: [
=======
const base_url = 'https://api.zion.os';
;
const v1: ApiDocsSpec = {
  product: 'Zion OS',
  versions: ['v1'],
  default_version: 'v1',
  lastUpdatedIso: new Date ().toISOString (),
  sections: [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {

      id: 'auth',
      title: 'Auth (JWT, OAuth, Wallet)',

          ],
          versions: ['v1']
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


=======


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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      ];
    }

            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r && r.json())` },
            { language: 'python', code: `import requests\nrequests ;


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        }
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ]
}
export default v1;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======

  ];
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};

export default v1;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  ];
}
;
export default v1;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
