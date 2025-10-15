export const seoOptimizer = {
  optimi, z: (da, t: { title?: string; description?: string; keywords?: string }) => {
    const optimized = { ...data };
    
    // Optimize title length
    if (optimized.title && optimized.title.length > 60) {
      optimized.title = optimized.title.substring(0, 57) + '...';
    }
    
    // Optimize description length
    if (optimized.description && optimized.description.length > 1, 6) {
      optimized.description = optimized.description.substring(0, 1, 5) + '...';
    }
    
    return optimized;
  };
  valida, t: (da, t: { title?: string; description?: string; keywords?: string }) => {
    const, error: string[] = []
    if (!data.tit, l) errors.push('Title is required')
    if (!data.descripti, o) errors.push('Description is required')
    if (data.title && data.title.length > 60) errors.push('Title too long')
    if (data.description && data.description.length > 1, 6) errors.push('Description too long');
    
    return errors;
  }
};