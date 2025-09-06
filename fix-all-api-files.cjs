#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AllApiFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixDocsApiFiles() {
    this.log('🔧 Fixing docs API files...');
    
    // Fix pages/api/docs/changelog.ts
    const changelogContent = `import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const changelog = {
      version: '1.0.0',
      date: '2025-01-01',
      changes: [
        'Initial release',
        'Added core functionality',
        'Implemented API endpoints'
      ]
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(changelog);
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/docs/changelog.ts', changelogContent);
      this.fixedFiles.push('pages/api/docs/changelog.ts');
      this.log('✅ Fixed pages/api/docs/changelog.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/changelog.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/changelog.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/docs/graphql.ts
    const graphqlContent = `import { NextApiRequest, NextApiResponse } from 'next';

const typedefs = [
  'type Query {',
  '  hello: String',
  '  user(id: ID!): User',
  '}',
  'type User {',
  '  id: ID!',
  '  name: String',
  '  email: String',
  '}'
];

function toSDL() {
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(toSDL());
}`;

    try {
      fs.writeFileSync('pages/api/docs/graphql.ts', graphqlContent);
      this.fixedFiles.push('pages/api/docs/graphql.ts');
      this.log('✅ Fixed pages/api/docs/graphql.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/graphql.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/graphql.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/docs/openapi.ts
    const openapiContent = `import { NextApiRequest, NextApiResponse } from 'next';

function toOpenApi() {
  return {
    openapi: '3.0.0',
    info: {
      title: 'Zion Tech Group API',
      version: '1.0.0',
      description: 'API documentation for Zion Tech Group services'
    },
    servers: [
      {
        url: 'https://api.ziontechgroup.com',
        description: 'Production server'
      }
    ],
    paths: {
      '/api/health': {
        get: {
          summary: 'Health check',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: { type: 'string' },
                      timestamp: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(toOpenApi());
    return;
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/docs/openapi.ts', openapiContent);
      this.fixedFiles.push('pages/api/docs/openapi.ts');
      this.log('✅ Fixed pages/api/docs/openapi.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/openapi.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/openapi.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/docs/postman.ts
    const postmanContent = `import { NextApiRequest, NextApiResponse } from 'next';

function toPostman() {
  return {
    info: {
      name: 'Zion Tech Group API',
      description: 'Postman collection for Zion Tech Group API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [
      {
        name: 'Health Check',
        request: {
          method: 'GET',
          header: [],
          url: {
            raw: '{{baseUrl}}/api/health',
            host: ['{{baseUrl}}'],
            path: ['api', 'health']
          }
        }
      }
    ],
    variable: [
      {
        key: 'baseUrl',
        value: 'https://api.ziontechgroup.com'
      }
    ]
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(toPostman());
    return;
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/docs/postman.ts', postmanContent);
      this.fixedFiles.push('pages/api/docs/postman.ts');
      this.log('✅ Fixed pages/api/docs/postman.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/postman.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/postman.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/docs/spec.ts
    const specContent = `import { NextApiRequest, NextApiResponse } from 'next';

const v1 = {
  version: '1.0.0',
  endpoints: [
    {
      path: '/api/health',
      method: 'GET',
      description: 'Health check endpoint'
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(v1);
    return;
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/docs/spec.ts', specContent);
      this.fixedFiles.push('pages/api/docs/spec.ts');
      this.log('✅ Fixed pages/api/docs/spec.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/spec.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/spec.ts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting All API Files Fix...');
    this.log('='.repeat(60));

    this.fixDocsApiFiles();

    // Generate report
    this.log('\n📊 ALL API FILES FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFixed: this.fixedFiles.length,
      totalErrors: this.errors.length
    };

    fs.writeFileSync('all-api-files-fix-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to all-api-files-fix-report.json');

    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new AllApiFixer();
  fixer.run().catch(console.error);
}

module.exports = AllApiFixer;