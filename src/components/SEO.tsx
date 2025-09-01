import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  viewport?: string;
  charset?: string;
  language?: string;
  themeColor?: string;
  msApplicationTileColor?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossorigin?: boolean;
  }>;
  prefetch?: string[];
  canonical?: string;
}

export function SEO({
  title = 'Zion Tech Group - AI-Powered Enterprise Solutions & Cybersecurity',
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity platforms, and enterprise technology services. Leading the future of digital transformation.",
  keywords = 'AI solutions, cybersecurity, enterprise technology, quantum computing, healthcare AI, supply chain optimization, Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical
}: SEOProps) {
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: author },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' }
  ];

  const linkTags = [
    { rel: 'canonical', href: canonical || url },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' }
  ];

  const scriptTags = [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: 'https://ziontechgroup.com/images/logo.png',
        description: 'Leading provider of innovative AI, IT, and Micro SAAS solutions',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '364 E Main St STE 1008',
          addressLocality: 'Middletown',
          addressRegion: 'DE',
          postalCode: '19709',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-302-464-0950',
          contactType: 'customer service',
          email: 'kleber@ziontechgroup.com'
        },
        sameAs: [
          'https://linkedin.com/company/ziontechgroup',
          'https://twitter.com/ziontechgroup',
          'https://github.com/Zion-Holdings'
        ]
      })
    }
  ];

  return (
    <Helmet>
      <title>{title}</title>
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Link tags */}
      {linkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}

      {/* Script tags for structured data */}
      {scriptTags.map((script, index) => (
        <script key={index} {...script} />
      ))}
    </Helmet>
  );
}
