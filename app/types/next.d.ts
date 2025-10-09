// Type definitions for Next.js compatibility in Vite
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
    languages?: Record<string, string>;
=======
<<<<<<< HEAD
    languages?: Record<string, string>;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
>>>>>>> main
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
<<<<<<< HEAD
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
=======
<<<<<<< HEAD
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
=======
    card?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
    title?: string;
    description?: string;
    images?: string[];
>>>>>>> main
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
<<<<<<< HEAD
      'max-image-preview'?: 'none' | 'standard' | 'large';
=======
<<<<<<< HEAD
      'max-image-preview'?: 'none' | 'standard' | 'large';
=======
      'max-image-preview'?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
>>>>>>> main
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
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest';

<<<<<<< HEAD
export interface MetadataRouteSitemap {
=======
<<<<<<< HEAD
export interface MetadataRouteSitemap {
=======
export interface MetadataRouteSitemap extends MetadataRoute {
>>>>>>> cursor/fix-errors-and-merge-to-main-9def
>>>>>>> main
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
<<<<<<< HEAD
}
=======
}
>>>>>>> main
