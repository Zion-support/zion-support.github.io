  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | "product"'"'";
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | "player"'"'";
  noIndex?: boolean;
  structuredData?: Record<string, any></string>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
const EnhancedMetaTags: React.FC<EnhancedMetaTagsProps> = ({
  title,
  description,
  keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
ogImage="https://ziontechgroup.com/images/og-image.jpg",
  ogType="website"
  twitterCard="summary_large_image"
  noIndex = false,
  structuredData,
  author="Zion Tech Group"
  tags = [],
}) => {},
    sameAs: ['https://twitter.com/ziontechgroup', '''
      'https://linkedin.com/company/ziontechgroup', '''
      'https://github.com/ziontechgroup', '''],
    headline: title,
    description,
    author: {
      '@type': 'Organization',''';
      name: author,
    },
    publisher: {
      logo: {
        '@type': 'ImageObject',''';
        url: `${siteUrl}/images/logo.png`,````
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
'@type': 'WebPage',''',
'@id': finalCanonical,''',
    },
    image: finalOgImage,
    ...(section && {articleSection: section,}),
    ...(tags.length > 0 && {keywords: tags.join(', '),}),'''
  } : null;
  return (
<>    <Helmet></Helmet>
      { /* Basic Meta Tags */ }
      <title>{title}</title>
      <meta name="description" content={description} />"""
      <meta name="keywords" content={keywords} />"""
      <meta name="author" content={author} />"""
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow",} />"""
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow",} />""";
      ;
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />"""
        )})
