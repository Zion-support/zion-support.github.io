import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI-Powered Business Solutions',
  description = 'Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions. Contact us at +1 302 464 0950.',
  keywords = 'AI solutions, micro SaaS, cloud automation, enterprise IT, business transformation, artificial intelligence',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='canonical' href={canonical} />

      {/* Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={canonical} />
      <meta property='og:type' content='website' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* Additional SEO */}
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Zion Tech Group' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
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
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
