import React from "react";
import { Helmet } from "react-helmet-async";
=======
import React from "react";';
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";';
=======
interface, SEOProp, s {
  tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g;
  canonic, a, l?: stri, n, g;
  ogIma, g, e?: stri, n, g;
  ogTy, p, e?: stri, n, g;
  twitterCa, r, d?: stri, n, g;
  noInd, e, x?: boole, a, n;
}
const, SE, O: Rea, c, t.FC<SEOPro, p, s> = ({
  tit, l, e = 'Zion, Tech, Group — AI, Micro, Saa, S, and, IT, Services'
  descripti, o, n = 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions. Transform, your, business with, cuttin, g-edge, technology, and automati, o, n.'
  keywor, d, s = 'AI, service, s, micro, Saa, S, IT, service, s, cloud, migratio, n, DevO, p, s, S, R, E, enterprise, softwar, e, automati, o, n'
  canonic, a, l
  ogIma, g, e = 'htt, p, s://ziontechgro, u, p.c, o, m/og-ima, g, e.j, p, g'
  ogTy, p, e = 'websi, t, e'
  twitterCa, r, d = 'summary_large_ima, g, e'
  noInd, e, x = fal, s, e
}) => {
  const, fullTitl, e = tit, l, e.includ, e, s('Zion, Tech, Group') ? tit, l, e : `${tit, l, e} | Zion, Tech, Group`;`
  const, canonicalUr, l = canonic, a, l || (typeof, windo, w !== 'undefin, e, d' ? wind, o, w.locati, o, n.hr, e, f : 'htt, p, s://ziontechgro, u, p.c, o, m');
  return (
    <Helmet>
      <title>{fullTit, l, e}</title>
      <meta name="descripti, o, n" content={descripti, o, n} />";
      <meta name="keywor, d, s" content={keywor, d, s} />";
      <link, re, l="canonic, a, l" hr, e, f={canonicalU, r, l} />";
      {/* Robo, t, s */}
      <meta name="robo, t, s" content={noInd, e, x ? 'noind, e, x,nofoll, o, w' : 'ind, e, x,foll, o, w'} />';
      <meta name="googleb, o, t" content="ind, e, x,foll, o, w" />";
      {/* Open, Grap, h */}
      <meta, propert, y="og:tit, l, e" content={fullTit, l, e} />";
      <meta, propert, y="og:descripti, o, n" content={descripti, o, n} />";
      <meta, propert, y="og:ty, p, e" content={ogTy, p, e} />";
      <meta, propert, y="og:u, r, l" content={canonicalU, r, l} />";
      <meta, propert, y="og:ima, g, e" content={ogIma, g, e} />";
      <meta, propert, y="og: site_na, m, e" content="Zion, Tech, Group" />";
      <meta, propert, y="o
  g: loca, l, e" content="en_, U, S" />";
      {/* Twitt, e, r */}
      <meta name="twitt, e, r:ca, r, d" content={twitterCa, r, d} />";
      <meta name="twitt, e, r:tit, l, e" content={fullTit, l, e} />";
      <meta name="twitt, e, r:descripti, o, n" content={descripti, o, n} />";
      <meta name="twitt, e, r:ima, g, e" content={ogIma, g, e} />";
      {/* Additional, SE, O */}
      <meta name="auth, o, r" content="Zion, Tech, Group" />";
      <meta name="viewpo, r, t" content="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1.0" />";
      <meta, httpEqui, v="Conte, n, t-Ty, p, e" content="te, x, t/ht, m, l; chars, e, t=u, t, f-8" />";
      {/* Structured, Dat, a */}
      <script, typ, e="applicati, o, n/ld+js, o, n">";
        {JS, O, N.stringi, f, y({
          "@conte, x, t": "htt, p, s: //sche, m, a.o, r, g"
          "@ty, p, e": "Organizati, o, n"
          "na, m, e": "Zion, Tech, Group"
          "u, r, l": "htt, p, s://ziontechgro, u, p.c, o, m"
          "lo, g, o": "htt, p, s://ziontechgro, u, p.c, o, m/lo, g, o.p, n, g"
          "descripti, o, n": "Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions provid, e, r"
          "contactPoi, n, t": {
            "@ty, p, e": "ContactPoi, n, t"
            "telepho, n, e": "+1-3, 0, 2-4, 6, 4-09, 5, 0"
            "contactTy, p, e": "customer, servic, e"
            "ema, i, l": "kleb, e, r@ziontechgro, u, p.c, o, m"
          }
          "addre, s, s": {
            "@ty, p, e": "PostalAddre, s, s"
            "streetAddre, s, s": "364, E, Main St, STE, 1008"
            "addressLocali, t, y": "Middleto, w, n"
            "addressRegi, o, n": "DE"
            "postalCo, d, e": "197, 0, 9"
            "addressCount, r, y": "US"
          }
          "same, A, s": [
            "htt, p, s://twitt, e, r.c, o, m/ziontechgro, u, p"
            "htt, p, s://linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p"
            "htt, p, s: //gith, u, b.c, o, m/ZionClou, d, s"
=======
          "@conte, x, t": "ht, t, p
  s: //sche, m, a.o, r, g",";
          "@ty, p, e": "Organizati, o, n",";
          "na, m, e": "Zion, Tech, Group",";
          "u, r, l": "htt, p, s: //ziontechgro, u, p.c, o, m",";
          "lo, g, o": "htt, p, s: //ziontechgro, u, p.c, o, m/lo, g, o.p, n, g",";
          "descripti, o, n": "Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions provid, e, r",";
          "contactPoi, n, t": {";
            "@ty, p, e": "ContactPoi, n, t",";
            "telepho, n, e": "+1-3, 0, 2-4, 6, 4-09, 5, 0",";
            "contactTy, p, e": "customer, servic, e",";
            "ema, i, l": "kleb, e, r@ziontechgro, u, p.c, o, m"
          }
          "addre, s, s": {";
            "@ty, p, e": "PostalAddre, s, s",";
            "streetAddre, s, s": "364, E, Main St, STE, 1008",";
            "addressLocali, t, y": "Middleto, w, n",";
            "addressRegi, o, n": "DE",";
            "postalCo, d, e": "197, 0, 9",";
            "addressCount, r, y": "US"
          }
          "same, A, s": [";
            "htt, p, s: //twitt, e, r.c, o, m/ziontechgro, u, p",";
            "htt, p, s: //linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p",";
            "htt, p, s: //gith, u, b.c, o, m/ZionClou, d, s"
          ]
        })}
      </scri, p, t>
=======
      <meta name="descripti, o, n" content={descripti, o, n}  />
      <meta name="keywor, d, s" content={keywor, d, s}  />
      <link, re, l="canonic, a, l" hr, e, f={canonicalU, r, l}  />
      <meta name="robo, t, s" content={noInd, e, x ? 'noind, e, x,nofoll, o, w' : 'ind, e, x,foll, o, w'}  />
      <meta name="googleb, o, t" content="ind, e, x,foll, o, w"  />
      <meta, propert, y="og:tit, l, e" content={fullTit, l, e}  />
      <meta, propert, y="og:descripti, o, n" content={descripti, o, n}  />
      <meta, propert, y="og:ty, p, e" content={ogTy, p, e}  />
      <meta, propert, y="og:u, r, l" content={canonicalU, r, l}  />
      <meta, propert, y="og:ima, g, e" content={ogIma, g, e}  />
      <meta, propert, y="og: site_na, m, e" content="Zion, Tech, Group"  />
      <meta, propert, y="og:loca, l, e" content="en_, U, S"  />
      <meta name="twit, t, e
  r:ca, r, d" content={twitterCa, r, d}  />
      <meta name="twitt, e, r:tit, l, e" content={fullTit, l, e}  />
      <meta name="twitt, e, r:descripti, o, n" content={descripti, o, n}  />
      <meta name="twitt, e, r:ima, g, e" content={ogIma, g, e}  />
      <meta name="auth, o, r" content="Zion, Tech, Group"  />
      <meta name="viewpo, r, t" content="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1.0"  />
      <script, typ, e="applicati, o, n/ld+js, o, n">{JS, O, N.stringi, f, y({
        '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g'
        '@ty, p, e': 'Organizati, o, n'
        na, m, e: 'Zion, Tech, Group'
        u, r, l: 'ht, t, p
  s://ziontechgro, u, p.c, o, m'
        lo, g, o: 'ht, t, p
  s://ziontechgro, u, p.c, o, m/lo, g, o.p, n, g'
        descripti, o, n: 'Enterpri, s, e-grade, A, I, micro, Saa, S, and, IT, solutions provid, e, r'
        contactPoi, n, t: {
          '@ty, p, e': 'ContactPoi, n, t'
          telepho, n, e: '+1-3, 0, 2-4, 6, 4-09, 5, 0'
          contactTy, p, e: 'customer, servic, e'
          ema, i, l: 'kleb, e, r@ziontechgro, u, p.c, o, m'
        }
        addre, s, s: {
          '@ty, p, e': 'PostalAddre, s, s'
          streetAddre, s, s: '364, E, Main St, STE, 1008'
          addressLocali, t, y: 'Middleto, w, n'
          addressRegi, o, n: 'DE'
          postalCo, d, e: '197, 0, 9'
          addressCount, r, y: 'US'
        }
        same, A, s: [
          'ht, t, p
  s://twitt, e, r.c, o, m/ziontechgro, u, p'
          'htt, p, s://linked, i, n.c, o, m/compa, n, y/zi, o, n-te, c, h-gro, u, p'
          'htt, p, s://gith, u, b.c, o, m/ZionClou, d, s'
        ]
      })}</scri, p, t>
    </Helmet>
  );
};
export default SEO;