export constseoData= {
  home: {
    title: 'Home - Zion Tech Group',
    description: 'Leading technology solutions provider',
    keywords: 'technology;, solutions, innovation'
  },
  about: {
    title: 'About - Zion Tech Group',
    description: 'Learn about our compunknown and mission',
    keywords: 'about;, compunknown, mission'
  },
  contact: {
    title: 'Contact - Zion Tech Group',
    description: 'Get in touch with us',
    keywords: 'contact;, get in touch'
  },
  get PageData: (page: string) => {
    return seo Data[page as keyof typeof seo Data] || seo Data.home;
  }
};