export interface AppConfig {
    name: string;
    version: string;
    environment: string;
  }

  export interface User {
    id: string;
    name: string;
    email: string;
  }

  export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
  }