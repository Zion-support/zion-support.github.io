// Next.js type declarations

import { NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/router';

// Extend Next.js types
declare module 'next' {
  interface NextPageContext {
    query: {
      [key: string]: string | string[] | undefined;
    };
    pathname: string;
    asPath: string;
    req?: any;
    res?: any;
    err?: any;
  }
}

declare module 'next/app' {
  interface AppProps {
    Component: NextPage;
    router: Router;
    pageProps: any;
  }
}

// Custom page props
export interface PageProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// API route types
export interface APIRequest extends Request {
  query: {
    [key: string]: string | string[] | undefined;
  };
  body: any;
  method: string;
  headers: Headers;
}

export interface APIResponse {
  status: number;
  data?: any;
  message?: string;
  error?: string;
}

// Middleware types
export interface MiddlewareRequest extends Request {
  nextUrl: URL;
  geo?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: string;
    longitude?: string;
  };
  ip?: string;
  ua?: string;
}

export interface MiddlewareResponse extends Response {
  next(): void;
  rewrite(url: string): void;
  redirect(url: string): void;
}

// Image optimization types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Link types
export interface LinkProps {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Head types
export interface HeadProps {
  children: React.ReactNode;
}

// Document types
export interface DocumentProps {
  html: string;
  head?: React.ReactNode;
  main?: React.ReactNode;
  nextScripts?: React.ReactNode;
}

// Error types
export interface ErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

// GetServerSideProps types
export interface GetServerSidePropsContext {
  params?: {
    [key: string]: string | string[];
  };
  query: {
    [key: string]: string | string[] | undefined;
  };
  req: any;
  res: any;
  resolvedUrl: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

export interface GetServerSidePropsResult<T = any> {
  props?: T;
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  notFound?: boolean;
}

// GetStaticProps types
export interface GetStaticPropsContext {
  params?: {
    [key: string]: string | string[];
  };
  preview?: boolean;
  previewData?: any;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

export interface GetStaticPropsResult<T = any> {
  props?: T;
  revalidate?: number | false;
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  notFound?: boolean;
}

// GetStaticPaths types
export interface GetStaticPathsContext {
  locales?: string[];
  defaultLocale?: string;
}

export interface GetStaticPathsResult {
  paths: Array<{
    params: {
      [key: string]: string | string[];
    };
    locale?: string;
  }>;
  fallback: boolean | 'blocking';
}

// Environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_SENTRY_DSN?: string;
      DATABASE_URL?: string;
      NEXTAUTH_SECRET?: string;
      NEXTAUTH_URL?: string;
    }
  }
}

export {};