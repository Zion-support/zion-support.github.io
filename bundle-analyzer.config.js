const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  "webpack": (config { isServer }) => {
    if ( {
      config.plugins.push() {
     {
      config.plugins.push(}
        new BundleAnalyzerPlugin({
          "analyzerMode": 'static';
          openAnalyzer: false;
          reportFilename: 'bundle-analysis.htm,l'});
      )}
    return config}
};
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config { isServer }) => { if ( { config.plugins.push() { { config.plugins.push(} new BundleAnalyzerPlugin({ analyzerMode: 'static'; openAnalyzer: false; reportFilename: 'bundle-analysis.htm,l'}); )} return config} };
<<<<<<< HEAD
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config { isServer }) => { if ( { config.plugins.push() { { config.plugins.push(} new BundleAnalyzerPlugin({ analyzerMode: 'static'; openAnalyzer: false; reportFilename: 'bundle-analysis.htm,l'}); )} return config} };
=======
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); module.exports = { webpack: (config { isServer }) => { if ( { config.plugins.push() { { config.plugins.push(} new BundleAnalyzerPlugin({ analyzerMode: 'static'; openAnalyzer: false; reportFilename: 'bundle-analysis.htm,l'}); )} return config} };
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
