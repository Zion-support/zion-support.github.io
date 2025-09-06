
 Performance optimization utilities;
export const optimizeImages = () => {;
  const images = document.querySelectorAll('img'
      img.loading = 'lazy'
      img.decoding = 'async'
  const criticalResources = ['/fonts/main.woff2/css/