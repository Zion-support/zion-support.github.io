'use client';

export const imageOptimizer = (src: string, width?: number, height?: number) => {
  // Image optimization utility
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  
  return `${src}?${params.toString()}`;
};

export default imageOptimizer;
