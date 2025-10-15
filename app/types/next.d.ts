<<<<<<< HEAD
// import { NextPage } from 'next';
=======
// Next.js type declarations
>>>>>>> origin/main

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