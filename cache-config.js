//Advanced caching configuration;
const cacheConfig = {
  //Static generation
  staticGeneration: {
    revalidate: 3600, //1 hour
    tags: ['services', 'pricing', 'content'],
  },

  //API caching
  apiCaching: {
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'public, max-age=86400',
    'Vercel-CDN-Cache-Control': 'public, max-age=31536000',
  },

  // Image optimization
  imageCaching: {
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
};

module.exports = cacheConfig;
