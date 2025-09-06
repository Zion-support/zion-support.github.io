<<<<<<< HEAD
=======
// Next.config.analyze utility
export const Next.config.analyze = () => {
  // Implementation here
  return null;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
;
;
<<<<<<< HEAD
};
,
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  "webpack": (config, { isServer }) => {
  if (!isServer) {
  config.plugins.push(;
        new BundleAnalyzerPlugin({
  "analyzerMode": "static",
          "openAnalyzer": false,
          "reportFilename": "bundle-analysis.html"});
      )}
    return config}
}
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",; openAnalyzer: 'false',; reportFilename: "bundle-analysis.html";,}); )} return config} }
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
=======
},;
,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
