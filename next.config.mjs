/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
export default { typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true } };
