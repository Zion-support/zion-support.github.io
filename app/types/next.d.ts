// Next.js specific type definitions

// Type definitions for Next.js compatibility in Vite
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
  };
  metadataBase?: URL;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string,
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    type?: string;
    authors?: Array<{ name: string; url?: string }> | string[];
    publishedTime?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    images?: string[];
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
    other?: Record<string, string>;
  };
}

export interface MetadataRoute {
  url: string,
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}
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

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string,
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
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