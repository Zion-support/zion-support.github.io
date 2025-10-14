export const seoEnhancer = {
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
  
  generateMetaTags: function(data: ReturnType<typeof this.enhance>) {
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