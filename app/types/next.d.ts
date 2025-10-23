// Type definitions for Next.js compatibility in Vite

<<<<<<< HEAD
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
      url: string;
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
    card?: "summary" | "summary_large_image" | "app" | "player";
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
      "max-video-preview"?: number;
      "max-image-preview"?: "none" | "standard" | "large";
      "max-snippet"?: number;
    };
  };
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;
  };
}

// Extend Next.js metadata types
declare module "next/metadata" {
  interface Metadata {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    robots?: string;
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
    };
    twitter?: {
      card?: "summary" | "summary_large_image" | "app" | "player";
      title?: string;
      description?: string;
      images?: string[];
      creator?: string;
      site?: string;
    };
    verification?: {
      google?: string;
      yandex?: string;
      yahoo?: string;
      other?: Record<string, string>;
=======
declare module "next" {
  interface NextPageContext {
    query: {
      [key: string]: string | string[] | undefined;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    };
  }
}

<<<<<<< HEAD
// Custom page props
export interface CustomPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// API route types
export interface ApiRouteHandler {
  GET?: (request: Request) => Promise<Response>;
  POST?: (request: Request) => Promise<Response>;
  PUT?: (request: Request) => Promise<Response>;
  DELETE?: (request: Request) => Promise<Response>;
  PATCH?: (request: Request) => Promise<Response>;
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

export {};
=======
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
