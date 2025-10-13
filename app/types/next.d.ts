
// Type definitions for Next.js compatibility in Vite
export interface Metadata {title?: string;
  description?}> | string[];
  };
  openGraph?: {title?: string;
    description?}>;
    locale?: string;
    type?: string;
    authors?: Array<{name: string; url?}> | string[];
    publishedTime?: string;
  };
  twitter?: {card?: 'summary' | 'summary_large_image' | 'app' | 'player';''site?};'
  robots?: {index?: booleanfollow?};'
  };
  verification?{google?: string;'
    yandex?};
}

export interface MetadataRoute {url: stringlastModified?}'
export interface MetadataRouteSitemap extends MetadataRoute {urlstring,'
  lastModified?}

// Custom Next.js types
export interface NextPageProps {params: { [key}searchParams, {[key]};'
}

// API route types
export interface ApiRouteHandler {(reqRequest)}'
// Server components types
export interface ServerComponentProps {params: { [key};
  searchParams, {[key]};
}

// Client components types
export interface ClientComponentProps {children?: React.ReactNode;
  className?}

// Route handlers
export interface RouteHandler {GET?: (req}

// Dynamic route types
export interface DynamicRoute {params: { [key};
}

// Static generation types
export interface StaticProps {props: { [key};
  revalidate?: number;
  notFound?: boolean;
}

// ISR types
export interface ISRConfig {revalidate: number;
  tags?}

// Edge runtime types
export interface EdgeRuntime {
  runtime: 'edge';''}'
// Node.js runtime types
export interface NodeRuntime {
  runtime: 'nodejs';''}'
// Extend Next.js types
declare module 'next' {interface NextApiRequest {''user?: {'
      id}}'
}

export {};
