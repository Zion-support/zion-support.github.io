// App types - Type definitions

export interface AppConfig {
  id: string;
  name: string;
  description?: string;
}

export type AppStatus = 'active' | 'inactive' | 'pending';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: number;
  category: string;
}

export default AppConfig;