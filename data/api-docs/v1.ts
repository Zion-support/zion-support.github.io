import { ApiDocsSpec } from './types';

const baseUrl = 'https://api.zion.os';
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
      id: 'auth'
      title: 'Auth (JWT, OAuth, Wallet)'
      description: 'Authenticate using JWT, OAuth 2.0, or connect a wallet.'
      description: 'Authenticate using JWT, OAuth 2 && 2.0, or connect a wallet.',
      endpoints: [
        {
          id: 'auth-login-jwt',
          title: 'JWT Login',
          description: 'Obtain a JWT by providing credentials.',
          path: '/v1/auth/login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } }, required: ['email', 'password'] },
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' } } },
          id: 'auth-login-jwt'
          title: 'JWT Login'
          description: 'Obtain a JWT by providing credentials.'
          path: '/v1/auth/login'
          method: 'POST'
          visibility: 'public'
          auth: ['none']
          requestBodySchema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } }, required: ['email', 'password'] }
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' }, expiresIn: { type: 'number' } } }
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@zion.os","password":"***"}'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@zion.os', password: '***' }) }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={'email':'user@zion.os','password':'***'})\nprint(resp.json())` }]
          errors: [
            { code: 'INVALID_CREDENTIALS', httpStatus: 401, message: 'Email or password incorrect' }]
          versions: ['v1']}
        {
          id: 'oauth-token'
          title: 'OAuth Token'
          description: 'Exchange auth code for access token.'
          path: '/v1/oauth/token'
          method: 'POST'
          visibility: 'partner'
          auth: ['none']
          requestBodySchema: { type: 'object', properties: { code: { type: 'string' }, redirect_uri: { type: 'string' } }, required: ['code', 'redirect_uri'] }
          responseBodySchema: { type: 'object', properties: { access_token: { type: 'string' }, refresh_token: { type: 'string' } } }
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/oauth/token -H 'Content-Type: application/json' -d '{"code":"AUTH_CODE","redirect_uri":"https://app.partner.com/callback"}'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: 'AUTH_CODE', redirect_uri: 'https://app.partner.com/callback' }) }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/oauth/token', json={'code':'AUTH_CODE','redirect_uri':'https://app.partner.com/callback'}).json()` }]
          versions: ['v1']}]}
          ],
          versions: ['v1']
        }
      ]
    },
    {
      id: 'messages',
      title: 'Messaging API',
      description: 'Send and receive messages between users.',
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
            { language: 'curl', code: `curl '${baseUrl}/v1/talent/123' -H 'Authorization: Bearer <token>'` }
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/talent/123', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` }
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/talent/123', headers={'Authorization':'Bearer <token>'}).json()` }]
          versions: ['v1']}]}
          ],
          versions: ['v1']
        }
      ]
    },
    {
      id: 'wallet',
      title: 'ZION$ Wallet API',
      description: 'Manage your ZION$ wallet and transactions.',
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
      }
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
