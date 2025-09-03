
    domains: ["ziontechgroup.com"],;
    unoptimized: true},;
  compiler: {;
  removeConsole: process.env.NODE_ENV === "production"},;
  webpack: (config, { dev, isServer }) => {;
  // Completely exclude problematic directories from the build;
:next.config.js;
    // Keep default TS/JS handling; we already ignore build errors via config;
    config.module.rules.push({;
  test: /\.(ts|tsx)$/,;
      exclude: [;
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
    config.resolve.fallback = {;
  ...config.resolve.fallback,;
      fs: false,;
      net: false,;
      tls: false}
    return config;
=======;
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d;,;,
},;
  typescript: {;
  ignoreBuildErrors: true,;,;,
},;
  experimental: {;
  optimizeCss: true,;
    scrollRestoration: true,;
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],;,;,
},;
  images: {;
  domains: ["images.unsplash.com", "via.placeholder.com"],;
    formats: ["image/webp", "image/avif"],;,;,
},;
  compress: true,;
  compiler: {;
  removeConsole: process.env.NODE_ENV === "production",;,;,
},;
  webpack: (config, { dev, isServer }) => {;
  if (!dev && !isServer) {;
  config.resolve.alias = {;
  ...config.resolve.alias,;
        "@": new URL("./src", import.meta.url).pathname,;,;,
}
    }
    return config},;
  async headers() {;
  return [;
  {;
  source: "/(.*)",;
        headers: [;
  {;
  key: "X-Frame-Options",;
            value: "DENY",;,;,
},;
          {;
  key: "X-Content-Type-Options",;
            value: "nosniff",;,;,
},;
          {;
  key: "Referrer-Policy",;
            value: "origin-when-cross-origin",;,;,
},;
        ],;,;,
},;
    ];,;,
},;,;,
}
module.exports = nextConfig;
>>>>>>> main;
