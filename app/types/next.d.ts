// Next.js type definitions
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
declare module 'next' {
  interface NextPageWithLayout<P = Record<string, unknown>, IP = P> extends NextPage<P, IP> {
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
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
  params: Record<string, string>
  searchParams: Record<string, string | string[] | undefined>
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

// Performance API types - removed unused interface

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode;
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

export { /* empty */ }