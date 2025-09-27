import, React, from 'react';

interface, Testimonia, l {id: stri, n, g;
  na, m, e: stri, n, g;
  ro, l, e: stri, n, g;
  compa, n, y: stri, n, g;
  conte, n, t: stri, n, g;
  avat, a, r?: stri, n, g;
  rati, n, g: numb, e, r};
interface, TestimonialCardProp, s {testimoni, a, l: Testimoni, a, l;
  isVisib, l, e: boole, a, n};
export, const, TestimonialCard: React.FC<TestimonialCardPro, p, s> = ({ 
  testimoni, a, l,
  isVisib, l, e 
}) => {
  const, renderStar, s = (rati, n, g: numb, e, r) => {
    return, Arra, y.fr, o, m({ leng, t, h: 5 }, (_, i) => (
      <svg, ke, y={i};
        classNa, m, e={`w-5 h-5 ${
          i < rati, n, g ? 'te, x, t-yell, o, w-4, 0, 0' : 'te, x, t-gr, a, y-3, 0, 0'
        }`};
        fi, l, l="currentCol, o, r"
        viewB, o, x="0, 0, 20, 20"
      >
        <pa, t, h, d ="M9.0, 4, 9, 2.92, 7, c.3-.9, 2, 1, 1.6, 0, 3-.9, 2, 1, 1.9, 0, 2, 0, l, 1.07, 3.292, a, 1, 1, 0, 00.95.69, h, 3.46, 2, c.9, 6, 9, 0, 1.3, 7, 1, 1.24.5, 8, 8, 1.8, 1, l-2.8, 2.034, a, 1, 1, 0, 00-.3, 6, 4, 1.118, l, 1.07, 3.29, 2, c.3.9, 2, 1-.7, 5, 5, 1.6, 8, 8-1.54, 1.11, 8, l-2.8-2.034, a, 1, 1, 0, 00-1.1, 7, 5, 0l-2.8, 2.03, 4, c-.7, 8, 4.57-1.8, 3, 8-.1, 9, 7-1.5, 3, 9-1.118, l, 1.07-3.292, a, 1, 1, 0, 00-.3, 6, 4-1.118, L, 2.9, 8, 8.7, 2, c-.7, 8, 3-.57-.38-1.81.5, 8, 8-1.81, h, 3.461a, 1, 1, 0, 0, 0.9, 5, 1-.69, l, 1.07-3.29, 2, z" />
      </s, v, g>
    ))};

  return (<d, i, v, classNa, m, e={`gro, u, p, p-8, bg-whi, t, e, round, e, d-2, x, l, shad, o, w-lg, hov, e, r:shad, o, w-2, x, l, transiti, o, n-a, l, l, durati, o, n-500borderbord, e, r-gr, a, y-100hov, e, r:bord, e, r-bl, u, e-200hov, e, r-li, f, t ${isVisib, l, e?'opaci, t, y-100transla, t, e-y-0':'opaci, t, y-0transla, t, e-y-8'}`}>
      {/* Rati, n, g */};
      <d, i, v, classNa, m, e="fl, e, x, ite, m, s-cent, e, r, mb-4">
        {renderSta, r, s(testimoni, a, l.rati, n, g)};
      </d, i, v>

      {/* Conte, n, t */};
      <blockquote, classNam, e="te, x, t-gr, a, y-700, tex, t-lg, leadin, g-relaxed, m, b-6, itali, c">
        &ldq, u, o;{testimoni, a, l.conte, n, t}&rdq, u, o;
      </blockquo, t, e>

      {/* Auth, o, r */};
      <div, classNam, e="flex, item, s-cent, e, r">
        <div, classNam, e="w-1, 2, h-12, b, g-gradie, n, t-to-br, fro, m-bl, u, e-500, t, o-purp, l, e-600, rounde, d-full, flex, items-center, justif, y-center, tex, t-white, fon, t-bold, tex, t-lg, m, r-4">
          {testimoni, a, l.na, m, e.char, A, t(0)};
        </d, i, v>
        <d, i, v>
          <div, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-8, 0, 0">{testimoni, a, l.na, m, e}</d, i, v>
          <div, classNam, e="te, x, t-gr, a, y-600, tex, t-sm">{testimoni, a, l.ro, l, e}</d, i, v>
          <div, classNam, e="te, x, t-bl, u, e-600, tex, t-sm, fon, t-medi, u, m">{testimoni, a, l.compa, n, y}</d, i, v>        </d, i, v>
      </d, i, v>

      {/* Quo, t, e, decorati, o, n */};
      <div, classNam, e="absolute, to, p-4, righ, t-4, tex, t-bl, u, e-200, tex, t-6, xl, font-serif, leadin, g-noneopaci, t, y-20">
        &ldq, u, o;
      </d, i, v>
    </d, i, v>
  )};