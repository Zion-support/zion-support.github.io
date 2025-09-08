const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"), module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html"}))} return config} };
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"), module.exports = { webpack: (config,{ isServer }) => { if (!isServer) { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: false,reportFilename: "bundle-analysis.html"}))} return config} };
          analyzerMode: 'static'
          openAnalyzer: false
          reportFilename: 'bundle-analysis.html'
        })
      )
    };
    return config
  }
};