/** Clean unified Next.js config */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
  images: { domains: ["images.unsplash.com", "via.placeholder.com", "ziontechgroup.com", "localhost"] },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig
