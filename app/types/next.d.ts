// Next.js type definitions
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
declare module 'next' {
  return null;
}
  return null;
}
  interface NextPageWithLayout<P = Record<string, unknown />, IP = P> extends NextPage<P, IP /> {
  return null;
}
  return null;
}
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
  ;}
;

export interface MetadataRoute {
  return null;
}
  return null;
}
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
;}
;

export interface MetadataRouteSitemap extends MetadataRoute {
  return null;
}
  return null;
}
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
;}

// Custom Next.js types;

export interface NextPageProps {
  return null;
}
  return null;
}
// API route types;

export interface ApiRouteHandler {
  return null;
}
  return null;
}
  (_req: Request): Promise<Response />;
;}

// Server components types;

export interface ServerComponentProps {
  return null;
}
  return null;
}
  params: { [key: string]: string ;}
  searchParams: { [key: string]: string | string[] | undefined ;}

// Performance API types - removed unused interface

// Client components types;

export interface ClientComponentProps {
  return null;
}
  return null;
}
  children?: React.ReactNode;
  className?: string;
}

// Route handlers;

export interface RouteHandler {
  return null;
}
  return null;
}
  GET?: (_req: Request) => Promise<Response />;
  POST?: (_req: Request) => Promise<Response />;
  PUT?: (_req: Request) => Promise<Response />;
  DELETE?: (_req: Request) => Promise<Response />;
  PATCH?: (_req: Request) => Promise<Response />;
;}

// Dynamic route types;

export interface DynamicRoute {
  return null;
}
  return null;
}
  params: { [key: string]: string ;}

// Static generation types;

export interface StaticProps {
  return null;
}
  return null;
}
  props: { [key: string]: unknown ;}
  revalidate?: number;
  notFound?: boolean;
}

// ISR types;

export interface ISRConfig {
  return null;
}
  return null;
}
  revalidate: number;
  tags?: string[];
;}

// Edge runtime types;

export interface EdgeRuntime {
  return null;
}
  return null;
}
  runtime: 'edge';
;}

// Node.js runtime types;

export interface NodeRuntime {
  return null;
}
  return null;
}
  runtime: 'nodejs';
;}

// Extend Next.js types
declare module 'next' {
  return null;
}
  return null;
}
  interface NextApiRequest {
  return null;
}
  return null;
}
    user?: {
  return null;
}
  return null;
}
      id: string;
      email: string;
      name?: string;
    ;}
;

export {}