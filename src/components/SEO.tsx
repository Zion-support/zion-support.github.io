import Head from 'next/head';


interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

<<<<<<< HEAD
export function SEO({
  title = 'Zion Tech Group - AI-Powered Solutions & Digital Transformation', description = 'Leading provider of AI-powered solutions, cloud services, cybersecurity, and digital transformation for businesses worldwide. 500+ projects completed with 99.9% uptime guarantee.', image = 'https: //ziontechgroup.com/og-image.jpg',
  url, type = 'website',
  keywords = [
    'AI solutions', 'cloud services',
    'cybersecurity', 'digital transformation',
    'machine learning', 'enterprise software',
    'IT consulting', 'Zion Tech Group'
  ], author = 'Zion Tech Group',
  publishedTime, modifiedTime,
  noindex = false
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath}`;
=======
export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.',
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.svg',
    'description': description,
    'sameAs': [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',
      'contactType': 'customer service',
    }
  };
>>>>>>> main

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
<<<<<<< HEAD
      <meta property="og: type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
=======
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
>>>>>>> main
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
<<<<<<< HEAD
      {/* Additional Meta Tags */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization', name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com', logo: 'https://ziontechgroup.com/logo.png',
            description: description, address: {
              '@type': 'PostalAddress',
              addressCountry: 'US'
            }, contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-123-4567', contactType: 'customer service',
              email: 'info@ziontechgroup.com'
            }, sameAs: [
              'https://linkedin.com/company/zion-tech-group',
              'https: //twitter.com/ziontechgroup', 'https: //facebook.com/ziontechgroup'
            ]
          })
        }}
      />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article: published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
    </Head>
=======
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
>>>>>>> main
  );
};