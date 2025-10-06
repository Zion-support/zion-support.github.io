import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Discover cutting-edge technology solutions for modern businesses.',
  keywords = [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'automation',
    'digital transformation',
    'IT consulting',
    'machine learning',
    'data analytics',
  ],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  children,
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: canonicalUrl || window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords.join(', ')} />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Canonical URL */}
        {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content={ogType} />
        <meta property='og:image' content={ogImage} />
        <meta
          property='og:url'
          content={canonicalUrl || window.location.href}
        />
        <meta property='og:site_name' content='Zion Tech Group' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content={twitterCard} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:site' content='@ziontechgroup' />
        <meta name='twitter:creator' content='@ziontechgroup' />

        {/* Additional SEO Meta Tags */}
        <meta name='theme-color' content='#1e40af' />
        <meta name='msapplication-TileColor' content='#1e40af' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />

        {/* Language and Region */}
        <meta httpEquiv='content-language' content='en-US' />
        <meta name='geo.region' content='US' />
        <meta name='geo.placename' content='United States' />

        {/* Performance Hints */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Favicon and Icons */}
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;
