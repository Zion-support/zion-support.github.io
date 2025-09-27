import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Servi, c, e, s(): JS, X.Elem, e, n, t {
  const [isVisi, b, l, e, setIsVisi, b, l, e] = useState(fa, l, s, e);
  const [isLoad, i, n, g, setIsLoad, i, n, g] = useState(t, r, u, e);

  useEffect(() => {
    setIsVisi, b, l, e(t, r, u, e);
    setIsLoad, i, n, g(fa, l, s, e);
  }, []);

  const { trackCl, i, c, k } = useAnalytics();

  const serviceDeta, i, l, s = {
    'a, i-m, l': {
      ti, t, l, e: 'A, I & Mach, i, n, e Learn, i, n, g',
      description: 'Transf, o, r, m y, o, u, r busin, e, s, s w, i, t, h cutt, i, n, g-e, d, g, e artific, i, a, l intellige, n, c, e an, d mach, i, n, e learn, i, n, g soluti, o, n, s.',
      featu, r, e, s: [
        'Natu, r, a, l Langu, a, g, e Process, i, n, g (NL, P)',
        'Compu, t, e, r Vis, i, o, n & Image Recognit, i, o, n',
        'Predict, i, v, e Analytics & Forecast, i, n, g',
        'Chatb, o, t, s & Virt, u, a, l Assista, n, t, s',
        'Recommendat, i, o, n Syst, e, m, s',
        'Automa, t, e, d Decis, i, o, n Mak, i, n, g'
      ],
      technolog, i, e, s: ['TensorF, l, o, w', 'PyTo, r, c, h', 'Ope, n, A, I', 'HuggingF, a, c, e', 'Sci, k, i, t-le, a, r, n', 'Pan, d, a, s'],
      benef, i, t, s: [
        'Autom, a, t, e repetit, i, v, e ta, s, k, s an, d proces, s, e, s',
        'G, a, i, n insig, h, t, s from la, r, g, e datas, e, t, s',
        'Impr, o, v, e custo, m, e, r experie, n, c, e w, i, t, h intellig, e, n, t interacti, o, n, s',
        'Red, u, c, e operatio, n, a, l co, s, t, s thro, u, g, h automat, i, o, n',
        'M, a, k, e d, a, t, a-dri, v, e, n decisi, o, n, s w, i, t, h predict, i, v, e analyt, i, c, s'
      ]
    },
    'cl, o, u, d': {
      ti, t, l, e: 'Cl, o, u, d Solutions',
      description: 'Scala, b, l, e, sec, u, r, e, an, d relia, b, l, e cl, o, u, d infrastruct, u, r, e tailo, r, e, d t, o y, o, u, r busin, e, s, s ne, e, d, s.',
      featu, r, e, s: [
        'Cl, o, u, d Migrat, i, o, n & Strat, e, g, y',
        'Infrastruct, u, r, e a, s C, o, d, e (Ia, C)',
        'Serverl, e, s, s Comput, i, n, g',
        'Containerizat, i, o, n (Doc, k, e, r, Kuberne, t, e, s)',
        'Cl, o, u, d Secur, i, t, y & Complia, n, c, e',
        'Mana, g, e, d Cl, o, u, d Servi, c, e, s'
      ],
      technolog, i, e, s: ['AW, S', 'Az, u, r, e', 'Goo, g, l, e Cl, o, u, d', 'Doc, k, e, r', 'Kuberne, t, e, s', 'Terraf, o, r, m'],
      benef, i, t, s: [
        'Incre, a, s, e scalabil, i, t, y an, d flexibil, i, t, y',
        'Enha, n, c, e d, a, t, a secur, i, t, y an, d complia, n, c, e',
        'Red, u, c, e infrastruct, u, r, e co, s, t, s',
        'Impr, o, v, e disas, t, e, r recov, e, r, y an, d busin, e, s, s continu, i, t, y',
        'Acceler, a, t, e innovat, i, o, n an, d deploym, e, n, t'
      ]
    },
    'digi, t, a, l-transformat, i, o, n': {
      ti, t, l, e: 'Digi, t, a, l Transformat, i, o, n',
      description: 'Modern, i, z, e y, o, u, r operati, o, n, s an, d enha, n, c, e custo, m, e, r experien, c, e, s w, i, t, h comprehens, i, v, e digi, t, a, l transformat, i, o, n strateg, i, e, s.',
      featu, r, e, s: [
        'Proc, e, s, s Automat, i, o, n & Optimizat, i, o, n',
        'Leg, a, c, y Sys, t, e, m Modernizat, i, o, n',
        'Custo, m, e, r Experie, n, c, e (C, X) Des, i, g, n',
        'Enterpr, i, s, e Resou, r, c, e Plann, i, n, g (ER, P)',
        'Sup, p, l, y Ch, a, i, n Digitalizat, i, o, n',
        'D, a, t, a-Dri, v, e, n Strat, e, g, y'
      ],
      technolog, i, e, s: ['Salesfo, r, c, e', 'SA, P', 'Cus, t, o, m CR, M', 'Po, w, e, r B, I', 'Tabl, e, a, u'],
      benef, i, t, s: [
        'Streaml, i, n, e busin, e, s, s proces, s, e, s fo, r efficie, n, c, y',
        'Impr, o, v, e custo, m, e, r engagem, e, n, t an, d satisfact, i, o, n',
        'G, a, i, n a competit, i, v, e e, d, g, e thro, u, g, h innovat, i, o, n',
        'Fos, t, e, r a cult, u, r, e o, f digi, t, a, l readin, e, s, s',
        'Unl, o, c, k ne, w reve, n, u, e stre, a, m, s an, d busin, e, s, s mod, e, l, s'
      ]
    },
    'cybersecur, i, t, y': {
      ti, t, l, e: 'Cybersecur, i, t, y Servi, c, e, s',
      description: 'Prot, e, c, t y, o, u, r digi, t, a, l ass, e, t, s w, i, t, h rob, u, s, t cybersecur, i, t, y strateg, i, e, s an, d advan, c, e, d thr, e, a, t detect, i, o, n.',
      featu, r, e, s: [
        'Vulnerabil, i, t, y Assessme, n, t, s & Penetrat, i, o, n Test, i, n, g',
        'Secur, i, t, y Informat, i, o, n an, d Ev, e, n, t Managem, e, n, t (S, I, E, M)',
        'Incid, e, n, t Respo, n, s, e & Forens, i, c, s',
        'D, a, t, a Encrypt, i, o, n & Priv, a, c, y',
        'Cl, o, u, d Secur, i, t, y Post, u, r, e Managem, e, n, t (C, S, P, M)',
        'Emplo, y, e, e Secur, i, t, y Train, i, n, g'
      ],
      technolog, i, e, s: ['Spl, u, n, k', 'Forti, n, e, t', 'P, a, l, o A, l, t, o Netwo, r, k, s', 'CrowdStr, i, k, e', 'Tena, b, l, e'],
      benef, i, t, s: [
        'Minim, i, z, e r, i, s, k o, f d, a, t, a breac, h, e, s an, d cy, b, e, r atta, c, k, s',
        'Ens, u, r, e complia, n, c, e w, i, t, h indus, t, r, y regulati, o, n, s',
        'Prot, e, c, t sensit, i, v, e custo, m, e, r an, d busin, e, s, s d, a, t, a',
        'Maint, a, i, n busin, e, s, s continu, i, t, y dur, i, n, g secur, i, t, y incide, n, t, s',
        'Bu, i, l, d tr, u, s, t w, i, t, h custom, e, r, s an, d stakehold, e, r, s'
      ]
    },
    'd, a, t, a-analyt, i, c, s': {
      ti, t, l, e: 'D, a, t, a Analytics & B, I',
      description: 'Lever, a, g, e y, o, u, r d, a, t, a t, o g, a, i, n actiona, b, l, e insig, h, t, s an, d m, a, k, e infor, m, e, d busin, e, s, s decisi, o, n, s.',
      featu, r, e, s: [
        'D, a, t, a Warehous, i, n, g & L, a, k, e Solutions',
        'Busin, e, s, s Intellige, n, c, e Dashboa, r, d, s',
        'Predict, i, v, e Model, i, n, g',
        'D, a, t, a Visualizat, i, o, n',
        'ET, L Developm, e, n, t',
        'Bi, g D, a, t, a Process, i, n, g'
      ],
      technolog, i, e, s: ['Apa, c, h, e Sp, a, r, k', 'Had, o, o, p', 'Tabl, e, a, u', 'Po, w, e, r B, I', 'SQ, L', 'Pyt, h, o, n (Pan, d, a, s, Nu, m, P, y)'],
      benef, i, t, s: [
        'Unco, v, e, r hid, d, e, n tre, n, d, s an, d patte, r, n, s',
        'Optim, i, z, e operatio, n, a, l efficie, n, c, y',
        'Personal, i, z, e custo, m, e, r experien, c, e, s',
        'Forec, a, s, t fut, u, r, e outco, m, e, s w, i, t, h hig, h, e, r accur, a, c, y',
        'Supp, o, r, t strate, g, i, c plann, i, n, g an, d gro, w, t, h initiati, v, e, s'
      ]
    },
    'cus, t, o, m-softw, a, r, e': {
      ti, t, l, e: 'Cus, t, o, m Softw, a, r, e Developm, e, n, t',
      description: 'Bu, i, l, d besp, o, k, e softw, a, r, e soluti, o, n, s tailo, r, e, d t, o y, o, u, r uni, q, u, e busin, e, s, s requireme, n, t, s an, d challen, g, e, s.',
      featu, r, e, s: [
        'We, b Applicat, i, o, n Developm, e, n, t',
        'Mob, i, l, e Ap, p Developm, e, n, t (iO, S/Andr, o, i, d)',
        'Enterpr, i, s, e Softw, a, r, e Solutions',
        'AP, I Developm, e, n, t & Integrat, i, o, n',
        'U, I/U, X Des, i, g, n & Prototyp, i, n, g',
        'Qual, i, t, y Assura, n, c, e & Test, i, n, g'
      ],
      technolog, i, e, s: ['React', 'Angu, l, a, r', 'Vu, e.j, s', 'N, o, d, e.j, s', 'Pyt, h, o, n', 'J, a, v, a', 'Sw, i, f, t', 'Kot, l, i, n'],
      benef, i, t, s: [
        'Addr, e, s, s speci, f, i, c busin, e, s, s ne, e, d, s no, t me, t b, y of, f-th, e-sh, e, l, f soluti, o, n, s',
        'Impr, o, v, e operatio, n, a, l workfl, o, w, s an, d productiv, i, t, y',
        'Enha, n, c, e u, s, e, r experie, n, c, e an, d engagem, e, n, t',
        'Achi, e, v, e grea, t, e, r flexibil, i, t, y an, d scalabil, i, t, y',
        'G, a, i, n a competit, i, v, e advant, a, g, e w, i, t, h uni, q, u, e functionalit, i, e, s'
      ]
    }
  };

  const [activeServ, i, c, e, setActiveServ, i, c, e] = useState('a, i-m, l');

  const handleServiceCl, i, c, k = (service, K, e, y: str, i, n, g) => {
    setActiveServ, i, c, e(service, K, e, y);
    trackCl, i, c, k(`serv, i, c, e-ta, b-${service, K, e, y}`, 'navigat, i, o, n');
  };

  const currentServ, i, c, e = serviceDeta, i, l, s[activeServ, i, c, e];

  i, f (isLoad, i, n, g) {
    return (
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n f, l, e, x it, e, m, s-cen, t, e, r just, i, f, y-cen, t, e, r b, g-g, r, a, y-10, 0">
        <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-70, 0">Load, i, n, g servi, c, e, s...</p>
      </di, v>
    );
  }

  return (
    <>
      <SEO />
      <Head>
        <title>Ou, r Servi, c, e, s - Z, i, o, n Ap, p</title>
        <meta name="description" content="Expl, o, r, e Z, i, o, n Ap, p's comprehens, i, v, e technol, o, g, y servi, c, e, s includ, i, n, g A, I, Cl, o, u, d, an, d Digi, t, a, l Transformat, i, o, n." />
        <meta name="viewp, o, r, t" content="wi, d, t, h=dev, i, c, e-wi, d, t, h, init, i, a, l-sc, a, l, e=1" />
      </Head>
      <di, v classN, a, m, e="mi, n-h-scr, e, e, n b, g-gradi, e, n, t-t, o-b, r from-b, l, u, e-5, 0 t, o-ind, i, g, o-10, 0 p, t-2, 0">
        <di, v classN, a, m, e="contai, n, e, r m, x-a, u, t, o p, x-4 p, y-8 ma, x-w-7x, l">
          <na, v classN, a, m, e="m, b-8">
            <Link href="/" classN, a, m, e="t, e, x, t-b, l, u, e-60, 0 ho, v, e, r:t, e, x, t-b, l, u, e-80, 0 f, o, n, t-med, i, u, m transit, i, o, n-col, o, r, s">
              ← B, a, c, k t, o H, o, m, e
            </Link>
          </na, v>

          <hea, d, e, r classN, a, m, e="t, e, x, t-cen, t, e, r m, b-1, 6">
            <h, 1 classN, a, m, e="t, e, x, t-5x, l m, d:t, e, x, t-6x, l f, o, n, t-b, o, l, d t, e, x, t-b, l, u, e-60, 0 m, b-4 b, g-gradi, e, n, t-t, o-r from-b, l, u, e-60, 0 t, o-ind, i, g, o-60, 0 b, g-c, l, i, p-t, e, x, t t, e, x, t-transpar, e, n, t">
              Ou, r Comprehens, i, v, e Servi, c, e, s
            </h, 1>
            <p classN, a, m, e="t, e, x, t-x, l t, e, x, t-g, r, a, y-60, 0 ma, x-w-3x, l m, x-a, u, t, o lead, i, n, g-rela, x, e, d">
              Deliver, i, n, g cutt, i, n, g-e, d, g, e soluti, o, n, s i, n A, I, Cl, o, u, d, Digi, t, a, l Transformat, i, o, n, an, d m, o, r, e.
            </p>
          </hea, d, e, r>

          <m, a, i, n>
            {/* Serv, i, c, e Navigat, i, o, n */}
            <di, v classN, a, m, e="f, l, e, x f, l, e, x-w, r, a, p just, i, f, y-cen, t, e, r ga, p-4 m, b-1, 2">
              {Obj, e, c, t.k, e, y, s(serviceDeta, i, l, s).ma, p((ke, y) => (
                <but, t, o, n
                  ke, y={ke, y}
                  classN, a, m, e={`p, x-6 p, y-3 roun, d, e, d-f, u, l, l f, o, n, t-semib, o, l, d transit, i, o, n-col, o, r, s ${
                    activeServ, i, c, e === ke, y
                      ? 'b, g-b, l, u, e-60, 0 t, e, x, t-wh, i, t, e sha, d, o, w-m, d'
                      : 'b, g-wh, i, t, e t, e, x, t-g, r, a, y-80, 0 ho, v, e, r:b, g-g, r, a, y-10, 0 sha, d, o, w-s, m'
                  }`}
                  onCl, i, c, k={() => handleServiceCl, i, c, k(ke, y)}
                >
                  {serviceDeta, i, l, s[ke, y].ti, t, l, e}
                </but, t, o, n>
              ))}
            </di, v>

            {/* Serv, i, c, e Deta, i, l, s */}
            {currentServ, i, c, e && (
              <sect, i, o, n classN, a, m, e="b, g-wh, i, t, e roun, d, e, d-2x, l sha, d, o, w-l, g p-8 anim, a, t, e-f, a, d, e-i, n">
                <h, 2 classN, a, m, e="t, e, x, t-3x, l f, o, n, t-b, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-6">{currentServ, i, c, e.ti, t, l, e}</h, 2>
                <p classN, a, m, e="t, e, x, t-l, g t, e, x, t-g, r, a, y-70, 0 m, b-8">{currentServ, i, c, e.description}</p>

                <di, v classN, a, m, e="g, r, i, d m, d:g, r, i, d-c, o, l, s-2 ga, p-8 m, b-8">
                  <di, v>
                    <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-80, 0 m, b-4">Ke, y Featu, r, e, s</h, 3>
                    <u, l classN, a, m, e="l, i, s, t-d, i, s, c l, i, s, t-ins, i, d, e t, e, x, t-g, r, a, y-60, 0 sp, a, c, e-y-2">
                      {currentServ, i, c, e.featu, r, e, s.ma, p((feat, u, r, e, in, d, e, x) => (
                        <l, i ke, y={in, d, e, x}>{feat, u, r, e}</l, i>
                      ))}
                    </u, l>
                  </di, v>
                  <di, v>
                    <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-80, 0 m, b-4">Technolog, i, e, s W, e Us, e</h, 3>
                    <u, l classN, a, m, e="l, i, s, t-d, i, s, c l, i, s, t-ins, i, d, e t, e, x, t-g, r, a, y-60, 0 sp, a, c, e-y-2">
                      {currentServ, i, c, e.technolog, i, e, s.ma, p((t, e, c, h, in, d, e, x) => (
                        <l, i ke, y={in, d, e, x}>{t, e, c, h}</l, i>
                      ))}
                    </u, l>
                  </di, v>
                </di, v>

                <di, v>
                  <h, 3 classN, a, m, e="t, e, x, t-x, l f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-80, 0 m, b-4">Benef, i, t, s fo, r Y, o, u, r Busin, e, s, s</h, 3>
                  <u, l classN, a, m, e="l, i, s, t-d, i, s, c l, i, s, t-ins, i, d, e t, e, x, t-g, r, a, y-60, 0 sp, a, c, e-y-2">
                    {currentServ, i, c, e.benef, i, t, s.ma, p((bene, f, i, t, in, d, e, x) => (
                      <l, i ke, y={in, d, e, x}>{bene, f, i, t}</l, i>
                    ))}
                  </u, l>
                </di, v>
              </sect, i, o, n>
            )}

            {/* CT, A Sect, i, o, n */}
            <sect, i, o, n classN, a, m, e="m, t-1, 6 t, e, x, t-cen, t, e, r">
              <di, v classN, a, m, e="b, g-b, l, u, e-60, 0 roun, d, e, d-2x, l p-8 t, e, x, t-wh, i, t, e">
                <h, 2 classN, a, m, e="t, e, x, t-3x, l f, o, n, t-b, o, l, d m, b-4">Re, a, d, y t, o Transf, o, r, m Y, o, u, r Busin, e, s, s?</h, 2>
                <p classN, a, m, e="t, e, x, t-x, l m, b-6">Cont, a, c, t u, s to, d, a, y t, o disc, u, s, s y, o, u, r proj, e, c, t an, d ge, t a tailo, r, e, d solut, i, o, n.</p>
                <Link href="/cont, a, c, t" classN, a, m, e="b, g-wh, i, t, e t, e, x, t-b, l, u, e-60, 0 p, x-8 p, y-3 roun, d, e, d-l, g f, o, n, t-semib, o, l, d ho, v, e, r:b, g-g, r, a, y-10, 0 transit, i, o, n-col, o, r, s">
                  Ge, t a F, r, e, e Consultat, i, o, n
                </Link>
              </di, v>
            </sect, i, o, n>
          </m, a, i, n>
        </di, v>
      </di, v>
    </>
  );
}