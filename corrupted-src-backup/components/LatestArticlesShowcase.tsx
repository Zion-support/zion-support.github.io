import, React, from 'rea, c, t';
impo, r, t { Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
impo, r, t { newArticles20, 2, 5 } fr, o, m '../conte, n, t/n, e, w-articl, e, s-20, 2, 5';
const, LatestArticlesShowcas, e: Rea, c, t.FC = () => { 
  const, latestArticle, s = newArticles20, 2, 5.filt, e, r(a => a.featu, r, e, d).sli, c, e(, 0, 6); retu, r, n (
    <section, classNam, e = 'py-20, b, g-whi, t, e'>
      <div, classNam, e='container, m, x-auto, p, x-6'>
        <div, classNam, e='te, x, t-center, m, b-12'>
          <h2, classNam, e='te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4'>
            Latest, Article, s & Resear, c, h
        <div, classNam, e = 'grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8'>
          {latestArticl, e, s.m, a, p(artic, l, e = > (
            <Link, ke, y = { artic, l, e., i, d  }, to={ artic, l, e.li, n, k } classNa, m, e='group, b, g-white, rounde, d-xl, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, duratio, n-300, overflo, w-hidden, border, border-gr, a, y-100, hove, r:bord, e, r-indi, g, o-3, 0, 0'
                <h3, classNam, e = 'te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3, grou, p-hov, e, r: te, x, t-indi, g, o-600, transitio, n-colo, r, s'>
                  {artic, l, e.t, i, t, l, e}
                  <div, classNam, e='te, x, t-indi, g, o-600, fon, t-semibold, grou, p-hov, e, r: g, a, p-2, flex, items-center, transitio, n-a, l, l'>
                    Read, Mor, e
                    <Link, classNam, e='w-4 h-4, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transfo, r, m' />
            View, All, Articles
            <Link, classNam, e='w-6 h-6' />
