export const seoConstants = {
  defaultTitle: 'Zion Tech Group',
  defaultDescription: 'Leading technology solutions provider',
  defaultKeywords: 'technology, solutions, innovation',
  
  getTitle: function(pageTitle?: string) {
    return pageTitle ? `${pageTitle} - ${this.defaultTitle}` : this.defaultTitle;
  },
  
  getDescription: function(pageDescription?: string) {
    return pageDescription || this.defaultDescription;
  },
  
  getKeywords: function(pageKeywords?: string) {
    return pageKeywords || this.defaultKeywords;
  }
};