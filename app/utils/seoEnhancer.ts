interface EnhancedSEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoEnhancer = {
  enhance: (data: { title?: string; description?: string; keywords?: string }): EnhancedSEOData => {
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
  
  generateMetaTags: (data: EnhancedSEOData) => {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      'og:title': data.ogTitle,
      'og:description': data.ogDescription,
      'twitter:title': data.twitterTitle,
      'twitter:description': data.twitterDescription
    };
  }
};