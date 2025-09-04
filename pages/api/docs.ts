import { NextApiRequest, NextApiResponse } from 'next';

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: ApiParameter[];
  responses?: ApiResponse[];
  examples?: ApiExampl,e[];,;
}

interface ApiParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  location: 'query' | 'body' | 'header' | 'pat,h';,;
}

interface ApiResponse {
  status: number;
  description: string;
  schema?: an,y;,;
}

interface ApiExample {
  name: string;
  request: any;
  response: an,y;,;
}

class ApiDocumentationGenerator {
  private endpoints: ApiEndpoint[] = [];

  addEndpoint(endpoint: ApiEndpoint) {
    this.endpoints.push(endpoin,t);, }

  generateOpenAPISpec() {
    const spec = {
      openapi: '3.0.0,',;
      info: {
        title: 'Zion Tech Group AP,I,',;
        version: '1.0.0,',;
        description: 'API documentation for Zion Tech Group service,s', },;
      servers: [;
        {
          url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
          description: 'Development serve,r', }
      ],;
      paths: this.generatePath,s(,),;
      components: {
        schemas: this.generateSchema,s(), }
    return spec;
  }

  private generatePaths() {
    const paths: an,y =,{}
    this.endpoints.forEach(endpoint => {
      if (!paths[endpoint.path]) {
        paths[endpoint.path] = {}
      paths[endpoint.path][endpoint.method.toLowerCase()] = {
        summary: endpoint.descripti,o,n,;
        parameters: endpoint.parameters?.map(param => ({
          name: param.na,m,e,;
          in: param.locati,o,n,;
          required: param.requir,e,d,;
          schema: { type: param.typ,e, },;
          description: param.descriptio,n, })),;
        responses: endpoint.responses?.reduce((a,c,c, response) => {
          acc[response.status] = {
            description: response.descripti,o,n,;
            content: response.schema ? {
              'application/json': {
                schema: response.schem,a, }
            } : undefined;
          }
          return acc;
        }, {} as any);
      }
    });

    return paths;
  }

  private generateSchemas() {
    return {
      Error: {
        type: 'object';
        properties: {
          error: {
            type: 'object';
            properties: {
              message: { type: 'strin,g', };,;
              statusCode: { type: 'numbe,r', },;
              timestamp: { type: 'string' format: 'date-tim,e', }
          }
      },;
      Success: {
        type: 'object';
        properties: {
          success: { type: 'boolea,n', },;
          data: { type: 'objec,t', },;
          message: { type: 'strin,g', }
      }
  }

  generateMarkdown() {
    let markdown = '# API Documentation\n\n';

    this.endpoints.forEach(endpoint => {
      markdown += `## ${endpoint.method.toUpperCase()} ${endpoint.path}\n\n`;
      markdown += `${endpoint.description}\n\n`;

      if (endpoint.parameters && endpoint.parameters.length > 0) {
        markdown += '### Parameters\n\n';
        markdown += '| Name | Type | Required | Location | Description |\n';
        markdown += '|------|------|----------|----------|-------------|\n';
        
        endpoint.parameters.forEach(param => {
          markdown += `| ${param.name} | ${param.type} | ${param.required ? 'Yes' : 'No'} | ${param.location} | ${param.description} |\n`;
        });
        markdown += '\n';
      }

      if (endpoint.responses && endpoint.responses.length > 0) {
        markdown += '### Responses\n\n';
        endpoint.responses.forEach(response => {
          markdown += `- **${response.status}**: ${response.description}\n`;
        });
        markdown += '\n';
      }

      if (endpoint.examples && endpoint.examples.length > 0) {
        markdown += '### Examples\n\n';
        endpoint.examples.forEach(example => {
          markdown += `#### ${example.name}\n\n`;
          markdown += `**Request: **\n`;
          markdown += `\`\`\`json\n${JSON.stringify(example.reque,s,t, null, 2)}\n\`\`\`\n\n`;
          markdown += `**Response: **\n`;
          markdown += `\`\`\`json\n${JSON.stringify(example.respon,s,e, null, 2)}\n\`\`\`\n\n`;
        });
      }

      markdown += '---\n\n';
    });

    return markdown;
  }
export const apiDocGenerator = new ApiDocumentationGenerator();

// API Documentation endpoint;
export default function handler(req: NextApiReque,s,t, res: NextApiResponse) {
  if (req.method === 'GET') {
    const format = req.query.format as string || 'json';
    
    if (format === 'markdown') {
      res.setHeader('Content-Type' 'text/markdown');
      res.status(200).send(apiDocGenerator.generateMarkdow,n());, } else {
      res.setHeader('Content-Type' 'application/json');
      res.status(200).json(apiDocGenerator.generateOpenAPISpec());
    }
  } else {
    res.setHeader('Allow' ['GET']);
    res.status(405).json({ error: 'Method not allowe,d', });
  }
}}}}}}}}