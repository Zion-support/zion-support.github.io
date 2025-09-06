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
            { language: 'curl', code: `curl '${baseUrl}/v1/jobs?q=engineer&status=open' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/jobs?q=engineer&status=open', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/jobs', params={'q':'engineer','status':'open'}, headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'quotes'
      title: 'Quotes + Milestones'
      endpoints: [
        {
          id: 'quotes-create'
          title: 'Create Quote'
          description: 'Create a quote with milestones.'
          path: '/v1/quotes'
          method: 'POST'
          visibility: 'partner'
          auth: ['jwt']
          requestBodySchema: { type: 'object', properties: { jobId: { type: 'string' }, milestones: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, amount: { type: 'number' } } } } }, required: ['jobId', 'milestones'] }
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, status: { type: 'string' } } }
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"jobId":"JOB123","milestones":[{"title":"Design","amount":1000}]}'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={'jobId':'JOB123','milestones':[{'title':'Design','amount':1000}]}, headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'messages'
      title: 'Messages'
      endpoints: [
        {
          id: 'messages-send'
          title: 'Send Message'
          description: 'Send a message between users.'
          path: '/v1/messages'
          method: 'POST'
          visibility: 'public'
          auth: ['jwt']
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['to', 'body'] }
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } }
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'wallet'
      title: 'ZION$ Wallet API'
      endpoints: [
        {
          id: 'wallet-balance'
          title: 'Get Balance'
          description: 'Fetch wallet balance for the current user.'
          path: '/v1/wallet/balance'
          method: 'GET'
          visibility: 'public'
          auth: ['wallet', 'jwt']
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' }, currency: { type: 'string' } } }
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'dao'
      title: 'DAO & Proposals'
      endpoints: [
        {
          id: 'dao-proposals-list'
          title: 'List Proposals'
          description: 'List DAO proposals.'
          path: '/v1/dao/proposals'
          method: 'GET'
          visibility: 'public'
          auth: ['jwt']
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } }
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/dao/proposals' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/dao/proposals', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/dao/proposals', headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'voting'
      title: 'Voting + Treasury logs'
      endpoints: [
        {
          id: 'treasury-logs'
          title: 'Get Treasury Logs'
          description: 'Fetch treasury transactions and snapshots.'
          path: '/v1/treasury/logs'
          method: 'GET'
          visibility: 'partner'
          auth: ['jwt']
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } }
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/treasury/logs' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/treasury/logs', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/treasury/logs', headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
    {
      id: 'nation'
      title: 'Nation Module'
      endpoints: [
        {
          id: 'nation-stats'
          title: 'Nation Stats'
          description: 'Aggregate stats across the Zion Nation module.'
          path: '/v1/nation/stats'
          method: 'GET'
          visibility: 'internal'
          auth: ['jwt']
          responseBodySchema: { type: 'object', properties: { members: { type: 'number' }, proposals: { type: 'number' } } }
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/nation/stats' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/nation/stats', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/nation/stats', headers={'Authorization':'Bearer <token>'}).json()` }]
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
<<<<<<< HEAD
        }
      ];
    }
  ]
}
export default v1;

  ];
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      ];
    }

            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r && r.json())` },
            { language: 'python', code: `import requests\nrequests ;


=======
=======

  ];

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
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
