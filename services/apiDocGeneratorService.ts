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
