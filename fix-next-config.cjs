const fs = require('fs');

// Create a clean next.config.js
const cleanNextConfig = `const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
`;

// Write the clean next.config.js
fs.writeFileSync('next.config.js', cleanNextConfig);

console.log('Clean next.config.js created!');
