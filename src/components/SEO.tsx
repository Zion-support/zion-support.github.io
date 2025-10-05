import, React, from 'rea, c, t';
impo, r, t { Helm, e, t } fr, o, m 'rea, c, t-helm, e, t-asy, n, c';

interface, SEOProp, s { 
  tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g;
  auth, o, r?: stri, n, g;
  canonic, a, l?: stri, n, g;
  ogIma, g, e?: stri, n, g;
  ogTy, p, e?: stri, n, g;
  twitterCa, r, d?: stri, n, g;
  noInd, e, x?: boole, a, n;
  structuredDa, t, a ?  : obje, c, t;
 }

const, SE, O: Rea, c, t.FC<SEOPro, p, s> = ({
  tit, l, e = 'Zion, Tech, Group — AI, Micro, SaaS and, IT, Servic, e, s',
  descripti, o, n = 'Enterpri, s, e-grade, AI, micro SaaS, and, IT solutio, n, s. Transform, your, business with, cuttin, g-edge, technology, and automat, i, o, n.',
  keywor, d, s = 'AI, servic, e, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automati, o, n',
  auth, o, r = 'Zion, Tech, Grou, p',
  canonic, a, l,
  ogIma, g, e = 'htt, p, s: //ziontechgro, u, p.c, o, m/og-ima, g, e.j, p, g',
  ogTy, p, e = 'webs, i, t, e',
  twitterCa, r, d = 'summary_large_im, a, g, e',
  noInd, e, x = fa, l, s, e,
  structuredDa, t, a,
}) => { 
  const, fullTitl, e = tit, l, e.includ, e, s('Zion, Tech, Grou, p')
     ? tit, l, e : `${ti, t, l, e } | Zion, Tech, Group`; const, canonicalUr, l = canonic, a, l ||
    (typeof, windo, w !== 'undefin, e, d'
      ? wind, o, w.locati, o, n.hr, e, f: 'htt, p, s://ziontechgro, u, p.co, m'); retu, r, n (
    <Helm, e, t>
      <tit, l, e>{fullTi, t, l, e}</tit, l, e>
      <meta, nam, e = 'descripti, o, n' conte, n, t={descripti, o, n} />
      <meta, nam, e='keywor, d, s' conte, n, t={keywor, d, s} />
      <meta, nam, e='auth, o, r' conte, n, t={auth, o, r} />
      <link, re, l='canonic, a, l' hr, e, f={canonicalU, r, l} />

      {/* Robo, t, s */}
      <meta, nam, e='robo, t, s'
        conte, n, t={ noInd, e, x  ? 'noin, d, e, x,nofoll, o, w'  : 'ind, e, x,foll, o, w' }
      />

      <meta, nam, e = 'googleb, o, t' conte, n, t='in, d, e, x,foll, o, w' />

      {/* Open, Grap, h */}
      <meta, propert, y = 'og: tit, l, e' conte, n, t={fullT, i, t, l, e} />
      <meta, propert, y = 'og: descripti, o, n' conte, n, t={descrip, t, i, o, n} />
      <meta, propert, y = 'og: ty, p, e' conte, n, t={og, T, y, p, e} />
      <meta, propert, y = 'og: u, r, l' conte, n, t={canonica, l, U, r, l} />
      <meta, propert, y = 'og: ima, g, e' conte, n, t={ogI, m, a, g, e} />
      <meta, propert, y = 'og: site_na, m, e' conte, n, t='Zion, Tech, Group' />
      <meta, propert, y='og:loca, l, e' conte, n, t='en_, U, S' />

      {/* Twi, t, t, e, r */}
      <meta, nam, e = 'twitt, e, r: ca, r, d' conte, n, t={twitter, C, a, r, d} />
      <meta, nam, e = 'twitt, e, r: tit, l, e' conte, n, t={fullT, i, t, l, e} />
      <meta, nam, e = 'twitt, e, r: descripti, o, n' conte, n, t={descrip, t, i, o, n} />
      <meta, nam, e = 'twitt, e, r: ima, g, e' conte, n, t={ogI, m, a, g, e} />

      {/* Additional, SE, O */}
      <meta, nam, e = 'viewpo, r, t' conte, n, t='wid, t, h=devi, c, e-wi, d, t, h, initi, a, l-sca, l, e = 1.0' />
      <meta, httpEqui, v='Conte, n, t-Ty, p, e' conte, n, t='te, x, t/ht, m, l; chars, e, t=u, t, f-8' />
      <meta, nam, e='the, m, e-col, o, r' conte, n, t='#1f29, 3, 7' />

      {/* Preconnect, to, external domai, n, s */}
      <link, re, l='preconne, c, t' hr, e, f='htt, p, s: //fon, t, s.googleap, i, s.c, o, m' />
      <link, re, l='preconne, c, t'
        hr, e, f='htt, p, s://fon, t, s.gstat, i, c.c, o, m'
        crossOrig, i, n='anonymo, u, s'
      />

      {/* Structured, D, a, t, a */}
      { structuredDa, t, a ? (
        <script, typ, e = 'applicati, o, n/ld+js, o, n' > {JS, O, N.stringi, f, y(structuredD, a, t, a) }
        </scri, p, t>
      ) : (
        <script, typ, e = 'applicati, o, n/ld+js, o, n'>
          {JS, O, N.stringi, f, y({
            '@conte, x, t': 'htt, p, s: //sche, m, a.o, r, g',
            '@ty, p, e': 'Organizati, o, n',
            na, m, e: 'Zion, Tech, Grou, p',
            u, r, l: 'htt, p, s://ziontechgro, u, p.co, m',
            lo, g, o: 'htt, p, s://ziontechgro, u, p.c, o, m/lo, g, o.pn, g',
            descripti, o, n: 'Enterpri, s, e-grade, AI, micro SaaS, and, IT solutions, provid, e, r',
            contactPoi, n, t: {
              '@ty, p, e': 'ContactPo, i, n, t',
              telepho, n, e: '+1-3, 0, 2-4, 6, 4-0, 9, 5, 0',
              contactTy, p, e: 'customer, servi, c, e',
              ema, i, l: 'kleb, e, r@ziontechgro, u, p.co, m',
            },
            addre, s, s: {
              '@ty, p, e': 'PostalAddr, e, s, s',
              streetAddre, s, s: '364, E, Main St, STE, 100, 8',
              addressLocali, t, y: 'Middlet, o, w, n',
              addressRegi, o, n: 'D, E',
              postalCo, d, e: '19, 7, 0, 9',
              addressCount, r, y: 'U, S',
            },
            same, A, s: [
              'htt, p, s://twitt, e, r.c, o, m/ziontechgr, o, u, p',
              'htt, p, s: //linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gr, o, u, p',
              'htt, p, s: //gith, u, b.c, o, m/ZionClo, u, d, s',
            ],
          })}
        </scri, p, t>
      )}
    </Helm, e, t>
  );
};

export, default, SEO;
