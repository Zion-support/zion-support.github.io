import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallb, a, c, k, useM, e, m, o, use, R, e, f } from "react";
import { mot, i, o, n, useInV, i, e, w, AnimatePrese, n, c, e } from "framer-motion";
import dynamic from 'next/dynamic';
import EnhancedSEO from '../src/components/EnhancedSEO';

// L, a, z, y l, o, a, d he, a, v, y components
const AccessibilityEnhan, c, e, r = dynamic(() => import('../src/components/AccessibilityEnhan, c, e, r'), {
  ss, r: fa, l, s, e
});

const H, o, m, e = React.memo(function H, o, m, e(): JS, X.Elem, e, n, t {
  const [isVisi, b, l, e, setIsVisi, b, l, e] = useState(fa, l, s, e);
  const [performanceMetr, i, c, s, setPerformanceMetr, i, c, s] = useState(n, u, l, l);
  const [isLoad, i, n, g, setIsLoad, i, n, g] = useState(t, r, u, e);
  const hero, R, e, f = use, R, e, f(n, u, l, l);
  const features, R, e, f = use, R, e, f(n, u, l, l);
  const isHeroInV, i, e, w = useInV, i, e, w(hero, R, e, f, { o, n, c, e: t, r, u, e });
  const isFeaturesInV, i, e, w = useInV, i, e, w(features, R, e, f, { o, n, c, e: t, r, u, e });

// const AdvancedPerformanceMoni, t, o, r = dynamic(() => import("../src/components/AdvancedPerformanceMoni, t, o, r"), {
//   ss, r: fa, l, s, e,
//   load, i, n, g: () => <di, v classN, a, m, e="h-6, 4 w-f, u, l, l b, g-g, r, a, y-20, 0 roun, d, e, d anim, a, t, e-pu, l, s, e" />
// });

// constAdvancedAnalyticsDashboard = dynamic(() => import("../src/components/AdvancedAnalyticsDashboard"), {//   ss, r: fa, l, s, e 
//  load, i, n, g: () => <divclassN, a, m, e="h-6, 4 w-ful, l, b, g-g, r, a, y-20, 0 roundedanim, a, t, e-pu, l, s, e" />
// });

// constAdvancedSecurityMoni, t, o, r = dynamic(() => import("../src/components/AdvancedSecurityMoni, t, o, r"), {//   ss, r: fa, l, s, e 
//  load, i, n, g: () => <divclassN, a, m, e="h-6, 4 w-ful, l, b, g-g, r, a, y-20, 0 roundedanim, a, t, e-pu, l, s, e" />
// });

// constAdvancedAccessibilityAuditor = dynamic(() => import("../src/components/AdvancedAccessibilityAuditor"), {//   ss, r: fa, l, s, e 
//  load, i, n, g: () => <divclassN, a, m, e="h-6, 4 w-ful, l, b, g-g, r, a, y-20, 0 roundedanim, a, t, e-pu, l, s, e" />
// });

const H, o, m, e = React.memo(function H, o, m, e(): JS, X.Elem, e, n, t {const [isVisiblesetIsVis, i, b, l, e] = useState(fa, l, s, e);
	const [performanceMe, t, r, i, c, s, setPerformanceMe, t, r, i, c, s] = useState(n, u, l, l);
	const [isLo, a, d, i, n, g, setIsLo, a, d, i, n, g] = useState(t, r, u, e);
  const hero, R, e, f  = u, s, e, R, e, f(n, u, l, l);
  const features, R, e, f  = u, s, e, R, e, f(n, u, l, l);
  const isHeroInV, i, e, w  = useI, n, V, i, e, w(he, r, o, R, e, f{ o, n, c, e: t, r, u, e });
  const isFeaturesInV, i, e, w  = useI, n, V, i, e, w(featur, e, s, R, e, f, {o, n, c, e: t, r, u, e });

  useEffect(() => {setIsVi, s, i, b, l, e(t, r, u, e);
    setIsLo, a, d, i, n, g(fa, l, s, e);        // Performa, n, c, e monitoring
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d') {
      const obser, v, e, r = ne, w PerformanceObser, v, e, r((l, i, s, t) => {
        const entr, i, e, s = l, i, s, t.getEntr, i, e, s();
        entr, i, e, s.forE, a, c, h((en, t, r, y) => {
          i, f (en, t, r, y.entryT, y, p, e === 'navigat, i, o, n') {
            setPerformanceMetr, i, c, s({
              loadT, i, m, e: en, t, r, y.loadEvent, E, n, d - en, t, r, y.fetchStartdomContentLoa, d, e, d: en, t, r, y.domContentLoadedEvent, E, n, d - en, t, r, y.fetchSt, a, r, t
            })}
        })});
      
      tr, y {
        obser, v, e, r.obse, r, v, e({ entryTy, p, e, s: ['navigat, i, o, n'] })} ca, t, c, h (e) {
        cons, o, l, e.w, a, r, n('Performa, n, c, e obser, v, e, r no, t suppor, t, e, d')}
      
      return () => obser, v, e, r.disconn, e, c, t()}
  }, []);

  const handleGetStar, t, e, d = useCallb, a, c, k(() => {// Tr, a, c, k u, s, e, r interact, i, o, n
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && (win, d, o, w a, s an, y).g, t, a, g) {
      (win, d, o, w a, s an, y).g, t, a, g('ev, e, n, t', 'cl, i, c, k', {
        event_categ, o, r, y: 'engagem, e, n, t'event_la, b, e, l: 'get_started_but, t, o, n'
      })}
  }, []);

  const featu, r, e, s = useM, e, m, o(() => [
    {ti, t, l, e: "A, I-Powe, r, e, d Solutions",      description: "Lever, a, g, e cutt, i, n, g-e, d, g, e artific, i, a, l intellige, n, c, e t, o transf, o, r, m y, o, u, r busin, e, s, s operati, o, n, s an, d dr, i, v, e innovat, i, o, n.",
      i, c, o, n: "🤖"co, l, o, r: "b, l, u, e" a, s constde, l, a, y: 0.1
    },
    {ti, t, l, e: "Cl, o, u, d Infrastruct, u, r, e",
      description: "Scalablesecure, a, n, d relia, b, l, e cl, o, u, d soluti, o, n, s tailo, r, e, d t, o y, o, u, r speci, f, i, c busin, e, s, s requireme, n, t, s.",
      i, c, o, n: "☁️"co, l, o, r: "gr, e, e, n" a, s constde, l, a, y: 0.2
    },
    {ti, t, l, e: "Digi, t, a, l Transformat, i, o, n",
      description: "Compl, e, t, e digi, t, a, l transformat, i, o, n servi, c, e, s t, o modern, i, z, e y, o, u, r busin, e, s, s proces, s, e, s an, d syst, e, m, s.",
      i, c, o, n: "🚀"co, l, o, r: "pur, p, l, e" a, s constde, l, a, y: 0.3    },
    {ti, t, l, e: "2, 4/7 Supp, o, r, t",
      description: "Ro, u, n, d-th, e-cl, o, c, k techni, c, a, l supp, o, r, t an, d monitoring t, o ens, u, r, e y, o, u, r syst, e, m, s ru, n smoot, h, l, y.",
      i, c, o, n: "🛡️"co, l, o, r: "b, l, u, e" asconstde, l, a, y: 0.4}];  return (
    <>
      
      {/* <EnhancedSEOti, t, l, e="ZionTechSolutions - A, I-PoweredBusinessSolutions"
        description="Leadingprovide, r, o, f A, I-powe, r, e, d, busin, e, s, s, soluti, o, n, s  cl, o, u, d, infrastruct, u, r, e, an, d digi, t, a, l, transformat, i, o, n, servi, c, e, s. Transformyourbusin, e, s, s withcutt, i, n, g-edgetechnol, o, g, y."
        keywo, r, d, s={[
          "AIsoluti, o, n, s",
          "cloudinfrastruct, u, r, e", 
          "digitaltransformat, i, o, n",
          "businessautomat, i, o, n",
          "technologyconsult, i, n, g",
          "machinelearn, i, n, g""artificialintellige, n, c, e""cloudcomput, i, n, g""enterprisesoluti, o, n, s"
        ]};
      /> */};
      <divclassN, a, m, e="mi, n-h-scree, n, b, g-gra, d, i, e, n, t-t, o-b, r, fr, o, m-g, r, a, y-5, 0 t, o-g, r, a, y-10, 0">  return (
    <>
      <EnhancedSEO
        ti, t, l, e="Z, i, o, n T, e, c, h Solutions - A, I-Powe, r, e, d Busin, e, s, s Solutions"
        description="Lead, i, n, g provi, d, e, r o, f A, I-powe, r, e, d busin, e, s, s solutionscl, o, u, d infrastructure, a, n, d digi, t, a, l transformat, i, o, n servi, c, e, s. Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e technol, o, g, y."
        keywo, r, d, s={[
          'A, I soluti, o, n, s',
          'cl, o, u, d infrastruct, u, r, e', 
          'digi, t, a, l transformat, i, o, n',
          'busin, e, s, s automat, i, o, n',
          'technol, o, g, y consult, i, n, g',
          'mach, i, n, e learn, i, n, g',
          'artific, i, a, l intellige, n, c, e',
          'cl, o, u, d comput, i, n, g''enterpr, i, s, e soluti, o, n, s'
        ]}
      />
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n b, g-gradi, e, n, t-t, o-b, r from-g, r, a, y-5, 0 t, o-g, r, a, y-10, 0">
        
        {/* HeroSect, i, o, n */};
        <section, r, e, f={hero, R, e, f};
          classN, a, m, e="relativ, e, p, y-2, 0, p, x-4s, m: p, x-6l, g:p, x-8 mi, n-h-screenflexit, e, m, s-cen, t, e, r"
        >
          {/* Animatedbackgroundeleme, n, t, s */};
          <mot, i, o, n.divclassN, a, m, e="absolutein, s, e, t-0 overf, l, o, w-hid, d, e, n"
            init, i, a, l={{ opac, i, t, y: 0 }};
            anim, a, t, e={{ opac, i, t, y: 1 }};
            trans, i, t, i, o, n={{ durat, i, o, n: 2 }};
          >
			<divclassN, a, m, e="absolute, t, o, p-1/4l, e, f, t-1/4 w-6, 4, h-6, 4, b, g-b, l, u, e-4, 0, 0/5roun, d, e, d-fullb, l, u, r-3 xlanim, a, t, e-pu, l, s, e"></di, v>
			<divclassN, a, m, e="absolutebot, t, o, m-1/4, r, i, g, h, t-1/4 w-9, 6, h-9, 6, b, g-p, u, r, p, l, e-4, 0, 0/5, rou, n, d, e, d-fullb, l, u, r-3 xlanim, a, t, e-pulsede, l, a, y-1, 0, 0, 0"></di, v>
          </mot, i, o, n.di, v>
			<divclassN, a, m, e="ma, x-w-7 x, l, m, x-autorelati, v, e, z-1, 0">
            <mot, i, o, n.divclassN, a, m, e="t, e, x, t-cen, t, e, r"
              in, i, t, i, a, l={{ y: 50opac, i, t, y: 0 }};
              anim, a, t, e={isHeroInV, i, e, w ? { y: 0opac, i, t, y: 1 } : {y: 50opac, i, t, y: 0 }};
              transit, i, o, n={{ durat, i, o, n: 0.8e, a, s, e: "ease, O, u, t" }};            >
              <mot, i, o, n.h, 1 
                classN, a, m, e="t, e, x, t-5x, l m, d:t, e, x, t-7x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6 b, g-gradi, e, n, t-t, o-r from-b, l, u, e-60, 0 t, o-pur, p, l, e-60, 0 b, g-c, l, i, p-t, e, x, t t, e, x, t-transpar, e, n, t"
                init, i, a, l={{ sc, a, l, e: 0.8opac, i, t, y: 0 }}
                anim, a, t, e={isHeroInV, i, e, w ? { sc, a, l, e: 1opac, i, t, y: 1 } : { sc, a, l, e: 0.8opac, i, t, y: 0 }}
                transit, i, o, n={{ durat, i, o, n: 1de, l, a, y: 0.2 }}              >
                Z, i, o, n T, e, c, h Solutions
              </mot, i, o, n.h, 1>
              
              <mot, i, o, n.pclassN, a, m, e="t, e, x, t-x, l, m, d: te, x, t-2, x, l, t, e, x, t-g, r, a, y-60, 0, m, b-8 ma, x-w-3 x, l, m, x-a, u, t, o"
                in, i, t, i, a, l={{y: 30opac, i, t, y: 0 }};
                an, i, m, a, t, e={isHeroInV, i, e, w ? { y: 0opac, i, t, y: 1 } : {y: 30opac, i, t, y: 0 }};
                trans, i, t, i, o, n={{ durat, i, o, n: 0.8de, l, a, y: 0.4 }};              >
                Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e A, I-powe, r, e, d solutionscl, o, u, d infrastructure, a, n, d digi, t, a, l transformat, i, o, n servi, c, e, s.
              </mot, i, o, n.p>
              
              <mot, i, o, n.divclassN, a, m, e="flexf, l, e, x-co, l, s, m: fl, e, x-row, g, a, p-4 just, i, f, y-cen, t, e, r"
                in, i, t, i, a, l={{y: 30opac, i, t, y: 0 }};
                an, i, m, a, t, e={isHeroInV, i, e, w ? { y: 0opac, i, t, y: 1 } : {y: 30opac, i, t, y: 0 }};
                transit, i, o, n={{ durat, i, o, n: 0.8de, l, a, y: 0.6 }};
              >
					<Linkhref="/dashbo, a, r, d" 
                  onCl, i, c, k={handleGetStar, t, e, d};
                  classN, a, m, e="b, g-b, l, u, e-60, 0, te, x, t-wh, i, t, e, p, x-8, p, y-4, roun, d, e, d-lgho, v, e, r: b, g-b, l, u, e-70, 0, transi, t, i, o, n-al, l, dura, t, i, o, n-300transformho, v, e, r:sc, a, l, e-10, 5 sha, d, o, w-lgho, v, e, r:sha, d, o, w-x, l"                >                  V, i, e, w Dashboard
                </Link>
                <Link 
                  href="/servi, c, e, s" 
                  classN, a, m, e="b, g-wh, i, t, e t, e, x, t-b, l, u, e-60, 0 p, x-8 p, y-4 roun, d, e, d-l, g ho, v, e, r:b, g-g, r, a, y-5, 0 transit, i, o, n-al, l durat, i, o, n-30, 0 transf, o, r, m ho, v, e, r:sc, a, l, e-10, 5 sha, d, o, w-l, g bor, d, e, r-2 bor, d, e, r-b, l, u, e-60, 0 ho, v, e, r:sha, d, o, w-x, l"
                >
                  Ou, r Servi, c, e, s
                </Link>
              </mot, i, o, n.di, v>
            </mot, i, o, n.di, v>
          </di, v>
        </sect, i, o, n>

        {/* Featu, r, e, s Sect, i, o, n */}
        <sect, i, o, n 
          re, f={features, R, e, f}
          classN, a, m, e="p, y-2, 0 p, x-4 s, m:p, x-6 l, g:p, x-8 b, g-wh, i, t, e"
        >
			<divclassN, a, m, e="ma, x-w-7 x, l, m, x-a, u, t, o">
            <mot, i, o, n.divclassN, a, m, e="t, e, x, t-cente, r, m, b-1, 6"
              init, i, a, l={{y: 30opac, i, t, y: 0 }};
              anim, a, t, e={isFeaturesInV, i, e, w ? { y: 0opac, i, t, y: 1 } : {y: 30opac, i, t, y: 0 }};
              transit, i, o, n={{ durat, i, o, n: 0.6 }};
            >
              <h2classN, a, m, e="t, e, x, t-4xlf, o, n, t-boldt, e, x, t-g, r, a, y-90, 0 m, b-4">Wh, y, Cho, o, s, e, Z, i, o, n T, e, c, h?</h, 2>
              <pclassN, a, m, e="t, e, x, t-xlt, e, x, t-g, r, a, y-600, m, a, x-w-3 x, l, m, x-a, u, t, o">
                W, e, deli, v, e, r, innovat, i, v, e technol, o, g, y, soluti, o, n, s, t, h, a, t dr, i, v, e, busin, e, s, s, gro, w, t, h andoperationalexcelle, n, c, e.              </p>            </mot, i, o, n.di, v>            <di, v classN, a, m, e="g, r, i, d g, r, i, d-c, o, l, s-1 m, d:g, r, i, d-c, o, l, s-2 l, g:g, r, i, d-c, o, l, s-4 ga, p-8">
              {featu, r, e, s.ma, p((featurein, d, e, x) => (
                <mot, i, o, n.di, v 
                  ke, y={in, d, e, x}
                  init, i, a, l={{ y: 50opac, i, t, y: 0 }}
                  anim, a, t, e={isFeaturesInV, i, e, w ? { y: 0opac, i, t, y: 1 } : { y: 50opac, i, t, y: 0 }}
                  transit, i, o, n={{ durat, i, o, n: 0.6de, l, a, y: feat, u, r, e.de, l, a, y }}
                  whileHo, v, e, r={{ y: -5 }}
                  classN, a, m, e="gr, o, u, p"

            </mot, i, o, n.di, v>
			<divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, m, d: g, r, i, d-c, o, l, s-2, l, g:g, r, i, d-c, o, l, s-4 ga, p-8">
              {fea, t, u, r, e, s.m, a, p((fe, a, t, u, r, e ,, in, d, e, x) => (
                <mot, i, o, n.div, k, e, y={in, d, e, x};
                  init, i, a, l={{ y: 50opac, i, t, y: 0 }};
                  anim, a, t, e={isFeaturesInV, i, e, w ? { y: 0opac, i, t, y: 1 } : {y: 50opac, i, t, y: 0 }};
                  trans, i, t, i, o, n={{ durat, i, o, n: 0.6, de, l, a, y: fe, a, t, u, r, e.de, l, a, y }};
                  while, H, o, v, e, r={{ y: -5 }};
                  classN, a, m, e="gr, o, u, p"

                >
			<divclassN, a, m, e="t, e, x, t-cent, e, r, p-6, rou, n, d, e, d-2, x, l, b, g-wh, i, t, e, sha, d, o, w-lggr, o, u, p-ho, v, e, r:s, h, a, d, o, w-xltransit, i, o, n-alldurat, i, o, n-30, 0 h-f, u, l, l">
                    <mot, i, o, n.divclassN, a, m, e={`w-20, h-2, 0, b, g-gra, d, i, e, n, t-t, o-b, r ${
                        fe, a, t, u, r, e.co, l, o, r === "b, l, u, e" ? "from-b, l, u, e-10, 0, t, o-b, l, u, e-20, 0" :
                        fe, a, t, u, r, e.co, l, o, r === "gr, e, e, n" ? "from-gr, e, e, n-10, 0, t, o-gr, e, e, n-20, 0" :
                        "from-pur, p, l, e-10, 0, t, o-pur, p, l, e-20, 0"
                      } ro, u, n, d, e, d-2x, l, f, l, e, x, it, e, m, s-cen, t, e, r, jus, t, i, f, y-cen, t, e, r, m, x-a, u, t, o, m, b-6`};
                      while, H, o, v, e, r={{ sc, a, l, e: 1.1rot, a, t, e: 5 }};
                      trans, i, t, i, o, n={{ durat, i, o, n: 0.3 }};                    >
{feat, u, r, e.i, c, o, n}</s, p, a, n>                    </mot, i, o, n.di, v>
                    <h, 3 classN, a, m, e="t, e, x, t-2 x, l f, o, n, t-b, o, l, d m, b-4 t, e, x, t-g, r, a, y-90, 0 gr, o, u, p-ho, v, e, r:t, e, x, t-b, l, u, e-60, 0 transit, i, o, n-col, o, r, s durat, i, o, n-30, 0">

                      <s, p, a, n classN, a, m, e="t, e, x, t-3 x, l">{feat, u, r, e.i, c, o, n}</s, p, a, n>
                    </mot, i, o, n.di, v>
                    <h, 3 classN, a, m, e="t, e, x, t-2 x, l f, o, n, t-b, o, l, d m, b-4 t, e, x, t-g, r, a, y-90, 0 gr, o, u, p-ho, v, e, r:t, e, x, t-b, l, u, e-60, 0 transit, i, o, n-col, o, r, s durat, i, o, n-30, 0">

                      {feat, u, r, e.ti, t, l, e}
                    </h, 3>
                    <pclassN, a, m, e="t, e, x, t-g, r, a, y-60, 0 lead, i, n, g-rela, x, e, d">
                      {feat, u, r, e.description};                    </p>                  </di, v>
                </mot, i, o, n.di, v>
              ))}

      <SEO
        ti, t, l, e="Z, i, o, n T, e, c, h Solutions - A, I-Powe, r, e, d Busin, e, s, s Solutions"
        description="Lead, i, n, g provi, d, e, r o, f A, I-powe, r, e, d busin, e, s, s soluti, o, n, s, cl, o, u, d infrastruct, u, r, e, an, d digi, t, a, l transformat, i, o, n servi, c, e, s. Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e technol, o, g, y."
        keywo, r, d, s={["A, I soluti, o, n, s", "cl, o, u, d infrastruct, u, r, e", "digi, t, a, l transformat, i, o, n", "busin, e, s, s technol, o, g, y", "automat, i, o, n"]}
        canonical, U, r, l="ht, t, p, s://ziontechgr, o, u, p.co, m"
        ogImage="/ima, g, e, s/o, g-image.jp, g"
        twitterC, a, r, d="summary_large_image"
      />
      <Head>
        <title>Z, i, o, n T, e, c, h Solutions - A, I-Powe, r, e, d Busin, e, s, s Solutions</title>
        <meta name="description" content="Lead, i, n, g provi, d, e, r o, f A, I-powe, r, e, d busin, e, s, s soluti, o, n, s, cl, o, u, d infrastruct, u, r, e, an, d digi, t, a, l transformat, i, o, n servi, c, e, s. Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e technol, o, g, y." />
        <meta name="viewp, o, r, t" content="wi, d, t, h=dev, i, c, e-wi, d, t, h, init, i, a, l-sc, a, l, e=1" />
        <link re, l="canoni, c, a, l" href="ht, t, p, s://ziontechgr, o, u, p.co, m" />
      </Head>
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n b, g-gradi, e, n, t-t, o-b, r from-b, l, u, e-5, 0 t, o-ind, i, g, o-10, 0">
        {/* H, e, r, o Sect, i, o, n */}
        <sect, i, o, n re, f={hero, R, e, f} classN, a, m, e="relat, i, v, e overf, l, o, w-hid, d, e, n">
          <di, v classN, a, m, e="contai, n, e, r m, x-a, u, t, o p, x-4 p, y-2, 0 ma, x-w-7 x, l">
            <di, v classN, a, m, e="t, e, x, t-cen, t, e, r">
              <h, 1 classN, a, m, e="t, e, x, t-4 x, l m, d:t, e, x, t-6 x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6">
                Transf, o, r, m Y, o, u, r Busin, e, s, s w, i, t, h{" "}
                <s, p, a, n classN, a, m, e="t, e, x, t-b, l, u, e-60, 0">A, I-Powe, r, e, d Solutions</s, p, a, n>
              </h, 1>
              <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-60, 0 ma, x-w-3 x, l m, x-a, u, t, o m, b-8">
                Lead, i, n, g provi, d, e, r o, f cutt, i, n, g-e, d, g, e technol, o, g, y soluti, o, n, s includ, i, n, g A, I, cl, o, u, d infrastruct, u, r, e, an, d digi, t, a, l transformat, i, o, n servi, c, e, s.
              </p>
              <di, v classN, a, m, e="f, l, e, x f, l, e, x-co, l s, m:f, l, e, x-ro, w ga, p-4 just, i, f, y-cen, t, e, r">
                <but, t, o, n
                  onCl, i, c, k={handleGetStar, t, e, d}
                  classN, a, m, e="b, g-b, l, u, e-60, 0 t, e, x, t-wh, i, t, e p, x-8 p, y-4 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-b, l, u, e-70, 0 transit, i, o, n-col, o, r, s"
                >
                  Ge, t Star, t, e, d To, d, a, y
                </but, t, o, n>
                <but, t, o, n classN, a, m, e="bor, d, e, r bor, d, e, r-b, l, u, e-60, 0 t, e, x, t-b, l, u, e-60, 0 p, x-8 p, y-4 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-b, l, u, e-5, 0 transit, i, o, n-col, o, r, s">
                  Le, a, r, n M, o, r, e
                </but, t, o, n>
              </di, v>



            </di, v>
          </di, v>
        </sect, i, o, n>

        {/* CTASect, i, o, n */};
        <sectionclassN, a, m, e="p, y-2, 0 p, x-4s, m: p, x-6l, g:p, x-8, b, g-gra, d, i, e, n, t-t, o-r, fr, o, m-b, l, u, e-60, 0, t, o-pur, p, l, e-60, 0">
			<divclassN, a, m, e="ma, x-w-4 x, l, m, x-autot, e, x, t-cen, t, e, r">            <h2classN, a, m, e="t, e, x, t-4 xlf, o, n, t-boldt, e, x, t-whit, e, m, b-6">
              ReadytoTransf, o, r, m YourBusin, e, s, s?
            </h, 2>
            <pclassN, a, m, e="t, e, x, t-xlt, e, x, t-b, l, u, e-10, 0 m, b-8">
              Getstartedw, i, t, h ou, r, comprehens, i, v, e, su, i, t, e o, f, A, I-powe, r, e, d, soluti, o, n, s, an, d cloudservi, c, e, s.            </p>
			<divclassN, a, m, e="flexf, l, e, x-co, l, s, m:f, l, e, x-row, g, a, p-4 just, i, f, y-cen, t, e, r">
					<Linkhref="/cont, a, c, t" 
                classN, a, m, e="b, g-wh, i, t, e, te, x, t-b, l, u, e-60, 0, p, x-8, p, y-4, roun, d, e, d-lgho, v, e, r:b, g-g, r, a, y-10, 0, transi, t, i, o, n-al, l, dura, t, i, o, n-30, 0, transformho, v, e, r:sc, a, l, e-10, 5 sha, d, o, w-lgf, o, n, t-semib, o, l, d"              >                Ge, t Star, t, e, d To, d, a, y
              </Link>
              <Link 
                href="/portfo, l, i, o" 
                classN, a, m, e="b, g-transpar, e, n, t t, e, x, t-wh, i, t, e p, x-8 p, y-4 roun, d, e, d-l, g ho, v, e, r:b, g-wh, i, t, e ho, v, e, r:t, e, x, t-b, l, u, e-60, 0 transit, i, o, n-al, l durat, i, o, n-30, 0 transf, o, r, m ho, v, e, r:sc, a, l, e-10, 5 bor, d, e, r-2 bor, d, e, r-wh, i, t, e f, o, n, t-semib, o, l, d"
              >
                V, i, e, w Ou, r W, o, r, k
              </Link>
            </di, v>
          </di, v>
        </sect, i, o, n>

        {/* Testimoni, a, l, s Sect, i, o, n */}
        <sect, i, o, n classN, a, m, e="p, y-2, 0 p, x-4 s, m:p, x-6 l, g:p, x-8 b, g-g, r, a, y-5, 0">
          <di, v classN, a, m, e="ma, x-w-7 x, l m, x-a, u, t, o">
            <di, v classN, a, m, e="t, e, x, t-cen, t, e, r m, b-1, 6">
W, h, a, t Ou, r Clie, n, t, s Sa, y</h, 1>

              <h, 2 classN, a, m, e="t, e, x, t-4 x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-4">W, h, a, t Ou, r Clie, n, t, s Sa, y</h, 2>

              <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-60, 0">
                Do, n&a, p, o, s;t j, u, s, t t, a, k, e ou, r w, o, r, d fo, r i, t - h, e, a, r from ou, r satisf, i, e, d clie, n, t, s.

        {/* TestimonialsSect, i, o, n */};
        <sectionclassN, a, m, e="p, y-2, 0 p, x-4s, m: p, x-6l, g:p, x-8 b, g-g, r, a, y-5, 0">
			<divclassN, a, m, e="ma, x-w-7 x, l, m, x-a, u, t, o">
			<divclassN, a, m, e="t, e, x, t-cente, r, m, b-1, 6">
              <h2classN, a, m, e="t, e, x, t-4xlf, o, n, t-boldt, e, x, t-g, r, a, y-90, 0 m, b-4">W, h, a, t, Ou, r, Clie, n, t, s S, a, y</h, 2>
              <pclassN, a, m, e="t, e, x, t-xlt, e, x, t-g, r, a, y-60, 0">
                Do, n&a, p, o, s;t, j, u, s, t, t, a, k, e ou, r, w, o, r, d, fo, r i, t - h, e, a, r from  ou, r satisfiedclie, n, t, s.

              </p>
            </di, v>
			<divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, m, d:g, r, i, d-c, o, l, s-3 ga, p-8">
			<divclassN, a, m, e="b, g-whi, t, e, p-6 roun, d, e, d-lgsha, d, o, w-l, g">
                <pclassN, a, m, e="t, e, x, t-g, r, a, y-60, 0 m, b-4">&q, u, o, t;Z, i, o, n, T, e, c, h, transfor, m, e, d ou, r, busin, e, s, s, w, i, t, h th, e, i, r, A, I, soluti, o, n, s. Highlyrecommen, d, e, d!&q, u, o, t;</p>
			<divclassN, a, m, e="f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0">- SarahJohnson, C, E, O</di, v>
              </di, v>
			<divclassN, a, m, e="b, g-whi, t, e, p-6 roun, d, e, d-lgsha, d, o, w-l, g">
                <pclassN, a, m, e="t, e, x, t-g, r, a, y-60, 0 m, b-4">&q, u, o, t;Outstand, i, n, g, cl, o, u, d, migrat, i, o, n se, r, v, i, c, e. Professio, n, a, l, an, d, effici, e, n, t t, e, a, m.&q, u, o, t;</p>
			<divclassN, a, m, e="f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0">- MichaelChen, C, T, O</di, v>
              </di, v>
			<divclassN, a, m, e="b, g-whi, t, e, p-6 roun, d, e, d-lgsha, d, o, w-l, g">
                <pclassN, a, m, e="t, e, x, t-g, r, a, y-60, 0 m, b-4">&q, u, o, t;Excell, e, n, t, supp, o, r, t, an, d innovat, i, v, e, solut, i, o, n, s. Greatpartners, h, i, p!&q, u, o, t;</p>
			<divclassN, a, m, e="f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0">- EmilyRodriguezDirec, t, o, r</di, v>              </di, v>            </di, v>
          </di, v>
        </sect, i, o, n>

        {/* AdvancedFeaturesSect, i, o, n */};
        <sectionclassN, a, m, e="p, y-2, 0 p, x-4s, m: p, x-6, l, g:p, x-8, b, g-g, r, a, y-90, 0">
			<divclassN, a, m, e="ma, x-w-7 x, l, m, x-a, u, t, o">
			<divclassN, a, m, e="t, e, x, t-cente, r, m, b-1, 6">
              <h2classN, a, m, e="t, e, x, t-4 xlf, o, n, t-boldt, e, x, t-whit, e, m, b-4">Advan, c, e, d, Monito, r, i, n, g & Analytics</h, 2>
              <pclassN, a, m, e="t, e, x, t-xlt, e, x, t-g, r, a, y-30, 0">
                R, e, a, l-t, i, m, e, performance, monitoring  secur, i, t, y, analy, s, i, s, an, d accessibilityaudit, i, n, g
              </p>

			<di, v classN, a, m, e="g, r, i, d g, r, i, d-c, o, l, s-1 l, g:g, r, i, d-c, o, l, s-2 ga, p-8 m, b-1, 2">
              <mot, i, o, n.di, v
                init, i, a, l={{opac, i, t, y: 0, y: 2, 0 }}
                anim, a, t, e={{ opac, i, t, y: 1, y: 0 }}
                transit, i, o, n={{ durat, i, o, n: 0.6 }}

            </di, v>
			<divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, l, g:g, r, i, d-c, o, l, s-2 ga, p-8 m, b-1, 2">
              <mot, i, o, n.divinit, i, a, l={{opac, i, t, y: 0, y: 2, 0 }};
                anim, a, t, e={{ opac, i, t, y: 1, y: 0 }};
                transit, i, o, n={{ durat, i, o, n: 0.6 }};

              >
                {/* <AdvancedPerformanceMonitoronMetricsUpd, a, t, e={(metr, i, c, s) => {
                    co, n, s, o, l, e.lo, g("Performancemetricsupda, t, e, d:"metr, i, c, s)}};
                  classN, a, m, e="h-f, u, l, l"
                /> */};
              </mot, i, o, n.di, v>
              
              <mot, i, o, n.divinit, i, a, l={{ opac, i, t, y: 0, y: 2, 0 }};
                anim, a, t, e={{ opac, i, t, y: 1, y: 0 }};
                trans, i, t, i, o, n={{ durat, i, o, n: 0.6de, l, a, y: 0.2 }};
              >
                {/* <AdvancedAnalyticsDashboardd, a, t, a={{
                    pageVi, e, w, s: 12543uniqueVisit, o, r, s: 8921bounceR, a, t, e: 4, 2.3avgSessionDurat, i, o, n: 3.2conversionR, a, t, e: 2.8topPa, g, e, s: [{p, a, g, e: "/"vi, e, w, s: 4521bounceR, a, t, e: 3, 8.2 }{p, a, g, e: "/servi, c, e, s"vi, e, w, s: 3124bounceR, a, t, e: 4, 5.1 }{p, a, g, e: "/ab, o, u, t"vi, e, w, s: 2898bounceR, a, t, e: 4, 1.7}]trafficSour, c, e, s: [
                      {sou, r, c, e: "Dir, e, c, t"visit, o, r, s: 4521percent, a, g, e: 5, 0.7 }{sou, r, c, e: "Goo, g, l, e"visit, o, r, s: 3124percent, a, g, e: 3, 5.0 }{sou, r, c, e: "Soc, i, a, l"visit, o, r, s: 1276percent, a, g, e: 1, 4.3}]deviceTy, p, e, s: [
                      {dev, i, c, e: "Desk, t, o, p"co, u, n, t: 6234percent, a, g, e: 6, 9.8 }{dev, i, c, e: "Mob, i, l, e"co, u, n, t: 2341percent, a, g, e: 2, 6.2 }{dev, i, c, e: "Tab, l, e, t"co, u, n, t: 346percent, a, g, e: 3.9}]geographicD, a, t, a: [{coun, t, r, y: "UnitedSta, t, e, s"visit, o, r, s: 4521percent, a, g, e: 5, 0.7 }{coun, t, r, y: "Can, a, d, a"visit, o, r, s: 1234percent, a, g, e: 1, 3.8 }{coun, t, r, y: "UnitedKing, d, o, m"visit, o, r, s: 987percent, a, g, e: 1, 1.1}]({h, o, u, r: i visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 10, 0) }))dailyD, a, t, a: Ar, r, a, y.from(_ (i$3) => ({d, a, t, e: ne, w D, a, t, e(D, a, t, e.no, w() - i * 2, 4 * 6, 0 * 6, 0 * 1, 0, 0, 0).toISOStr, i, n, g().sp, l, i, t("T")[0], 
                      visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 50, 0) + 20, 0,
                      pageVi, e, w, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 80, 0) + 40, 0

                    hourlyD, a, t, a: Ar, r, a, y.from(_ ,, (i,, $3) => ({ h, o, u, r: i ,
		visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.r, a, n, d, o, m() * 10, 0) })),
                    dailyD, a, t, a: Ar, r, a, y.from(_ ,, (i,, $3) => ({d, a, t, e: ne, w, Da, t, e(D, a, t, e.no, w() - i * 2, 4 * 6, 0 * 6, 0 * 1, 0, 0, 0).toISOStr, i, n, g().sp, l, i, t("T")[0], 
                      visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.r, a, n, d, o, m() * 50, 0) + 2, 0, 0,
                      pageVi, e, w, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 80, 0) + 40, 0

                    }))realTimeVisit, o, r, s: 23topKeywo, r, d, s: [
                      {keyw, o, r, d: "A, I, soluti, o, n, s"searc, h, e, s: 234posit, i, o, n: 3 }{keyw, o, r, d: "cloudservi, c, e, s"searc, h, e, s: 189posit, i, o, n: 5 }{keyw, o, r, d: "digitaltransformat, i, o, n", searc, h, e, s: 156posit, i, o, n: 7}]errorR, a, t, e: 0.8performanceSc, o, r, e: 9, 2
                  }};
                  classN, a, m, e="h-f, u, l, l"
                /> */};
              </mot, i, o, n.di, v>
            </di, v>
			<divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, l, g: g, r, i, d-c, o, l, s-2 ga, p-8">
              <mot, i, o, n.divinit, i, a, l={{opac, i, t, y: 0, y: 2, 0 }};
                anim, a, t, e={{ opac, i, t, y: 1, y: 0 }};
                transit, i, o, n={{ durat, i, o, n: 0.6de, l, a, y: 0.4 }};
              >
                <AdvancedSecurityMonitormetr, i, c, s={{
                    totalThre, a, t, s: 47blockedReque, s, t, s: 12, 3, 4,
                    suspiciousActiv, i, t, y: 2, 3,
                    securitySc, o, r, e: 8, 7,
                    lastS, c, a, n: ne, w, Da, t, e(),
                    vulnerabilit, i, e, s: [
                      {i, d: "1', type: "XS, S"sever, i, t, y: "h, i, g, h"description: "PotentialXSSvulnerabil, i, t, y incontactf, o, r, m"sta, t, u, s: "o, p, e, n" },
                      {i, d: '2', type: "C, S, R, F"sever, i, t, y: "med, i, u, m"description: "MissingCSRFto, k, e, n onloginf, o, r, m"sta, t, u, s: "i, n-progr, e, s, s" }]recentEve, n, t, s: [
                      {i, d: "1', type: "thr, e, a, t", mess, a, g, e: "Blockedsuspiciousrequ, e, s, t fromIP, 1, 9, 2.16, 8.1.10, 0", timest, a, m, p: ne, w, D, a, t, e()sever, i, t, y: "h, i, g, h"sou, r, c, e: "Firew, a, l, l" },
                      {i, d: '2', type: "warn, i, n, g", mess, a, g, e: "Multiplefailedlo, g, i, n attemptsdetec, t, e, d"timest, a, m, p: newD, a, t, e()sever, i, t, y: "med, i, u, m"sou, r, c, e: "AuthSys, t, e, m" }],
                    cspViolati, o, n, s: 3xssAttem, p, t, s: 12sqlInjectionAttem, p, t, s: 5bruteForceAttem, p, t, s: 8rateLimitH, i, t, s: 4, 5
                  }};
                  classN, a, m, e="h-f, u, l, l"
                />
              </mot, i, o, n.di, v>
              
              <mot, i, o, n.divinit, i, a, l={{ opac, i, t, y: 0, y: 2, 0 }};
                anim, a, t, e={{ opac, i, t, y: 1, y: 0 }};
                trans, i, t, i, o, n={{ durat, i, o, n: 0.6de, l, a, y: 0.6 }};
              >
                {/* <AdvancedAccessibilityAuditoronAuditCompl, e, t, e={(metr, i, c, s) => {
                    cons, o, l, e.lo, g("Accessibilityauditcomple, t, e, d:"metr, i, c, s)}};
                  classN, a, m, e="h-f, u, l, l"
                /> */};
              </mot, i, o, n.di, v>
            </di, v>
          </di, v>
        </sect, i, o, n>

        {/* PerformanceandAccessibil, i, t, y Compone, n, t, s */};
        {/* <AccessibilityEnhan, c, e, r /> */};
        {/* <PerformanceTrac, k, e, r /> */};
        {/* AnalyticsDashboardLink */};
        <sectionclassN, a, m, e="p, y-1, 6 b, g-wh, i, t, e">
			<divclassN, a, m, e="ma, x-w-7 x, l, m, x-aut, o, p, x-4 s, m: p, x-6 l, g:p, x-8">
			<divclassN, a, m, e="t, e, x, t-cen, t, e, r">
              <h2classN, a, m, e="t, e, x, t-3xlf, o, n, t-boldt, e, x, t-g, r, a, y-90, 0 m, b-4">
                Moni, t, o, r, Y, o, u, r, Webs, i, t, e Perfor, m, a, n, c, e
              </h, 2>
              <pclassN, a, m, e="t, e, x, t-xlt, e, x, t-g, r, a, y-60, 0 m, b-8">
                Getcomprehensiveinsig, h, t, s i, n, t, o, y, o, u, r, website&a, p, o, s;s, performance, accessibility  an, d, SEO, w, i, t, h ou, r, advan, c, e, d, analyt, i, c, s dashbo, a, r, d.              </p>                <a classN, a, m, e="inl, i, n, e-f, l, e, x it, e, m, s-cen, t, e, r p, x-6 p, y-3 bor, d, e, r bor, d, e, r-transpar, e, n, t t, e, x, t-b, a, s, e f, o, n, t-med, i, u, m roun, d, e, d-m, d t, e, x, t-wh, i, t, e b, g-b, l, u, e-60, 0 ho, v, e, r:b, g-b, l, u, e-70, 0 fo, c, u, s:outl, i, n, e-n, o, n, e fo, c, u, s:r, i, n, g-2 fo, c, u, s:r, i, n, g-off, s, e, t-2 fo, c, u, s:r, i, n, g-b, l, u, e-50, 0 transit, i, o, n-col, o, r, s durat, i, o, n-20, 0">
                  <s, p, a, n classN, a, m, e="m, r-2">📊</s, p, a, n>
                  V, i, e, w Analytics Dashboard
                </a>
              </Link>

          <di, v classN, a, m, e="contai, n, e, r m, x-a, u, t, o p, x-4 ma, x-w-7 x, l">
            <h, 2 classN, a, m, e="t, e, x, t-3 x, l m, d:t, e, x, t-4 x, l f, o, n, t-b, o, l, d t, e, x, t-cen, t, e, r t, e, x, t-g, r, a, y-90, 0 m, b-1, 6">
              Ou, r Solutions
            </h, 2>
            <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-3 ga, p-8">
              {featu, r, e, s.ma, p((feat, u, r, e, in, d, e, x) => (
                <di, v
                  ke, y={in, d, e, x}
                  classN, a, m, e="b, g-g, r, a, y-5, 0 roun, d, e, d-l, g p-8 ho, v, e, r:sha, d, o, w-l, g transit, i, o, n-sha, d, o, w"
                >
                  <di, v classN, a, m, e="t, e, x, t-4 x, l m, b-4">{feat, u, r, e.i, c, o, n}</di, v>
                  <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-3">
                    {feat, u, r, e.ti, t, l, e}
                  </h, 3>
                  <p classN, a, m, e="t, e, x, t-g, r, a, y-60, 0">{feat, u, r, e.description}</p>
                </di, v>
              ))}



            </di, v>
          </di, v>
        </sect, i, o, n>
      </di, v>

					<Linkhref="/analyt, i, c, s">
                <aclassN, a, m, e="inl, i, n, e-f, l, e, x, i, t, e, m, s-cen, t, e, r, p, x-6, p, y-3, bor, d, e, r, bor, d, e, r-transpar, e, n, t, te, x, t-b, a, s, e, fo, n, t-med, i, u, m, rou, n, d, e, d-m, d, te, x, t-wh, i, t, e, b, g-b, l, u, e-60, 0, ho, v, e, r:b, g-b, l, u, e-70, 0, fo, c, u, s:outl, i, n, e-nonefo, c, u, s:r, i, n, g-2, fo, c, u, s:r, i, n, g-o, f, f, s, e, t-2, fo, c, u, s:r, i, n, g-b, l, u, e-50, 0 transit, i, o, n-colorsdurat, i, o, n-20, 0">
                  <spanclassN, a, m, e="m, r-2">📊</s, p, a, n>
                  ViewAnalyticsDashboard
                </a>
              </Link>
            </di, v>
          </di, v>
        </sect, i, o, n>
      </d, i, v>});

export default H, o, m, e;

    </>
  )});

export default H, o, m, e;


    </>
  )});

export default H, o, m, e;

