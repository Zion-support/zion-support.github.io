// next.d.ts - TypeScript declarations
declare module 'next' {
  interface NextConfig {
    experimental?: {
      appDir?: boolean;
    };
  }
}