export interface APIDocumentation {
  id: string;
  name: string;
  version: string;
  description: string;
  baseUrl: string;
  endpoints: APIEndpoint[];
  schemas: APISchema[];
  examples: APIExample[];
  metadata: {
    lastGenerated: Date;
    totalEndpoints: number;
    coverage: number;
    languages: string[];
    frameworks: string[];
  };
}

export interface APIEndpoint {
  id: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  summary: string;
  description: string;
  parameters: APIParameter[];
  requestBody?: APIRequestBody;
  responses: APIResponse[];
  tags: string[];
  deprecated: boolean;
  rateLimit?: RateLimit;
  authentication?: AuthenticationRequirement;
}

export interface APIParameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  required: boolean;
  schema: APISchema;
  description: string;
  example?: any;
  deprecated?: boolean;
}

export interface APIRequestBody {
  required: boolean;
  content: {
    [mediaType: string]: {
      schema: APISchema;
      examples?: { [key: string]: APIExample };
    };
  };
  description?: string;
}

export interface APIResponse {
  statusCode: string;
  description: string;
  content?: {
    [mediaType: string]: {
      schema: APISchema;
      examples?: { [key: string]: APIExample };
    };
  };
  headers?: { [key: string]: APISchema };
}

export interface APISchema {
  type: string;
  properties?: { [key: string]: APISchema };
  items?: APISchema;
  required?: string[];
  description?: string;
  example?: any;
  enum?: any[];
  format?: string;
}

export interface APIExample {
  summary?: string;
  description?: string;
  value: any;
}

export interface RateLimit {
  requests: number;
  period: string;
  burst?: number;
}

export interface AuthenticationRequirement {
  type: 'bearer' | 'basic' | 'apiKey' | 'oauth2';
  scheme?: string;
  bearerFormat?: string;
  name?: string;
  in?: 'header' | 'query' | 'cookie';
}

// Service class for generating API documentation
export class APIDocGeneratorService {
  private documentation: APIDocumentation;

  constructor() {
    this.documentation = {
      id: '',
      name: '',
      version: '',
      description: '',
      baseUrl: '',
      endpoints: [],
      schemas: [],
      examples: [],
      metadata: {
        lastGenerated: new Date(),
        totalEndpoints: 0,
        coverage: 0,
        languages: [],
        frameworks: []
      }
    };
  }

  generateDocumentation(apiSpec: any): APIDocumentation {
    // Implementation for generating API documentation
    // This would parse the API specification and generate structured documentation
    return this.documentation;
  }

  addEndpoint(endpoint: APIEndpoint): void {
    this.documentation.endpoints.push(endpoint);
    this.documentation.metadata.totalEndpoints = this.documentation.endpoints.length;
  }

  addSchema(schema: APISchema): void {
    this.documentation.schemas.push(schema);
  }

  addExample(example: APIExample): void {
    this.documentation.examples.push(example);
  }

  getDocumentation(): APIDocumentation {
    return this.documentation;
  }

  exportToMarkdown(): string {
    // Implementation for exporting documentation to Markdown format
    return '';
  }

  exportToOpenAPI(): string {
    // Implementation for exporting documentation to OpenAPI format
    return '';
  }
}