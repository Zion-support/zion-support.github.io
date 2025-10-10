// Next.js type definitions

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

declare module 'next/head' {
  interface HeadProps {
    children?: React.ReactNode;
  }
}

declare module 'next/image' {
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }
}

declare module 'next/link' {
  interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
}