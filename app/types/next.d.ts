// Next.js type definitions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
      role: string;
    };
  }
}

export {};