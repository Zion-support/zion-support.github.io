// API response optimization
export class ResponseOptimizer {
  constructor() {
    this.compressionThreshold = 1024; // 1KB
  }

  optimizeResponse(data, options = {}) {
    const {
      compress = true,
      minify = true,
      cache = true,
      ttl = 3600
    } = options;

    let response = { ...data };

    // Add caching headers
    if (cache) {
      response.headers = {
        ...response.headers,
        'Cache-Control': `public, max-age=${ttl}`,
        'ETag': this.generateETag(data)
      };
    }

    // Add compression info
    if (compress && JSON.stringify(data).length > this.compressionThreshold) {
      response.headers = {
        ...response.headers,
        'Content-Encoding': 'gzip'
      };
    }

    return response;
  }

  generateETag(data) {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return `"${Math.abs(hash).toString(16)}"`;
  }
}

export const responseOptimizer = new ResponseOptimizer();