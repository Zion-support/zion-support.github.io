// NextPage import removed as it's not used

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