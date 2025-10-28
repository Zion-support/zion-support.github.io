<<<<<<< HEAD
// Type definitions for Next.js compatibility
import { ReactNode } from 'react';

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }> | string[];
  creator?: string;
  publisher?: string;
  formatDetection?: {
    email?: boolean;
    address?: boolean;
    telephone?: boolean;
  }
  metadataBase?: URL;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  }
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    type?: string;
    authors?: Array<{ name: string; url?: string }> | string[];
    publishedTime?: string;
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    images?: string[];
  }
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    }
  }
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;
=======
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

interface NextPageWithLayout<P = {}, IP = P> extends NextPage<P, IP> {
  getLayout?: (_page: React.ReactElement) => React.ReactNode;
}

declare module 'next' {
  interface NextPageWithLayout<P = {}, IP = P> extends NextPage<P, IP> {
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
  }
}

export interface MetadataRoute {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Custom Next.js types
export interface NextPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// API route types
export interface ApiRouteHandler {
  (_req: Request): Promise<Response>;
}

// Server components types
export interface ServerComponentProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Client components types
export interface ClientComponentProps {
  children?: ReactNode;
  className?: string;
}

// Route handlers
export interface RouteHandler {
  GET?: (_req: Request) => Promise<Response>;
  POST?: (_req: Request) => Promise<Response>;
  PUT?: (_req: Request) => Promise<Response>;
  DELETE?: (_req: Request) => Promise<Response>;
  PATCH?: (_req: Request) => Promise<Response>;
}

// Dynamic route types
export interface DynamicRoute {
  params: { [key: string]: string }
}

// Static generation types
export interface StaticProps {
  props: { [key: string]: unknown }
  revalidate?: number;
  notFound?: boolean;
}

// ISR types
export interface ISRConfig {
  revalidate: number;
  tags?: string[];
}

// Edge runtime types
export interface EdgeRuntime {
  runtime: 'edge';
}

// Node.js runtime types
export interface NodeRuntime {
  runtime: 'nodejs';
}

// Extend Next.js types
declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string;
      email: string;
      name?: string;
    }
  }
}

export {}