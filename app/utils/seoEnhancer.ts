export const seoEnhancer = {
  generateMetaTags: (title: string, description: string, keywords?: string) => {
    return {
      title: `${title} | Zion Tech Group`,
      description,
      keywords: keywords || 'AI, IT solutions, automation, digital transformation',
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:url': typeof window !== 'undefined' ? window.location.href : '',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description
    };
  },
  
  generateStructuredData: (data: Record<string, unknown>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI and IT solutions',
      url: 'https://ziontechgroup.com',
      ...data
    };
  }
};
