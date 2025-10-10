// Type definitions for Next.js compatibility in Vite;
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }> | string[];
export interface Metadata {/* TODO: Fix JSX expression */}
  e: string; url?: string }> | string[];
  creator?: string;
  publisher?: string;
  formatDetection?: {/* TODO: Fix JSX expression */}
  };
  metadataBase?: URL;
  alternates?: {/* TODO: Fix JSX expression */}
  };
  openGraph?: {/* TODO: Fix JSX expression */}
    }>;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
    authors?: Array<{/* TODO: Fix JSX expression */}
  e: string; url?: string }> | string[];
    publishedTime?: string;
  };
  twitter?: {/* TODO: Fix JSX expression */}
  };
  robots?: {/* TODO: Fix JSX expression */}
    };
  };
  verification?: {
    google?: string;
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
  verification?: {/* TODO: Fix JSX expression */}
  };
}
export interface MetadataRoute {/* TODO: Fix JSX expression */}
}
export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest';
export interface MetadataRouteSitemap {/* TODO: Fix JSX expression */}
}

export type GenerateMetadata = (params: GenerateMetadataParams) => Metadata | Promise<Metadata>;
export type GenerateViewport = (params: GenerateMetadataParams) => Viewport | Promise<Viewport>;