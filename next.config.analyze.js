<<<<<<< HEAD
};
;
,;
;};
;
};
<<<<<<< HEAD
,
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
=======
,const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
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
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
=======
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
=======
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
};
,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
