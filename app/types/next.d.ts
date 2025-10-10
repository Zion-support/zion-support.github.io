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
=======
    authors?: Array<{ name: string; url?: string }> | string[];
    publishedTime?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
<<<<<<< HEAD
=======
    site?: string;
    creator?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: string;
      'max-snippet'?: number;
    };
  };
  verification?: {
    google?: string;
<<<<<<< HEAD
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;
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
}

export type GenerateMetadata = (params: GenerateMetadataParams) => Metadata | Promise<Metadata>;
export type GenerateViewport = (params: GenerateMetadataParams) => Viewport | Promise<Viewport>;
=======
  };
}

export interface MetadataRoute {
  sitemap?: string;
  robots?: string;
  manifest?: string;
}

export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest';

export interface MetadataRouteSitemap {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013
