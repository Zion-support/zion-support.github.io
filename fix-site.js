<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:fix-site.js
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/fix-site.js
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
const fs = require('fs');
<<<<<<< HEAD
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
=======
=======
<<<<<<< HEAD
const fs = require('fs'),;
=======
const fs = require('fs');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
console.log('🔧 Fixing site loading issues...'),;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;
<<<<<<< HEAD

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
];
=======
<<<<<<< HEAD
],;
=======
];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);
<<<<<<< HEAD

  }
<<<<<<< HEAD
}),;
console.log('🎉 Site fixes completed!'),;

=======
}),
console.log ('🎉 Site fixes completed!'),
<<<<<<<< HEAD:fix-site.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/fix-site.js
=======
  }
}),;
console.log('🎉 Site fixes completed!'),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
