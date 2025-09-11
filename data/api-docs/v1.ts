import { ApiDocsSpec } from './types';

const baseUrl = 'https://api && api.zion.os';
=======


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
  }
};
export default v1;
  ];
}
;
export default v1;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
