// Type definitions for Next.js compatibility in Vite;
export interface Metadata {title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }> | string[];
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
  twitter?: {card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {/* TODO: Fix JSX expression */}
    };
  };
  verification?: {google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;</strin>
  };
}

export interface Viewport {width?: string;
  height?: string;
  initialScale?: number;
  maximumScale?: number;
  userScalable?: boolean;
  viewportFit?: string;
}

export interface GenerateMetadataParams {params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

export type GenerateMetadata = (params: GenerateMetadataParams) => Metadata | Promise<Metadata>;</Metadata></Metadata>export</Metadata></Metadata>type</Metadata> GenerateViewport = (params: GenerateMetadataParams) => Viewport | Promise<Viewport>;</Viewpor>