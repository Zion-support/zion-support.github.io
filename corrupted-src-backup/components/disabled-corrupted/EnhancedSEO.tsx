import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
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
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions, offering cutting-edge technology services, enterprise software development, and digital transformation solutions.',
  keywords = 'AI solutions, IT services, enterprise software, digital transformation, machine learning, artificial intelligence, technology consulting',
  image = '/images/zion-tech-group-og-image.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;
  const currentTime = new Date().toISOString();

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: window.location.origin,
    logo: `${window.location.origin}/images/logo.png`,
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/zion-tech-group',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
  };

  // Add article structured data if type is article
  if (type === 'article') {
    const articleData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: image,
      author: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: `${window.location.origin}/images/logo.png`,
        },
      },
      datePublished: publishedTime || currentTime,
      dateModified: modifiedTime || currentTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl,
      },
    };

    if (section) {
      (articleData as any).articleSection = section;
    }

    if (tags.length > 0) {
      (articleData as any).keywords = tags.join(', ');
    }

    (structuredData as any)['@graph'] = [structuredData, articleData];
  }

  // Track page view
  useEffect(() => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: currentUrl,
      });
    }

    // Custom analytics tracking
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Page Viewed', {
        title,
        url: currentUrl,
        type,
      });
    }
  }, [title, currentUrl, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />

      {/* Robots */}
      <meta
        name='robots'
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`}
      />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={
          image.startsWith('http') ? image : `${window.location.origin}${image}`
        }
      />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:site_name' content='Zion Tech Group' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content={
          image.startsWith('http') ? image : `${window.location.origin}${image}`
        }
      />
      <meta name='twitter:site' content='@ziontechgroup' />
      <meta name='twitter:creator' content='@ziontechgroup' />

      {/* Additional Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />
      <meta name='distribution' content='global' />
      <meta name='rating' content='general' />

      {/* Theme Color */}
      <meta name='theme-color' content='#1f2937' />
      <meta name='msapplication-TileColor' content='#1f2937' />

      {/* Favicon */}
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
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
      <link rel='manifest' href='/site.webmanifest' />

      {/* Preconnect to external domains */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='preconnect' href='https://www.google-analytics.com' />

      {/* DNS Prefetch */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//www.google-analytics.com' />

      {/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional structured data for breadcrumbs */}
      {location.pathname !== '/' && (
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: window.location.origin,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: title,
                item: currentUrl,
              },
            ],
          })}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
