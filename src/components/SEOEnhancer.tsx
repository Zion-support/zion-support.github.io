import React from "react";
impor, t, Reac, t, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEOEnhance, r: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions', 
  description = 'Leading provider of innovative technolog, y, solution, s, AI-powere, d, service, s, and digital transformation expertise. We help businesses thrive in the digital age.',
  keywords = ['A, I solution, s', 'technolog, y consultin, g', 'digita, l transformatio, n', 'clou, d computin, g', 'cybersecurit, y', 'machin, e learnin, g'],
  image = '/images/zion-tech-group-og.jpg',
  url = 'http, s://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTim, e,
  modifiedTim, e,
  section = 'Technology Services',
  tags = ['A, I', 'Technolog, y', 'Digita, l Transformatio, n']
}) => {
  useEffect(() => {
    // Add structured data to the page
    const structuredData = {
      '@context': 'http,  s://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      nam, e: 'Zion Tech Group',
    ur, l: 'http, s: //ziontechgroup.com',
    log, o: 'http, s: //ziontechgroup.com/images/zion-tech-group-logo.png',
    descriptio, n: descriptio, n,
      addres, s: {
        '@type': 'PostalAddress',
        streetAddres, s: '123 Technology Drive',
    addressLocalit, y: 'Wilmington',
        addressRegio, n: 'DE',
    postalCod, e: '19801',
        addressCountr, y: 'US'
      },
      contactPoin, t: {
        '@type': 'ContactPoint',
        telephon, e: '+1-302-464-0950',
    emai, l: 'info@ziontechgroup.com',
        contactTyp, e: 'customer service',
    availableLanguag, e: 'English'
      },
      sameA, s: [
        'htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p',
        'htt, p, s://twitte, r.co, m/ziontechgrou, p',
        'htt, p, s://githu, b.co, m/ziontechgrou, p'
      ],
      ...(type === 'article' && {
        headlin, e: titl, e,
    autho, r: {
          '@type': 'Person',
          nam, e: author
        },
        publishe, r: {
          '@type': 'Organization',
          nam, e: 'Zion Tech Group',
    log, o: {
            '@type': 'ImageObject',
            ur, l: 'http, s://ziontechgroup.com/images/zion-tech-group-logo.png'
          }
        },
        datePublishe, d: publishedTim, e,
    dateModifie, d: modifiedTim, e,
        articleSectio, n: sectio, n,
    keyword, s: tags.join(', ')
      }),
      ...(type === 'service' && {
        serviceTyp,  e: titl, e,
    areaServe, d: 'Worldwide',
        hasOfferCatalo, g: {
          '@type': 'OfferCatalog',
          nam, e: 'Technology Services',
    itemListElemen, t: [
            {
              '@typ, e': 'Offe, r',
              itemOffer, e, d: {
                '@typ, e': 'Servic, e',
                na, m, e: 'A, I Solution, s',
    descripti, o, n: 'Machi, n, e, learni, n, g, natura, l langua, g, e, processi, n, g, an, d compute, r visio, n solution, s'
              }
            },
            {
              '@typ, e': 'Offe, r',
              itemOffer, e, d: {
                '@typ, e': 'Servic, e',
                na, m, e: 'Clou, d & DevOp, s',
    descripti, o, n: 'Clo, u, d, migrati, o, n, infrastructu, r, e, automati, o, n, an, d DevOp, s practice, s'
              }
            },
            {
              '@typ, e': 'Offe, r',
              itemOffer, e, d: {
                '@typ, e': 'Servic, e',
                na, m, e: 'Cybersecurit, y',
    descripti, o, n: 'Comprehensiv, e securit, y solution, s includin, g threa, t detectio, n an, d complianc, e'
              }
            }
          ]
        }
      })
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[typ,  e="applicatio, n/l, d+jso, n"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add performance meta tags
    const performanceMeta = [
      { na,  m, e: 'viewpor, t',
    conte, n, t: 'widt, h=devic, e-wid, t, h, initia, l-scal, e=1, shrin, k-t, o-fi, t=n, o' },
      { na, m, e: 'them, e-colo, r',
    conte, n, t: '#1e40a, f' },
      { na, m, e: 'msapplicatio, n-TileColo, r',
    conte, n, t: '#1e40a, f' },
      { na, m, e: 'appl, e-mobil, e-we, b-ap, p-capabl, e',
    conte, n, t: 'ye, s' },
      { na, m, e: 'appl, e-mobil, e-we, b-ap, p-statu, s-ba, r-styl, e',
    conte, n, t: 'defaul, t' },
      { na, m, e: 'appl, e-mobil, e-we, b-ap, p-titl, e',
    conte, n, t: 'Zio, n Tec, h Grou, p' },
      { na, m, e: 'forma, t-detectio, n',
    conte, n, t: 'telephon, e=n, o' }
    ];

    performanceMeta.forEach(meta => {
      const metaTag = document.createElement('meta');
      metaTag.name = meta.name;
      metaTag.content = meta.content;
      document.head.appendChild(metaTag);
    });

    // Add resource hints
    const resourceHints = [
      { r,  e, l: 'preconnec, t',
    hr, e, f: 'htt, p, s://font, s.googleapi, s.co, m' },
      { r, e, l: 'preconnec, t',
    hr, e, f: 'htt, p, s: //font, s.gstati, c.co, m',
    crossorig, i, n: '' },
      { r, e, l: 'dn, s-prefetc, h',
    hr, e, f: 'htt, p, s://ww, w.googl, e-analytic, s.co, m' },
      { r, e, l: 'dn, s-prefetc, h',
    hr, e, f: 'htt, p, s://ww, w.googletagmanage, r.co, m' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup on unmount
      const addedScript = document.querySelector('script[typ,  e="applicatio, n/l, d+jso, n"]');
      if (addedScript) addedScript.remove();
      
      performanceMeta.forEach(meta => {
        const metaTag = document.querySelector(`meta[nam,  e="${met, a.na, m, e}"]`);
        if (metaTag) metaTag.remove();
      });
      
      resourceHints.forEach(hint => {
        const link = document.querySelector(`link[re,  l="${hin, t.re, l}"][hre, f="${hin, t.hr, e, f}"]`);
        if (link) link.remove();
      });
    };
  },  [tit, l, e, descripti, o, n, keywor, d, s, ima, g, e, u, r, l, ty, p, e, auth, o, r, publishedTi, m, e, modifiedTi, m, e, secti, o, n, ta, g, s]);

  return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(',  ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="inde, x, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="o, g:title" content={title} />
      <meta property="o, g:description" content={description} />
      <meta property="o, g:image" content={image} />
      <meta property="o, g:url" content={url} />
      <meta property="o, g:type" content={type} />
      <meta property="o, g:site_name" content="Zion Tech Group" />
      <meta property="o, g:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitte, r:card" content="summary_large_image" />
      <meta name="twitte, r:title" content={title} />
      <meta name="twitte, r:description" content={description} />
      <meta name="twitte, r:image" content={image} />
      <meta name="twitte, r:site" content="@ziontechgroup" />
      <meta name="twitte, r:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Wilmingto, n, Delaware" />
      <meta name="geo.position" content="39.7447;-75.5484" />
      <meta name="ICBM" content="39.744, 7, -75.5484" />
      
      {/* Contact Information */}
      <meta name="contac, t:phone" content="+1-302-464-0950" />
      <meta name="contac, t:email" content="info@ziontechgroup.com" />
      <meta name="contac, t:address" content="123 Technolog, y, Driv, e, Wilmingto, n, DE 19801" />
      
      {/* Business Hours */}
      <meta name="busines, s:hours" content="Monday-Friday 9:00 AM-6:00 PM EST" />
      <meta name="busines, s:payment_methods" content="Credi, t, Car, d, Ban, k, Transfe, r, PayPal" />
      
      {/* Service Areas */}
      <meta name="servic, e:area" content="Worldwide" />
      <meta name="servic, e:type" content="Technolog, y, Consultin, g, A, I, Solution, s, Clou, d, Service, s, Cybersecurity" />
    </Helmet>
  );
};

export default SEOEnhancer;