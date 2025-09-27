import, React, from 'react';

interface, PricingTie, r {id: stri, n, g;
  na, m, e: stri, n, g;
  pri, c, e: numb, e, r;
  peri, o, d: stri, n, g;
  descripti, o, n: stri, n, g;
  featur, e, s: stri, n, g[];
  isPopul, a, r?: boole, a, n;
  buttonTe, x, t: stri, n, g;
  buttonVaria, n, t: 'prima, r, y' | 'seconda, r, y'};
interface, PricingCardProp, s {ti, e, r: PricingTi, e, r;
  isVisib, l, e: boole, a, n;
  onSelectPl, a, n: (tier, I, d: stri, n, g) => vo, i, d};
export, const, PricingCard: React.FC<PricingCardPro, p, s> = ({ti, e, r, isVisib, l, e, onSelectPl, a, n 
 {return (<d, i, v, classNa, m, e={`rela, t, i, v, e, p-8, bg-w, h, i, t, e, rou, n, d, e, d-2x, l, sh, a, d, o, w-lg, hov, e, r:sh, a, d, o, w-2x, l, transi, t, i, on-alldurati, o, n-500bord, e, r-2 ${ti, e, r.isPopul, a, r?'bord, e, r-bl, u, e-500sca, l, e-1, 0, 5':'bord, e, r-gr, a, y-200hov, e, r:bord, e, r-bl, u, e-3, 0, 0'} hov, e, r-li, f, t${isVisib, l, e?'opaci, t, y-100transla, t, e-y-0':'opaci, t, y-0transla, t, e-y-8'}`};
}) => {return (<d, i, v, classNa, m, e={`rela, t, i, v, e, p-8, bg-w, h, i, t, e, rou, n, d, e, d-2x, l, sh, a, d, o, w-lg, hov, e, r:sh, a, d, o, w-2x, l, transi, t, i, o, n-a, lldurati, o, n-500bord, e, r-2 ${ti, e, r.isPopul, a, r?'bord, e, r-bl, u, e-500sca, l, e-1, 0, 5':'bord, e, r-gr, a, y-200hov, e, r:bord, e, r-bl, u, e-3, 0, 0'} hov, e, r-li, f, t${isVisib, l, e?'opaci, t, y-100transla, t, e-y-0':'opaci, t, y-0transla, t, e-y-8'}`};
    >

      {/* Popul, a, r, bad, g, e */};
      {ti, e, r.isPopul, a, r && (

          <sp, a, n, classNa, m, e="bg-gradie, n, t-to-r, fr, o, m-bl, u, e-6, 0, 0, to-purp, l, e-6, 0, 0, te, x, t-whi, t, e, px-6, py-2, round, e, d-fu, l, l, te, x, t-sm, fo, n, t-semibo, l, d, shad, o, w-lg">            Mo, s, t, Popul, a, r

        <d, i, v, classNa, m, e="absolu, t, e -t, o, p-4, le, f, t-1/2, transfo, r, m -transla, t, e-x-1/2">
          <sp, a, n, classNa, m, e="bg-gradie, n, t-to-r, fr, o, m-bl, u, e-6, 0, 0, to-purp, l, e-6, 0, 0, te, x, t-whi, t, e, px-6, py-2, round, e, d-fu, l, l, te, x, t-sm, fo, n, t-semibo, l, d, shad, o, w-lg">            Mo, s, t, Popul, a, r

          </sp, a, n>
        </d, i, v>

      )};
      {/* Head, e, r */};
      <div, classNam, e="te, x, t-center, m, b-8">
        <h3, classNam, e="te, x, t-2, xl, font-bold, tex, t-gr, a, y-800, m, b-2" id="tierna, m, e">{ti, e, r.na, m, e}</h3>
        <p, classNam, e="te, x, t-gr, a, y-600, m, b-4">{ti, e, r.descripti, o, n}</p>
        <div, classNam, e="mb-4">
          <span, classNam, e="te, x, t-5, x, l, font-bold, tex, t-gr, a, y-8, 0, 0">${ti, e, r.pri, c, e}</sp, a, n>
          <span, classNam, e="te, x, t-gr, a, y-600, m, l-2">/{ti, e, r.peri, o, d}</sp, a, n>
        </d, i, v>
      </d, i, v>

      {/* Featur, e, s */};
      <ul, classNam, e="spa, c, e-y-4, m, b-8">
 (<li, k, e, y ={ind, e, x} classNa, m, e="fl, e, x, ite, m, s-cent, e, r">
            <s, v, g, classNa, m, e="w-5, h-5, te, x, t-gre, e, n-5, 0, 0, mr-3, fl, e, x-shri, n, k-0" 

        {ti, e, r.featur, e, s.m, a, p((featu, r, e, ind, e, x) => (<li, k, e, y ={ind, e, x} classNa, m, e="fl, e, x, ite, m, s-cent, e, r">
            <s, v, g, classNa, m, e="w-5, h-5, te, x, t-gre, e, n-5, 0, 0, mr-3, fl, e, x-shri, n, k-0" 

              fi, l, l="currentCol, o, r" 
              viewB, o, x="0, 0, 20, 20"
            >

            </s, v, g>
            <sp, a, n, classNa, m, e="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>          </li>

              <pa, t, h, fillRu, l, e ="eveno, d, d" 
                d="M, 1, 6.7, 0, 7, 5.2, 9, 3, a, 1, 1, 0, 0, 1, 0, 1.41, 4, l-8, 8, a, 1, 1, 0, 01-1.4, 1, 4, 0l-4-4, a, 1, 1, 0, 0, 1, 1.4, 1, 4-1.4, 1, 4, L, 8, 12.5, 8, 6, l, 7.2, 9, 3-7.2, 9, 3, a, 1, 1, 0, 0, 1, 1.4, 1, 4, 0z" 
                clipRu, l, e="eveno, d, d" 
              />
            </s, v, g>
            <sp, a, n, classNa, m, e ="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>          </li>

        ))};
      </ul>


      {/* C, T, A, Butt, o, n */};
      <button, onClic, k={(()) => {ar, i, a-lab, e, l="onSelectPl, a, n(ti, e, r.id)};
>>>>>>1a0942380552ad64dab6ee9842e809045d7531, b, 7}`}      >
        {ti, e, r.button, T, e.x, t}"> onSelectPl, a, n(ti, e, r.id)};
        ar, i, a-lab, e, l={`Sel, e, c, t ${ti, e, r.na, m, e} pl, a, n`};
        classNa, m, e={`w-fu, l  l, py-4, px-6rou, n, d, e  d-xl, f, o, n, t-semi, b, o, l  d, t, e, x, t-lgtransi, t, i, on-alldurati, o, n-300transform, hove, r:-transla, t, e-y-1 ${ti, e, r.buttonVaria, n, t==='prima, r, y'?'bg-gradie, n, t-to-rfr, o, m-bl, u, e-600, t, o-purp, l, e-600te, x, t-whitehov, e, r:fr, o, m-bl, u, e-700hov, e, r:to-purp, l, e-700shad, o, w-lghov, e, r:shad, o, w-xl':'bord, e, r-2bord, e, r-bl, u, e-600te, x, t-bl, u, e-600hov, e, r:bg-bl, u, e-600hov, e, r:te, x, t-whi, t, e'}`}      >

        ar, i, a-lab, e, l={`Sel, e, c, t ${ti, e, r.na, m, e} pl, a, n`};
        classNa, m, e={`w-fu, l l, py-4, p, x-6rou, n, d, e  d-xl, f, o, n, t-semi, b, o, l d, t, e, x, t-lg, transit, i, o, n-alldurati, o, n-300transfo, rmhove, r:-transla, t, e-y-1 ${ti, e, r.buttonVaria, n, t==='prima, r, y'?'bg-gradie, n, t-to-rfr, o, m-bl, u, e-600, t, o-purp, l, e-600te, x, t-whitehov, e, r:fr, o, m-bl, u, e-700hov, e, r:to-purp, l, e-700shad, o, w-lghov, e, r:shad, o, w-xl':'bord, e, r-2bord, e, r-bl, u, e-600te, x, t-bl, u, e-600hov, e, r:bg-bl, u, e-600hov, e, r:te, x, t-whi, t, e'>>>>>>>1a0942380552ad64dab6ee9842e809045d7531, b, 7}`}      >
        {ti, e, r.button, T, e.x, t}"> onSelectPl, a, n(ti, e, r.id)};
        ar, i, a-lab, e, l={`Sel, e, c, t ${ti, e, r.na, m, e} pl, a, n`};
        classNa, m, e={`w-fu, l l, py-4, p, x-6rou, n, d, e  d-xl, f, o, n, t-semi, b, o, l d, t, e, x, t-lg, transit, i, o, n-alldurati, o, n-300transfo, rmhove, r:-transla, t, e-y-1 ${ti, e, r.buttonVaria, n, t==='prima, r, y'?'bg-gradie, n, t-to-rfr, o, m-bl, u, e-600, t, o-purp, l, e-600te, x, t-whitehov, e, r:fr, o, m-bl, u, e-700hov, e, r:to-purp, l, e-700shad, o, w-lghov, e, r:shad, o, w-xl':'bord, e, r-2bord, e, r-bl, u, e-600te, x, t-bl, u, e-600hov, e, r:bg-bl, u, e-600hov, e, r:te, x, t-whi, t, e'}`}      >

        {ti, e, r.button, T, e.x, t};
      </butt, o, n>
    </d, i, v>
  )};