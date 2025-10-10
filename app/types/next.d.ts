// Type definitions for Next.js compatibility in Vite
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: stringService Feature;
    publishedTime?: string}
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    images?: stringService Feature}
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number}
  }
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>}
}

export interface MetadataRoute {
  url: string,
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number}

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string,
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number}

// Custom Next.js types
export interface NextPageProps {
  params: { Service Feature}

// Edge runtime types
export interface EdgeRuntime {
  runtime: 'edge'}

// Node.js runtime types
export interface NodeRuntime {
  runtime: 'nodejs'}

// Extend Next.js types
declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string;
      email: string;
      name?: string}
  }
}

export {}
