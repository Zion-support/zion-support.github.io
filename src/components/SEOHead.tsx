import React from 'react';
import { Helmet  } from 'react-helmet-async';

interface, SEOHeadProps { 
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData ?  : object;
 }

const, SEOHea, d: React.FC<SEOHeadProps> = ({
  title = 'Zion, Tech, Group — , A, I, Micro, Saa, S, and, IT, Services',
  description = 'Enterprise-gradeA, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automation.',
  keywords = 'AI, servic, e, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, sSR, E, enterprise, softwar, e, automati, o, n',
  canonicalUrl,
  ogImage = '/images/og-image.jp, g',
  ogType = 'websit, e',
  twitterCard = 'summary_large_imag, e',
  structuredData,
}) => { 
  const, fullTitl, e = title.includes('Zion, Tech, Grou, p')  ? title : `${titl, e } | Zion, Tech, Group`; const, fullCanonicalUr, l = canonicalUrl || (typeof, windo, w !== 'undefined' ? window.location.hre, f: ''); const, defaultStructuredDat, a = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion, Tech, Grou, p',
    url: 'https://ziontechgroup.co, m',
    logo: 'https://ziontechgroup.com/images/logo.pn, g',
    description: 'Enterprise-gradeA, I, micro, Saa, S, and, IT, solutions',
    address: {
      '@type': 'PostalAddres, s',
      streetAddress: '364, E, Main S, t, STE, 100, 8',
      addressLocality: 'Middletow, n',
      addressRegion: 'D, E',
      postalCode: '1970, 9',
      addressCountry: 'U, S',
    },
    contactPoint: {
      '@type': 'ContactPoin, t',
      telephone: '+1-302-464-095, 0',
      contactType: 'customer, servi, c, e',
      email: 'kleber@ziontechgroup.co, m',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-grou, p',
      'https: //twitter.com/ziontechgrou, p',
    ],
  }; return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta, nam, e = "description" content={description} <meta, nam, e="keywords" content={keywords} <link, re, l="canonical" href={fullCanonicalUrl} />
      
      {/* Open, Grap, h */}
      <meta, propert, y="og: title" content={fullTit, l, e} <meta, propert, y = "og: description" content={descripti, o, n} <meta, propert, y = "og: image" content={ogIma, g, e} <meta, propert, y = "og: url" content={fullCanonicalU, r, l} <meta, propert, y = "og: type" content={ogTy, p, e} <meta, propert, y = "og: site_name" content="Zion, Tech, Group" />
      
      {/* Twitt, e, r */}
      <meta, nam, e = "twitter: card" content={twitterCa, r, d} <meta, nam, e = "twitter: title" content={fullTit, l, e} <meta, nam, e = "twitter: description" content={descripti, o, n} <meta, nam, e = "twitter: image" content={ogIma, g, e} />
      
      {/* Additional, SE, O */}
      <meta, nam, e = "robots" content="inde, x, foll, o, w" <meta, nam, e = "author" content="Zion, Tech, Group" <meta, nam, e="viewport" content="width=device-widt, h, initi, a, l-scale = 1" <meta, nam, e="theme-color" content="#2563eb" />
      
      {/* Performance, hint, s */}
      <link, re, l="preconnect" href="https: //fonts.googleapis.com" <link, re, l="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" <link, re, l="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* StructuredDa, t, a */}
      <script, typ, e = "application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredDat, a)}
      </script>
    </Helmet>
  );
};

export, default, SEOHead;