// Next.js type declarations
declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string;
      email: string;
      name?: string;
    };
  }
  interface NextConfig {
    // Add any Next.js specific types here
    experimental?: {
      appDir?: boolean;
    };
  }
}
// Export a utility function
export const nextUtil = () => {
  // Implementation
  return true;
};
export default nextUtil;
