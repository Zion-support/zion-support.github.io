<<<<<<< HEAD
=======
// Next.config.analyze utility
export const Next.config.analyze = () => {
  // Implementation here
  return null;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
;
,;
;};
;
<<<<<<< HEAD
};
<<<<<<< HEAD
,
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
;
,;
;};
;
};
,
=======
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
}
;}
}
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  "webpack": (config, { isServer }) => {
  if (!isServer) {
  config.plugins.push(;
        new BundleAnalyzerPlugin({
  "analyzerMode": "static"
          "openAnalyzer": false
          "reportFilename": "bundle-analysis.html"});
      )}
    return config}
}
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",; openAnalyzer: 'false',; reportFilename: "bundle-analysis.html";,}); )} return config} }
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push(; new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html",}); )} return config} }
=======
},;
,;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
