// Next.js type declarations
declare module 'next' {
  interface NextPageContext {
    query: { [key: string]: string | string[] | undefined };
    pathname: string;
    asPath: string;
  }
}

declare module 'next/router' {
  interface NextRouter {
    query: { [key: string]: string | string[] | undefined };
    pathname: string;
    asPath: string;
  }
}