// Next.js type definitions
declare module 'next' {
  interface NextPageProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}