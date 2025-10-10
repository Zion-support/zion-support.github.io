// Next.js specific type definitions

// Type definitions for Next.js compatibility in Vite
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }>;
  creator?: string;
  publisher?: string;
  formatDetection?: {
    email?: boolean;
    address?: boolean;
    telephone?: boolean;
  };
  metadataBase?: string;
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
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
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
  category?: string;
  classification?: string;
  referrer?: 'no-referrer' | 'origin' | 'no-referrer-when-downgrade' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
  colorScheme?: 'normal' | 'light' | 'dark' | 'light dark';
  themeColor?: string | Array<{ media: string; color: string }>;
  viewport?: {
    width?: string;
    height?: string;
    initialScale?: number;
    minimumScale?: number;
    maximumScale?: number;
    userScalable?: boolean;
    viewportFit?: 'auto' | 'contain' | 'cover';
  };
  icons?: {
    icon?: string | Array<{ url: string; sizes?: string; type?: string }>;
    shortcut?: string | Array<{ url: string; sizes?: string; type?: string }>;
    apple?: string | Array<{ url: string; sizes?: string; type?: string }>;
    other?: Array<{ rel: string; url: string; sizes?: string; type?: string }>;
  };
  manifest?: string;
  other?: Record<string, string>;
}

// Next.js Image component props
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loader?: (props: { src: string; width: number; quality?: number }) => string;
  unoptimized?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
  loading?: 'lazy' | 'eager';
}

// Next.js Link component props
export interface LinkProps {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string;
  legacyBehavior?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Next.js Router types
export interface NextRouter {
  route: string;
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  asPath: string;
  basePath: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
  isReady: boolean;
  isPreview: boolean;
  isFallback: boolean;
  events: {
    on: (event: string, handler: (...args: any[]) => void) => void;
    off: (event: string, handler: (...args: any[]) => void) => void;
    emit: (event: string, ...args: any[]) => void;
  };
  push: (url: string, as?: string, options?: { shallow?: boolean; locale?: string }) => Promise<boolean>;
  replace: (url: string, as?: string, options?: { shallow?: boolean; locale?: string }) => Promise<boolean>;
  reload: () => void;
  back: () => void;
  beforePopState: (cb: (state: any) => boolean) => void;
  prefetch: (url: string, as?: string, options?: { priority?: boolean; locale?: string }) => Promise<void>;
}

// Next.js Head component
export interface HeadProps {
  children: React.ReactNode;
}

// Next.js Script component
export interface ScriptProps {
  src?: string;
  strategy?: 'afterInteractive' | 'beforeInteractive' | 'lazyOnload' | 'worker';
  onLoad?: () => void;
  onError?: (error: Error) => void;
  children?: React.ReactNode;
  id?: string;
  nonce?: string;
  crossOrigin?: string;
  async?: boolean;
  defer?: boolean;
  dangerouslySetInnerHTML?: { __html: string };
}

// Next.js Document types
export interface DocumentProps {
  __NEXT_DATA__: {
    props: any;
    page: string;
    query: Record<string, any>;
    buildId: string;
    assetPrefix?: string;
    isFallback: boolean;
    dynamicIds: string[];
    gssp: boolean;
    customServer: boolean;
    gip: boolean;
    appGip: boolean;
    scriptLoader: any[];
  };
}

// Next.js API types
export interface NextApiRequest extends Request {
  query: Record<string, string | string[] | undefined>;
  cookies: Record<string, string>;
  body: any;
  env: Record<string, string>;
  preview?: boolean;
  previewData?: any;
}

export interface NextApiResponse<T = any> extends Response {
  status: (code: number) => NextApiResponse<T>;
  json: (data: T) => NextApiResponse<T>;
  send: (data: any) => NextApiResponse<T>;
  redirect: (statusOrUrl: string | number, url?: string) => NextApiResponse<T>;
  setPreviewData: (data: any, options?: { maxAge?: number }) => NextApiResponse<T>;
  clearPreviewData: () => NextApiResponse<T>;
  revalidate: (urlPath: string, opts?: { unstable_onlyGenerated?: boolean }) => Promise<void>;
}

// Next.js middleware types
export interface NextRequest extends Request {
  nextUrl: URL;
  ip?: string;
  ua?: string;
  geo?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: string;
    longitude?: string;
  };
}

export interface NextResponse extends Response {
  cookies: {
    get: (name: string) => { name: string; value: string } | undefined;
    set: (name: string, value: string, options?: any) => void;
    delete: (name: string) => void;
  };
  json: (data: any) => NextResponse;
  redirect: (url: string | URL, status?: number) => NextResponse;
  rewrite: (url: string | URL) => NextResponse;
  next: () => NextResponse;
}

// Next.js page props
export interface GetServerSidePropsContext {
  params?: Record<string, string | string[]>;
  query: Record<string, string | string[]>;
  req: NextApiRequest;
  res: NextApiResponse;
  resolvedUrl: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
  preview?: boolean;
  previewData?: any;
}

export interface GetStaticPropsContext {
  params?: Record<string, string>;
  preview?: boolean;
  previewData?: any;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

export interface GetStaticPathsContext {
  locales?: string[];
  defaultLocale?: string;
}

// Next.js page component props
export interface PageProps {
  [key: string]: any;
}

// Next.js app directory types
export interface LayoutProps {
  children: React.ReactNode;
  params?: Record<string, string>;
}

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

// Next.js error types
export interface NextErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

// Next.js configuration types
export interface NextConfig {
  [key: string]: any;
}

// Global Next.js types
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_ANALYTICS_ID?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_GTM_ID?: string;
      [key: string]: string | undefined;
    }
  }
}

// Export default for compatibility
export default {};