

<<<<<<< HEAD
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """
=======
<<<<<<< HEAD

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621






<<<<<<< HEAD
main
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621

=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const fs = require('fs');
const path = require(path');
function improvePerformance() {}
  try {}
<<<<<<< HEAD
    // Create next.config.js optimizations
    const nextConfigContent = "/** @type {import('next').NextConfig} */
const nextConfig = {}

  "reactStrictMode": true,
=======
    // Create next.config.js optimizations;
<<<<<<< HEAD

const nextConfig = {}

  reactStrictMode: true,
>>>>>>> merged-prs-20250907-203621
  "swcMinify": true,
  compress: true,
  "poweredByHeader": false,
<<<<<<< HEAD
  "generateEtags": false,
  
  
  // Image optimization;
  "images": {}
    formats: [image/webp,image/avif],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]},"
  // Bundle optimization;"
  "webpack": (config, { dev, isServer }) => {}"

=======
  generateEtags: false,

  // Image optimization;

>>>>>>> merged-prs-20250907-203621
    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]},
  
  
  // Bundle optimization;
<<<<<<< HEAD
  "webpack": (config, { dev, isServer }) => {}
    if ( {})
      config.optimization.splitChunks = {}"

    return confi}g},

  
  
=======
  webpack: (config, { dev, isServer }) => {}

    if ( {})

  
  
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> merged-prs-20250907-203621
  // Headers for performance;
// Headers for performance
  async headers() {}
<<<<<<< HEAD
    return [;]


      
      fs.writeFileSync(path.join(process.cwd(), 'next.config.js'), nextConfigContent);
=======


=======
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
>>>>>>> origin/chore/fix-lint-and-merge

module.exports = nextConfig;";
      
<<<<<<< HEAD
      fs.writeFileSync(path.join(process.cwd(), next.config.js'), nextConfigContent);

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
      fs.writeFileSync(path.join(process.cwd(), 'next.config.js'), nextConfigContent);
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            

      } catch (error) {
      console.error('Performance improvement "failed": ', error.message)}
  }
}
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

      


<<<<<<< HEAD
            

main
=======

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621

      

      

            

<<<<<<< HEAD
=======

      console.log('Performance improvements completed)} catch (error) {}
      console.error(Performance improvement "failed": ', error.message)}

  }
=======
main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> merged-prs-20250907-203621
      console.log('Performance improvements completed')} catch (error) {}
      console.error('Performance improvement "failed": ', error.message)};

  };
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> merged-prs-20250907-203621


<<<<<<< HEAD
improvePerformance();
};

=======
=======
}

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
<<<<<<< HEAD
improvePerformance();
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
improvePerformance();

<<<<<<< HEAD

improvePerformance();

improvePerformance();
      

improvePerformance();
=======
<<<<<<< HEAD

improvePerformance();
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
      

improvePerformance();

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

improvePerformance();
>>>>>>> merged-prs-20250907-203621
      



<<<<<<< HEAD
main

      

=======
<<<<<<< HEAD
main

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> merged-prs-20250907-203621
