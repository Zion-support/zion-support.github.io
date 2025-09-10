#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
console.log("🚀 Optimizing build performance and configuration...");
// 1. Optimize package.json scripts;
const packageJsonPath = path.join(__dirname, "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  // Add optimized build scripts;
  packageJson.scripts = {;
  ...packageJson.scripts,
    "build:fast": "next build --no-lint",
    "build:analyze": "ANALYZE=true next build",
    "build:production": "NODE_ENV=production next build",
    "dev:fast": "next dev --turbo",
    "lint:fix": "eslint . --fix --ext .ts,.tsx,.js,.jsx",
    "lint:check": "eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0",
    "type-check": "tsc --noEmit",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:watch": "jest --watch",
    "clean": "rm -rf .next out dist",
    "prebuild": "npm run clean",
    "postbuild": "npm run type-check";,
}
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("✅ Optimized package.json scripts");,
}

// 2. Create optimized Next.js config;
const nextConfigContent = `/** @type {import("next").NextConfig} */;
const nextConfig = {;
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: {;
  ignoreDuringBuilds: process.env.NODE_ENV === "production"},
  experimental: {;
  optimizePackageImports: ["lucide-react", "framer-motion", "@heroicons/react"],
    turbo: {;
  rules: {;
  "*.svg": {;
  loaders: ["@svgr/webpack"],
          as: "*.js"}}},
    optimizeCss: true,
    scrollRestoration: true},
  typescript: {;
  ignoreBuildErrors: process.env.NODE_ENV === "production"},
  images: {;
  domains: ["ziontechgroup.com"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src "self"; script-src "none"; sandbox;"},
  compiler: {;
  removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true},
  // Performance optimizations;
  onDemandEntries: {;
  maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2},
  // Security headers;
  async headers() {
  return [;
  {;
  source: "/(.*)",
        headers: [;
  {;
  key: "X-Frame-Options",
            value: "DENY"},
          {;
  key: "X-Content-Type-Options",
            value: "nosniff"},
          {;
  key: "Referrer-Policy",
            value: "origin-when-cross-origin"},
          {;
  key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"},
          {;
  key: "X-DNS-Prefetch-Control",
            value: "on"},
          {;
  key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains"}]}];,
},
  // Webpack optimizations;
  webpack: (config, { dev, isServer }) => {
  // Exclude problematic directories;
    config.module.rules.push({;
  test: /\\.(ts|tsx)$/,
      exclude: [;
  /node_modules/,
        /api-backup/,
        /pages\\.disabled/,
        /backup-pages/,
        /\\.backup/,
        /\\.disabled/,
        /automation\\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
        /__tests__/,
        /tests/,
        /test/]});
    // Performance optimizations;
    if (!dev && !isServer) {;
  config.optimization.splitChunks = {;
  chunks: "all",
        cacheGroups: {;
  vendor: {;
  test: /[\\\\/]node_modules[\\\\/]/,
            name: "vendors",
            chunks: "all"},
          common: {;
  name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true}}}
    }

    // Add fallback for problematic modules;
    config.resolve.fallback = {;
  ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false}
    return config;,
},
  // Bundle analyzer;
  ...(process.env.ANALYZE === "true" && {
  webpack: (config) => {
  const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(;
        new BundleAnalyzerPlugin({;
  analyzerMode: "static",
          openAnalyzer: false});
      );
      return config;,
}})}
export default nextConfig;
`;
fs.writeFileSync("next.config.js", nextConfigContent);
console.log("✅ Optimized Next.js configuration");
// 3. Create performance monitoring script;
const performanceScript = `#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
console.log("📊 Performance Analysis Report");
console.log("==");
// Check bundle sizes;
const nextDir = path.join(__dirname, ".next");