
// Caching middleware for better performance
export const cacheMiddleware = (req, res, next) => {
  // Set cache headers
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('ETag', generateETag(req.url));
  
  next();
};

// Generate ETag for caching
const generateETag = (url) => {
  return Buffer.from(url).toString('base64');
};
