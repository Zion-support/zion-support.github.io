// Advanced SEO utilities
export const seoUtils = {
  generateStructuredData: data => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name || 'Zion Tech Group',
      description: data.description,
      url: data.url,
      logo: data.logo,
      sameAs: data.socialLinks || [],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.phone,
        contactType: 'customer service',
      },
    };
  },

  generateMetaTags: data => {
    return {
      title: data.title + ' | Zion Tech Group',
      description: data.description,
      keywords: data.keywords?.join(', '),
      canonical: data.canonical,
      og: {
        title: data.title,
        description: data.description,
        image: data.image,
        url: data.canonical,
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.description,
        image: data.image,
      },
    };
  },

  generateSitemap: routes => {
    const sitemap = routes.map(route => ({
      url: route.url,
      lastModified: new Date().toISOString(),
      changeFrequency: route.changeFrequency || 'monthly',
      priority: route.priority || 0.8,
    }));

    return sitemap;
  },
};
