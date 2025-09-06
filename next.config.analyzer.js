<<<<<<< HEAD
};
;
,;
;};
;
};
,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  "webpack": (config, { isServer }) => {
    if ( {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static',
          "openAnalyzer": 'false',
          "reportFilename": isServer ? '../analyze/server.html' : './analyze/client.html'})
      )}
    return config) {
     {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static',
          "openAnalyzer": false,
          "reportFilename": isServer ? '../analyze/server.html' : './analyze/client.html'})
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
=======
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
