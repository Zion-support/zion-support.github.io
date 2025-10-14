export const seoData = {home: {
    title: &apos;Home - Zion Tech Group&apos;,
    description: &apos;Leading technology solutions provider&apos;,
    keywords: &apos;technology, solutions, innovation&apos},
  
  about: {title: &apos;About - Zion Tech Group&apos;,
    description: &apos;Learn about our compunknown and mission&apos;,
    keywords: &apos;about, compunknown, mission&apos},
  
  contact: {title: &apos;Contact - Zion Tech Group&apos;,
    description: &apos;Get in touch with us&apos;,
    keywords: &apos;contact, get in touch&apos},
  
  getPageData: (page: string) => {;
    return seoData[page as keyof typeof seoData] || seoData.home}
};