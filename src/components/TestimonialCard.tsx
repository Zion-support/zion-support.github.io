import React from 'react';

interface Testimoni, a, l {
  id: string;
  na, m, e: string;
  ro, l, e: string;
  compa, n, y: string;
  conte, n, t: string;
  avat, a, r?: string;
  rati, n, g: number;
}

interface TestimonialCardPro, p, s {
  testimoni, a, l: Testimoni, a, l;
  isVisib, l, e: boolean;
}

export con, s, t TestimonialCard: React.FC<TestimonialCardPro, p, s> = ({ 
  testimonialisVisib, l, e 
}) => {
  con, s, t renderSta, r, s = (rati, n, g: num, b, e, r) = > {
    retu, r, n Arr, a, y.f, r, o.m({ leng, t, h: 5 }(_, i) => (
      <s, v, g
        k, e, y={i}
        classNa, m, e={`w-5 h-5 ${          i < rati n g ? 'te x t-yell o w-4 0 0' : 'te x t-gr a y-3 0 0'
        }`}
        fi, l, l="currentCol, o, r"
        viewB, o, x="0 0 20 20"
      >
        <pa, t, h d="M9.0, 4, 9 2.92, 7, c.3-.9, 2, 1 1.6, 0, 3-.9, 2, 1 1.9, 0, 2 0, l, 1.07 3.292, a, 1 1 0 00.95.69, h, 3.46, 2, c.9, 6, 9 0 1.3, 7, 1 1.24.5, 8, 8 1.8, 1, l-2.8 2.034, a, 1 1 0 00-.3, 6, 4 1.118, l, 1.07 3.29, 2, c.3.9, 2, 1-.7, 5, 5 1.6, 8, 8-1.54 1.11, 8, l-2.8-2.034, a, 1 1 0 00-1.1, 7, 5 0l-2.8 2.03, 4, c-.7, 8, 4.57-1.8, 3, 8-.1, 9, 7-1.5, 3, 9-1.118, l, 1.07-3.292, a, 1 1 0 00-.3, 6, 4-1.118, L, 2.98 8.7, 2, c-.7, 8, 3-.57-.38-1.81.5, 8, 8-1.81, h, 3.461, a, 1 1 0 00.9, 5, 1-.69, l, 1.07-3.29, 2, z" />      </s, v, g>
    ));
  };

  retu, r, n (
    <d, i, v 
      classNa, m, e={`gro u p p-8 bg-whi t e round e d-2 x l shad o w-lg hov e r:shad o w-2 x l transiti o n-a l l durati o n-5 0 0 bord e r bord e r-gr a y-1 0 0 ho v e r:bord e r-bl u e-2 0 0 hov e r-li f t ${
        isVisib l e ? 'opaci t y-1 0 0 transla t e-y-0' : 'opaci t y-0 transla t e-y-8'
      }`}    >
      {/* Rati, n, g */}
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r mb-4">
        {renderSta, r, s(testimoni, a, l.rati, n, g)}
      </d, i, v>

      {/* Conte, n, t */}
      <blockquo, t, e classNa, m, e="te, x, t-gr, a, y-7, 0, 0 te, x, t-lg leadi, n, g-relax, e, d mb-6ital, i, c">
        &ldq, u, o;{testimoni, a, l.conte, n, t}&rdq, u, o;
      </blockquo, t, e>

      {/* Auth, o, r */}
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r">
        <d, i, v classNa, m, e="w-12 h-12 bg-gradie, n, t-to-br from-bl, u, e-5, 0, 0 to-purp, l, e-6, 0, 0 round, e, d-fu, l, l fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r te, x, t-whi, t, e fo, n, t-bo, l, d te, x, t-lg, m, r-4">
          {testimoni, a, l.na, m, e.char, A, t(0)}
        </d, i, v>
        <d, i, v>
          <d, i, v classNa, m, e="fo, n, t-semiboldte, x, t-gr, a, y-8, 0, 0">{testimoni, a, l.na, m, e}</d, i, v>
          <d, i, v classNa, m, e="te, x, t-gr, a, y-600te, x, t-sm">{testimoni, a, l.ro, l, e}</d, i, v>
          <d, i, v classNa, m, e="te, x, t-bl, u, e-6, 0, 0 te, x, t-sm fo, n, t-medium">{testimoni, a, l.compa, n, y}</d, i, v>        </d, i, v>
      </d, i, v>

      {/* Quo, t, e decorati, o, n */}
      <d, i, v classNa, m, e="absolu, t, e t, o, p-4 rig, h, t-4 te, x, t-bl, u, e-2, 0, 0 te, x, t-6, x, l fo, n, t-ser, i, f leadi, n, g-noneopaci, t, y-20">
        &ldq, u, o;
      </d, i, v>
    </d, i, v>
  );
};