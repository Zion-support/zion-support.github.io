// Next.js type definitions
declare module 'next' {
  interface NextPageProps {
    params: Record<string, string>;
    searchParams: Record<string, string | string[] | undefined>;
  }
}

export {};