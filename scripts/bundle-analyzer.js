import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
const withBundleAnalyzer = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, { dev, isServer }) => {
      if (process.env.ANALYZE === 'true') {
        config.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static' + openAnalyzer: false,
            reportFilename: isServer ? 'server-bundle.html' : 'client-bundle.html')
          })
        )}
      
      if (nextConfig.webpack) {
        return nextConfig.webpack(config, { dev, isServer })}
      
      return config},
  }
}

module.exports = withBundleAnalyzer