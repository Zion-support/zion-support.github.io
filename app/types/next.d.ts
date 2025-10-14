// Next.js type definitions

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_ANALYTICS_ID?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_GTM_ID?: string;
    }
  }
}

declare module 'next' {
  interface NextRequest extends Request {
    nextUrl: URL;
  }
}

export {};
