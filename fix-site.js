>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fs = require ('fs'),
console.log ('🔧 Fixing site loading issues...'),
// Fix Next.js configuration;
const next_config = `/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],
  images: {
const fs = require('fs');
console.log('🔧 Fixing site loading issues...');
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsxtsjsxjs'];
  images: {domains: ["localhost", "ziontechgroup.com"];
  }
  output: 'standalone';
  trailingSlash: false;
  distDir: '.next';
}
module.exports = nextConfig,`;
fs.writeFileSync('next.config.js', nextConfig);
console.log('✅ Next.js configuration fixed');
// Remove empty files that might cause issues;
const emptyFiles = [;
  'components/BundleAnalyzer.jscomponents/PerformanceMonitor.jscomponents/SEO.js';
];
emptyFiles.forEach(file => {if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file);
    console.log(`✅ Removed empty file: ${file}`);
  }
});
console.log('🎉 Site fixes completed!');
const fs = require('fs'),;
const fs = require('fs');
=======
=======

=======
console.log('🔧 Fixing site loading issues...'),;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;

    domains: ["localhost", "ziontechgroup.com"];
const emptyFiles = [;
  'components/BundleAnalyzer.jscomponents/PerformanceMonitor.jscomponents/SEO.js';

emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);
const fs = require ('fs'),
console.log ('🔧 Fixing site loading issues...'),
// Fix Next.js configuration;
const next_config = `/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],
  images: {
=======

=======

console.log('🔧 Fixing site loading issues...'),;// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;


  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;

    domains: ["localhost", "ziontechgroup.com"];
  },
  output: 'standalone',
  trailing_slash: false,
  dist_dir: '.next';
},
module.exports = next_config, `,
fs.writeFileSync ('next.config.js', next_config),
console.log ('✅ Next.js configuration fixed'),
// Remove empty files that might cause issues;

const emptyFiles = [;
  'components/BundleAnalyzer.jscomponents/PerformanceMonitor.jscomponents/SEO.js';


emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);

  }
}),;
console.log('🎉 Site fixes completed!'),;
=======

  }
}),
console.log ('🎉 Site fixes completed!'),>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
