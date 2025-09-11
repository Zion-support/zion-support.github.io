<<<<<<< HEAD
export default {};

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
  content: Record<string, APIContent>;
  description?: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
