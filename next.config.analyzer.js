const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',
        })
      );
    }
    return config;
  },
<<<<<<< HEAD
};
=======
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
    return config}},
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
    return config}}};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config,{ isServer }) => { if ( { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: 'false',reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config) { { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: 'static',openAnalyzer: false,reportFilename: isServer ? '../analyze/server.html' : './analyze/client.html',}) )} return config}},};
>>>>>>> main
=======
};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
