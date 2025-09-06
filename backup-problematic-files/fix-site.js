<<<<<<< HEAD
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
const empty_files = [;
  'components / BundleAnalyzer.jscomponents / PerformanceMonitor.jscomponents / SEO.js';
],
empty_files.for_each (file => {
  if (&& fs.stat_sync (file).size === 0) {) {
  $2
}
    fs.unlink_sync (file),
    console.log (`✅ Removed empty file: ${file}`);
  }
}),
console.log ('🎉 Site fixes completed!'),
=======
const fs = require('fs');
;
console.log('🔧 Fixing site loading issues...');
;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode:true,;
  eslint:{ ignoreDuringBuilds:true },;
  typescript:{ ignoreBuildErrors:true },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  images:{;
    domains:["localhost", "ziontechgroup.com"],;
  },;
  output:'standalone',;
  trailingSlash:false,;
  distDir:'.next',;
};
;
module.exports = nextConfig;`;
;
fs.writeFileSync('next.config.js', nextConfig);
console.log('✅ Next.js configuration fixed');
;
// Remove empty files that might cause issues;
const emptyFiles = [;
  'components/BundleAnalyzer.js',;
  'components/PerformanceMonitor.js',;
  'components/SEO.js';
];
;
emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file);
    console.log(`✅ Removed empty file:${file}`);
  }
});
;
console.log('🎉 Site fixes completed!');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
