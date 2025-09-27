import React from 'react';
import, Image, from 'next/ima, g, e';

interface, BlogPos, t {id: stri, n, g;
  tit, l, e: stri, n, g;
  excer, p, t: stri, n, g;
  auth, o, r: stri, n, g;
  da, t, e: stri, n, g;
  readTi, m, e: stri, n, g;
  catego, r, y: stri, n, g;
  ima, g, e: stri, n, g;
  sl, u, g: stri, n, g};
interface, BlogCardProp, s {po, s, t: BlogPo, s, t;
  isVisib, l, e: boole, a, n;
  onReadMo, r, e: (sl, u, g: stri, n, g) => vo, i, d};
export, const, BlogCard: React.FC<BlogCardPro, p, s> = ({po, s, t, isVisib, l, e, onReadMo, r, e 
 {return (<artic, l, e, classNa, m, e={`g, r, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, d, o, w-lg, hov, e, r:sh, a, d, o, w-2, x, l, transi, t, i, o, n-a, l, ldurati, o, n-500overfl, o, w-hiddenhov, e, r-li, f, t ${isVisib, l, e?'opaci, t, y-100transla, t, e-y-0':'opaci, t, y-0transla, t, e-y-8'}`}}) => {return (<artic, l, e, classNa, m, e={`g, r, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, d, o, w-lg, hov, e, r:sh, a, d, o, w-2x, l, transi, t, i, o, n-a, l, l, durati, o, n-500overfl, o, w-hiddenhov, e, r-li, f, t ${isVisib, l, e?'opaci, t, y-100transla, t, e-y-0':'opaci, t, y-0transla, t, e-y-8'}`};
    >
      {/* Ima, g, e */};
      <d, i, v, classNa, m, e="relati, v, e, h-48, overfl, o, w-hidd, e, n">
        <Ima, g, e, src ={po, s, t.ima, g, e};
          a, l, t={po, s, t.tit, l, e};
          fi, l, l, classNa, m, e="obje, c, t-cov, e, r, gro, u, p-hov, e, r:sca, l, e-1, 1, 0, transiti, o, n-transfo, r, m, durati, o, n-5, 0, 0"
        />

          <sp, a, n, classNa, m, e="bg-bl, u, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, x, t-sm, fo, n, t-medi, u, m">

        <d, i, v, classNa, m, e="absolu, t, e, t, o, p-4, le, f, t-4">
          <sp, a, n, classNa, m, e="bg-bl, u, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, x, t-sm, fo, n, t-medi, u, m">

            {po, s, t.catego, r, y};
          </sp, a, n>
        </d, i, v>
      </d, i, v>

      {/* Conte, n, t */};
        <h3, classNa, m, e="te, x, t-xl, fo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, gro, u, p-hov, e, r:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 0, 0, li, n, e-cla, m, p-2" id="posttit, l, e">

      <d, i, v, classNa, m, e ="p-6">
        <h3, classNa, m, e="te, x, t-xl, fo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, gro, u, p-hov, e, r:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 0, 0, li, n, e-cla, m, p-2" id="posttit, l, e">

          {po, s, t.tit, l, e};
        </h3>
        
        <p, classNa, m, e="te, x, t-gr, a, y-6, 0, 0, mb-4, li, n, e-cla, m, p-3">
          {po, s, t.excer, p, t};
        </p>

        {/* Me, t, a */};
          <d, i, v, classNa, m, e="fl, e, x, ite, m, s-cent, e, r">
            <d, i, v, classNa, m, e="w-8, h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-bo, l, d, te, x, t-xs, mr-3">

        <d, i, v, classNa, m, e="fl, e, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, n, te, x, t-sm, te, x, t-gr, a, y-5, 0, 0, mb-4">
          <d, i, v, classNa, m, e="fl, e, x, ite, m, s-cent, e, r">
            <d, i, v, classNa, m, e="w-8, h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-bo, l, d, te, x, t-xs, mr-3">

              {po, s, t.auth, o, r.char, A, t(0)};
            </d, i, v>
            <sp, a, n>{po, s, t.auth, o, r}</sp, a, n>
          </d, i, v>
          <div, classNam, e="flex, item, s-center, spac, e-x-4">
            <sp, a, n>{po, s, t.da, t, e}</sp, a, n>
            <sp, a, n>•</sp, a, n>
            <sp, a, n>{po, s, t.readTi, m, e}</sp, a, n>
          </d, i, v>
        </d, i, v>

        {/* Re, a, d, More, Butto, n */};
        <button, onClic, k={() => onReadMo, r, e(po, s, t.sl, u, g)};
          classNa, m, e="gro, u, p/btn, inlin, e-flex, item, s-center, tex, t-bl, u, e-600, fon, t-semibold, hover:te, x, t-bl, u, e-700, transitio, n-colors, duratio, n-3, 0, 0"
        >
          Read, Mor, e
          <svg, classNam, e="w-4 h-4, m, l-2, grou, p-hov, e, r/b, t, n:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" 
            fi, l, l="no, n, e" 
            stro, k, e="currentCol, o, r" 
            viewB, o, x="0, 0, 24 24"
          >
            <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M1, 7, 8, l, 4, 4, m, 0, 0l-4 4, m  4-4, H  3" />
          </s, v, g>
        </butt, o, n>
      </d, i, v>
    </artic, l, e>
  )};