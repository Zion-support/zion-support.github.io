  title?: string;
  description?: string;
}
<<<<<<< HEAD
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group','''
      'https://twitter.com/ziontechgroup','''
      'https://github.com/ziontechgroup''''
    ]
  }
=======

const defaultSEO = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with cutting-edge AI technology.',
  keywords: [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https://ziontechgroup.com/og-image.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  locale: 'en_US',
  twitterCard: 'summary_large_image' as const,
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = defaultSEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex: _noIndex = false,
  structuredData,
  twitterCard = defaultSEO.twitterCard,
  locale = defaultSEO.locale,
  alternateLocales: _alternateLocales = [],
}) => {
  const seo = {
    title: title ? `${title} | Zion Tech Group` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type,
    twitterCard,
    locale,
  };

  // Generate structured data
  const generateStructuredData = () => {
    if (structuredData) {
      return structuredData;
    }

    const baseStructuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image,
    };

    if (author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: author,
      };
    }

    if (publishDate) {
      baseStructuredData.datePublished = publishDate;
    }

    if (modifiedDate) {
      baseStructuredData.dateModified = modifiedDate;
    }

    return baseStructuredData;
  };

>>>>>>> 81be860c1fc3 (Fix all linting errors and merge conflicts)
  return (
<>    <Helmet></Helmet>
      <title>{title}</title>
  );
};

export default SEO;
