<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
<<<<<<< HEAD
  "analyzerMode": "static",
          "openAnalyzer": false,
          "reportFilename": "bundle-analysis.html"});
      )}
    return config}
}
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",; openAnalyzer: 'false',; reportFilename: "bundle-analysis.html";,}); )} return config} }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.html',
        })
      );
    }
    return config;
  },
};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
