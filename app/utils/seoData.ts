export const seoData = {
  home: {
    title: 'Home - Zion Tech Group',
    description: 'Leading technology solutions provider',
    keywords: 'technology, solutions, innovation'
  },
  
  about: {
    title: 'About - Zion Tech Group',
    description: 'Learn about our company and mission',
    keywords: 'about, company, mission'
  },
  
  contact: {
    title: 'Contact - Zion Tech Group',
    description: 'Get in touch with us',
    keywords: 'contact, get in touch'
  },
  
  getPageData: function(page: string) {
    return this[page as keyof typeof this] || this.home;
  }
};