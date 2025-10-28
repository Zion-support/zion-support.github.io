import React, { memo } from 'react';

interface SEOHeadProps{className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;}
  structuredData?: Record<string, unknown>;}
}
</string>
const SEOHead: React.FC<SEOHeadProps>= memo(({title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, artificial intelligence, machine learning, data analytics',
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,)
  structuredData,)}
}) => {}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
</SEOHeadProps>
  return (<Head />{/* Basic Meta Tags */}</Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} / />
      <meta name="keywords" content={keywords} / />
      <meta name="viewport" content="width=device-width, initial-scale=1" / />
      <meta charSet="utf-8" / />{/* Canonical URL */}</meta>
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}</link>
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} / />{/* Open Graph */}</meta>
      <meta property="og:title" content={fullTitle} / />
      <meta property="og:description" content={description} / />
      <meta property="og:type" content={ogType} / />
      <meta property="og:image" content={ogImage} / />
      <meta property="og:url" content={canonicalUrl} / />
      <meta property="og:site_name" content="Zion Tech Group" / />{/* Twitter Card */}</meta>
      <meta name="twitter:card" content={twitterCard} / />
      <meta name="twitter:title" content={fullTitle} / />
      <meta name="twitter:description" content={description} / />
      <meta name="twitter:image" content={ogImage} / />{/* Additional SEO */}</meta>
      <meta name="author" content="Zion Tech Group" / />
      <meta name="language" content="en" / />
      <meta name="revisit-after" content="7 days" / />{/* Theme and App Meta Tags */}</meta>
      <meta name="theme-color" content="#7c3aed" / />
      <meta name="msapplication-TileColor" content="#7c3aed" / />
      <meta name="apple-mobile-web-app-capable" content="yes" / />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" / />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" / />{/* Favicon */}</meta>
      <link rel="icon" href="/favicon.ico" / />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" / />
      <link rel="manifest" href="/manifest.json" / />{/* Preconnect to external domains */}</link>
      <link rel="preconnect" href="https://fonts.googleapis.com" / />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" / />{/* Structured Data */}</link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            description: description,
            url: canonicalUrl,
            logo: '/images/logo.png',
            sameAs: [
              'https://linkedin.com/company/zion-tech-group',
              'https://twitter.com/ziontechgroup',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-0123',)
              contactType: 'customer service',)} / />},)>
          }),>
        }>
      /></script>
    </Head>
  );
}