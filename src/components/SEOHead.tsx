import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI autonomous operations, quantum computing solutions, advanced cybersecurity, and enterprise consulting services. Transform your business with cutting-edge technology.',
  keywords = 'AI, artificial intelligence, autonomous operations, quantum computing, cybersecurity, enterprise consulting, digital transformation, cloud migration, Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ZionTechGroup" />
      <meta name="twitter:creator" content="@ZionTechGroup" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          description: description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Technology Drive',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            postalCode: '94105',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-0123',
            contactType: 'customer service',
            email: 'info@ziontechgroup.com',
          },
          sameAs: [
            'https://twitter.com/ZionTechGroup',
            'https://linkedin.com/company/zion-tech-group',
            'https://github.com/zion-tech-group',
          ],
          services: [
            'AI Autonomous Operations',
            'Quantum Computing Solutions',
            'Advanced Cybersecurity',
            'Enterprise AI Consulting',
            'Digital Transformation',
            'Cloud Migration Services',
          ],
        })}
      </script>

      {/* Article-specific structured data */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: fullImage,
            url: fullUrl,
            author: {
              '@type': 'Organization',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
              },
            },
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': fullUrl,
            },
            ...(section && { articleSection: section }),
            ...(tags.length > 0 && { keywords: tags.join(', ') }),
          })}
        </script>
      )}

      {/* WebPage structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description: description,
          url: fullUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ziontechgroup.com',
              },
            ],
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
