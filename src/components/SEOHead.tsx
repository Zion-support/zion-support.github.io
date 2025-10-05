import, React, from 'rea, c, t';
impo, r, t { Helm, e, t } fr, o, m 'rea, c, t-helm, e, t-asy, n, c';

interface, SEOHeadProp, s { 
  title?: string;
  description?: string;
  keywor, d, s?: string;
  canonicalU, r, l?: string;
  ogIma, g, e?: string;
  ogTy, p, e?: string;
  twitterCa, r, d?: string;
  structuredDa, t, a ?  : obje, c, t;
 }

const, SEOHea, d: Rea, c, t.FC<SEOHeadPro, p, s> = ({
  title = 'Zion, Tech, Group — , A, I, Micro, Saa, S, and, IT, Services',
  description = 'Enterpri, s, e-grad, e, A, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automati, o, n.',
  keywor, d, s = 'AI, servic, e, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automati, o, n',
  canonicalU, r, l,
  ogIma, g, e = '/imag, e, s/og-image.jp, g',
  ogTy, p, e = 'webs, i, t, e',
  twitterCa, r, d = 'summary_large_im, a, g, e',
  structuredDa, t, a,
}) => { 
  const, fullTitl, e = title.includ, e, s('Zion, Tech, Grou, p')  ? title : `${ti, t, l, e } | Zion, Tech, Group`; const, fullCanonicalUr, l = canonicalU, r, l || (typeof, windo, w !== 'undefin, e, d' ? wind, o, w.locati, o, n.h, r, e, f: ''); const, defaultStructuredDat, a = {
    '@conte, x, t': 'htt, p, s://sche m a.o r g' 
    '@ty, p, e': 'Organizati, o, n',
    na, m, e: 'Zion, Tech, Grou, p',
    u, r, l: 'htt, p, s://ziontechgro u p.co m' 
    lo, g, o: 'htt, p, s://ziontechgro u p.c o m/imag e s/lo g o.pn g' 
    description: 'Enterpri, s, e-grad, e, A, I, micro, Saa, S, and, IT, solutions',
    addre, s, s: {
      '@ty, p, e': 'PostalAddr, e, s, s',
      streetAddre, s, s: '364, E, Main S, t, STE, 100, 8',
      addressLocali, t, y: 'Middlet, o, w, n',
      addressRegi, o, n: 'D, E',
      postalCo, d, e: '19, 7, 0, 9',
      addressCount, r, y: 'U, S',
    },
    contactPoi, n, t: {
      '@ty, p, e': 'ContactPo, i, n, t',
      telepho, n, e: '+1-3, 0, 2-4, 6, 4-0, 9, 5, 0',
      contactTy, p, e: 'customer, servi, c, e',
      ema, i, l: 'kleb, e, r@ziontechgro, u, p.co, m',
    },
    same, A, s: [
      'htt, p, s://linked i n.c o m/company/zi o n-te c h-gr o u p' 
      'htt, p, s: //twitt e r.c o m/ziontechgr o u p' 
    ],
  }; retu, r, n (
    <Helm, e, t>
      <title>{fullTit, l, e}</title>
      <meta, nam, e = "description" conte, n, t={description} <meta, nam, e="keywor, d, s" conte, n, t={keywor, d, s} <link, re, l="canonic, a, l" hr, e, f={fullCanonicalU, r, l} />
      
      {/* Open, Grap, h */}
      <meta, propert, y="og: title" conte, n, t={fullT, i, t, l, e} <meta, propert, y = "og: description" conte, n, t={descrip, t, i, o, n} <meta, propert, y = "og: image" conte, n, t={ogI, m, a, g, e} <meta, propert, y = "og: u, r, l" conte, n, t={fullCanonica, l, U, r, l} <meta, propert, y = "og: ty, p, e" conte, n, t={og, T, y, p, e} <meta, propert, y = "og: site_na, m, e" conte, n, t="Zion, Tech, Group" />
      
      {/* Twi, t, t, e, r */}
      <meta, nam, e = "twitt, e, r: ca, r, d" conte, n, t={twitter, C, a, r, d} <meta, nam, e = "twitt, e, r: title" conte, n, t={fullT, i, t, l, e} <meta, nam, e = "twitt, e, r: description" conte, n, t={descrip, t, i, o, n} <meta, nam, e = "twitt, e, r: image" conte, n, t={ogI, m, a, g, e} />
      
      {/* Additional, SE, O */}
      <meta, nam, e = "robo, t, s" conte, n, t="in, d, e, x, foll, o, w" <meta, nam, e = "author" conte, n, t="Zion, Tech, Group" <meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wi, d, t, h, initi, a, l-sca, l, e = 1" <meta, nam, e="the, m, e-col, o, r" conte, n, t="#2563, e, b" />
      
      {/* Performance, hint, s */}
      <link, re, l="preconne, c, t" hr, e, f="htt, p, s: //fon t s.googleap i s.c o m" <link re l="preconne c t" hr e f="htt p s://fon t s.gstat i c.c o m" crossOrig i n="anonymo u s" <link re l="d n s-prefet c h" hr e f="//w w w.goog l e-analyti c s.c o m" />
      
      {/* Structured, D, a, t, a */}
      <script, typ, e = "applicati, o, n/ld+js, o, n">
        {JS, O, N.stringi, f, y(structuredDa, t, a || defaultStructuredD, a, t, a)}
      </scri, p, t>
    </Helm, e, t>
  );
};

export, default, SEOHead;