
// SEO meta tags utilities
export const seoUtils = {
  // Generate page meta tags
  generateMetaTags: (pageData) => ({
    title: pageData.title || 'Zion Tech Group - Advanced AI and IT Solutions',
    description: pageData.description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    keywords: pageData.keywords || ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation'],
    canonical: pageData.canonical || 'https://ziontechgroup.com',
    ogTitle: pageData.ogTitle || pageData.title,
    ogDescription: pageData.ogDescription || pageData.description,
    ogImage: pageData.ogImage || 'https://ziontechgroup.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterSite: '@ziontechgroup',
    twitterCreator: '@ziontechgroup'
  }),
  
  // Generate structured data
  generateStructuredData: (type, data) => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      name: data.name,
      url: data.url,
      description: data.description,
      logo: data.logo || 'https://ziontechgroup.com/logo.png',
      sameAs: data.sameAs || [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    
    return baseStructuredData;
  },
  
  // Generate breadcrumb structured data
  generateBreadcrumbData: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),
  
  // Generate FAQ structured data
  generateFAQData: (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
};
