export const getSEOData = (page: string) => {
  const seoData = {
    home: {
      title: 'Zion Tech Group - Technology Solutions',
      description: 'Professional technology services and solutions'
    },
    about: {
      title: 'About - Zion Tech Group',
      description: 'Learn about our company and mission'
    }
  };
  
  return seoData[page] || seoData.home;
};