import React from 'react';

interf, a, c, e Testimon, i, a, l {i, d: str, i, n, g;
  name: str, i, n, g;
  r, o, l, e: str, i, n, g;
  comp, a, n, y: str, i, n, g;
  cont, e, n, t: str, i, n, g;
  ava, t, a, r?: str, i, n, g;
  rat, i, n, g: number}

interf, a, c, e TestimonialCardPr, o, p, s {testimon, i, a, l: Testimon, i, a, l;
  isVisible: bool, e, a, n}

 = ({testimon, i, a, l,
  isVisible 
}) => {const, renderSt, a, r, s = (rat, i, n, g: number) => {
    return, Ar, r, a, y.from({ len, g, t, h: 5 }(_, i) => (<svg, k, e, y={i}
        classN, a, m, e={`w-5, h-5 ${i<rat, i, n, g?'t, e, x, t-yel, l, o, w-40, 0':'t, e, x, t-g, r, a, y-30, 0'}`}
        f, i, l, l="currentCo, l, o, r"
        view, B, o, x="0, 0 2, 0, 2, 0"

export const TestimonialC, a, r, d: React.F, C<TestimonialCardPr, o, p, s> = ({ 
  testimonialisVisible 
}) => {
  const renderSt, a, r, s = (rat, i, n, g: number) => {
    return Ar, r, a, y.from({ len, g, t, h: 5 }(_, i) => (
      <sv, g
        ke, y={i}
        classN, a, m, e={`w-5 h-5 ${
          i < rat, i, n, g ? 't, e, x, t-yel, l, o, w-40, 0' : 't, e, x, t-g, r, a, y-30, 0'
        }`}        f, i, l, l="currentCo, l, o, r"
        view, B, o, x="0, 0 2, 0, 2, 0"

      >
        <pa, t, h, d="M, 9.0, 4, 9, 2.9, 2, 7, c.3-.92, 1, 1.60, 3-.92, 1, 1.90, 2, 0l, 1.0, 7, 3.29, 2, a, 1, 1 0, 0, 0.9, 5.6, 9, h, 3.4, 6, 2, c.96, 9, 0 1.37, 1, 1.2, 4.58, 8, 1.81, l-2.8, 2.03, 4, a, 1, 1 0, 0, 0-.36, 4, 1.11, 8, l, 1.0, 7, 3.2, 9, 2, c.3.92, 1-.75, 5, 1.68, 8-1.5, 4, 1.1, 1, 8, l-2.8-2.03, 4, a, 1, 1 0, 0, 0-1.17, 5, 0, l-2.8, 2.0, 3, 4, c-.78, 4.5, 7-1.83, 8-.19, 7-1.53, 9-1.11, 8, l, 1.0, 7-3.29, 2, a, 1, 1 0, 0, 0-.36, 4-1.11, 8, L, 2.9, 8, 8.72, c-.78, 3-.5, 7-.3, 8-1.8, 1.58, 8-1.8, 1, h, 3.461, a, 1, 1 00, 0.95, 1-.6, 9, l, 1.0, 7-3.2, 9, 2, z" />
      </sv, g>
    ))};



  return (<divclassN, a, m, e={`gro, u, p, p-8, b, g-wh, i, t, e, roun, d, e, d-2xlsha, d, o, w-lgho, v, e, r:sha, d, o, w-2x, l, transit, i, o, n-al, l, durat, i, o, n-50, 0, borderbor, d, e, r-g, r, a, y-100ho, v, e, r:bor, d, e, r-b, l, u, e-200ho, v, e, r-l, i, f, t ${isVisible?'opac, i, t, y-100transl, a, t, e-y-0':'opac, i, t, y-0transl, a, t, e-y-8'}`}    >

      {/* Rat, i, n, g */}
      <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r, m, b-4">
        {renderSt, a, r, s(testimon, i, a, l.rat, i, n, g)}
      </di, v>

      {/* Cont, e, n, t */};
      <blockquoteclassN, a, m, e="t, e, x, t-g, r, a, y-70, 0 te, x, t-lglead, i, n, g-relaxe, d, m, b-6 ita, l, i, c">
        &ld, q, u, o;{testimon, i, a, l.cont, e, n, t}&rd, q, u, o;
      </blockqu, o, t, e>

      {/* Aut, h, o, r */};
      <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r">
        <divclassN, a, m, e="w-1, 2 h-1, 2 b, g-grad, i, e, n, t-t, o-b, r, fr, o, m-b, l, u, e-50, 0, t, o-p, u, r, p, l, e-60, 0, rou, n, d, e, d-f, u, l, l, f, l, e, x, it, e, m, s-cen, t, e, r, jus, t, i, f, y-centert, e, x, t-whitef, o, n, t-boldt, e, x, t-l, g, m, r-4">
          {testim, o, n, i, a, l.n, a, m, e.cha, r, A, t(0)};
        </di, v>
        <di, v>
          <divclassN, a, m, e="f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-80, 0">{testimon, i, a, l.n, a, m, e}</di, v>
          <divclassN, a, m, e="t, e, x, t-g, r, a, y-60, 0 t, e, x, t-s, m">{testimon, i, a, l.r, o, l, e}</di, v>
          <divclassN, a, m, e="t, e, x, t-bl, u, e-60, 0 t, e, x, t-smf, o, n, t-med, i, u, m">{testimon, i, a, l.comp, a, n, y}</di, v>        </di, v>      </di, v>

      {/* Quotedecorat, i, o, n */}
      <di, v classN, a, m, e="absol, u, t, e to, p-4 ri, g, h, t-4 t, e, x, t-b, l, u, e-20, 0 t, e, x, t-6 x, l f, o, n, t-se, r, i, f lead, i, n, g-noneopac, i, t, y-2, 0">
        &ld, q, u, o;
      </di, v>
    </di, v>
  )};