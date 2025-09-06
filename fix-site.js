<<<<<<< HEAD

const fs = require ('fs'),
console.log ('🔧 Fixing site loading issues...'),
=======
<<<<<<< HEAD
const fs = require('fs');
<<<<<<< HEAD
console.log('🔧 Fixing site loading issues...');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
// Fix Next.js configuration;
const next_config = `/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],
  images: {
=======
<<<<<<< HEAD

=======

=======
=======
<<<<<<< HEAD
const fs = require('fs'),;
=======
const fs = require('fs');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
console.log('🔧 Fixing site loading issues...'),;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
<<<<<<< HEAD


=======
<<<<<<< HEAD
  reactStrictMode: true;
=======
<<<<<<< HEAD
  reactStrictMode: true,;
=======
  reactStrictMode: true;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
];
=======
<<<<<<< HEAD
],;
=======
];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);

  }
}),
console.log ('🎉 Site fixes completed!'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
