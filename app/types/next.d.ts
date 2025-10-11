declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};