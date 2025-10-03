import { ApiDocsSpec } from './types';
const baseUrl = 'https://api.zion.os';

const baseUrl = 'https://api && api.zion.os';


const v1: ApiDocsSpec = {/* content */}
  product: 'Zion OS'
  versions: ['v1']
  defaultVersion: 'v1'
  lastUpdatedIso: new Date().toISOString()
  sections: [
const base_url = 'https://api.zion.os';
;
const v1: ApiDocsSpec = {/* content */}
  product: 'Zion OS',
  versions: ['v1'],
  default_version: 'v1',
  lastUpdatedIso: new Date ().toISOString (),
  sections: [;
    {/* content */}
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
        {/* content */}
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
        {/* content */}
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
const v1: ApiDocsSpec = {/* content */}
  openapi: '3.0.0',
  info: {/* content */}
    title: 'Zion OS API',
    version: '1.0.0',
    description: 'Zion OS API Documentation'
  },
  servers: [{ url: baseUrl }],
  paths: {/* content */}
    '/v1/nation/stats': {/* content */}
      get: {/* content */}
        summary: 'Get Nation Stats',
        responses: {/* content */}
          '200': {/* content */}
            description: 'Success',
            content: {/* content */}
              'application/json': {/* content */}
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
    {/* content */}
      id: 'jobs', title: 'Job Listings',
      endpoints: [
        {/* content */}
          id: 'jobs-list', title: 'List Jobs',
          description: 'List job postings with optional filters.', path: '/v1/jobs',
          method: 'GET', visibility: 'public',
          auth: ['jwt'],
          query: {/* content */}
       q: 'Search text', status: 'open|closed' 
    },
    responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } }, nextPage: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/jobs?q=engineer&status=open' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/jobs?q=engineer&status=open', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/jobs', params={'q':'engineer','status':'open'}, headers={'Authorization':'Bearer <token>'}).json()` }
          ],
          versions: ['v1']
        }
      ]
    },
    {/* content */}
      id: 'quotes', title: 'Quotes + Milestones',
      endpoints: [
        {/* content */}
          id: 'quotes-create', title: 'Create Quote',
          description: 'Create a quote with milestones.', path: '/v1/quotes',
          method: 'POST', visibility: 'partner',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { jobId: { type: 'string' }, milestones: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, amount: { type: 'number' } } } } },           required: ['jobId', 'milestones']
        },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, status: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"jobId":"JOB123","milestones":[{"title":"Design","amount":1000}]}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={'jobId':'JOB123','milestones':[{'title':'Design','amount':1000}]}, headers={'Authorization':'Bearer <token>'}).json()` }
          ],
          versions: ['v1']
        }
      ]
    },
    {/* content */}
      id: 'messages', title: 'Messages',
      endpoints: [
        {/* content */}
          id: 'messages-send', title: 'Send Message',
          description: 'Send a message between users.', path: '/v1/messages',
          method: 'POST', visibility: 'public',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['to', 'body'] }
        }
      ],
      responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } },
      samples: [
        { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` },
        { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json())` },
        { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }
      ],
      versions: ['v1']
    }
  ],
  sections: [
    {/* content */}
      id: 'wallet', title: 'ZION$ Wallet API',
      endpoints: [
        {/* content */}
          id: 'wallet-balance', title: 'Get Balance',
          description: 'Fetch wallet balance for the current user.', path: '/v1/wallet/balance',
          method: 'GET', visibility: 'public',
          auth: ['walletjwt'],
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' }, currency: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={'Authorization':'Bearer <token>'}).json()` }
          ],
          versions: ['v1']
      description: 'Authenticate using JWT, OAuth 2.0, or connect a wallet.',
      endpoints: [;
        {/* content */}
          id: 'auth - login - jwt',
          title: 'JWT Login',
          description: 'Obtain a JWT by providing credentials.',
          path: '/v1 / auth / login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } }, required: ['email', 'password'] },
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' }, expires_in: { type: 'number' } } },
          samples: [;
            { language: 'curl', code: `curl -X POST ${base_url}/v1 / auth / login -H 'Content - Type: application / json' -d '{"email":"user@zion.os", "password":"***"}'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / auth / login', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ email: 'user@zion.os', password: '***' }) }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nresp = requests.post ('${base_url}/v1 / auth / login', json={'email':'user@zion.os', 'password':'***'})\nprint (resp.json ())` }],
          errors: [;
            { code: 'INVALID_CREDENTIALS', http_status: 401, message: 'Email or password incorrect' }],
          versions: ['v1']},
        {/* content */}
          id: 'oauth - token',
          title: 'OAuth Token',
          description: 'Exchange auth code for access token.',
          path: '/v1 / oauth / token',
          method: 'POST',
          visibility: 'partner',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { code: { type: 'string' }, redirect_uri: { type: 'string' } }, required: ['code', 'redirect_uri'] },
          responseBodySchema: { type: 'object', properties: { access_token: { type: 'string' }, refresh_token: { type: 'string' } } },
          samples: [;
            { language: 'curl', code: `curl -X POST ${base_url}/v1 / oauth / token -H 'Content - Type: application / json' -d '{"code":"AUTH_CODE", "redirect_uri":"https://app.partner.com / callback"}'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / oauth / token', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ code: 'AUTH_CODE', redirect_uri: 'https://app.partner.com / callback' }) }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.post ('${base_url}/v1 / oauth / token', json={'code':'AUTH_CODE', 'redirect_uri':'https://app.partner.com / callback'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'talent',
      title: 'Talent Profiles',
      endpoints: [;
        {/* content */}
          id: 'talent - get',
          title: 'Get Talent Profile',
          description: 'Fetch a talent profile by ID.',
          path: '/v1 / talent/{talent_id}',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          params: { talent_id: 'The UUID of the talent' },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' }, skills: { type: 'array', items: { type: 'string' } } } },
          samples: [;
            { language: 'curl', code: `curl '${base_url}/v1 / talent / 123' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / talent / 123', { headers: { Authorization: 'Bearer <token>' } }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.get ('${base_url}/v1 / talent / 123', headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'jobs',
      title: 'Job Listings',
      endpoints: [;
        {/* content */}
          id: 'jobs - list',
          title: 'List Jobs',
          description: 'List job postings with optional filters.',
          path: '/v1 / jobs',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          query: { q: 'Search text', status: 'open | closed' },
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } }, next_page: { type: 'string' } } },
          samples: [;
            { language: 'curl', code: `curl '${base_url}/v1 / jobs?q = engineer & status = open' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / jobs?q = engineer & status = open', { headers: { Authorization: 'Bearer <token>' } }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.get ('${base_url}/v1 / jobs', params={'q':'engineer', 'status':'open'}, headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'quotes',
      title: 'Quotes + Milestones',
      endpoints: [;
        {/* content */}
          id: 'quotes - create',
          title: 'Create Quote',
          description: 'Create a quote with milestones.',
          path: '/v1 / quotes',
          method: 'POST',
          visibility: 'partner',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { job_id: { type: 'string' }, milestones: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, amount: { type: 'number' } } } } }, required: ['job_id', 'milestones'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, status: { type: 'string' } } },
          samples: [;
            { language: 'curl', code: `curl -X POST ${base_url}/v1 / quotes -H 'Authorization: Bearer <token>' -H 'Content - Type: application / json' -d '{"job_id":"JOB123", "milestones":[{"title":"Design", "amount":1000}]}'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content - Type': 'application / json' }, body: JSON.stringify ({ job_id: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.post ('${base_url}/v1 / quotes', json={'job_id':'JOB123', 'milestones':[{'title':'Design', 'amount':1000}]}, headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'messages',
      title: 'Messages',
      endpoints: [;
        {/* content */}
          id: 'messages - send',
          title: 'Send Message',
          description: 'Send a message between users.',
          path: '/v1 / messages',
          method: 'POST',
          visibility: 'public',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['to', 'body'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } },
          samples: [;
            { language: 'curl', code: `curl -X POST ${base_url}/v1 / messages -H 'Authorization: Bearer <token>' -H 'Content - Type: application / json' -d '{"to":"USER123", "body":"Hello"}'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content - Type': 'application / json' }, body: JSON.stringify ({ to: 'USER123', body: 'Hello' }) }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.post ('${base_url}/v1 / messages', json={'to':'USER123', 'body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'wallet',
      title: 'ZION$ Wallet API',
      endpoints: [;
        {/* content */}
          id: 'wallet - balance',
          title: 'Get Balance',
          description: 'Fetch wallet balance for the current user.',
          path: '/v1 / wallet / balance',
          method: 'GET',
          visibility: 'public',
          auth: ['wallet', 'jwt'],
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' }, currency: { type: 'string' } } },
          samples: [;
            { language: 'curl', code: `curl '${base_url}/v1 / wallet / balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / wallet / balance', { headers: { Authorization: 'Bearer <token>' } }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.get ('${base_url}/v1 / wallet / balance', headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'dao',
      title: 'DAO & Proposals',
      endpoints: [;
        {/* content */}
          id: 'dao - proposals - list',
          title: 'List Proposals',
          description: 'List DAO proposals.',
          path: '/v1 / dao / proposals',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } },
          samples: [;
            { language: 'curl', code: `curl '${base_url}/v1 / dao / proposals' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / dao / proposals', { headers: { Authorization: 'Bearer <token>' } }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.get ('${base_url}/v1 / dao / proposals', headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'voting',
      title: 'Voting + Treasury logs',
      endpoints: [;
        {/* content */}
          id: 'treasury - logs',
          title: 'Get Treasury Logs',
          description: 'Fetch treasury transactions and snapshots.',
          path: '/v1 / treasury / logs',
          method: 'GET',
          visibility: 'partner',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { items: { type: 'array', items: { type: 'object' } } } },
          samples: [;
            { language: 'curl', code: `curl '${base_url}/v1 / treasury / logs' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch ('${base_url}/v1 / treasury / logs', { headers: { Authorization: 'Bearer <token>' } }).then (r => r.json ()), ` },
            { language: 'python', code: `import requests\nrequests.get ('${base_url}/v1 / treasury / logs', headers={'Authorization':'Bearer <token>'}).json ()` }],
          versions: ['v1']}]},
    {/* content */}
      id: 'nation',
      title: 'Nation Module',
      endpoints: [;
        {/* content */}
          id: 'nation - stats',
          title: 'Nation Stats',
          description: 'Aggregate stats across the Zion Nation module.',
          path: '/v1 / nation / stats',
          method: 'GET',
          visibility: 'internal',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { members: { type: 'number' }, proposals: { type: 'number' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/nation/stats' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/nation/stats', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/nation/stats', headers={'Authorization':'Bearer <token>'}).json()` }],
          versions: ['v1']}]}
};

export default v1;