// Next.js type definitions
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
declare module 'next' {
  interface NextPageWithLayout<P = { /* Empty function */ }, IP = P> extends NextPage<P, IP> {
    getLayout?: () => React.ReactNode;
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
  (): Promise<Response>;
}

// Server components types
export interface ServerComponentProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Performance API types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// Route handlers
export interface RouteHandler {
  GET?: () => Promise<Response>;
  POST?: () => Promise<Response>;
  PUT?: () => Promise<Response>;
  DELETE?: () => Promise<Response>;
  PATCH?: () => Promise<Response>;
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