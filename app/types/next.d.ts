// Next.js specific type definitions

import { NextRequest, NextResponse } from 'next/server'

// Extend Next.js types
declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string;
      email: string;
      name?: string;
    };
  }
}

// Custom Next.js types
export interface NextPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface NextLayoutProps {
  children: React.ReactNode;
  params: { [key: string]: string };
}

// API route types
export interface ApiRouteHandler {
  (req: NextRequest): Promise<NextResponse>;
}

// Middleware types
export interface MiddlewareConfig {
  matcher: string[];
}

// Image optimization types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Metadata types
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    images?: string[];
  };
}

// Server components types
export interface ServerComponentProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// Route handlers
export interface RouteHandler {
  GET?: (req: NextRequest) => Promise<NextResponse>;
  POST?: (req: NextRequest) => Promise<NextResponse>;
  PUT?: (req: NextRequest) => Promise<NextResponse>;
  DELETE?: (req: NextRequest) => Promise<NextResponse>;
  PATCH?: (req: NextRequest) => Promise<NextResponse>;
}

// Dynamic route types
export interface DynamicRoute {
  params: { [key: string]: string };
}

// Static generation types
export interface StaticProps {
  props: { [key: string]: any };
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

export {};