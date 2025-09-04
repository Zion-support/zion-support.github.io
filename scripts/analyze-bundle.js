const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (nextConfig = {}) => {
  return Object.assign() { if (process.env.ANALYZE) {
        config.plugins.push(;
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: isServe,r ? 8888 : 888,9,
            openAnalyzer: true });
        )}

      return config}})}