export const seoConstants = {
  defaultTitle: 'Zion Tech Group',
  defaultDescription: 'Leading technology solutions provider',
  defaultKeywords: 'technology, solutions, innovation',
  
  getTitle: (pageTitle?: string) => {
    return pageTitle ? `${pageTitle} - ${this.defaultTitle}` : this.defaultTitle;
  },
  
  getDescription: (pageDescription?: string) => {
    return pageDescription || this.defaultDescription;
  },
  
  getKeywords: (pageKeywords?: string) => {
    return pageKeywords || this.defaultKeywords;
  }
};