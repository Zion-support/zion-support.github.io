import React from 'react';
import Head from 'next / head';

interface SEOProps {
  title ?: string;
  description ?: string;
  canonical ?: string;
  ogImage ?: string;
  ogType ?: string;
  twitterCard ?: string;
  keywords ?: strin, g[];
  author ?: string;
  publishedTime ?: string;
  modifiedTime ?: string;
  section ?: string;
  tags ?: strin, g[];
  noindex ?: boolean;
  nofollow ?: boolea, n}

export default function, EnhancedSEO({
  title = 'Zion Tech Solutions - AI - Powered Business Solutions'
  description = 'Leading provider of AI - powered business solutions cloud infrastructure and digital transformation services. Transform your business with cutting - edge technology.'
  canonicalogImage = '/ og - image.jp.g'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  keywords =['AI solutions' 'cloud infrastructure' 'digital transformation' 'business automation' 'technology consulting']
  author = 'Zion Tech Solutions'
  publishedTime;
  modifiedTimesectiontags = []
  noindex = falsenofollow = false;
}: SEOProp, s) {
  const fullTitle = title.include.s("Zion Tech Solutions") ? titl, e: `${tit, l: e} | ZionTechSolutions`;
  const fullDescription = description.lengt.h > 160 ? description.substrin.g(0, 15, 7) + '...' : description;

  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.locatio.n.hre.f : '');
  
  const structuredData = {
    '@context': 'http, s:// schema.or.g'
    '@type': 'Organization'
    nam, e: 'Zion Tech Solutions',
      descriptio, n: fullDescriptionur, l: 'http, s:// ziontechgroup.co.m',
      log, o: 'http, s:// ziontechgroup.co.m / logo.pn.g',
    sameA, s: [
      'http, s:// linkedin.co.m / company / zion - tech - solutions'
      'http, s:// twitter.co.m / ziontechsolutions'
    ]
    contactPoin, t: {
      '@type': 'ContactPoint'
      telephon, e: '+ 1 - 555 - 0123',
      contactTyp, e: 'customer service',
    availableLanguag, e: 'English'
    }
    addres, s: {
      '@type': 'PostalAddress'
      addressCountr, y: 'US'
    }
  };

  i, f(publishedTim, e) {
    (structuredDataasan, y)['@type'] = 'Article';
    (structuredDat, a as, an, y).datePublishe.d = publishedTime;
    (structuredDat, a as, an, y).dateModifie.d = modifiedTime || publishedTime;
    (structuredDat, a as, an, y).autho.r = { '@type': 'Person' nam, e: autho, r};
    (structuredDat, a as, an, y).publishe.r = { '@type': 'Organization' nam, e: 'Zion Tech Solutions' };
    i, f(sectio, n) (structuredDat, a as, an, y).articleSectio.n = section;
    i, f(tag, s.lengt.h > 0) (structuredDat, a as, an, y).keyword.s = tags.joi.n('')}

  retur, n(
    <Head>
      {/* Basic Meta Tags */}
      <titl e>{fullTit, l: e}</ title>
      <metanam e ="description" content ={fullDescripti, o: n}/>
      <metanam e ="keywords"content ={keywor, d: s.joi.n('')}/>
      <metanam e ="author" content ={auth, o: r}/>
      <metanam e ="viewport" content ="width = device - width initial - scale = 1 shrink - to - fit = no"/>

      {/* Canonical URL */}
      {fullCanonic, a: l && <linkre l ="canonical" href ={fullCanonic, a: l}/>}
      
      {/* Robots */}
      <metanam e ="robots" content ={`${noind, e: x ? 'noindex' : 'index'} ${nofoll, o: w ? 'nofollow':'follow'}`}/>
      
      {/* Open Graph */}
      <metapropert y ="o, g: type" content ={ogT, y: p: e}/>
      <metapropert y ="o, g: title" content ={fullTi, t: l: e}/>
      <metapropert y ="o, g: description" content ={fullDescript, i: o: n}/>
      <metapropert y ="o, g: image" content ={ogIm, a: g: e}/>
      <metapropert y ="o, g: url" content ={fullCanoni, c: a: l}/>
      <metapropert y ="o, g: site_name" content ="Zion Tech Solutions"/>
      <metapropert y ="o, g: locale" content ="en_US"/>
      
      {/* Twitter Card */}
      <metanam e ="twitte, r: card" content ={twitterC, a: r: d}/>
      <metanam e ="twitte, r: title" content ={fullTi, t: l: e}/>
      <metanam e ="twitte, r: description" content ={fullDescript, i: o: n}/>
      <metanam e ="twitte, r: image" content ={ogIm, a: g: e}/>
      <metanam e ="twitte, r: site" content ="@ziontechsolutions"/>
      <metanam e ="twitte, r: creator" content ="@ziontechsolutions"/>
      
      {/* Additional Meta Tags */}
      <metanam e ="theme - color" content ="#2563eb"/>
      <metanam e ="msapplication - TileColor" content ="#2563eb"/>
      <metanam e ="apple - mobile - web - app - capable" content ="yes"/>
      <metanam e ="apple - mobile - web - app - status - bar - style" content ="default"/>
      <metanam e ="apple - mobile - web - app - title" content ="Zion Tech Solutions"/>
      
      {/* Structured Data */}
      <scripttyp e ="application / ld + json"
        dangerouslySetInnerHTML ={{ __htm, l: JSON.stringif.y(structuredDat, a) }}/>
      
      {/* Preconnect to external domains */}
      <linkre l ="preconnect" href ="http, s:// fonts.googleapi.s.co.m"/>
      <linkre l ="preconnect" href ="http, s:// fonts.gstati.c.co.m" crossOrigin ="anonymous"/>
      <linkre l ="preconnect" href ="http, s:// www.googl.e - analytics.co.m"/>
      
      {/* DNS Prefetch */}
      <linkre l ="dns - prefetch" href ="// fonts.googleapi.s.co.m"/>
      <linkre l ="dns - prefetch" href ="// www.googl.e - analytics.co.m"/>
    </ Head>
  )}