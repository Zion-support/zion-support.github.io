// Next.js type definitions
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
declare module 'next' {
  interface NextPageWithLayout<P = {}, IP = P> extends NextPage<P, IP> {
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
  }
}

export interface MetadataRoute {
  _url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface MetadataRouteSitemap extends MetadataRoute {
  _url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Custom Next.js types
export interface NextPageProps {
  params: { [_key: string]: string }
  searchParams: { [_key: string]: string | string[] | undefined }
}

// API route types
export interface ApiRouteHandler {
  (_req: Request): Promise<Response>;
}

// Server components types
export interface ServerComponentProps {
  params: { [_key: string]: string }
  searchParams: { [_key: string]: string | string[] | undefined }
}

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  _processingStart: number;
  _processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  _value: number;
  _hadRecentInput: boolean;
  _lastInputTime: number;
  _sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  _previousRect: DOMRectReadOnly;
  _currentRect: DOMRectReadOnly;
}

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
  params: { [_key: string]: string }
}

// Static generation types
export interface StaticProps {
  props: { [_key: string]: unknown }
  revalidate?: number;
  notFound?: boolean;
}

// ISR types
export interface ISRConfig {
  _revalidate: number;
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
      _id: string;
      _email: string;
      name?: string;
    }
  }
}

export {}