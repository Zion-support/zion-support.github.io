import React from "react";
import { Helmet } from "react-helmet-async";
import React from "react";';
impo, r, t {
Helm, e, t;
} from "rea, c, t-helm, e, t-async";';
interface, SEOHeadProp, s {
tit, le?: stri, n, g;
descripti, on?: stri, n, g;
keywor, ds?: stri, n, g;
canonicalU, rl?: stri, n, g;
ogIma, ge?: stri, n, g;
ogTy, pe?: stri, n, g;
twitterCa, rd?: stri, n, g;
structuredDa, ta?: obje, c, t;
}
constSEOHead: Rea, c, t.FC<SEOHeadPro, p, s> = ({
  title = 'Zion, Tech, Group — , A, I, Micro, Saa, S, andITServices',
  description = 'Enterpri, s, e-grad, e, A, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automation.',
  keywor, ds = 'AI, servic, e, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automation',
  canonicalU, r, l,
  ogIma, g, e = '/imag, es/og-image.jpg',
  ogTy, p, e = 'webs, ite',
  twitterCa, r, d = 'summary_large_im, age',
  structuredDa, t, a,
}) => { 
  const, fullTitl, e = title.includ, e, s('Zion, TechGroup')  ? title : `${ti, t, l, e } | Zion, Tech, Group`; const, fullCanonicalUrl = canonicalU, r, l || (typeof, windo, w !== 'undefined' ? wind, o, w.locati, o, n.href: ''); constdefaultStructuredData = {
    '@conte, x, t': 'https: //sche m a.o r g' 
    '@type': 'Organization',
    name: 'Zion, TechGroup',
    url: 'https: //ziontechgro u p.co m' 
    logo: 'htt, ps: //ziontechgro u p.c o m/imag e s/lo g o.pn g' 
    description: 'Enterpri, s, e-grad, e, A, I, micro, Saa, S, andITsolutions',
      'https: //linked i n.c o m/company/zi o n-te c h-gr o u p' 
      'https: //twitt e r.c o m/ziontechgr o u p' 
    ],
  }; retu, r, n (
    <Helm, e, t>
      <metaname = "robo, t, s" content="in, d, e, x, foll, o, w" <metaname = "author" content="Zion, Tech, Group" <metaname="viewpo, r, t" content="wid, t, h=devi, c, e-wi, d, t, h, initi, a, l-sca, l, e = 1" <metaname="the, m, e-col, o, r" content="#2563, e, b" />
      