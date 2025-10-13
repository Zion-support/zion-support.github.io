// Next.js type declarations
declare module 'next' {
  interface NextApiRequest {
    user?: unknown;
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
