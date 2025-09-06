<<<<<<< HEAD
=======
<<<<<<< HEAD
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
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  "webpack": (config, { isServer }) => {
    if ( {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static'
          "openAnalyzer": 'false'
          "reportFilename": isServer ? '../analyze/server.html' : './analyze/client.html'})
      )}
    return config) {
     {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static'
          "openAnalyzer": false
          "reportFilename": isServer ? '../analyze/server.html' : './analyze/client.html'})
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
};
,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},}
    return config}}
}
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},}
    return config}}}
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},}
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
