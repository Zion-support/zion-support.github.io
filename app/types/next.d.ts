declare module 'next' {
  export interface NextPageProps {
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}
