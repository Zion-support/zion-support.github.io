import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
  metaTags: Array<{ name: string; content: string }>;
}

interface SEOOptimizerProps {
  pageData?: Partial<SEOData>;
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ pageData, children }) => {
  const [seoMetrics, setSeoMetrics] = useState({
    titleLength: 0,
    descriptionLength: 0,
    hasCanonical: false,
    hasStructuredData: false,
    hasOgTags: false,
    score: 0,
  });

  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - AI-Powered Business Solutions',
    description:
      'Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions. Contact us at +1 302 464 0950.',
    keywords: [
      'AI solutions',
      'micro SaaS',
      'cloud automation',
      'enterprise IT',
      'business transformation',
      'artificial intelligence',
    ],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    structuredData: {
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
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
      ],
    },
    metaTags: [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3b82f6' },
      { name: 'msapplication-TileColor', content: '#3b82f6' },
    ],
  };

  const seoData = useMemo(() => ({ ...defaultSEO, ...pageData }), [defaultSEO, pageData]);

  // Calculate SEO score
  useEffect(() => {
    let score = 0;
    const maxScore = 100;

    // Title optimization (20 points)
    if (seoData.title.length >= 30 && seoData.title.length <= 60) {
      score += 20;
    } else if (seoData.title.length > 0) {
      score += 10;
    }

    // Description optimization (20 points)
    if (
      seoData.description.length >= 120 &&
      seoData.description.length <= 160
    ) {
      score += 20;
    } else if (seoData.description.length > 0) {
      score += 10;
    }

    // Keywords (10 points)
    if (seoData.keywords.length >= 3) {
      score += 10;
    }

    // Canonical URL (10 points)
    if (seoData.canonical) {
      score += 10;
    }

    // Open Graph tags (10 points)
    if (seoData.ogImage) {
      score += 10;
    }

    // Structured data (15 points)
    if (seoData.structuredData) {
      score += 15;
    }

    // Meta tags (15 points)
    if (seoData.metaTags.length >= 3) {
      score += 15;
    }

    setSeoMetrics({
      titleLength: seoData.title.length,
      descriptionLength: seoData.description.length,
      hasCanonical: !!seoData.canonical,
      hasStructuredData: !!seoData.structuredData,
      hasOgTags: !!seoData.ogImage,
      score: Math.round((score / maxScore) * 100),
    });
  }, [seoData]);



  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name='description' content={seoData.description} />
        <meta name='keywords' content={seoData.keywords.join(', ')} />
        <link rel='canonical' href={seoData.canonical} />

        {/* Open Graph */}
        <meta property='og:title' content={seoData.title} />
        <meta property='og:description' content={seoData.description} />
        <meta property='og:image' content={seoData.ogImage} />
        <meta property='og:url' content={seoData.canonical} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Zion Tech Group' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={seoData.title} />
        <meta name='twitter:description' content={seoData.description} />
        <meta name='twitter:image' content={seoData.ogImage} />
        <meta name='twitter:site' content='@ziontechgroup' />

        {/* Additional Meta Tags */}
        {seoData.metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}

        {/* Structured Data */}
        {seoData.structuredData && (
          <script type='application/ld+json'>
            {JSON.stringify(seoData.structuredData)}
          </script>
        )}

        {/* Preconnect to external domains */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* DNS Prefetch */}
        <link rel='dns-prefetch' href='//www.google-analytics.com' />
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />

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
      </Helmet>

      {/* SEO Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className='fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-h-96 overflow-y-auto'>
          <div className='p-4 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>
              SEO Analysis
            </h3>
            <div className='flex items-center mt-2'>
              <div
                className={`w-3 h-3 rounded-full mr-2 ${
                  seoMetrics.score >= 80
                    ? 'bg-green-500'
                    : seoMetrics.score >= 60
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                }`}
              ></div>
              <span className='text-sm text-gray-600'>
                Score: {seoMetrics.score}/100
              </span>
            </div>
          </div>

          <div className='p-4 space-y-3'>
            <div className='text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Title Length:</span>
                <span
                  className={`font-semibold ${
                    seoMetrics.titleLength >= 30 && seoMetrics.titleLength <= 60
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {seoMetrics.titleLength} chars
                </span>
              </div>
              <div className='text-xs text-gray-500'>
                Optimal: 30-60 characters
              </div>
            </div>

            <div className='text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Description Length:</span>
                <span
                  className={`font-semibold ${
                    seoMetrics.descriptionLength >= 120 &&
                    seoMetrics.descriptionLength <= 160
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {seoMetrics.descriptionLength} chars
                </span>
              </div>
              <div className='text-xs text-gray-500'>
                Optimal: 120-160 characters
              </div>
            </div>

            <div className='text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Canonical URL:</span>
                <span
                  className={`font-semibold ${seoMetrics.hasCanonical ? 'text-green-600' : 'text-red-600'}`}
                >
                  {seoMetrics.hasCanonical ? '✓' : '✗'}
                </span>
              </div>
            </div>

            <div className='text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Structured Data:</span>
                <span
                  className={`font-semibold ${seoMetrics.hasStructuredData ? 'text-green-600' : 'text-red-600'}`}
                >
                  {seoMetrics.hasStructuredData ? '✓' : '✗'}
                </span>
              </div>
            </div>

            <div className='text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Open Graph:</span>
                <span
                  className={`font-semibold ${seoMetrics.hasOgTags ? 'text-green-600' : 'text-red-600'}`}
                >
                  {seoMetrics.hasOgTags ? '✓' : '✗'}
                </span>
              </div>
            </div>

            <div className='pt-2 border-t border-gray-200'>
              <div className='text-xs text-gray-500'>
                Keywords: {seoData.keywords.length} tags
              </div>
              <div className='text-xs text-gray-500'>
                Meta tags: {seoData.metaTags.length} tags
              </div>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
};

export default SEOOptimizer;
