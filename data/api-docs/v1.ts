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
      title: 'Authentication',
      endpoints: [
        {
          id: 'auth-login',
          title: 'Login',
          description: 'Authenticate user and get JWT token',
          path: '/v1/auth/login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
          requestBodySchema: {
            type: 'object',
            properties: {
              email: { type: 'string' },
              password: { type: 'string' }
            },
            required: ['email', 'password']
          },
          responseBodySchema: {
            type: 'object',
            properties: {
              token: { type: 'string' },
              expiresIn: { type: 'number' }
            }
          },
          samples: [
            {
              language: 'curl',
              code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@example.com","password":"password"}'`
            }
          ],
          versions: ['v1']
        }
      ]
    }
  ]
};

export default v1;