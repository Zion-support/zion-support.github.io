// Next.js type declarations
declare module 'next' {
  interface NextPageProps {
    params?: { [key: string]: string | string[] | undefined };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export {};