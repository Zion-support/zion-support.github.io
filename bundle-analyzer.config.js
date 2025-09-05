
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'),
module.exports = {,
  &quot;webpack&quot;: (config { isServer }) => {,
    if ( {,
      config.plugins.push() {,
     {,
      config.plugins.push(};
        new BundleAnalyzerPlugin({,
          &quot;analyzerMode&quot;: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-analysis.htm,l'}),
      )};
    return config};
};
