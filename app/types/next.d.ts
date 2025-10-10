<<<<<<< HEAD
// Type definitions for Next.js compatibility in Vite;
=======
// Type definitions for Next.js compatibility in Vite
>>>>>>> origin/resolve-merge-conflicts
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }> | string[];
<<<<<<< HEAD
export interface Metadata {/* TODO: Fix JSX expression */}
  e: string; url?: string }> | string[];
=======
>>>>>>> origin/resolve-merge-conflicts
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
<<<<<<< HEAD
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
    authors?: Array<{/* TODO: Fix JSX expression */}
  e: string; url?: string }> | string[];
=======
    authors?: Array<{ name: string; url?: string }> | string[];
>>>>>>> origin/resolve-merge-conflicts
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
<<<<<<< HEAD
    other?: Record<string, string>;</strin>
  };
}

export interface Viewport {
  width?: string;
  height?: string;
  initialScale?: number;
  maximumScale?: number;
  userScalable?: boolean;
  viewportFit?: string;
}

export interface GenerateMetadataParams {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
  verification?: {/* TODO: Fix JSX expression */}
=======
    other?: Record<string, string>;
>>>>>>> origin/resolve-merge-conflicts
  };
}

export interface MetadataRoute {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest';

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export type GenerateMetadata = (params: GenerateMetadataParams) => Metadata | Promise<Metadata>;</Metadata></<<<Metadata>export</Metadata></<<Metadata>type</Metadata> GenerateViewport = (params: GenerateMetadataParams) => Viewport | Promise<Viewport>;</Viewpor>