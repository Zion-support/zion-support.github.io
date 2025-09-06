import { ApiDocsSpec } from './types';

const baseUrl = 'https://api.zion.os';

const v1: ApiDocsSpec = {
  product: 'Zion OS',
  versions: ['v1'],
  defaultVersion: 'v1',
  lastUpdatedIso: new Date().toISOString(),
  sections: [
    {
      id: 'auth',
      title: 'Auth (JWT, OAuth, Wallet)',
      description: 'Authenticate using JWT, OAuth 2.0, or connect a wallet.',
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
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@example.com","password":"password"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@example.com', password: 'password' }) }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/auth/login', json={'email':'user@example.com','password':'password'}).json()` }
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
          id: 'messages-send',
          title: 'Send Message',
          description: 'Send a message between users.',
          path: '/v1/messages',
          method: 'POST',
          visibility: 'public',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['to', 'body'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }
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
          id: 'wallet-balance',
          title: 'Get Balance',
          description: 'Fetch wallet balance for the current user.',
          path: '/v1/wallet/balance',
          method: 'GET',
          visibility: 'private',
          auth: ['jwt'],
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json())` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={'Authorization':'Bearer <token>'}).json()` }
          ],
          versions: ['v1']
        }
      ]
    }
  ]
};

export default v1;
