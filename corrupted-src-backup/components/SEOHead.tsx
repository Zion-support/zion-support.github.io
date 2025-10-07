import React from "react";
import { Helmet } from "react-helmet-async";
import React from "react";';
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";';
interface, SEOHeadProp, s {
tit, l, e?: stri, n, g;
descripti, o, n?: stri, n, g;
keywor, d, s?: stri, n, g;
canonicalU, r, l?: stri, n, g;
ogIma, g, e?: stri, n, g;
ogTy, p, e?: stri, n, g;
twitterCa, r, d?: stri, n, g;
structuredDa, t, a?: obje, c, t;
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
      'htt, p, s://linked i n.c o m/company/zi o n-te c h-gr o u p' 
      'htt, p, s: //twitt e r.c o m/ziontechgr o u p' 
    ],
  }; retu, r, n (
    <Helm, e, t>
      <meta, nam, e = "robo, t, s" conte, n, t="in, d, e, x, foll, o, w" <meta, nam, e = "author" conte, n, t="Zion, Tech, Group" <meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wi, d, t, h, initi, a, l-sca, l, e = 1" <meta, nam, e="the, m, e-col, o, r" conte, n, t="#2563, e, b" />
      