export const imageOptimizer = {
  optimize: (src: string, width?: number, height?: number, quality?: number) => {
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    
    const queryString = params.toString();
    return queryString ? `${src}?${queryString}` : src;
  },
  
  getResponsiveSrc: (src: string, sizes: number[]) => {
    return sizes.map(size => ({
      src: this.optimize(src, size),
      width: size
    }));
  }
};