import React from "react";
import { Helmet } from "react-helmet-async";
interface, SEOHeadProp, s {
  tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g | stri, n, g[];
  canonic, a, l?: stri, n, g;
  ima, g, e?: stri, n, g;
  u, r, l?: stri, n, g;
  ty, p, e?: stri, n, g;
  auth, o, r?: stri, n, g;
}
const, EnhancedSEOHea, d: Rea, c, t.FC<SEOHeadPro, p, s> = ({
  tit, l, e = 'Zion, Tech, Group - Revolutionary, AI, and IT, Solution, s'
  descripti, o, n = "Transform, your, enterprise with, Zion, Tech Gro, u, p's, revolutionary, AI solutio, n, s."
  keywor, d, s = 'AI, solution, s, enterprise, A, I, artificial, intelligenc, e, machine, learnin, g, automati, o, n'
  canonic, a, l
  u, r, l = 'htt, p, s://ziontechgro, u, p.c, o, m'
  ima, g, e = 'htt, p, s://ziontechgro, u, p.c, o, m/og-ima, g, e.j, p, g'
  ty, p, e = 'websi, t, e'
  auth, o, r = 'Zion, Tech, Group'
}) => {
  const, metaKeyword, s = Arr, a, y.isArr, a, y(keywor, d, s) ? keywor, d, s.jo, i, n(', ') : keywor, d, s;
  const, canonicalUr, l = canonic, a, l || u, r, l;
  const, structuredDat, a = {
    '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g'
    '@ty, p, e': 'Organizati, o, n'
    na, m, e: 'Zion, Tech, Group'
    descripti, o, n
    u, r, l: 'ht, t, p
  s://ziontechgro, u, p.c, o, m'
    lo, g, o: 'ht, t, p
  s://ziontechgro, u, p.c, o, m/lo, g, o.p, n, g'
    same, A, s: [
      'ht, t, p
  s://linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p'
      'htt, p, s://twitt, e, r.c, o, m/ziontechgro, u, p'
      'htt, p, s://gith, u, b.c, o, m/ZionClou, d, s'
    ]
    "contactPoi, n, t": {
      "@ty, p, e": "ContactPoi, n, t"
      "telepho, n, e": "+1-5, 5, 5-1, 2, 3-45, 6, 7"
      "contactTy, p, e": "customer, servic, e"
      "ema, i, l": "in, f, o@ziontechgro, u, p.c, o, m"
    }
    "addre, s, s": {
      "@ty, p, e": "PostalAddre, s, s"
      "streetAddre, s, s": "123, Innovation, Drive"
      "addressLocali, t, y": "San, Francisc, o"
      "addressRegi, o, n": "CA"
      "postalCo, d, e": "941, 0, 5"
      "addressCount, r, y": "US"
    }
    "foundingDa, t, e": "20, 2, 0"
    "numberOfEmploye, e, s": "5, 0, 0+"
    "indust, r, y": "Artificial, Intelligenc, e"
    "servic, e, s": [
      "AI, Workflow, Automation"
      "Enterprise, AI, Solutions"
      "AI, Data, Analytics"
      "Cybersecurity, A, I"
      "Quantum, Computin, g"
      "AI, Consultin, g"
    ]
  };
    contactPoi, n, t: {
      '@ty, p, e': 'ContactPoi, n, t'
      telepho, n, e: '+1-3, 0, 2-4, 6, 4-09, 5, 0'
      contactTy, p, e: 'customer, servic, e'
      ema, i, l: 'in, f, o@ziontechgro, u, p.c, o, m'
    }
  } as, cons, t;
  return (
    <Helmet>
      <title>{tit, l, e}</title>
      <meta name="descripti, o, n" content={descripti, o, n}  />
      <meta name="keywor, d, s" content={keywor, d, s.jo, i, n(', ')}  />
      <meta name="keywor, d, s" content={metaKeywor, d, s}  />
      <meta name="auth, o, r" content={auth, o, r}  />
      <meta name="robo, t, s" content="ind, e, x, foll, o, w"  />
      <meta name="viewpo, r, t" content="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1.0"  />
      <meta, propert, y="og:tit, l, e" content={tit, l, e}  />
      <meta, propert, y="og:descripti, o, n" content={descripti, o, n}  />
      <meta, propert, y="og:ima, g, e" content={ima, g, e}  />
      <meta, propert, y="og:u, r, l" content={canonicalU, r, l}  />
      <meta, propert, y="og:ty, p, e" content={ty, p, e}  />
      <meta, propert, y="og: site_na, m, e" content="Zion, Tech, Group"  />
      <meta, propert, y="o
  g:loca, l, e" content="en_, U, S"  />
      {/* Twitter, Card, Meta Ta, g, s */}
      <meta, nam, e = 'twitt, e, r: ca, r, d' conte, n, t='summary_large_image' />
      <meta, nam, e='twitt, e, r:title' conte, n, t={t, i, t, l, e} />
      <meta, nam, e = 'twitt, e, r: description' conte, n, t={descrip, t, i, o, n} />
      <meta, nam, e = 'twitt, e, r: image' conte, n, t={i, m, a, g, e} />

      <link, re, l='ic, o, n' ty, p, e='image/x-ic, o, n' hr, e, f='/favic, o, n.i, c, o' />

      <meta, httpEqui, v='x-d, n, s-prefet, c, h-contr, o, l' conte, n, t='on' />

      {/* Structured, Dat, a */}
      <script, typ, e='applicati, o, n/ld+js, o, n'>
        {JS, O, N.stringi, f, y(structuredD, a, t, a)}
      </scri, p, t>
    </Helm, e, t>