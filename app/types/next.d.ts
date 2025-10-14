
declare module 'next' {
  interface NextConfig {
    // Add any custom Next.js configuration types here
    reactStrictMode?: boolean;
    swcMinify?: boolean;
    images?: {
      domains?: string[];
      formats?: string[];
    };
    experimental?: {
      optimizeCss?: boolean;
    };
    compiler?: {
      removeConsole?: boolean;
    };
  }
}
