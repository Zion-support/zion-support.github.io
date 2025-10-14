// Next.js type definitions
declare module 'next' {
  interface NextConfig {
    // Add any custom Next.js configuration types here
    [key: string]: unknown;
  }
}

// Export a default configuration object
const nextConfig = {
  // Configuration options
};

export default nextConfig;
