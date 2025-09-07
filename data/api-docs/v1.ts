// Minimal API docs v1 spec to satisfy build
import type { ApiDocsSpec } from './types';

const baseUrl = 'https://api.zion.os';

const v1: ApiDocsSpec = {
  product: 'Zion OS',
  versions: ['v1'],
  defaultVersion: 'v1',
  lastUpdatedIso: new Date().toISOString(),
  sections: [
    {
      id: 'auth',
      title: 'Auth',
      endpoints: [
        {
          id: 'auth-login',
          title: 'Login',
          description: 'Obtain a JWT by providing credentials.',
          path: '/v1/auth/login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
        },
      ],
    },
  ],
  openapi: '3.0.0',
  info: {
    title: 'Zion OS API',
    version: '1.0.0',
    description: 'Zion OS API Documentation',
  },
  servers: [{ url: baseUrl }],
  paths: {},
};

export default v1;