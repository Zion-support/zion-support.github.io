// Type definitions for Next.js

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL?: string;
      NEXT_PUBLIC_APP_URL?: string;
    }
  }
}

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }
}

export {};