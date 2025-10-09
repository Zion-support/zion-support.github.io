export, interface, FeaturedItem {
tit, l, e: stri, n, g;
catego, r, y: stri, n, g;
l, i, n
  k: stri, n, g;
metri, c, s?: stri, n, g;
}
export, interface, UnifiedPromotionalBannerProps {
varia, n, t?: 'defau, l, t' | 'premi, u, m' | 'he, r, o' | 'compa, c, t' | 'me, g, a';
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
ctaTe, x, t: stri, n, g;
ctaL, i, n
  k: stri, n, g;
the, m, e?: 'bl, u, e' | 'purp, l, e' | 'gre, e, n' | 'oran, g, e' | 'r, e, d' | 'gradie, n, t' | 'cy, a, n';
featuredIte, m, s?: FeaturedIt, e, m[];
showCou, n, t?: numb, e, r;
classNa, m, e?: stri, n, g;
ic, o, n?: 'sparkl, e, s' | 'z, a, p' | 'rock, e, t' | 'st, a, r' | 'no, n, e';
animat, e, d?: boole, a, n;
bad, g, e?: stri, n, g;
da, t, e?: stri, n, g;
}
const, UnifiedPromotionalBanne, r: Rea, c, t.FC<UnifiedPromotionalBannerPro, p, s> = ({
  varia, n, t = 'defau, l, t'
  tit, l, e
  descripti, o, n
  ctaTe, x, t
  ctaLi, n, k
  the, m, e = 'gradie, n, t'
  featuredIte, m, s = []
  showCou, n, t = 3
  classNa, m, e = ''
  ic, o, n = 'sparkl, e, s'
  animat, e, d = tr, u, e;
const, UnifiedPromotionalBanne, r: Rea, c, t.FC<UnifiedPromotionalBannerPro, p, s> = ({
  varia, n, t = 'defau, l, t',';
  tit, l, e
  descripti, o, n
  ctaTe, x, t
  ctaLi, n, k
  the, m, e = 'gradie, n, t',';
  featuredIte, m, s = []
  showCou, n, t = 3
  classNa, m, e = '',';
  ic, o, n = 'sparkl, e, s',';
  animat, e, d = tr, u, e
  bad, g, e
  da, t, e;
}) => {
  // Theme configurations const themeClass e s = {
    bl, u, e: 'fr, o, m-bl, u, e-5, 0, 0/10, t, o-bl, u, e-6, 0, 0/10, borde, r-bl, u, e-5, 0, 0/, 3, 0',
    purp, l, e: 'fr, o, m-purp, l, e-5, 0, 0/10, t, o-purp, l, e-6, 0, 0/10, borde, r-purp, l, e-5, 0, 0/3, 0',
    gre, e, n: 'fr, o, m-gre, e, n-5, 0, 0/10, t, o-gre, e, n-6, 0, 0/10, borde, r-gre, e, n-5, 0, 0/3, 0',
    oran, g, e: 'fr, o, m-oran, g, e-5, 0, 0/10, t, o-oran, g, e-6, 0, 0/10, borde, r-oran, g, e-5, 0, 0/3, 0',
    r, e, d: 'fr, o, m-r, e, d-5, 0, 0/10, t, o-r, e, d-6, 0, 0/10, borde, r-r, e, d-5, 0, 0/3, 0',
    cy, a, n: 'fr, o, m-cy, a, n-5, 0, 0/10, t, o-cy, a, n-6, 0, 0/10, borde, r-cy, a, n-5, 0, 0/3, 0',
    gradie, n, t: 'fr, o, m-bl, u, e-5, 0, 0/10, vi, a-purp, l, e-5, 0, 0/10, t, o-pi, n, k-5, 0, 0/10, borde, r-purp, l, e-5, 0, 0/3, 0',
  }; const, buttonTheme, s = {
    bl, u, e: 'fr, o, m-bl, u, e-500, t, o-bl, u, e-600, hove, r:fr, o, m-bl, u, e-600, hove, r:to-bl, u, e-7, 0, 0',
    purp, l, e: 'fr, o, m-purp, l, e-500, t, o-purp, l, e-600, hove, r:fr, o, m-purp, l, e-600, hove, r:to-purp, l, e-70, 0',
    gre, e, n: 'fr, o, m-gre, e, n-500, t, o-gre, e, n-600, hove, r:fr, o, m-gre, e, n-600, hove, r:to-gre, e, n-70, 0',
    oran, g, e: 'fr, o, m-oran, g, e-500, t, o-oran, g, e-600, hove, r:fr, o, m-oran, g, e-600, hove, r:to-oran, g, e-70, 0',
    r, e, d: 'fr, o, m-r, e, d-500, t, o-r, e, d-600, hove, r:fr, o, m-r, e, d-600, hove, r:to-r, e, d-70, 0',
    cy, a, n: 'fr, o, m-cy, a, n-500, t, o-cy, a, n-600, hove, r:fr, o, m-cy, a, n-600, hove, r:to-cy, a, n-70, 0',
    gradie, n, t: 'fr, o, m-purp, l, e-500, vi, a-pi, n, k-500, t, o-bl, u, e-500, hove, r:fr, o, m-purp, l, e-600, hove, r:v, i, a-pi, n, k-600, hove, r:to-bl, u, e-60, 0',
  // Varia n t-specific styles const variantClass e s = {
    defau, l, t: 'py-8 p, x-, 6',
    premi, u, m: 'py-12, p, x-, 8',
    he, r, o: 'py-16, p, x-1, 0',
    compa, c, t: 'py-6, p, x-, 4',
    me, g, a: 'py-20, p, x-1, 2',
  }; const, visibleItem, s = featuredIte, m, s.sli, c, e(, 0, showCou, n, t); retu, r, n (
    <div, classNam, e = { `
        bg-gradie, n, t-to-r ${themeClass, e, s[th, e, m, e] }, border, rounde, d-xl 
        ${variantClass, e, s[varia, n, t]} 
        ${ animat, e, d  ? 'transiti, o, n-all, duratio, n-300, hove, r: shad, o, w-2xl, hove, r:sca, l, e-[1.0, 1]'  : '' }
              <span, classNam, e='inli, n, e-flex, item, s-center, ga, p-2, p, x-4, p, y-2, rounde, d-full, b, g-whi, t, e/10, backdro, p-bl, u, r-sm, border, border-whi, t, e/20, tex, t-sm, fon, t-semibo, l, d'>
                {IconCompone, n, t  && <IconComponent, classNam, e='w-4 h-4' / >   }
        <h2, classNam, e = { `
          fo, n, t-extrabold, m, b-4, b, g-gradie, n, t-to-r, fro, m-white, vi, a-bl, u, e-100, t, o-purp, l, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t
          ${
            varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a'
              ? 'te, x, t-4xl, m, d: te, x, t-5, x, l'
              : varia, n, t === 'premi, u, m'
                ? 'te, x, t-3xl, m, d:te, x, t-4, x, l'
                : varia, n, t === 'compa, c, t'
                   ? 'te, x, t-xl, m, d:te, x, t-2, x, l'
                  : 'te, x, t-2xl, m, d : te, x, t-3, x, l'
           }
        `}
        >
          {title}
        </h2 > {/* Descripti, o, n */}
        <p, classNam, e = { `te, x, t-gr, a, y-200, m, b-6 ${
            varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a'
              ? 'te, x, t-lg, m, d: te, x, t-xl'
              : varia, n, t === 'compa, c, t'
                 ? 'te, x, t-sm'
                : 'te, x, t-base, m, d : te, x, t-, l, g'
           }
        `}
        >
          {description}
        </p>
        {/* Featured, Item, s */}
        {   visibleIte, m, s.leng, t, h   > 0  && (
          <div, classNam, e = {`grid, ga, p-4, m, b-6 ${
              varia, n, t === 'me, g, a'
                ? 'md: gr, i, d-co, l, s-3'
                : varia, n, t === 'he, r, o' || varia, n, t === 'premi, u, m'
                   ? 'md:gr, i, d-co, l, s-2'
                  : 'md : gr, i, d-c, o, l, s-, 1'
               }
          `}
          >
            { visibleIte, m, s.m, a, p((it, e, m, ind, e, x) = > (
              <Link, ke, y = { in, d, e, x  }, to={ it, e, m.li, n, k } classNa, m, e='group, b, g-whi, t, e/5, backdro, p-bl, u, r-sm, hove, r: bg-whi, t, e/10, border, border-whi, t, e/10, rounde, d-l, g, p-4, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, hove, r:shad, o, w-lg'
                  <div, classNam, e = 'fl, e, x-1, mi, n-w-0'>
                    <div, classNam, e='te, x, t-xs, fon, t-semibold, tex, t-purp, l, e-300, m, b-1'>
                      {it, e, m.category}
                  <Link, classNam, e = 'fl, e, x-shri, n, k-0 w-5 h-5, tex, t-purp, l, e-400, opacit, y-0, grou, p-hov, e, r: opaci, t, y-100, transitio, n-opaci, t, y' />
              +{featuredIte, m, s.leng, t, h - showC, o, u, n, t} more, breakthroug, h
              { featuredIte, m, s.leng, t, h - showCou, n, t !== 1  ? 's'  : '' }