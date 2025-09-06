import { ApiDocsSpec } from './types';

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
<<<<<<< HEAD
  ];
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};

export default v1;
