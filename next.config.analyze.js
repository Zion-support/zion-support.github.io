const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  "webpack": (config, { isServer }) => {
  if (!isServer) {
  config.plugins.push(;
<<<<<<< HEAD
        new BundleAnalyzerPlugin({
  "analyzerMode": "static",
          "openAnalyzer": false,
          "reportFilename": "bundle-analysis.html"});
      )}
=======
        new BundleAnalyzerPlugin({;
  analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: "bundle-analysis.html";,
});
      );,
}
>>>>>>> origin/automation-fixes
    return config}
}
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",; openAnalyzer: 'false',; reportFilename: "bundle-analysis.html";,}); )} return config} }
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }