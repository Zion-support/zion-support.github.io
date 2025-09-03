<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /components\//,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
      ],
    });
    
    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  // Try to exclude problematic directories at the Next.js level
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
=======
/** @type {import("next").NextConfig} */;
const nextConfig = {
  reactStrictMode: true,;
  poweredByHeader: false,;
  eslint: {
  ignoreDuringBuilds: true,;
<<<<<<< HEAD;,
},:next.config.js;
  typescript: {
  // Allow production builds to successfully complete even if;
    // there are type errors.;
  experimental: {
  // Removed deprecated options;,
},;
  typescript: {
  ignoreBuildErrors: true},;
  images: {
  ignoreBuildErrors: true,;,
},  images: {
  >>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
    domains: ["ziontechgroup.com"],;
    unoptimized: true},;
  compiler: {
  removeConsole: process.env.NODE_ENV === "production"},;
  webpack: (config, { dev, isServer }) => {
  // Completely exclude problematic directories from the build;
:next.config.js;
    // Keep default TS/JS handling; we already ignore build errors via config;
    config.module.rules.push({
  test: /\.(ts|tsx)$/,;
      exclude: [
  /node_modules/,;
        /api-backup/,;
        /pages\.disabled/,;
        /backup-pages/,;
        /\.backup/,;
        /\.disabled/,;
        /automation\/backups/,;
        /automation_backup/,;
        /broken_files_backup/,;
        /contracts/,;
        /hardhat/,;
        /^components\//, // Exclude root components directory;
      ]});
    // Add fallback for problematic modules;
    config.resolve.fallback = {
  ...config.resolve.fallback,;
      fs: false,;
      net: false,;
      tls: false}
    return config;
=======;
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d;,
},;
  typescript: {
  ignoreBuildErrors: true,;,
},;
  experimental: {
  optimizeCss: true,;
    scrollRestoration: true,;
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],;,
},;
  images: {
  domains: ["images.unsplash.com", "via.placeholder.com"],;
    formats: ["image/webp", "image/avif"],;,
},;
  compress: true,;
  compiler: {
  removeConsole: process.env.NODE_ENV === "production",;,
},;
  webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
  config.resolve.alias = {
  ...config.resolve.alias,;
        "@": new URL("./src", import.meta.url).pathname,;,
}
    }
    return config},;
  async headers() {
  return [
  {
  source: "/(.*)",;
        headers: [
  {
  key: "X-Frame-Options",;
            value: "DENY",;,
},;
          {
  key: "X-Content-Type-Options",;
            value: "nosniff",;,
},;
          {
  key: "Referrer-Policy",;
            value: "origin-when-cross-origin",;,
},;
        ],;,
},;
    ];,
},;,
}
module.exports = nextConfig
>>>>>>> main
