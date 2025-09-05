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
    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
