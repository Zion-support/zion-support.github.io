import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEO from "../src/components/SEO";
// import { ErrorBound, a, r, y } from "../src/components/ErrorBoundary";
import { usePageV, i, e, w, useAnalytics } from "../src/hooks/useAnalytics";

export default function FA, Q(): JS, X.Elem, e, n, t {
  const [isVisi, b, l, e, setIsVisi, b, l, e] = useState(fa, l, s, e);
  const [openIt, e, m, s, setOpenIt, e, m, s] = useState<Se, t<num, b, e, r>>(ne, w Se, t());
  const [searchT, e, r, m, setSearchT, e, r, m] = useState("");

  useEffect(() => {
    setIsVisi, b, l, e(t, r, u, e);
  }, []);

  // Analytics track, i, n, g
  usePageV, i, e, w("fa, q");
  const { trackCl, i, c, k } = useAnalytics();

  const faqD, a, t, a = [
    {
      categ, o, r, y: "Gene, r, a, l",
      questi, o, n, s: [
        {
          i, d: 1,
          quest, i, o, n: "W, h, a, t i, s Z, i, o, n Ap, p?",
          ans, w, e, r: "Z, i, o, n Ap, p i, s a lead, i, n, g technol, o, g, y soluti, o, n, s provi, d, e, r specializ, i, n, g i, n A, I, Cl, o, u, d Infrastruct, u, r, e, an, d Digi, t, a, l Transformat, i, o, n. W, e h, e, l, p busines, s, e, s innov, a, t, e, optim, i, z, e, an, d g, r, o, w thro, u, g, h cutt, i, n, g-e, d, g, e technol, o, g, y."
        },
        {
          i, d: 2,
          quest, i, o, n: "Ho, w l, o, n, g ha, s Z, i, o, n Ap, p b, e, e, n i, n busin, e, s, s?",
          ans, w, e, r: "Z, i, o, n Ap, p ha, s b, e, e, n deliver, i, n, g cutt, i, n, g-e, d, g, e technol, o, g, y soluti, o, n, s fo, r o, v, e, r 5 ye, a, r, s. Ou, r t, e, a, m ha, s extens, i, v, e experie, n, c, e acr, o, s, s vari, o, u, s industr, i, e, s an, d ha, s successfu, l, l, y comple, t, e, d 5, 0+ proje, c, t, s fo, r clie, n, t, s worldw, i, d, e."
        },
        {
          i, d: 3,
          quest, i, o, n: "W, h, a, t ma, k, e, s Z, i, o, n Ap, p differ, e, n, t from competit, o, r, s?",
          ans, w, e, r: "Ou, r uni, q, u, e bl, e, n, d o, f d, e, e, p techni, c, a, l expert, i, s, e, a cli, e, n, t-cent, r, i, c appro, a, c, h, an, d a commitm, e, n, t t, o continu, o, u, s innovat, i, o, n s, e, t, s u, s ap, a, r, t. W, e fo, c, u, s o, n deliver, i, n, g measura, b, l, e busin, e, s, s outco, m, e, s an, d build, i, n, g l, o, n, g-t, e, r, m partnersh, i, p, s."
        }
      ]
    },
    {
      categ, o, r, y: "Servi, c, e, s",
      questi, o, n, s: [
        {
          i, d: 4,
          quest, i, o, n: "W, h, a, t A, I servi, c, e, s d, o yo, u of, f, e, r?",
          ans, w, e, r: "W, e of, f, e, r a w, i, d, e ra, n, g, e o, f A, I servi, c, e, s includ, i, n, g Natu, r, a, l Langu, a, g, e Process, i, n, g (NL, P), Compu, t, e, r Vis, i, o, n, Predict, i, v, e Analytics, A, I-powe, r, e, d automat, i, o, n, an, d cus, t, o, m A, I mo, d, e, l developm, e, n, t."
        },
        {
          i, d: 5,
          quest, i, o, n: "Ca, n yo, u h, e, l, p w, i, t, h cl, o, u, d migrat, i, o, n?",
          ans, w, e, r: "Absolut, e, l, y. W, e prov, i, d, e en, d-t, o-en, d cl, o, u, d migrat, i, o, n servi, c, e, s, includ, i, n, g strat, e, g, y, plann, i, n, g, execut, i, o, n, an, d p, o, s, t-migrat, i, o, n supp, o, r, t fo, r ma, j, o, r cl, o, u, d provid, e, r, s l, i, k, e AW, S, Az, u, r, e, an, d Goo, g, l, e Cl, o, u, d."
        },
        {
          i, d: 6,
          quest, i, o, n: "W, h, a, t i, s Digi, t, a, l Transformat, i, o, n?",
          ans, w, e, r: "Digi, t, a, l Transformat, i, o, n invol, v, e, s integrat, i, n, g digi, t, a, l technol, o, g, y i, n, t, o al, l ar, e, a, s o, f a busin, e, s, s, fundamenta, l, l, y chang, i, n, g ho, w yo, u oper, a, t, e an, d deli, v, e, r va, l, u, e t, o custom, e, r, s. Ou, r servi, c, e, s co, v, e, r proc, e, s, s automat, i, o, n, leg, a, c, y sys, t, e, m modernizat, i, o, n, an, d digi, t, a, l strat, e, g, y."
        }
      ]
    },
    {
      categ, o, r, y: "Supp, o, r, t",
      questi, o, n, s: [
        {
          i, d: 7,
          quest, i, o, n: "W, h, a, t k, i, n, d o, f supp, o, r, t d, o yo, u of, f, e, r?",
          ans, w, e, r: "W, e of, f, e, r 2, 4/7 techni, c, a, l supp, o, r, t, dedica, t, e, d acco, u, n, t managem, e, n, t, an, d ongo, i, n, g maintena, n, c, e servi, c, e, s t, o ens, u, r, e y, o, u, r syst, e, m, s ru, n smoot, h, l, y an, d efficien, t, l, y."
        },
        {
          i, d: 8,
          quest, i, o, n: "Ho, w ca, n I cont, a, c, t supp, o, r, t?",
          ans, w, e, r: "Yo, u ca, n re, a, c, h ou, r supp, o, r, t t, e, a, m vi, a em, a, i, l a, t supp, o, r, t@zion, a, p, p.co, m, thro, u, g, h ou, r website's cont, a, c, t f, o, r, m, o, r b, y call, i, n, g ou, r dedica, t, e, d supp, o, r, t l, i, n, e dur, i, n, g busin, e, s, s ho, u, r, s."
        }
      ]
    }
  ];

  const filtered, F, a, q = faqD, a, t, a.ma, p(categ, o, r, y => ({
    ...categ, o, r, y,
    questi, o, n, s: categ, o, r, y.questi, o, n, s.fil, t, e, r(q =>
      q.quest, i, o, n.toLowerC, a, s, e().inclu, d, e, s(searchT, e, r, m.toLowerC, a, s, e()) ||
      q.ans, w, e, r.toLowerC, a, s, e().inclu, d, e, s(searchT, e, r, m.toLowerC, a, s, e())
    )
  })).fil, t, e, r(categ, o, r, y => categ, o, r, y.questi, o, n, s.len, g, t, h > 0);

  const toggleI, t, e, m = (i, d: num, b, e, r) => {
    setOpenIt, e, m, s(prevOpenIt, e, m, s => {
      const newOpenIt, e, m, s = ne, w Se, t(prevOpenIt, e, m, s);
      i, f (newOpenIt, e, m, s.ha, s(i, d)) {
        newOpenIt, e, m, s.del, e, t, e(i, d);
      } e, l, s, e {
        newOpenIt, e, m, s.ad, d(i, d);
      }
      return newOpenIt, e, m, s;
    });
    trackCl, i, c, k(`fa, q-tog, g, l, e-${i, d}`, "engagem, e, n, t");
  };

  return (
    <>
      <SEO />
      <Head>
        <title>FA, Q - Z, i, o, n Ap, p</title>
        <meta name="description" content="Frequen, t, l, y As, k, e, d Questi, o, n, s ab, o, u, t Z, i, o, n Ap, p's servi, c, e, s an, d soluti, o, n, s." />
      </Head>
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n b, g-gradi, e, n, t-t, o-b, r from-b, l, u, e-5, 0 t, o-ind, i, g, o-10, 0 p, t-2, 0">
        <di, v classN, a, m, e="contai, n, e, r m, x-a, u, t, o p, x-4 p, y-8 ma, x-w-7x, l">
          <na, v classN, a, m, e="m, b-8">
            <Link href="/" classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 ho, v, e, r:t, e, x, t-b, l, u, e-80, 0 f, o, n, t-med, i, u, m transit, i, o, n-col, o, r, s">
              ← B, a, c, k t, o H, o, m, e
            </Link>
          </na, v>

          <sect, i, o, n classN, a, m, e="t, e, x, t-cen, t, e, r m, b-1, 2">
            <h, 1 classN, a, m, e="t, e, x, t-4x, l m, d:t, e, x, t-5x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6">
              Frequen, t, l, y As, k, e, d Questi, o, n, s
            </h, 1>
            <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-60, 0 ma, x-w-3x, l m, x-a, u, t, o">
              F, i, n, d answ, e, r, s t, o com, m, o, n questi, o, n, s ab, o, u, t ou, r servi, c, e, s, technol, o, g, y, an, d supp, o, r, t.
            </p>
            <di, v classN, a, m, e="m, t-8 ma, x-w-x, l m, x-a, u, t, o">
              <in, p, u, t
                type="t, e, x, t"
                placehol, d, e, r="Sea, r, c, h F, A, Q, s..."
                classN, a, m, e="w-f, u, l, l p-3 bor, d, e, r bor, d, e, r-g, r, a, y-30, 0 roun, d, e, d-l, g sha, d, o, w-s, m fo, c, u, s:outl, i, n, e-n, o, n, e fo, c, u, s:r, i, n, g-2 fo, c, u, s:r, i, n, g-b, l, u, e-50, 0"
                va, l, u, e={searchT, e, r, m}
                onCha, n, g, e={(e) => setSearchT, e, r, m(e.tar, g, e, t.va, l, u, e)}
              />
            </di, v>
          </sect, i, o, n>

          <sect, i, o, n classN, a, m, e="b, g-wh, i, t, e roun, d, e, d-l, g sha, d, o, w-l, g p-8">
            {filtered, F, a, q.len, g, t, h > 0 ? (
              filtered, F, a, q.ma, p((categ, o, r, y, catIn, d, e, x) => (
                <di, v ke, y={catIn, d, e, x} classN, a, m, e="m, b-8 l, a, s, t:m, b-0">
                  <h, 2 classN, a, m, e="t, e, x, t-2x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6 bor, d, e, r-b p, b-3">
                    {categ, o, r, y.categ, o, r, y}
                  </h, 2>
                  {categ, o, r, y.questi, o, n, s.ma, p((i, t, e, m, in, d, e, x) => (
                    <di, v ke, y={i, t, e, m.i, d} classN, a, m, e="bor, d, e, r-b bor, d, e, r-g, r, a, y-20, 0 l, a, s, t:bor, d, e, r-b-0 p, y-4">
                      <but, t, o, n
                        classN, a, m, e="f, l, e, x just, i, f, y-betw, e, e, n it, e, m, s-cen, t, e, r w-f, u, l, l t, e, x, t-l, e, f, t f, o, n, t-semib, o, l, d t, e, x, t-l, g t, e, x, t-g, r, a, y-80, 0 ho, v, e, r:t, e, x, t-b, l, u, e-60, 0 transit, i, o, n-col, o, r, s"
                        onCl, i, c, k={() => toggleI, t, e, m(i, t, e, m.i, d)}
                      >
                        {i, t, e, m.quest, i, o, n}
                        <s, p, a, n classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 t, e, x, t-x, l">
                          {openIt, e, m, s.ha, s(i, t, e, m.i, d) ? '−' : '+'}
                        </s, p, a, n>
                      </but, t, o, n>
                      {openIt, e, m, s.ha, s(i, t, e, m.i, d) && (
                        <p classN, a, m, e="m, t-3 t, e, x, t-g, r, a, y-60, 0 lead, i, n, g-rela, x, e, d">
                          {i, t, e, m.ans, w, e, r}
                        </p>
                      )}
                    </di, v>
                  ))}
                </di, v>
              ))
            ) : (
              <p classN, a, m, e="t, e, x, t-cen, t, e, r t, e, x, t-g, r, a, y-60, 0 t, e, x, t-l, g">N, o F, A, Q, s fo, u, n, d match, i, n, g y, o, u, r sea, r, c, h.</p>
            )}
          </sect, i, o, n>

          {/* CT, A Sect, i, o, n */}
          <sect, i, o, n classN, a, m, e="t, e, x, t-cen, t, e, r b, g-b, l, u, e-60, 0 roun, d, e, d-l, g p-8 t, e, x, t-wh, i, t, e m, t-1, 2">
            <h, 2 classN, a, m, e="t, e, x, t-3x, l f, o, n, t-b, o, l, d m, b-4">St, i, l, l H, a, v, e Questi, o, n, s?</h, 2>
            <p classN, a, m, e="t, e, x, t-x, l m, b-6">Ou, r t, e, a, m i, s h, e, r, e t, o h, e, l, p. Re, a, c, h ou, t t, o u, s fo, r personali, z, e, d assista, n, c, e.</p>
            <Link href="/cont, a, c, t" classN, a, m, e="b, g-wh, i, t, e t, e, x, t-b, l, u, e-60, 0 p, x-8 p, y-3 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-g, r, a, y-10, 0 transit, i, o, n-col, o, r, s">
              Cont, a, c, t Supp, o, r, t
            </Link>
          </sect, i, o, n>
        </di, v>
      </di, v>
    </>
  );
}