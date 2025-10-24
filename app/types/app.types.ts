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

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
