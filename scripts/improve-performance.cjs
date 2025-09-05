<<<<<<< HEAD
<<<<<<< HEAD

=======
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
=======
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
const fs = require('fs');
const path = require('path');
function improvePerformance() {}
  try {}
    // Create next.config.js optimizations;
    const nextConfigContent = "/** @type {import('next').NextConfig} */
const nextConfig = {}
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
  // Image optimization;
  "images": {}
    formats: ['image/webp', 'image/avif'],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]},
  // Bundle optimization;
  "webpack": (config, { dev, isServer }) => {}
    if ( {})
      config.optimization.splitChunks = {}
        "chunks": 'all',
        "cacheGroups": {}
          vendor: {}
            test: /[\\/]node_modules[\\/]/,
            "name": 'vendors',
            "chunks": 'all'}}}};
    return confi) {}
     {}
      config.optimization.splitChunks = {}
        "chunks": 'all',
        "cacheGroups": {}
          vendor: {}
            test: /[\\/]node_modules[\\/]/,
            "name": 'vendors',
            "chunks": 'all'}}}};
    return confi}g},
  // Headers for performance;
  async headers() {}
    return [;]
      {}
        "source": '/(.*)',
        "headers": []
          {}
            key: 'X-Content-Type-Options',
            "value": 'nosniff'},
          {}
            "key": 'X-Frame-Options',
            "value": 'DENY'},
          {}
            "key": 'X-XSS-Protection',
            "value": ';1; mode=block'},
          {}
            "key": 'Referrer-Policy',
            "value": 'origin-when-cross-origin'}]}]}};
module.exports = nextConfig;";
      fs.writeFileSync(path.join(process.cwd(), 'next.config.js'), nextConfigContent);
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
      } catch (error) {
      console.error('Performance improvement "failed": ', error.message)}
  }
}
<<<<<<< HEAD
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
      console.log('Performance improvements completed')} catch (error) {}
      console.error('Performance improvement "failed": ', error.message)};
  };
};
<<<<<<< HEAD
<<<<<<< HEAD
improvePerformance();
      
=======
improvePerformance();
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
=======
improvePerformance();
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
