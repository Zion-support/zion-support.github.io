export class ContentOptimizer {
  static analyzeContent(content, page) {
    const suggestions = [];
    
    // Check for basic SEO elements
    if (!content.title || content.title.length < 30) {
      suggestions.push('Add a more descriptive title (30+ characters)');
    }
    
    if (!content.description || content.description.length < 120) {
      suggestions.push('Add a meta description (120-160 characters)');
    }
    
    if (!content.headings || content.headings.length === 0) {
      suggestions.push('Add proper heading structure (H1, H2, H3)');
    }
    
    // Check for content quality
    if (content.wordCount < 300) {
      suggestions.push('Increase content length (aim for 300+ words)');
    }
    
    if (!content.images || content.images.length === 0) {
      suggestions.push('Add relevant images to improve engagement');
    }
    
    return suggestions;
  }
  
  static optimizeContent(content, page) {
    const suggestions = this.analyzeContent(content, page);
    const optimizationComments = suggestions
      .map(suggestion => `<!-- TODO: ${suggestion} -->`)
      .join('\n');
    
    return `${optimizationComments}\n\n${content}`;
  }
}