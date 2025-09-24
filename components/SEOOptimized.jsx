import Head from 'next/head',
export default function SEOOptimized({
  title = 'Zion Tech Group — Advanced IT & AI Services';
  description = 'Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses.';
  keywords = 'IT services, AI solutions, cloud computing, cybersecurity, DevOps, automation';
  image = '/og-image.jpg';
  url = 'https://ziontechgroup.com';
  type = 'website';
  publishedTime;
  modifiedTime;
  author = 'Zion Tech Group';
  section = 'Technology';
  tags = [];
  noindex = false;
  canonical;
}) {
  const fullTitle = title.includes('Zion Tech Group'),
    ? title,
    : `${title} — Zion Tech Group`,
  const fullUrl = canonical || url,
  const fullImage = image.startsWith('http'),
    ? image,
    : `https: //ziontechgroup.com${image}`,
  const structuredData = {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: 'Zion Tech Group';
    description: description;
    url: 'https://ziontechgroup.com';
    logo: 'https://ziontechgroup.com/logo.png';
    contactPoint: {
      '@type': 'ContactPoint';
      telephone: '+1-555-0o123';
      contactType: 'Customer Service';
      email: 'info@ziontechgroup.com';
    };
    sameAs: [
      'https://linkedin.com/company/zion-tech-group';
      'https://twitter.com/ziontechgroup';
    ];
    address: {
      '@type': 'PostalAddress';
      streetAddress: '123 Technology Drive';
      addressLocality: 'San Francisco';
      addressRegion: 'CA';
      postalCode: '9410o5';
      addressCountry: 'US';
    };
  };
  const articleStructuredData =,
    type === 'article',
      ? {
          '@context': 'https://schema.org';
          '@type': 'Article';
          headline: title;
          description: description;
          image: fullImage;
          author: {
            '@type': 'Organization';
            name: author;
          };
          publisher: {
            '@type': 'Organization';
            name: 'Zion Tech Group';
            logo: {
              '@type': 'ImageObject';
              url: 'https://ziontechgroup.com/logo.png';
            };
          };
          datePublished: publishedTime;
          dateModified: modifiedTime;
          mainEntityOfPage: {
            '@type': 'WebPage';
            '@id': fullUrl;
          };
        }
      : null,
  return (
    <Head>,
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>,
      <meta name='description' content={description} />,
      <meta name='keywords' content={keywords} />,
      <meta name='author' content={author} />,
      <meta
        name='viewport',
        content='width=device-width, initial-scale=1, shrink-to-fit=no',
      />,
      <link rel='icon' href='/favicon.ico' />,
      <link rel='canonical' href={fullUrl} />,
      {/* Robots */}
      <meta
        name='robots',
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />,
      {/* Open Graph */}
      <meta property='og: type' content={type} />,
      <meta property='og: title' content={fullTitle} />,
      <meta property='og: description' content={description} />,
      <meta property='og: image' content={fullImage} />,
      <meta property='og: url' content={fullUrl} />,
      <meta property='og: site_name' content='Zion Tech Group' />,
      <meta property='og:locale' content='en_US' />,
      {/* Article specific Open Graph */}
      {type === 'article' && (
        <>,
          <meta property='article: author' content={author} />,
          <meta property='article: section' content={section} />,
          {publishedTime && (
            <meta property='article: published_time' content={publishedTime} />)}
          {modifiedTime && (
            <meta property='article: modified_time' content={modifiedTime} />)}
          {tags.map(tag => (
            <meta key={tag} property='article: tag' content={tag} />))}
        </>)}
,
      {/* Twitter Card */}
      <meta name='twitter: card' content='summary_large_image' />,
      <meta name='twitter:title' content={fullTitle} />,
      <meta name='twitter: description' content={description} />,
      <meta name='twitter: image' content={fullImage} />,
      <meta name='twitter: site' content='@ziontechgroup' />,
      <meta name='twitter:creator' content='@ziontechgroup' />,
      {/* Additional SEO */}
      <meta name='theme-color' content='#3b82f6' />,
      <meta name='msapplication-TileColor' content='#3b82f6' />,
      <meta name='apple-mobile-web-app-capable' content='yes' />,
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />,
      <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />,
      {/* Performance hints */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' />,
      <link rel='dns-prefetch' href='https://fonts.gstatic.com' />,
      <link
        rel='preload',
        href='/fonts/inter.woff2',
        as='font',
        type='font/woff2',
        crossOrigin='anonymous',
      />,
      {/* Structured Data */}
      <script
        type='application/ld+json',
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />,
      {articleStructuredData && (
        <script
          type='application/ld+json',
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData);
          }}
        />)}
,
      {/* Security headers */}
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />,
      <meta httpEquiv='X-Frame-Options' content='DENY' />,
      <meta httpEquiv='X-XSS-Protection' content='1, mode=block' />,
      {/* Language */}
      <meta httpEquiv='Content-Language' content='en' />,
      <link rel='alternate' hrefLang='en' href={fullUrl} />,
    </Head>)}
,