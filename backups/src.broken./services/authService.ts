import { User } from '@/context/auth/AuthProvider';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: 'User',
        },
        token: 'mock-token',
      });
    }, 1000);
  });
};

export const registerUser = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: credentials.name,
        },
        token: 'mock-token',
      });
    }, 1000);
  });
};

export const logoutUser = async (): Promise<void> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};