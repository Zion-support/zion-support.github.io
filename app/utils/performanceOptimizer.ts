export const optimizePerformance = (): void => {
  if (typeof window === 'undefined') return;
  
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => {
    img.setAttribute('src', img.getAttribute('data-src') || '');
  });
};