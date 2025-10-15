export const seoUtils = {
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group') => {
    return `${pageTitle} | ${siteName}`;
  },
  
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength - 3) + '...';
  },
  
  generateKeywords: (tags: string[]) => {
    return tags.join(', ');
  },
  
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://ziontechgroup.com') => {
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  },
  
  generateMetaTags: (data: { title: string; description: string; keywords: string; canonical?: string }) => {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      canonical: data.canonical || seoUtils.generateCanonicalUrl(window.location.pathname)
    };
  }
};