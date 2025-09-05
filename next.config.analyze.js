<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
<<<<<<< HEAD
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.html',
        })
      );
    }
    return config;
  },
<<<<<<< HEAD
};
=======
  "analyzerMode": "static",
          "openAnalyzer": false,
          "reportFilename": "bundle-analysis.html"});
      )}
    return config}
}
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",; openAnalyzer: 'false',; reportFilename: "bundle-analysis.html";,}); )} return config} }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
>>>>>>> main
=======
};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
