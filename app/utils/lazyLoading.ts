// Lazy loading utilities

export function lazyLoading() {
  return {
    loadImage: (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    },
    loadScript: (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onload = () => resolve();
        script.onerror = reject;
        script.src = src;
        document.head.appendChild(script);
      });
    }
  };
}
