<<<<<<< HEAD
=======
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
<<<<<<< HEAD
=======
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
