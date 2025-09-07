

<<<<<<< HEAD

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs")"const path = require("path")function improvePerformance() { try { / Create next.config.js optimizations" const nextConfigContent = "const nextConfig = {" reactStrictMode: true," swcMinify: true," compress: true," poweredByHeader: false," generateEtags: false, / Image optimization" images: {" formats: ["image/webp", "image/avif"]," deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]," imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]}, / Bundle optimization" webpack: (config, { dev, isServer }) => { if ( { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi) { { config.optimization.splitChunks = {"" chunks: "all"," cacheGroups: { vendor: { test: /[\/]node_modules[\/]/,"" name: "vendors","" chunks: "all"}}}} return confi}g}, / Headers for performance async headers() { return [; {"" source: "/(.*)"," headers: [ {" key: "X-Content-Type-Options","" value: "nosniff"}, {"" key: "X-Frame-Options","" value: "DENY"}, {"" key: "X-XSS-Protection","" value: ";1; mode=block"}, {"" key: "Referrer-Policy","" value: "origin-when-cross-origin"}]}]}};"module.exports = nextConfig;"; " fs.writeFileSync(path.join(process.cwd(), "next.config.js"), nextConfigContent); " console.log("Performance improvements completed")} catch (error) {"" console.error("Performance improvement failed: ", error.message)} }}improvePerformance(); """
>>>>>>> origin/chore/fix-lint-and-merge






<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const fs = require('fs');
const path = require(path');
function improvePerformance() {}
  try {}
    // Create next.config.js optimizations;
<<<<<<< HEAD

const nextConfig = {}

  reactStrictMode: true,
  "swcMinify": true,
  compress: true,
  "poweredByHeader": false,
  generateEtags: false,

  // Image optimization;

    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]},

  // Bundle optimization;
  webpack: (config, { dev, isServer }) => {}

    if ( {})

  
  
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  // Headers for performance;
  async headers() {}


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
            

      } catch (error) {
      console.error('Performance improvement "failed": ', error.message)}
  }
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge

      



<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      

      

            
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5


      console.log('Performance improvements completed)} catch (error) {}
      console.error(Performance improvement "failed": ', error.message)}

  }
=======
main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      console.log('Performance improvements completed')} catch (error) {}
      console.error('Performance improvement "failed": ', error.message)};

  };
>>>>>>> origin/chore/fix-lint-and-merge


<<<<<<< HEAD

=======
}

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
<<<<<<< HEAD
improvePerformance();
=======
>>>>>>> origin/chore/fix-lint-and-merge
improvePerformance();
      improvePerformance();
      

<<<<<<< HEAD

improvePerformance();
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
      

improvePerformance();

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

improvePerformance();
      



<<<<<<< HEAD
main

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
