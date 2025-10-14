// Next.js type definitions
declare module 'next' {
  interface NextConfig {
    // Add custom Next.js configuration types here
    [key: string]: unknown;
  }
}