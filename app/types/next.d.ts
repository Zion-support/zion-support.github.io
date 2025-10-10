/**
 * Next.js specific type definitions
 */

import { NextRequest, NextResponse } from 'next/server';

// Next.js API route types
export interface APIRequest extends NextRequest {
  body: any;
  query: { [key: string]: string | string[] | undefined };
  params: { [key: string]: string };
}

export interface APIResponse extends NextResponse {
  json: (data: any) => NextResponse;
  status: (code: number) => APIResponse;
}

// Next.js page props
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Next.js metadata types
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: { name: string; url?: string }[];
  creator?: string;
  publisher?: string;
  formatDetection?: {
    email?: boolean;
    address?: boolean;
    telephone?: boolean;
  };
  metadataBase?: URL;
  alternates?: {
    canonical?: string;
    languages?: { [key: string]: string };
  };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    };
  };
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: { [key: string]: string };
  };
}

// Next.js middleware types
export interface MiddlewareRequest extends NextRequest {
  nextUrl: URL;
  ip?: string;
  geo?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: string;
    longitude?: string;
  };
  ua?: {
    isBot: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    browser: string;
    os: string;
    device: string;
  };
}

export type MiddlewareResponse = NextResponse | Response;

// Next.js dynamic import types
export interface DynamicImportOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}

// Next.js image types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

// Next.js link types
export interface LinkProps {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Next.js router types
export interface Router {
  route: string;
  pathname: string;
  query: { [key: string]: string | string[] | undefined };
  asPath: string;
  basePath: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
  isLocaleDomain: boolean;
  isReady: boolean;
  isPreview: boolean;
  push: (url: string, as?: string, options?: { shallow?: boolean; locale?: string | false }) => Promise<boolean>;
  replace: (url: string, as?: string, options?: { shallow?: boolean; locale?: string | false }) => Promise<boolean>;
  reload: () => void;
  back: () => void;
  prefetch: (url: string, as?: string, options?: { priority?: boolean; locale?: string | false }) => Promise<void>;
  beforePopState: (cb: (state: any) => boolean) => void;
  events: {
    on: (event: string, handler: (...args: any[]) => void) => void;
    off: (event: string, handler: (...args: any[]) => void) => void;
    emit: (event: string, ...args: any[]) => void;
  };
}

// Next.js app directory types
export interface LayoutProps {
  children: React.ReactNode;
  params: { [key: string]: string };
}

export interface TemplateProps {
  children: React.ReactNode;
  params: { [key: string]: string };
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface LoadingProps {
  // No props for loading component
}

export interface NotFoundProps {
  // No props for not-found component
}

// Next.js server components types
export interface ServerComponentProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Next.js client components types
export interface ClientComponentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Export all types
export type {
  PageProps,
  Metadata,
  MiddlewareRequest,
  MiddlewareResponse,
  DynamicImportOptions,
  ImageProps,
  LinkProps,
  Router,
  LayoutProps,
  TemplateProps,
  ErrorProps,
  LoadingProps,
  NotFoundProps,
  ServerComponentProps,
  ClientComponentProps,
};