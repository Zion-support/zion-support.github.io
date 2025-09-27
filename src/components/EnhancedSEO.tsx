import React from 'react';
import Head from 'next/head';

interf, a, c, e SEOPr, o, p, s {
  ti, t, l, e?: str, i, n, g;
  description?: str, i, n, g;
  canoni, c, a, l?: str, i, n, g;
  ogImage?: str, i, n, g;
  ogT, y, p, e?: str, i, n, g;
  twitterC, a, r, d?: str, i, n, g;
  keywo, r, d, s?: str, i, n, g[];
  aut, h, o, r?: str, i, n, g;
  publishedT, i, m, e?: str, i, n, g;
  modifiedT, i, m, e?: str, i, n, g;
  sect, i, o, n?: str, i, n, g;
  t, a, g, s?: str, i, n, g[];
  noindex?: bool, e, a, n;
  nofollow?: bool, e, a, n;
}

export default function EnhancedSEO({
  ti, t, l, e = 'Z, i, o, n T, e, c, h Solutions - A, I-Powe, r, e, d Busin, e, s, s Solutions',
  description = 'Lead, i, n, g provi, d, e, r o, f A, I-powe, r, e, d busin, e, s, s soluti, o, n, s, cl, o, u, d infrastruct, u, r, e, an, d digi, t, a, l transformat, i, o, n servi, c, e, s. Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e technol, o, g, y.',
  canoni, c, a, l,
  ogImage = '/o, g-image.jp, g',
  ogT, y, p, e = 'website',
  twitterC, a, r, d = 'summary_large_image',
  keywo, r, d, s = ['A, I soluti, o, n, s', 'cl, o, u, d infrastruct, u, r, e', 'digi, t, a, l transformat, i, o, n', 'busin, e, s, s automat, i, o, n', 'technol, o, g, y consult, i, n, g'],
  aut, h, o, r = 'Z, i, o, n T, e, c, h Solutions',
  publishedT, i, m, e,
  modifiedT, i, m, e,
  sect, i, o, n,
  t, a, g, s = [],
  noindex = fa, l, s, e,
  nofollow = fa, l, s, e
}: SEOPr, o, p, s) {
  const fullTi, t, l, e = ti, t, l, e.inclu, d, e, s("Z, i, o, n T, e, c, h Solutions") ? ti, t, l, e : `${ti, t, l, e} | Z, i, o, n T, e, c, h Solutions`;
  const fullDescript, i, o, n = description.len, g, t, h > 16, 0 ? description.substr, i, n, g(0, 15, 7) + '...' : description;

  const fullCanoni, c, a, l = canoni, c, a, l || (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' ? win, d, o, w.locat, i, o, n.h, r, e, f : '');
  
  const structuredD, a, t, a = {
    '@cont, e, x, t': 'ht, t, p, s://sch, e, m, a.or, g',
    '@type': 'Organizat, i, o, n',
    n, a, m, e: 'Z, i, o, n T, e, c, h Solutions',
    description: fullDescript, i, o, n,
    ur, l: 'ht, t, p, s://ziontechgr, o, u, p.co, m',
    l, o, g, o: 'ht, t, p, s://ziontechgr, o, u, p.co, m/l, o, g, o.pn, g',
    sam, e, A, s: [
      'ht, t, p, s://linke, d, i, n.co, m/comp, a, n, y/z, i, o, n-t, e, c, h-soluti, o, n, s',
      'ht, t, p, s://twit, t, e, r.co, m/ziontechsoluti, o, n, s'
    ],
    contactPo, i, n, t: {
      '@type': 'ContactPo, i, n, t',
      teleph, o, n, e: '+1-55, 5-0, 1, 2, 3',
      contactT, y, p, e: 'custo, m, e, r serv, i, c, e',
      availableLangu, a, g, e: 'Engl, i, s, h'
    },
    addr, e, s, s: {
      '@type': 'PostalAddr, e, s, s',
      addressCoun, t, r, y: 'U, S'
    }
  };

  i, f (publishedT, i, m, e) {
    structuredD, a, t, a['@type'] = 'Arti, c, l, e';
  }
  i, f (t, a, g, s && t, a, g, s.len, g, t, h > 0) {
    (structuredD, a, t, a a, s an, y).keywo, r, d, s = t, a, g, s.j, o, i, n(',');
  }

  i, f (publishedT, i, m, e) {
    (structuredD, a, t, a a, s an, y).datePublis, h, e, d = publishedT, i, m, e;
    (structuredD, a, t, a a, s an, y).dateModif, i, e, d = modifiedT, i, m, e || publishedT, i, m, e;
    (structuredD, a, t, a a, s an, y).aut, h, o, r = { '@type': 'Per, s, o, n', n, a, m, e: aut, h, o, r };
    (structuredD, a, t, a a, s an, y).publis, h, e, r = { '@type': 'Organizat, i, o, n', n, a, m, e: 'Z, i, o, n T, e, c, h Solutions' };
    i, f (sect, i, o, n) (structuredD, a, t, a a, s an, y).articleSect, i, o, n = sect, i, o, n;
    i, f (t, a, g, s.len, g, t, h > 0) (structuredD, a, t, a a, s an, y).keywo, r, d, s = t, a, g, s.j, o, i, n(',');
  }

  return (
    <Head>
      {/* Ba, s, i, c M, e, t, a T, a, g, s */}
      <title>{fullTi, t, l, e}</title>
      <meta name="description" content={fullDescript, i, o, n} />
      <meta name="keywo, r, d, s" content={keywo, r, d, s.j, o, i, n(',')} />
      <meta name="aut, h, o, r" content={aut, h, o, r} />
      <meta name="viewp, o, r, t" content="wi, d, t, h=dev, i, c, e-wi, d, t, h, init, i, a, l-sc, a, l, e=1, shr, i, n, k-t, o-fi, t=n, o" />

      {/* Canoni, c, a, l UR, L */}
      {fullCanoni, c, a, l && <link re, l="canoni, c, a, l" href={fullCanoni, c, a, l} />}
      
      {/* Rob, o, t, s */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'in, d, e, x'},${nofollow ? 'nofollow' : 'fol, l, o, w'}`} />
      
      {/* OpenGr, a, p, h */}
      <meta prope, r, t, y="o, g:type" content={ogT, y, p, e} />
      <meta prope, r, t, y="o, g:ti, t, l, e" content={fullTi, t, l, e} />
      <meta prope, r, t, y="o, g:description" content={fullDescript, i, o, n} />
      <meta prope, r, t, y="o, g:image" content={ogImage} />
      <meta prope, r, t, y="o, g:ur, l" content={fullCanoni, c, a, l} />
      <meta prope, r, t, y="o, g:site_n, a, m, e" content="Z, i, o, n T, e, c, h Solutions" />
      <meta prope, r, t, y="o, g:loc, a, l, e" content="en, _, U, S" />
      
      {/* TwitterC, a, r, d */}
      <meta name="twit, t, e, r:c, a, r, d" content={twitterC, a, r, d} />
      <meta name="twit, t, e, r:ti, t, l, e" content={fullTi, t, l, e} />
      <meta name="twit, t, e, r:description" content={fullDescript, i, o, n} />
      <meta name="twit, t, e, r:image" content={ogImage} />
      <meta name="twit, t, e, r:s, i, t, e" content="@ziontechsoluti, o, n, s" />
      <meta name="twit, t, e, r:crea, t, o, r" content="@ziontechsoluti, o, n, s" />
      
      {/* AdditionalM, e, t, a T, a, g, s */}
      <meta name="th, e, m, e-co, l, o, r" content="#256, 3, e, b" />
      <meta name="msapplicat, i, o, n-TileCo, l, o, r" content="#256, 3, e, b" />
      <meta name="app, l, e-mob, i, l, e-we, b-app-capa, b, l, e" content="ye, s" />
      <meta name="app, l, e-mob, i, l, e-we, b-app-sta, t, u, s-ba, r-st, y, l, e" content="default" />
      <meta name="app, l, e-mob, i, l, e-we, b-app-ti, t, l, e" content="Z, i, o, n T, e, c, h Solutions" />
      
      {/* StructuredD, a, t, a */}
      <scr, i, p, t
        type="applicat, i, o, n/l, d+j, s, o, n"
        dangerouslySetInnerH, T, M, L={{ __h, t, m, l: J, S, O, N.string, i, f, y(structuredD, a, t, a) }}
      />
      
      {/* Preconn, e, c, t t, o exter, n, a, l doma, i, n, s */}
      <link re, l="preconn, e, c, t" href="https://fonts.googleapis.com" />
      <link re, l="preconn, e, c, t" href="ht, t, p, s://fo, n, t, s.gsta, t, i, c.co, m" crossOri, g, i, n="anonym, o, u, s" />
      <link re, l="preconn, e, c, t" href="ht, t, p, s://ww, w.goo, g, l, e-analyt, i, c, s.co, m" />
      
      {/* DN, S Prefe, t, c, h */}
      <link re, l="dn, s-prefe, t, c, h" href="//fo, n, t, s.googlea, p, i, s.co, m" />
      <link re, l="dn, s-prefe, t, c, h" href="//ww, w.goo, g, l, e-analyt, i, c, s.co, m" />
    </Head>
  );
}