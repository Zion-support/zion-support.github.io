<<<<<<< HEAD
// Next.js type declarations;
declare module 'next' {';
  interface NextApiRequest {
    user?: any;}
  }
  interface NextConfig {
    // Add any Next.js specific types here;}
  }
}
// Export a utility function;
export const nextUtil = () => {
  // Implementation;
  return true;}
};
export default nextUtil;
'
=======
// Next.js type definitions
declare module 'next' {
  interface NextConfig {
    // Add any custom Next.js configuration types here
  }
}

// Export a default configuration object
const nextConfig = {
  // Configuration options
};

export default nextConfig;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
