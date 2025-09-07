

<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """






main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const fs = require('fs');
const path = require('path');
function improvePerformance() {}
  try {}
    // Create next.config.js optimizations;
    const nextConfigContent = "/** @type {import('next').NextConfig} */
const nextConfig = {}

  "images": {}
    formats: [image/webp,image/avif],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]},"
  // Bundle optimization;"
  "webpack": (config, { dev, isServer }) => {}"

    if ( {})
      config.optimization.splitChunks = {}"

    return confi}g},

  // Headers for performance;
  async headers() {}
    return [;]
<<<<<<< HEAD
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
            

      } catch (error) {
      console.error('Performance improvement "failed": ', error.message)}
  }
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      


<<<<<<< HEAD
            

main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      console.log('Performance improvements completed')} catch (error) {}
      console.error('Performance improvement "failed": ', error.message)};

  };

<<<<<<< HEAD

<<<<<<< HEAD
improvePerformance();
=======
improvePerformance();
      improvePerformance();
      

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

improvePerformance();
      



<<<<<<< HEAD
main

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
