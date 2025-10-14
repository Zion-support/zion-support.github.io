export const seoData = {
  home: {
    title: 'Home - Zion Tech Group',
    description: 'Leading technology solutions provider',

  },
  
  about: {
    title: 'About - Zion Tech Group',
    description: 'Learn about our compunknown and mission',

  },
  
  contact: {
    title: 'Contact - Zion Tech Group',
    description: 'Get in touch with us',

  },
  
  getPageData: (page: string) => {
    return seoData[page as keyof typeof seoData] || seoData.home}
};