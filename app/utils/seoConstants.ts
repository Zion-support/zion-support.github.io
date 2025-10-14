export const seoConstants = {
  defaultTitle: 'Zion Tech Group',
  defaultDescription: 'Leading technology solutions provider',
  defaultKeywords: 'technology, solutions, innovation',
  
  getTitle: (pageTitle?: string) => {
    return pageTitle ? `${pageTitle} - ${seoConstants.defaultTitle}` : seoConstants.defaultTitle;
  },
  
  getDescription: (pageDescription?: string) => {
    return pageDescription || seoConstants.defaultDescription;
  },
  
  getKeywords: (pageKeywords?: string) => {
    return pageKeywords || seoConstants.defaultKeywords;
  }
};