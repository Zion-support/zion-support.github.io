import { NextApiRequest, NextApiResponse } from 'next';

interface Endpoint {
  path: string;
  method: string;
  description: string;
  parameters?: Array<{
    name: string;
    location: 'query' | 'path' | 'header';
    required: boolean;
    type: string;
    description: string;
  }>;
  responses?: Array<{
    status: string;
    description: string;
    schema?: any;
  }>;
}

class OpenAPIGenerator {
  private endpoints: Endpoint[] = [
    {
      path: '/api/health',
      method: 'GET',
      description: 'Get system health status',
      responses: [
        { status: '200', description: 'Health status retrieved successfully' },
        { status: '500', description: 'Health check failed' }
      ]
    },
    {
      path: '/api/services',
      method: 'GET',
      description: 'Get available services',
      responses: [
        { status: '200', description: 'Services retrieved successfully' },
        { status: '401', description: 'Unauthorized' }
      ]
    },
    {
      path: '/api/quotes',
      method: 'POST',
      description: 'Request a service quote',
      parameters: [
        {
          name: 'serviceType',
          location: 'query',
          required: true,
          type: 'string',
          description: 'Type of service requested'
        }
      ],
      responses: [
        { status: '200', description: 'Quote generated successfully' },
        { status: '400', description: 'Invalid request data' },
        { status: '401', description: 'Unauthorized' }
      ]
    }
  ];

  generateSpec() {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: 'Zion Tech Group API',
        version: '1.0.0',
        description: 'API documentation for Zion Tech Group services'
      },
      servers: [{
        url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
        description: 'Development server'
      }],
      paths: this.generatePaths(),
      components: {
        schemas: this.generateSchemas()
      }
    };
    return spec;
  }

  private generatePaths() {
    const paths: Record<string, any> = {};
    this.endpoints.forEach(endpoint => {
      if (!paths[endpoint.path]) {
        paths[endpoint.path] = {};
      }
      paths[endpoint.path][endpoint.method.toLowerCase()] = {
        summary: endpoint.description,
        parameters: endpoint.parameters?.map(param => ({
          name: param.name,
          in: param.location,
          required: param.required,
          schema: { type: param.type },
          description: param.description
        })),
        responses: endpoint.responses?.reduce((acc, response) => {
          acc[response.status] = {
            description: response.description,
            content: response.schema ? {
              'application/json': {
                schema: response.schema
              }
            } : undefined
          };
          return acc;
        }, {})
      };
    });
    return paths;
  }

  private generateSchemas() {
    return {
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'object',
            properties: {
              message: { type: 'string' },
              statusCode: { type: 'number' },
              timestamp: { type: 'string', format: 'date-time' }
            }
          }
        }
      },
      HealthStatus: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['healthy', 'degraded', 'unhealthy'] },
          timestamp: { type: 'string', format: 'date-time' },
          services: { type: 'object' },
          metrics: { type: 'object' }
        }
      },
      Service: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          category: { type: 'string' },
          pricing: { type: 'object' }
        }
      }
    };
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const generator = new OpenAPIGenerator();
    const spec = generator.generateSpec();
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(spec);
  } catch (error) {
    console.error('Error generating API docs:', error);
    res.status(500).json({ 
      error: 'Failed to generate API documentation',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}