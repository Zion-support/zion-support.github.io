export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // Simple image optimization logic
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  
  return `${src}?${params.toString()}`;
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = src;
  });
};