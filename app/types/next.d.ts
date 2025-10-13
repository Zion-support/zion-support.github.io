<<<<<<< HEAD
// Next.js type definitions
declare module 'next' {
  interface NextApiRequest {
    user?: any;
  }
}

export {};
=======
// Next.js type declarations
declare module 'next' {
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
