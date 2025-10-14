export const seoOptimizer = {;
  optimize: (data: { title?: string; description?: string keywords?: string }) => {
    const optimized = { ...data }
    
    // Optimize title length
    if (optimized.title && optimized.title.length > 60) {optimized.title = optimized.title.substring(0, 57) + &apos;...&apos}
    
    // Optimize description length
    if (optimized.description && optimized.description.length > 160) {optimized.description = optimized.description.substring(0, 157) + &apos;...&apos}
    
    return optimized
  },
  ;
  validate: (data: { title?: string; description?: string keywords?: string }) => {
    const errors: string[] = [];
    
    if (!data.title) errors.push(&apos;Title is required&apos;)
    if (!data.description) errors.push(&apos;Description is required&apos;)
    if (data.title && data.title.length > 60) errors.push(&apos;Title too long&apos;)
    if (data.description && data.description.length > 160) errors.push(&apos;Description too long&apos;)
    
    return errors
  }
}