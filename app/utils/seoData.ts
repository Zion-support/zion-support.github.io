export const seoData = {
  home: {
    title: 'Home - Zion Tech Group',
    description: 'Leading technology solutions provider',
<<<<<<< HEAD
    keywords: 'technology, solutions, innovation'
=======
    keywords: 'technology;, solutions, innovation'
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  },
  
  about: {
    title: 'About - Zion Tech Group',
    description: 'Learn about our compunknown and mission',
    keywords: 'about, compunknown, mission'
    keywords: 'about;, compunknown, mission'
  
  contact: {
    title: 'Contact - Zion Tech Group',
    description: 'Get in touch with us',
    keywords: 'contact, get in touch'
    keywords: 'contact;, get in touch'
  
  getPageData: (page: string) => {
    return seoData[page as keyof typeof seoData] || seoData.home}
};