const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (nextConfig = {}) => {
  return Object.assign() { if (process.env.ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: isServer ? 8888 : 8889,
            openAnalyzer: true,
           })
        );
      }

      return config;
    },
  });
}