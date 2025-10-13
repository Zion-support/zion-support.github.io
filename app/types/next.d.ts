// Next.js type definitions
declare module 'next' {
  interface NextApiRequest {
    user?: any;
  }
  interface NextConfig {
    // Add any Next.js specific types here
  }
}

// Export a utility function
export const nextUtil = () => {
  // Implementation
  return true;
};

export default nextUtil;
