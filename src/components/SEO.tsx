import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group — AI Micro SaaS and IT Services',
  description = 'Enterprise-grade AI micro SaaS and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords = 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
  author = 'Zion Tech Group',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
}) => {
  const fullTitle = title.includes('Zion Tech Group')
    ? title
    : `${title} | Zion Tech Group`;
  const canonicalUrl =
    canonical ||
    (typeof window !== 'undefined'
      ? window.location.href
      : 'https://ziontechgroup.com');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />
      <link rel='canonical' href={canonicalUrl} />

      {/* Robots */}
      <meta
        name='robots'
        content={noIndex ? 'noindex,nofollow' : 'index,follow'}
      />
      <meta name='googlebot' content='index,follow' />

      {/* Open Graph */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:site_name' content='Zion Tech Group' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* Additional SEO */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='theme-color' content='#1f2937' />

      {/* Preconnect to external domains */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />

      {/* Structured Data */}
      {structuredData ? (
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      ) : (
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/logo.png',
            description:
              'Enterprise-grade AI micro SaaS and IT solutions provider',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              email: 'kleber@ziontechgroup.com',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US',
            },
            sameAs: [
              'https://twitter.com/ziontechgroup',
              'https://linkedin.com/company/zion-tech-group',
              'https://github.com/ZionClouds',
            ],
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
