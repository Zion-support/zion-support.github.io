// Bundle optimization configuration
export const bundleConfig = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\/]node_modules[\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 250000,
    maxAssetSize: 250000,
  },
};
