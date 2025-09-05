import React from 'react';
// App optimization utilities
export const optimizeImages = (src, width, height) => {
  return `/api/optimize-image?src=${encodeURIComponent(src)}&w=${width}&h=${height}`;
};
export const lazyLoadComponent = (importFunc) => {
  return React.lazy(importFunc);
};
export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};