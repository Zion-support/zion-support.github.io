// Type definitions for Next.js
declare module 'next' {
  interface NextPageProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

export {};
