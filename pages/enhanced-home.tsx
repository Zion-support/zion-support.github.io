import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

export default function H, o, m, e(): JS, X.Elem, e, n, t {
  const [isVisi, b, l, e, setIsVisi, b, l, e] = useState(fa, l, s, e);

  useEffect(() => {
    setIsVisi, b, l, e(t, r, u, e);
  }, []);

  // Analytics track, i, n, g
  const { trackCl, i, c, k } = useAnalytics();

  const handleSelectP, l, a, n = (tie, r, I, d: str, i, n, g) => {
    trackCl, i, c, k(`sel, e, c, t-p, l, a, n-${tie, r, I, d}`, "convers, i, o, n");
    cons, o, l, e.lo, g("Selec, t, e, d p, l, a, n:", tie, r, I, d);
  };

  const handleReadM, o, r, e = (s, l, u, g: str, i, n, g) => {
    trackCl, i, c, k(`r, e, a, d-b, l, o, g-${s, l, u, g}`, "engagem, e, n, t");
    cons, o, l, e.lo, g("R, e, a, d m, o, r, e:", s, l, u, g);
  };

  const featu, r, e, s = [
    {
      ti, t, l, e: "A, I-Powe, r, e, d Solutions",
      description: "Lever, a, g, e cutt, i, n, g-e, d, g, e artific, i, a, l intellige, n, c, e t, o autom, a, t, e an, d optim, i, z, e y, o, u, r busin, e, s, s proces, s, e, s.",
      i, c, o, n: '🤖'
    },
    {
      ti, t, l, e: "Cl, o, u, d Comput, i, n, g",
      description: "Scala, b, l, e an, d sec, u, r, e cl, o, u, d infrastruct, u, r, e t, o supp, o, r, t y, o, u, r grow, i, n, g busin, e, s, s ne, e, d, s.",
      i, c, o, n: '☁️'
    },
    {
      ti, t, l, e: "Digi, t, a, l Transformat, i, o, n",
      description: "Compl, e, t, e digi, t, a, l transformat, i, o, n servi, c, e, s t, o modern, i, z, e y, o, u, r operati, o, n, s an, d impr, o, v, e efficie, n, c, y.",
      i, c, o, n: '🚀'
    }
  ];

  const testimoni, a, l, s = [
    {
      n, a, m, e: "Sa, r, a, h John, s, o, n",
      comp, a, n, y: "TechC, o, r, p In, c.",
      cont, e, n, t: "Z, i, o, n Ap, p transfor, m, e, d ou, r ent, i, r, e digi, t, a, l infrastruct, u, r, e. Th, e resu, l, t, s excee, d, e, d ou, r expectati, o, n, s.",
      rat, i, n, g: 5
    },
    {
      n, a, m, e: "Da, v, i, d Le, e",
      comp, a, n, y: "Glo, b, a, l Innovati, o, n, s",
      cont, e, n, t: "Th, e, i, r cl, o, u, d soluti, o, n, s ar, e rob, u, s, t an, d h, a, v, e significan, t, l, y impro, v, e, d ou, r operatio, n, a, l efficie, n, c, y.",
      rat, i, n, g: 4
    },
    {
      n, a, m, e: "Em, i, l, y Wh, i, t, e",
      comp, a, n, y: "Fut, u, r, e Enterpri, s, e, s",
      cont, e, n, t: "Th, e A, I integrat, i, o, n provi, d, e, d b, y Z, i, o, n Ap, p ha, s gi, v, e, n u, s a competit, i, v, e e, d, g, e i, n th, e mar, k, e, t.",
      rat, i, n, g: 5
    }
  ];

  const pricingTi, e, r, s = [
    {
      i, d: "ba, s, i, c",
      n, a, m, e: "Ba, s, i, c",
      pr, i, c, e: "$4, 9/mo, n, t, h",
      featu, r, e, s: ["A, I Automat, i, o, n", "Cl, o, u, d Host, i, n, g", "Ba, s, i, c Analytics"],
      buttonT, e, x, t: "Cho, o, s, e Ba, s, i, c"
    },
    {
      i, d: "pr, o",
      n, a, m, e: "Pr, o",
      pr, i, c, e: "$9, 9/mo, n, t, h",
      featu, r, e, s: ["Al, l Ba, s, i, c Featu, r, e, s", "Advan, c, e, d A, I Mod, e, l, s", "Scala, b, l, e Cl, o, u, d", "Cus, t, o, m Integrati, o, n, s"],
      buttonT, e, x, t: "Cho, o, s, e Pr, o"
    },
    {
      i, d: "enterpr, i, s, e",
      n, a, m, e: "Enterpr, i, s, e",
      pr, i, c, e: "Cus, t, o, m",
      featu, r, e, s: ["Al, l Pr, o Featu, r, e, s", "Dedica, t, e, d Supp, o, r, t", "O, n-prem, i, s, e Opti, o, n, s", "Strate, g, i, c Consult, i, n, g"],
      buttonT, e, x, t: "Cont, a, c, t U, s"
    }
  ];

  const blogPo, s, t, s = [
    {
      i, d: 1,
      ti, t, l, e: "Th, e Fut, u, r, e o, f A, I i, n Busin, e, s, s",
      summ, a, r, y: "Expl, o, r, e ho, w artific, i, a, l intellige, n, c, e i, s reshap, i, n, g industr, i, e, s an, d driv, i, n, g innovat, i, o, n.",
      s, l, u, g: "fut, u, r, e-o, f-a, i",
      image: "/ima, g, e, s/b, l, o, g/a, i-fut, u, r, e.jp, g"
    },
    {
      i, d: 2,
      ti, t, l, e: "Cl, o, u, d Comput, i, n, g B, e, s, t Practi, c, e, s",
      summ, a, r, y: "Le, a, r, n essent, i, a, l strateg, i, e, s fo, r optimiz, i, n, g y, o, u, r cl, o, u, d infrastruct, u, r, e fo, r performance an, d secur, i, t, y.",
      s, l, u, g: "cl, o, u, d-b, e, s, t-practi, c, e, s",
      image: "/ima, g, e, s/b, l, o, g/cl, o, u, d-b, e, s, t.jp, g"
    },
    {
      i, d: 3,
      ti, t, l, e: "Digi, t, a, l Transformat, i, o, n: A S, t, e, p-b, y-S, t, e, p Gu, i, d, e",
      summ, a, r, y: "A comprehens, i, v, e gu, i, d, e t, o successfu, l, l, y implement, i, n, g digi, t, a, l transformat, i, o, n i, n y, o, u, r organizat, i, o, n.",
      s, l, u, g: "digi, t, a, l-transformat, i, o, n-gu, i, d, e",
      image: "/ima, g, e, s/b, l, o, g/digi, t, a, l-transf, o, r, m.jp, g"
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Enhan, c, e, d H, o, m, e - Z, i, o, n Ap, p</title>
        <meta name="description" content="Disco, v, e, r Z, i, o, n Ap, p's enhan, c, e, d h, o, m, e p, a, g, e w, i, t, h A, I, Cl, o, u, d, an, d Digi, t, a, l Transformat, i, o, n soluti, o, n, s." />
      </Head>
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n b, g-gradi, e, n, t-t, o-b, r from-b, l, u, e-5, 0 t, o-ind, i, g, o-10, 0 p, t-2, 0">
        <di, v classN, a, m, e="contai, n, e, r m, x-a, u, t, o p, x-4 p, y-8 ma, x-w-7x, l">
          {/* H, e, r, o Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="t, e, x, t-cen, t, e, r m, b-1, 6">
            <h, 1 classN, a, m, e="t, e, x, t-4x, l m, d:t, e, x, t-6x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6">
              Innov, a, t, e. Transf, o, r, m. G, r, o, w.
            </h, 1>
            <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-60, 0 ma, x-w-3x, l m, x-a, u, t, o">
              Empower, i, n, g busines, s, e, s w, i, t, h cutt, i, n, g-e, d, g, e A, I, Cl, o, u, d, an, d Digi, t, a, l Transformat, i, o, n soluti, o, n, s.
            </p>
          </sect, i, o, n>

          {/* Featu, r, e, s Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="p, y-1, 6 b, g-wh, i, t, e roun, d, e, d-l, g sha, d, o, w-x, l m, b-1, 6">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l m, d:t, e, x, t-4x, l f, o, n, t-b, o, l, d t, e, x, t-cen, t, e, r t, e, x, t-g, r, a, y-90, 0 m, b-1, 2">
              Ou, r C, o, r, e Solutions
            </h, 2>
            <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-3 ga, p-8 p, x-8">
              {featu, r, e, s.ma, p((feat, u, r, e, in, d, e, x) => (
                <di, v ke, y={in, d, e, x} classN, a, m, e="t, e, x, t-cen, t, e, r p-6 b, g-g, r, a, y-5, 0 roun, d, e, d-l, g">
                  <di, v classN, a, m, e="t, e, x, t-5x, l m, b-4">{feat, u, r, e.i, c, o, n}</di, v>
                  <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-3">
                    {feat, u, r, e.ti, t, l, e}
                  </h, 3>
                  <p classN, a, m, e="t, e, x, t-g, r, a, y-60, 0">{feat, u, r, e.description}</p>
                </di, v>
              ))}
            </di, v>
          </sect, i, o, n>

          {/* Testimoni, a, l, s Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="m, b-1, 6">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l m, d:t, e, x, t-4x, l f, o, n, t-b, o, l, d t, e, x, t-cen, t, e, r t, e, x, t-g, r, a, y-90, 0 m, b-1, 2">
              W, h, a, t Ou, r Clie, n, t, s Sa, y
            </h, 2>
            <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-3 ga, p-8">
              {testimoni, a, l, s.ma, p((testimon, i, a, l, in, d, e, x) => (
                <di, v ke, y={in, d, e, x} classN, a, m, e="b, g-wh, i, t, e roun, d, e, d-l, g p-6 sha, d, o, w-l, g">
                  <p classN, a, m, e="t, e, x, t-g, r, a, y-70, 0 ita, l, i, c m, b-4">&ld, q, u, o;{testimon, i, a, l.cont, e, n, t}&rd, q, u, o;</p>
                  <di, v classN, a, m, e="f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0">{testimon, i, a, l.n, a, m, e}</di, v>
                  <di, v classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 t, e, x, t-s, m">{testimon, i, a, l.comp, a, n, y}</di, v>
                  <di, v classN, a, m, e="t, e, x, t-yel, l, o, w-50, 0 t, e, x, t-l, g">{'⭐'.rep, e, a, t(testimon, i, a, l.rat, i, n, g)}</di, v>
                </di, v>
              ))}
            </di, v>
          </sect, i, o, n>

          {/* Pric, i, n, g Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="p, y-1, 6 b, g-b, l, u, e-60, 0 t, e, x, t-wh, i, t, e roun, d, e, d-l, g sha, d, o, w-x, l m, b-1, 6">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l m, d:t, e, x, t-4x, l f, o, n, t-b, o, l, d t, e, x, t-cen, t, e, r m, b-1, 2">
              Flexi, b, l, e Pric, i, n, g Pl, a, n, s
            </h, 2>
            <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-3 ga, p-8 p, x-8">
              {pricingTi, e, r, s.ma, p((t, i, e, r, in, d, e, x) => (
                <di, v ke, y={in, d, e, x} classN, a, m, e="b, g-wh, i, t, e t, e, x, t-g, r, a, y-90, 0 roun, d, e, d-l, g p-8 sha, d, o, w-l, g t, e, x, t-cen, t, e, r">
                  <h, 3 classN, a, m, e="t, e, x, t-2x, l f, o, n, t-b, o, l, d m, b-4">{t, i, e, r.n, a, m, e}</h, 3>
                  <p classN, a, m, e="t, e, x, t-4x, l f, o, n, t-b, o, l, d t, e, x, t-b, l, u, e-60, 0 m, b-6">{t, i, e, r.pr, i, c, e}</p>
                  <u, l classN, a, m, e="m, b-8 t, e, x, t-g, r, a, y-70, 0">
                    {t, i, e, r.featu, r, e, s.ma, p((feat, u, r, e, id, x) => (
                      <l, i ke, y={id, x}>✅ {feat, u, r, e}</l, i>
                    ))}
                  </u, l>
                  <but, t, o, n
                    onCl, i, c, k={() => handleSelectP, l, a, n(t, i, e, r.i, d)}
                    classN, a, m, e="b, g-b, l, u, e-60, 0 t, e, x, t-wh, i, t, e p, x-6 p, y-3 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-b, l, u, e-70, 0 transit, i, o, n-col, o, r, s"
                  >
                    {t, i, e, r.buttonT, e, x, t}
                  </but, t, o, n>
                </di, v>
              ))}
            </di, v>
          </sect, i, o, n>

          {/* B, l, o, g Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="m, b-1, 6">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l m, d:t, e, x, t-4x, l f, o, n, t-b, o, l, d t, e, x, t-cen, t, e, r t, e, x, t-g, r, a, y-90, 0 m, b-1, 2">
              Lat, e, s, t Insig, h, t, s
            </h, 2>
            <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-3 ga, p-8">
              {blogPo, s, t, s.ma, p((p, o, s, t, in, d, e, x) => (
                <di, v ke, y={in, d, e, x} classN, a, m, e="b, g-wh, i, t, e roun, d, e, d-l, g sha, d, o, w-l, g overf, l, o, w-hid, d, e, n">
                  <im, g sr, c={p, o, s, t.image} al, t={p, o, s, t.ti, t, l, e} classN, a, m, e="w-f, u, l, l h-4, 8 obj, e, c, t-co, v, e, r" />
                  <di, v classN, a, m, e="p-6">
                    <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-3">{p, o, s, t.ti, t, l, e}</h, 3>
                    <p classN, a, m, e="t, e, x, t-g, r, a, y-60, 0 m, b-4">{p, o, s, t.summ, a, r, y}</p>
                    <but, t, o, n
                      onCl, i, c, k={() => handleReadM, o, r, e(p, o, s, t.s, l, u, g)}
                      classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 f, o, n, t-med, i, u, m ho, v, e, r:underl, i, n, e"
                    >
                      R, e, a, d M, o, r, e →
                    </but, t, o, n>
                  </di, v>
                </di, v>
              ))}
            </di, v>
          </sect, i, o, n>

          {/* CT, A Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="t, e, x, t-cen, t, e, r b, g-ind, i, g, o-60, 0 roun, d, e, d-l, g p-8 t, e, x, t-wh, i, t, e">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l f, o, n, t-b, o, l, d m, b-4">Re, a, d, y t, o Elev, a, t, e Y, o, u, r Busin, e, s, s?</h, 2>
            <p classN, a, m, e="t, e, x, t-x, l m, b-6">Cont, a, c, t u, s to, d, a, y fo, r a personali, z, e, d consultat, i, o, n an, d disco, v, e, r ho, w w, e ca, n h, e, l, p yo, u achi, e, v, e y, o, u, r go, a, l, s.</p>
            <Link href="/cont, a, c, t" classN, a, m, e="b, g-wh, i, t, e t, e, x, t-ind, i, g, o-60, 0 p, x-8 p, y-3 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-g, r, a, y-10, 0 transit, i, o, n-col, o, r, s">
              Ge, t i, n To, u, c, h
            </Link>
          </sect, i, o, n>
        </di, v>
      </di, v>
    </>
  );
}