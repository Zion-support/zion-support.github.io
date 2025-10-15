// Next.js type definitions

export interface NextConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export interface NextPage {
  id: string;
  title: string;
  content: string;
}

export interface NextApiResponse {
  status: number;
  data: any;
}

export const defaultNextConfig: NextConfig = {
  enabled: true,
  options: {}
};

export function initializeNext(config: NextConfig) {
  // Implementation here
  return config;
}