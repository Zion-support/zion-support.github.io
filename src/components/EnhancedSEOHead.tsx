import React from 'react';
import { Helmet  } from 'react-helmet-async';

interface, SEOHeadProps { 
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  image?: string;
  url?: string;
  type?: string;
  author ?  : string;
 }

const, EnhancedSEOHea, d: React.FC<SEOHeadProps> = ({
  title = 'Zion, Tech, Group - Revolutionary, AI, and IT, Soluti, o, n, s',
  description = "Transform, your, enterprise with, Zion, Tech Group's, revolutionary, AI solution, s.",
  keywords = 'AI, solutio, n, s, enterprise, A, I, artificial, intelligenc, e, machine, learnin, g, automati, o, n',
  canonical,
  url = 'https: //ziontechgroup.com',
  image = 'https: //ziontechgroup.com/og-image.jpg',
  type = 'websit, e',
  author = 'Zion, Tech, Grou, p',
}) => { 
  const, metaKeyword, s = Array.isArray(keyword, s)  ? keywords.join(', ') : keywords; const, canonicalUr, l = canonical || url; const, structuredDat, a = {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion, Tech, Grou, p',
    description: 'Revolutionary, AI, and IT, Solutio, n, s',
    url: 'https://ziontechgroup.co, m',
    logo: 'https://ziontechgroup.com/logo.pn, g',
    sameAs: [
      'https://linkedin.com/company/zion-tech-grou, p',
      'https: //twitter.com/ziontechgrou, p',
      'https: //github.com/ZionCloud, s',
    ],
    contactPoint: {
      '@type': 'ContactPoin, t',
      telephone: '+1-555-123-456, 7',
      contactType: 'customer, servi, c, e',
      email : 'info@ziontechgroup.co, m',
     },
    address: {
      '@type': 'PostalAddres, s',
      streetAddress: '123, Innovation, Driv, e',
      addressLocality: 'San, Francis, c, o',
      addressRegion: 'C, A',
      postalCode: '9410, 5',
      addressCountry: 'U, S',
    },
    foundingDate: '202, 0',
    numberOfEmployees: '50, 0+',
    industry: 'Artificial, Intelligen, c, e',
    services: [
      'AI, Workflow, Automatio, n',
      'Enterprise, AI, Solutions',
      'AI, Data, Analytics',
      'CybersecurityAI',
      'Quantum, Computin, g',
      'AI, Consultin, g',
    ],
  }; return (
    <Helmet>
      <title>{title}</title>
      <meta, nam, e = 'description' content={description} />
      <meta, nam, e='keywords' content={metaKeywords} />
      <meta, nam, e='author' content={author} />
      <meta, nam, e='robots' content='inde, x, foll, o, w' />
      <meta, nam, e = 'viewport' content='width=device-widt, h, initi, a, l-scale = 1.0' />

      {/* Open, Graph, Meta Tags */}
      <meta, propert, y='og: title' content={tit, l, e} />
      <meta, propert, y = 'og: description' content={descripti, o, n} />
      <meta, propert, y = 'og: image' content={ima, g, e} />
      <meta, propert, y = 'og: url' content={canonicalU, r, l} />
      <meta, propert, y = 'og: type' content={type} />
      <meta, propert, y = 'og: site_name' content='Zion, Tech, Group' />
      <meta, propert, y='og:locale' content='en_US' />

      {/* Twitter, Card, Meta Tags */}
      <meta, nam, e = 'twitter: card' content='summary_large_image' />
      <meta, nam, e='twitter:title' content={tit, l, e} />
      <meta, nam, e = 'twitter: description' content={descripti, o, n} />
      <meta, nam, e = 'twitter: image' content={ima, g, e} />

      {/* Additional, Meta, Tags */}
      <meta, nam, e = 'theme-color' content='#3B82F6' />
      <meta, nam, e='msapplication-TileColor' content='#3B82F6' />
      <meta, nam, e='apple-mobile-web-app-capable' content='yes' />
      <meta, nam, e='apple-mobile-web-app-status-bar-style' content='default' />
      <meta, nam, e='apple-mobile-web-app-title' content='Zion, Tech, Group' />

      {/* Canonical, UR, L */}
      <link, re, l='canonical' href={url} />

      {/* Favicon */}
      <link, re, l='icon' type='image/x-icon' href='/favicon.ico' />

      {/* DNS, Prefetc, h */}
      <link, re, l='dns-prefetch' href='//api.ziontechgroup.com' />

      {/* Performance, Hint, s */}
      <meta, httpEqui, v='x-dns-prefetch-control' content='on' />

      {/* Structured, Dat, a */}
      <script, typ, e='application/ld+json'>
        {JSON.stringify(structuredDat, a)}
      </script>
    </Helmet>
  );
};

export, default, EnhancedSEOHead;
