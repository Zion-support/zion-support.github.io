// Next.js type declarations;
declare module 'next' {';
  interface NextApiRequest {
    user?: any;
  }
  interface NextConfig {}
}
// Export a utility function;
export const nextUtil = () => {};
export default nextUtil;
'