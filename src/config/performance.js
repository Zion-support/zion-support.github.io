module.exports = {
  "cacheStrategies": {
    "staticAssets": "1 year",
    "apiResponses": "5 minutes",
    "dynamicContent": "1 hour"
  },
  "bundleOptimization": {
    "codeSplitting": true,
    "treeShaking": true,
    "compression": "gzip, brotli",
    "lazyLoading": true
  },
  "imageOptimization": {
    "webp": true,
    "avif": true,
    "lazyLoading": true,
    "responsiveImages": true,
    "qualityOptimization": 85
  },
  "timestamp": "2025-10-03T14:43:21.369Z"
};