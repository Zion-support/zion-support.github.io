// App types and interfaces

export interface AppConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const defaultAppConfig: AppConfig = {
  enabled: true,
  options: {}
};

export function initializeApp(config: AppConfig) {
  // Implementation here
  return config;
}