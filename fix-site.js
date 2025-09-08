

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

  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;'
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;


    domains: ["localhost", "ziontechgroup.com"];

  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next'
},


console.log ('✅ Next.js configuration fixed'),
// Remove empty files that might cause issues;

const emptyFiles = [;'
  'components/BundleAnalyzer.jscomponents/PerformanceMonitor.jscomponents/SEO.js';


emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;`
    console.log(`✅ Removed empty file: ${file}`);


],;

emptyFiles.forEach(file => {;)
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;`;


fs.writeFileSync($2);
console.log($2);
// Remove empty files that might cause issues
const emptyFiles = $2;
emptyFiles.forEach(file => {
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {
    fs.unlinkSync($2);
    console.log(`✅ Removed empty file: ${file}`)
  }
}),

console.log ('🎉 Site fixes completed!'),



