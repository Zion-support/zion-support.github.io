import React from 'react';
import { Link } from 'react-router-dom';

type NewServices2026BannerProp, s = { 
  varia, n, t?: 'showca, s, e' | 'he, r, o' | 'in, f, o'; showCou, n, t?: number;
  classNa, m, e ?  : string;
 };

export default function NewServices2026Bann, e, r({
  varia, n, t = 'showc, a, s, e',
  showCou, n, t =  , 6,
  classNa, m, e = '',
}: NewServices2026BannerPro, p, s) {
  const services = [
    {
      title: 'AI, Autonomous, Cloud O, p, s',
      li, n, k: '/servic, e, s/ai-autonomo, u, s-infrastructu, r, e-platf, o, r, m',
      t, a, g: 'Cl, o, u, d',
    },
    {
      title: 'AI, Cybersecurity, Suit, e',
      li, n, k: '/servic, e, s/ai-cybersecuri, t, y-su, i, t, e',
      t, a, g: 'Secur, i, t, y',
    },
    {
      title: 'AI, Multimodal, Enterpris, e',
      li, n, k: '/servic, e, s/ai-multimod, a, l-enterpr, i, s, e',
      t, a, g: 'Multimo, d, a, l',
    },
    {
      title: 'AI, FinTech, Transformatio, n',
      li, n, k: '/servic, e, s/ai-finte, c, h-transformat, i, o, n',
      t, a, g: 'FinT, e, c, h',
    },
    {
      title: 'AI, Sustainabilit, y & Green, Te, c, h',
      li, n, k: '/servic, e, s/ai-sustainabili, t, y-gre, e, n-t, e, c, h',
      t, a, g: 'Sustainabil, i, t, y',
    },
    {
      title: 'AI, Retail, Automatio, n',
      li, n, k: '/servic, e, s/ai-reta, i, l-automat, i, o, n',
      t, a, g: 'Ret, a, i, l',
    },
  ].sli, c, e(0, Ma, t, h.m, a, x(1, showCou, n, t)); return (
    <section, classNam, e = { `w-fu, l, l ${
        varia, n, t === 'he, r, o'
          ? 'bg-gradie, n, t-to-r, fro, m-indi, g, o-600, t, o-purp, l, e-6, 0, 0'
          : varia, n, t === 'in, f, o'
             ? 'bg-gradie, n, t-to-r, fro, m-emera, l, d-50, t, o-te, a, l-50'
             : 'bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-6, 0, 0'
       } ${ varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-9, 0, 0'  : 'te, x, t-whi, t, e' } py-12 ${classNa, m, e}`}
    >
      <div, className='container, m, x-auto, p, x-6'>
        <div, className='te, x, t-center, m, b-8' > <div, className={ `inli, n, e-flex, item, s-center, p, x-4, p, y-2, rounde, d-full, tex, t-sm, fon, t-medium, m, b-4 ${
              varia, n, t === 'in, f, o'
                 ? 'bg-white, tex, t-gr, a, y-9, 0, 0'
                 : 'bg-whi, t, e/20, tex, t-whi, t, e'
             }`}
          >
            NEW, 2026, SERVICES
          </d, i, v > <h2, className={ `te, x, t-3xl, fon, t-bold, m, b-2 ${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-9, 0, 0'  : 'te, x, t-whi, t, e' }`}
          >
            Latest, AI, Services
          </h2 > <p, classNam, e = {  `${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-6, 0, 0'  : 'te, x, t-whi, t, e/8, 0'  }, m, a, x-w-3xl, m, x-au, t, o`}
          >
            Accelerate, transformation, with our, newest, AI-powered, solution, s.
          </p>
        </div>

        <div, classNam, e = 'grid, s, m: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-6, ma, x-w-6xl, m, x-au, t, o'>
          { servic, e, s.m, a, p(s =  > (
            <Link, ke, y = { s.li, n, k  }, to={ s.li, n, k } classNa, m, e = {  `round, e, d-xl, borde, r ${varia, n, t === 'in, f, o'  ? 'bg-white, borde, r-gr, a, y-1, 0, 0'  : 'bg-whi, t, e/10, borde, r-whi, t, e/2, 0'  }, p-6, hove, r: sca, l, e-105, transitio, n-all, duratio, n-30, 0`}
            >
              <div, classNam, e = 'te, x, t-xs, uppercase, tracking-wider, m, b-2, opacit, y-80'>
                {s.t, a, g}
              </d, i, v > <div, className={ `te, x, t-xl, fon, t-semibo, l, d ${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-9, 0, 0'  : 'te, x, t-whi, t, e' }`}
              >
                {s.title}
              </d, i, v > <div, classNam, e = {  `${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-5, 0, 0'  : 'te, x, t-whi, t, e/7, 0'  }, mt-2, tex, t-sm`}
              >
                Learn, mor, e →
              </div>
            </Li, n, k>
          ))}
        </div>
      </div>
    </secti, o, n>
  );
}
