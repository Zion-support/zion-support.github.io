
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
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' }, expiresIn: { type: 'number' } } },
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
          id: 'auth-login-jwt', title: 'JWT Login',
          description: 'Obtain a JWT by providing credentials.', path: '/v1/auth/login',
          method: 'POST', visibility: 'public',
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
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@zion.os","password":"***"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@zion.os', password: '***' }) }).then(r => r.json())` },
            { language: 'python', code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={'email':'user@zion.os','password':'***'})\nprint(resp.json())` }
          ],
          errors: [
            { code: 'INVALID_CREDENTIALS', httpStatus: 401, message: 'Email or password incorrect' }
          ],
          versions: ['v1']

  ];

  }

  ];

  }
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
};
export default v1;
  ];
}
;
export default v1;
;

;
