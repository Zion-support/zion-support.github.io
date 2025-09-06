};

,;
;};

};
,
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module && module.exports = {
  "webpack": (config, { isServer }) => {
    if ( {
      config && config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static',
          "openAnalyzer": 'false',
          "reportFilename": isServer ? '../analyze/server && server.html' : './analyze/client && client.html'})
      )}
    return config) {
     {
      config && config.plugins.push(
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static',
          "openAnalyzer": false,
          "reportFilename": isServer ? '../analyze/server && server.html' : './analyze/client && client.html'})
      )}
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module && module.exports = { webpack: (config,{ isServer }) => { if ( { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config) { { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config}},};
    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module && module.exports = { webpack: (config,{ isServer }) => { if ( { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config) { { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module && module.exports = { webpack: (config,{ isServer }) => { if ( { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config) { { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server && server.html' : './analyze/client && client.html',}) )} return config}},};
