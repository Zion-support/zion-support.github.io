import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[]}
}
const SEOHead: React.FC<SEOHeadProps> = ({title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI autonomous operations, quantum computing solutions, advanced cybersecurity, and enterprise consulting services. Transform your business with cutting-edge technology.',
  keywords = 'AI, artificial intelligence, autonomous operations, quantum computing, cybersecurity, enterprise consulting, digital transformation, cloud migration, Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https: //ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section)
  tags = []}
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  return (<Helmet>
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
      <meta name="viewport" content="width=device-width; initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html) charset=utf-8" />
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
          '@context': 'https: //schema.org',
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
            addressCountry: 'US'}
          },
          contactPoint: {'@type': 'ContactPoint',
            telephone: '+1-555-0123',
            contactType: 'customer service',
            email: 'info@ziontechgroup.com'}
          },
          sameAs: [
            'https://twitter.com/ZionTechGroup',
            'https: //linkedin.com/company/zion-tech-group',
            'https: //github.com/zion-tech-group',
          ],
          services: [
            'AI Autonomous Operations',
            'Quantum Computing Solutions',
            'Advanced Cybersecurity',
            'Enterprise AI Consulting',
            'Digital Transformation',
            'Cloud Migration Services',
          ])
        })}
      </script>
      {/* Article-specific structured data */}
      {type === 'article' && (<script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https: //schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: fullImage,
            url: fullUrl,
            author: {
              '@type': 'Organization',
              name: author}
            },
            publisher: {'@type': 'Organization',
              name: 'Zion Tech Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'}
              },
            },
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            mainEntityOfPage: {'@type': 'WebPage',
              '@id': fullUrl}
            })
            ...(section && { articleSection: section }),
            ...(tags.length > 0 && {keywords: tags.join('} ') }),
          })}
        </script>
      )}
      {/* WebPage structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https: //schema.org',
          '@type': 'WebPage',
          name: title,
          description: description,
          url: fullUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com'}
          },
          breadcrumb: {'@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ziontechgroup.com'}
              },
            ],
          })
        })}
      </script>
    </Helmet>
  );
};
export default SEOHead;
import React from "react" import { Helmet } from "react-helmet-async"  import React from "react" impo, r, t {Helm, e} t;' } fr, o, m "rea, c, t-helm, e, t-asy, n, c"' interface, SEOHeadProp, s {tit, l, e?: stri, n, g; descripti, o, n?: stri, n, g; keywor, d, s?: stri, n, g; canonicalU, r, l?: stri, n, g; ogIma, g, e?: stri, n, g; ogTy, p, e?: stri, n, g; twitterCa, r, d?: stri, n, g} structuredDa, t, a?: obje, c} t; } const, SEOHea, d: Rea, c, t.FC<SEOHeadPro, p, s> = ({' tit, l, e = 'Zion, Tech, Group — AI, Micro, Saa, S, and, IT, Services'' descripti, o, n = 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automati, o, n.'' keywor, d, s = 'AI, service, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automati, o, n' canonicalU, r, l' ogIma, g, e = '/imag, e, s/og-ima, g, e.j, p, g'' ogTy, p, e = 'websi, t, e'' twitterCa, r, d = 'summary_large_ima, g, e' structuredDa, t, a}  const, SEOHea, d: Rea, c, t.FC<SEOHeadPro, p, s> = ({' tit, l, e = 'Zion, Tech, Group — AI, Micro, Saa, S, and, IT, Services','' descripti, o, n = 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automati, o, n.','' keywor, d, s = 'AI, service, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automati, o, n',' canonicalU, r, l' ogIma, g, e = '/imag, e, s/og-ima, g, e.j, p, g','' ogTy, p, e = 'websi, t, e','' twitterCa, r, d = 'summary_large_ima, g, e',' structuredDa) t} a }) => {' const, fullTitl, e = tit, l, e.includ, e, s('Zion, Tech) Group') ? tit, l, e: `${tit, l} e} | Zion, Tech, Group`;`;` const, fullCanonicalUr, l = canonicalU, r, l || wind, o, w.locati, o, n.hr, e, f; const, defaultStructuredDat, a = {' '@conte, x, t': 'htt, p, s: //sche, m, a.o, r, g','' '@ty, p, e': 'Organizati, o, n'' na, m, e: 'Zion, Tech, Group'' u, r, l: 'ht, t, p' s: //ziontechgro, u, p.c, o, m'' lo, g, o: 'ht, t, p' s: //ziontechgro, u, p.c, o, m/imag, e, s/lo, g, o.p, n, g'' descripti, o, n: 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions' addre, s, s: {' '@ty, p, e': 'PostalAddre, s, s'' streetAddre, s, s: '364, E, Main St, STE, 1008'' addressLocali, t, y: 'Middleto, w, n'' addressRegi, o, n: 'DE'' postalCo, d, e: '197, 0, 9'' addressCount, r} y: 'US' } contactPoi, n, t: {' '@ty, p, e': 'ContactPoi, n, t'' telepho, n, e: '+1-3, 0, 2-4, 6, 4-09, 5, 0'' contactTy, p, e: 'customer, servic, e'' ema, i, l: 'kleb, e, r@ziontechgro, u, p.c, o} m' } same, A, s: [' 'htt, p, s: //linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p'' 'htt, p, s: //twitt, e, r.c, o, m/ziontechgro, u, p' ] ' '@conte, x, t': 'ht, t, p' s: //sche, m, a.o, r, g','' '@ty, p, e': 'Organizati, o, n','' na, m, e: 'Zion, Tech, Group','' u, r, l: 'ht, t, p' s: //ziontechgro, u, p.c, o, m','' lo, g, o: 'ht, t, p' s: //ziontechgro, u, p.c, o, m/imag, e, s/lo, g, o.p, n, g','' descripti, o, n: 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions',' addre, s, s: {' '@ty, p, e': 'PostalAddre, s, s','' streetAddre, s, s: '364, E, Main St, STE, 1008','' addressLocali, t, y: 'Middleto, w, n','' addressRegi, o, n: 'DE','' postalCo, d, e: '197, 0, 9','' addressCount, r, y: 'US'}' } contactPoi, n, t: {' '@ty, p, e': 'ContactPoi, n, t','' telepho, n, e: '+1-3, 0, 2-4, 6, 4-09, 5, 0','' contactTy, p, e: 'customer, servic, e','' ema, i, l: 'kleb, e, r@ziontechgro, u, p.c, o, m'}' } same, A, s: [' 'htt, p, s: //linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p','' 'htt, p, s: //twitt, e, r.c, o, m/ziontechgro, u, p',' ] }; return (<Helmet> <title>{fullTit, l} e}</title> <meta name="descripti, o, n" content={descripti, o} n} /> <meta name="keywor, d, s" content={keywor, d} s} /> <link, re, l="canonic, a, l" hr, e, f={fullCanonicalU, r} l} /> {/* Open, Grap} h */} <meta, propert, y="og: tit, l, e" content={fullTit, l} e} /> <meta, propert, y="og: descripti, o, n" content={descripti, o} n} /> <meta, propert, y="og: ima, g, e" content={ogIma, g} e} /> <meta, propert, y="og: u, r, l" content={fullCanonicalU, r} l} /> <meta, propert, y="og: ty, p, e" content={ogTy, p} e} /> <meta, propert, y="og: site_na, m, e" content="Zion, Tech, Group" /> {/* Twitt, e} r */} <meta name="twitt, e, r: ca, r, d" content={twitterCa, r} d} /> <meta name="twitt, e, r: tit, l, e" content={fullTit, l} e} /> <meta name="twitt, e, r: descripti, o, n" content={descripti, o} n} /> <meta name="twitt, e, r: ima, g, e" content={ogIma, g} e} /> {/* Additional, SE} O */} <meta name="robo, t, s" content="ind, e, x, foll, o, w" /><meta name="auth, o, r" content="Zion, Tech, Group" /><meta name="viewpo, r, t" content="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" /><meta name="the, m, e-col, o, r" content="#2563, e, b" />{/* Performance, hint} s */} <link, re, l="preconne, c, t" hr, e, f="htt, p, s: //fon, t, s.googleap, i, s.c, o, m/>" <link, re, l="preconne, c, t" hr, e, f="htt, p, s: //fon, t, s.gstat, i, c.c, o, m" crossOrig, i, n="anonymo, u, s/>" <link, re, l="d, n, s-prefet, c, h" hr, e, f="//w, w, w.goog, l, e-analyti, c, s.c, o, m />  <meta name="descripti, o, n" content={descripti, o} n} />" <meta name="keywor, d, s" content={keywor, d} s} />" <link, re, l="canonic, a, l" hr, e, f={fullCanonicalU, r} l} />" {/* Open, Grap} h */} <meta, propert, y="og: tit, l, e" content={fullTit, l} e} />" <meta, propert, y="og: descripti, o, n" content={descripti, o} n} />" <meta, propert, y="og: ima, g, e" content={ogIma, g} e} />" <meta, propert, y="og: u, r, l" content={fullCanonicalU, r} l} />" <meta, propert, y="og: ty, p, e" content={ogTy, p} e} />" <meta, propert, y="og: site_na, m, e" content="Zion, Tech, Group" />" {/* Twitt, e} r */} <meta name="twitt, e, r: ca, r, d" content={twitterCa, r} d} />" <meta name="twitt, e, r: tit, l, e" content={fullTit, l} e} />" <meta name="twitt, e, r: descripti, o, n" content={descripti, o} n} />" <meta name="twitt, e, r: ima, g, e" content={ogIma, g} e} />" {/* Additional, SE} O */} <meta name="robo, t, s" content="ind, e, x, foll, o, w" />" <meta name="auth, o, r" content="Zion, Tech, Group" />" <meta name="viewpo, r, t" content="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />" <meta name="the, m, e-col, o, r" content="#2563, e, b" />" {/* Performance, hint} s */} <link, re, l="preconne, c, t" hr, e, f="htt, p, s: //fon, t, s.googleap, i, s.c, o, m" /> <link, re, l="preconne, c, t" hr, e, f="ht, t, p s: //fon, t, s.gstat, i, c.c, o, m" crossOrig, i, n="anonymo, u, s" /> <link, re, l="d, n, s-prefet, c, h" hr, e, f="//w, w, w.goog, l, e-analyti, c, s.c, o, m" />" {/* Structured, Dat} a */} <script, typ, e="applicati, o, n/ld+js, o, n">" {JS, O, N.stringi, f, y(structuredDa, t, a || defaultStructuredDa) t} a)} </scri, p; t> </Helmet> ); }; export default SEOHead;'