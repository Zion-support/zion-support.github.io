<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

=======


const fs = require('fs');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
console.log('🔧 Fixing site loading issues...'),;
// Fix Next.js configuration;
const nextConfig = `/** @type {import('next').NextConfig} */;
const nextConfig = {;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
  reactStrictMode: true;
  reactStrictMode: true,;
  reactStrictMode: true;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  reactStrictMode: true,;
  reactStrictMode: true;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  images: {;
<<<<<<< HEAD

    domains: ["localhost", "ziontechgroup.com"];
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
];
],;
];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
],;
];


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
emptyFiles.forEach(file => {;
  if (fs.existsSync(file) && fs.statSync(file).size === 0) {;
    fs.unlinkSync(file),;
    console.log(`✅ Removed empty file: ${file}`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  }
}),
console.log ('🎉 Site fixes completed!'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
}),
console.log ('🎉 Site fixes completed!'),
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
  }
}),;
console.log('🎉 Site fixes completed!'),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
