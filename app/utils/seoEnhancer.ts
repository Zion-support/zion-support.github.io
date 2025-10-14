export const seoEnhancer: {
  enhance: (data: { title?: string; description?: string; keywords?: string }) => any;
  generateMetaTags: (data: any) => any;
  generateStructuredData: (data: any) => string;
} = {
  enhance: (data: { title?: string; description?: string; keywords?: string }) => {
    return {
      title: data.title || 'Zion Tech Group',
      description: data.description || 'Leading technology solutions provider',
      keywords: data.keywords || 'technology, solutions, innovation',
      ogTitle: data.title || 'Zion Tech Group',
      ogDescription: data.description || 'Leading technology solutions provider',
      twitterTitle: data.title || 'Zion Tech Group',
      twitterDescription: data.description || 'Leading technology solutions provider'
    };
  },
  
  generateMetaTags: (data: ReturnType<typeof seoEnhancer.enhance>) => {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      'og:title': data.ogTitle,
      'og:description': data.ogDescription,
      'twitter:title': data.twitterTitle,
      'twitter:description': data.twitterDescription
    };
  },
  
  generateStructuredData: (data: any) => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": data.title || "Zion Tech Group",
      "description": data.description || "Leading technology solutions provider"
    });
  }
};