export const seoOptimizer = {
  optimize: (data: { title?: string; description?: string; keywords?: string }) => {
    const optimized = { ...data };
    
    // Optimize title length
    if (optimized.title && optimized.title.length > 60) {
      optimized.title = optimized.title.substring(0, 57) + '...';
    }
    
    // Optimize description length
    if (optimized.description && optimized.description.length > 160) {
      optimized.description = optimized.description.substring(0, 157) + '...';
    }
    
    return optimized;
  },
  validate: (data: { title?: string; description?: string; keywords?: string }) => {
    const errors: string[] = []
    if (!data.title) errors.push('Title is required')
    if (!data.description) errors.push('Description is required')
    if (data.title && data.title.length > 60) errors.push('Title too long')
    if (data.description && data.description.length > 160) errors.push('Description too long');
    
    return errors;
  }
};