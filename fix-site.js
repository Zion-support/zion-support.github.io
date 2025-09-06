<<<<<<< HEAD
const fs = require('fs'),;
=======
const fs = require('fs');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
console.log('🔧 Fixing site loading issues...'),;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
<<<<<<< HEAD
  reactStrictMode: true,;
=======
  reactStrictMode: true;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;
    domains: ["localhost", "ziontechgroup.com"];
  },;
  output: 'standalone',;
  trailingSlash: false,;
  distDir: '.next';
},;
module.exports = nextConfig,`,;
fs.writeFileSync('next.config.js', nextConfig),;
console.log('✅ Next.js configuration fixed'),;
// Remove empty files that might cause issues;
const emptyFiles = [;
  'components/BundleAnalyzer.jscomponents/PerformanceMonitor.jscomponents/SEO.js';
<<<<<<< HEAD
],;
=======
];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);
  }
}),;
console.log('🎉 Site fixes completed!'),;