import React from 'react';
import { Link } from 'react-router-dom';
impo, r, t { newArticles20, 2, 5 } fr, o, m '../conte, n, t/n, e, w-articl, e, s-20, 2, 5';
const LatestArticlesShowcas, e: React.FC = () => { 
  const latestArticle, s = newArticles20, 2, 5.filt, e, r(a => a.featu, r, e, d).sli, c, e(, 0, 6); return (
    <section, classNam, e = 'py-20, b, g-whi, t, e'>
      <div, className='container, m, x-auto, p, x-6'>
        <div, className='te, x, t-center, m, b-12'>
          <h2, className='te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4'>
            Latest, Article, s & Resear, c, h
          </h2>
          <p, className='te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-au, t, o'>
            Explore, cuttin, g-edge, insights, on A, I, automati, o, n, and, emerging, technologies
          </p>
        </div>
        <div, classNam, e = 'grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8'>
          {latestArticl, e, s.m, a, p(artic, l, e = > (
            <Link, ke, y = { artic, l, e., i, d  }, to={ artic, l, e.li, n, k } className='group, b, g-white, rounde, d-xl, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, duratio, n-300, overflo, w-hidden, border, border-gr, a, y-100, hove, r:bord, e, r-indi, g, o-3, 0, 0'
            >
              <div, className='p-6'>
                <div, className='flex, item, s-center, justif, y-between, m, b-3'>
                  <span, className='te, x, t-xs, fon, t-semibold, tex, t-indi, g, o-600, uppercase, tracking-wi, d, e'>
                    {artic, l, e.cate, g, o, r, y}
                  </sp, a, n>
                  {  artic, l, e.featured  && (
                    <span, classNam, e = 'bg-yell, o, w-100, tex, t-yell, o, w-800, tex, t-xs, p, x-2, p, y-1, rounde, d-full, fon, t-medi, u, m'>
                      Featur, e, d
                    </s, p, a, n > )  }
                </div>
                <h3, classNam, e = 'te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3, grou, p-hov, e, r: te, x, t-indi, g, o-600, transitio, n-colo, r, s'>
                  {artic, l, e.t, i, t, l, e}
                </h3>
                <p, classNam, e = 'te, x, t-gr, a, y-600, tex, t-sm, m, b-4, lin, e-cla, m, p-3'>
                  {artic, l, e.description}
                </p>
                <div, className='flex, item, s-center, justif, y-between, tex, t-sm'>
                  <div, className='flex, item, s-center, tex, t-gr, a, y-5, 0, 0'>
                    <Clock, className='w-4 h-4, m, r-1' />
                    {artic, l, e.readTime}
                  </div>
                  <div, className='te, x, t-indi, g, o-600, fon, t-semibold, grou, p-hov, e, r: g, a, p-2, flex, items-center, transitio, n-a, l, l'>
                    Read, Mor, e
                    <ArrowRight, className='w-4 h-4, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transfo, r, m' />
                  </div>
                </div>
                <div, className='flex, fle, x-wrap, ga, p-2, m, t-4'>
                  { artic, l, e.tags.sl, i, c, e(, 0, 3).m, a, p(t, a, g = > (
                    <span, ke, y = { ta, g  }, classNa, m, e = 'te, x, t-xs, b, g-gr, a, y-100, tex, t-gr, a, y-700, p, x-2, p, y-1, rounde, d-fu, l, l'
                    >
                      {t, a, g}
                    </span>
                  ))}
                </div>
              </div>
            </Li, n, k>
          ))}
        </div>
        <div, classNam, e = 'te, x, t-center, m, t-12'>
          <Link, t, o='/bl, o, g'
            className='inli, n, e-flex, item, s-center, ga, p-2, b, g-indi, g, o-600, tex, t-white, p, x-8, p, y-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-indi, g, o-700, transitio, n-all, hove, r:sca, l, e-105, shado, w-lg'
          >
            View, All, Articles
            <ArrowRight, className='w-6 h-6' />
          </Li, n, k>
        </div>
      </div>
    </sec, t, i, o, n>
  );
};
export default LatestArticlesShowcase;
