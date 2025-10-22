<<<<<<< HEAD
// Next.js type declarations

declare module 'next' {
  interface NextPageContext {
    query: {
      [key: string]: string | string[] | undefined;
    };
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
=======
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
