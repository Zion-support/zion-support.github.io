<<<<<<< HEAD

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});

module.exports = withBundleAnalyzer({
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
  "images": {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    "formats": ['image/webp', 'image/avif']},
  "experimental": {
    optimizeCss: true,
    "optimizePackageImports": ['@mui/material', '@mui/icons-material']},
  "webpack": (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        "chunks": 'all',
        "cacheGroups": {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            "name": 'vendors',
            "chunks": 'all'},
          "common": {
            name: 'common',
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
