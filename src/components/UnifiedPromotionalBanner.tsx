import React from "react";
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
  // Theme, configuration, s
  const, themeClasse, s = {
    bl, u, e: 'fr, o, m-bl, u, e-5, 0, 0/10, t, o-bl, u, e-6, 0, 0/10, borde, r-bl, u, e-5, 0, 0/30','
    purp, l, e: 'fr, o, m-purp, l, e-5, 0, 0/10, t, o-purp, l, e-6, 0, 0/10, borde, r-purp, l, e-5, 0, 0/30','
    gre, e, n: 'fr, o, m-gre, e, n-5, 0, 0/10, t, o-gre, e, n-6, 0, 0/10, borde, r-gre, e, n-5, 0, 0/30','
    oran, g, e: 'fr, o, m-oran, g, e-5, 0, 0/10, t, o-oran, g, e-6, 0, 0/10, borde, r-oran, g, e-5, 0, 0/30','
    r, e, d: 'fr, o, m-r, e, d-5, 0, 0/10, t, o-r, e, d-6, 0, 0/10, borde, r-r, e, d-5, 0, 0/30','
    cy, a, n: 'fr, o, m-cy, a, n-5, 0, 0/10, t, o-cy, a, n-6, 0, 0/10, borde, r-cy, a, n-5, 0, 0/30','
    gradie, n, t: 'fr, o, m-bl, u, e-5, 0, 0/10, vi, a-purp, l, e-5, 0, 0/10, t, o-pi, n, k-5, 0, 0/10, borde, r-purp, l, e-5, 0, 0/30};
  const, buttonTheme, s = {
    bl, u, e: 'fr, o, m-bl, u, e-500, t, o-bl, u, e-600, hove, r:fr, o, m-bl, u, e-600, hov, e
  r:to-bl, u, e-7, 0, 0','
    purp, l, e: 'fr, o, m-purp, l, e-500, t, o-purp, l, e-600, hove, r:fr, o, m-purp, l, e-600, hov, e
  r:to-purp, l, e-7, 0, 0','
    gre, e, n: 'fr, o, m-gre, e, n-500, t, o-gre, e, n-600, hove, r:fr, o, m-gre, e, n-600, hov, e
  r:to-gre, e, n-7, 0, 0','
    oran, g, e: 'fr, o, m-oran, g, e-500, t, o-oran, g, e-600, hove, r:fr, o, m-oran, g, e-600, hov, e
  r:to-oran, g, e-7, 0, 0','
    r, e, d: 'fr, o, m-r, e, d-500, t, o-r, e, d-600, hove, r:fr, o, m-r, e, d-600, hov, e
  r:to-r, e, d-7, 0, 0','
    cy, a, n: 'fr, o, m-cy, a, n-500, t, o-cy, a, n-600, hove, r:fr, o, m-cy, a, n-600, hov, e
  r:to-cy, a, n-7, 0, 0','
    gradie, n, t: 'fr, o, m-purp, l, e-500, vi, a-pi, n, k-500, t, o-bl, u, e-500, hove, r:fr, o, m-purp, l, e-600, hove, r:v, i, a-pi, n, k-600, hov, e
  r:to-bl, u, e-6, 0, 0};
    bl, u, e: 'fr, o, m-bl, u, e-5, 0, 0/10, t, o-bl, u, e-6, 0, 0/10, borde, r-bl, u, e-5, 0, 0/30',';
    purp, l, e: 'fr, o, m-purp, l, e-5, 0, 0/10, t, o-purp, l, e-6, 0, 0/10, borde, r-purp, l, e-5, 0, 0/30',';
    gre, e, n: 'fr, o, m-gre, e, n-5, 0, 0/10, t, o-gre, e, n-6, 0, 0/10, borde, r-gre, e, n-5, 0, 0/30',';
    oran, g, e: 'fr, o, m-oran, g, e-5, 0, 0/10, t, o-oran, g, e-6, 0, 0/10, borde, r-oran, g, e-5, 0, 0/30',';
    r, e, d: 'fr, o, m-r, e, d-5, 0, 0/10, t, o-r, e, d-6, 0, 0/10, borde, r-r, e, d-5, 0, 0/30',';
    cy, a, n: 'fr, o, m-cy, a, n-5, 0, 0/10, t, o-cy, a, n-6, 0, 0/10, borde, r-cy, a, n-5, 0, 0/30',';
    gradie, n, t: 'fr, o, m-bl, u, e-5, 0, 0/10, vi, a-purp, l, e-5, 0, 0/10, t, o-pi, n, k-5, 0, 0/10, borde, r-purp, l, e-5, 0, 0/30'
  };
  const, buttonTheme, s = {
    bl, u, e: 'fr, o, m-bl, u, e-500, t, o-bl, u, e-600, hove, r:fr, o, m-bl, u, e-600, hov, e
  r:to-bl, u, e-7, 0, 0',';
    purp, l, e: 'fr, o, m-purp, l, e-500, t, o-purp, l, e-600, hove, r:fr, o, m-purp, l, e-600, hov, e
  r:to-purp, l, e-7, 0, 0',';
    gre, e, n: 'fr, o, m-gre, e, n-500, t, o-gre, e, n-600, hove, r:fr, o, m-gre, e, n-600, hov, e
  r:to-gre, e, n-7, 0, 0',';
    oran, g, e: 'fr, o, m-oran, g, e-500, t, o-oran, g, e-600, hove, r:fr, o, m-oran, g, e-600, hov, e
  r:to-oran, g, e-7, 0, 0',';
    r, e, d: 'fr, o, m-r, e, d-500, t, o-r, e, d-600, hove, r:fr, o, m-r, e, d-600, hov, e
  r:to-r, e, d-7, 0, 0',';
    cy, a, n: 'fr, o, m-cy, a, n-500, t, o-cy, a, n-600, hove, r:fr, o, m-cy, a, n-600, hov, e
  r:to-cy, a, n-7, 0, 0',';
    gradie, n, t: 'fr, o, m-purp, l, e-500, vi, a-pi, n, k-500, t, o-bl, u, e-500, hove, r:fr, o, m-purp, l, e-600, hove, r:v, i, a-pi, n, k-600, hov, e
  r:to-bl, u, e-6, 0, 0'
  };
  // Icon, selectio, n
  const, IconComponen, t = {
    sparkl, e, s: Sparkl, e, s
    z, a, p: Z, a, p
    rock, e, t: Rock, e, t
    st, a, r: St, a, r
    no, n, e: nu, l, l
  }[ic, o, n];
  // Varia, n, t-specific, style, s
  const, variantClasse, s = {
    defau, l, t: 'py-8, p, x-6','
    premi, u, m: 'py-12, p, x-8','
    he, r, o: 'py-16, p, x-10','
    compa, c, t: 'py-6, p, x-4','
    me, g, a: 'py-20, p, x-12};
    defau, l, t: 'py-8, p, x-6',';
    premi, u, m: 'py-12, p, x-8',';
    he, r, o: 'py-16, p, x-10',';
    compa, c, t: 'py-6, p, x-4',';
    me, g, a: 'py-20, p, x-12'
  };
  const, visibleItem, s = featuredIte, m, s.sli, c, e(0, showCou, n, t);
  return (
    <d, i, v
  classNa, m, e={``
        bg-gradie, n, t-to-r ${themeClass, e, s[the, m, e]} 
        border, rounde, d-xl;
        ${variantClass, e, s[varia, n, t]} 
        ${animat, e, d ? 'transiti, o, n-all, duratio, n-300, hove, r: shad, o, w-2xl, hov, e
  r:sca, l, e-[1.01]' : ''};
        ${animat, e, d ? 'transiti, o, n-all, duratio, n-300, hove, r: shad, o, w-2xl, hov, e
  r:sca, l, e-[1.01]' : ''}';
        ${classNa, m, e}
      `}`;`
    >
      {/* Header, Sectio, n */}
      <div, className="m, a, x-w-7xl, m, x-au, t, o">";
        {/* Badge, and, Date */}
        {(bad, g, e || da, t, e) && (
          <div, className="flex, item, s-center, ga, p-3, m, b-4">";
            {bad, g, e && (
              <span, className="inli, n, e-flex, item, s-center, ga, p-2, p, x-4, p, y-2, rounde, d-full, b, g-whi, t, e/10, backdro, p-bl, u, r-sm, border, border-whi, t, e/20, tex, t-sm, fon, t-semibo, l, d">
                {IconCompone, n, t && <IconComponent, className="w-4 h-4/>}";
              <span, className="inli, n, e-flex, item, s-center, ga, p-2, p, x-4, p, y-2, rounde, d-full, b, g-whi, t, e/10, backdro, p-bl, u, r-sm, border, border-whi, t, e/20, tex, t-sm, fon, t-semibo, l, d">";
                {IconCompone, n, t && <IconComponent, className="w-4 h-4" />}";
                {bad, g, e}
              </sp, a, n>
            )}
            {da, t, e && (
              <span, className="te, x, t-sm, tex, t-gr, a, y-300, fon, t-medi, u, m">{da, t, e}</sp, a, n>";
            )}
          </d, i, v>
        )}
        {/* Tit, l, e */}
        <h2, className={
``
fo, n, t-extrabold, m, b-4, b, g-gradie, n, t-to-r, fro, m-white, vi, a-bl, u, e-100, t, o-purp, l, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t;
${varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a' ? 'te, x, t-4xl, m, d: te, x, t-5, x, l' :,'
varia, n, t === 'premi, u, m' ? 'te, x, t-3xl, m, d: te, x, t-4, x, l' :,'
varia, n, t === 'compa, c, t' ? 'te, x, t-xl, m, d: te, x, t-2, x, l' :,'
${varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a' ? 'te, x, t-4xl, m, d: te, x, t-5, x, l' :';
varia, n, t === 'premi, u, m' ? 'te, x, t-3xl, m, d: te, x, t-4, x, l' :';
varia, n, t === 'compa, c, t' ? 'te, x, t-xl, m, d: te, x, t-2, x, l' :';
'te, x, t-2x, l, m
  d:te, x, t-3, x, l'
}
        `}>`;`
          {tit, l, e}
        </h2>
        {/* Descripti, o, n */}
        <p, className={
``
te, x, t-gr, a, y-200, m, b-6;
${varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a' ? 'te, x, t-lg, m, d: te, x, t-xl' :,'
varia, n, t === 'compa, c, t' ? 'te, x, t-sm' :
${varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a' ? 'te, x, t-lg, m, d: te, x, t-xl' :';
varia, n, t === 'compa, c, t' ? 'te, x, t-sm' :';
'te, x, t-bas, e, m
  d:te, x, t-lg'
}
        `}>`;`
          {descripti, o, n}
        </p>
        {/* Featured, Item, s */}
        {
visibleIte, m, s.leng, t, h > 0 && (
<div, className={``
grid, ga, p-4, m, b-6;
${varia, n, t === 'me, g, a' ? 'md: gr, i, d-co, l, s-3' :,'
varia, n, t === 'he, r, o' || varia, n, t === 'premi, u, m' ? 'md: gr, i, d-co, l, s-2' :,'
${varia, n, t === 'me, g, a' ? 'md: gr, i, d-co, l, s-3' :';
varia, n, t === 'he, r, o' || varia, n, t === 'premi, u, m' ? 'md: gr, i, d-co, l, s-2' :';
'm
  d:gr, i, d-co, l, s-1'
}
          `}>`;`
            {visibleIte, m, s.m, a, p((it, e, m, ind, e, x) => (
              <Li, n, k
  k, e, y={ind, e, x}
                to={it, e, m.li, n, k}
                classNa, m, e="group, b, g-whi, t, e/5, backdro, p-bl, u, r-sm, hove, r: bg-whi, t, e/10, border, border-whi, t, e/10, rounde, d-l, g, p-4, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, hov, e
  r:shad, o, w-lg"
              >
                <div, className="flex, item, s-start, ga, p-3">";
                  <div, className="fl, e, x-shri, n, k-0 w-8 h-8, rounde, d-full, b, g-gradie, n, t-to-br, fro, m-purp, l, e-500, t, o-pi, n, k-500, flex, items-center, justif, y-center, tex, t-white, fon, t-bold, tex, t-sm">";
                    {ind, e, x + 1}
                  </d, i, v>
                  <div, className="fl, e, x-1, mi, n-w-0">
                    <div, className="te, x, t-xs, fon, t-semibold, tex, t-purp, l, e-300, m, b-1">{it, e, m.catego, r, y}</d, i, v>
                    <div, className="te, x, t-sm, fon, t-bold, tex, t-white, m, b-1, grou, p-hov, e, r: te, x, t-purp, l, e-300, transitio, n-colors, lin, e-cla, m, p-2">"
                  <div, className="fl, e, x-1, mi, n-w-0">";
                    <div, className="te, x, t-xs, fon, t-semibold, tex, t-purp, l, e-300, m, b-1">{it, e, m.catego, r, y}</d, i, v>";
                    <div, className="te, x, t-sm, fon, t-bold, tex, t-white, m, b-1, grou, p-hov, e, r: te, x, t-purp, l, e-300, transitio, n-colors, lin, e-cla, m, p-2">";
                      {it, e, m.tit, l, e}
                    </d, i, v>
                    {it, e, m.metri, c, s && (
                      <div, className="te, x, t-xs, tex, t-gr, a, y-4, 0, 0">{it, e, m.metri, c, s}</d, i, v>";
                    )}
                  </d, i, v>
                  <ArrowRight, className="fl, e, x-shri, n, k-0 w-5 h-5, tex, t-purp, l, e-400, opacit, y-0, grou, p-hov, e, r: opaci, t, y-100, transitio, n-opaci, t, y/>"
                  <ArrowRight, className="fl, e, x-shri, n, k-0 w-5 h-5, tex, t-purp, l, e-400, opacit, y-0, grou, p-hov, e, r: opaci, t, y-100, transitio, n-opaci, t, y" />";
                </d, i, v>
              </Li, n, k>
            ))}
          </d, i, v>
        )}
        {/* CTA, Butto, n */}
        <div, className="flex, fle, x-wrap, item, s-center, ga, p-4">";
          <Li, n, k
  to={ctaLi, n, k}
            classNa, m, e={``
              inli, n, e-flex, item, s-center, ga, p-2, p, x-8, p, y-4, rounde, d-lg, fon, t-bold, tex, t-whi, t, e
  bg-gradie, n, t-to-r ${buttonThem, e, s[the, m, e]}
              transform, transitio, n-all, duratio, n-300, hove, r: sca, l, e-105, hov, e
  r:shad, o, w-xl
              ${
varia, n, t === 'compa, c, t' ? 'px-6, p, y-3, tex, t-sm' :';
varia, n, t === 'he, r, o' || varia, n, t === 'me, g, a' ? 'px-10, p, y-5, tex, t-lg' :';
'te, x, t-ba, s, e'
}
            `}`;`
          >
            {ctaTe, x, t}
            <ArrowRight, className={`${varia, n, t === 'compa, c, t' ? 'w-4 h-4' : 'w-5 h-5'}`} />`;`
          </Li, n, k>
          {featuredIte, m, s.leng, t, h > showCou, n, t && (
            <Li, n, k
  to={ctaLi, n, k}
              classNa, m, e="te, x, t-purp, l, e-300, hove, r: te, x, t-purp, l, e-200, fon, t-semibold, transitio, n-colors, tex, t-sm"
            >
              +{featuredIte, m, s.leng, t, h - showCou, n, t} more, breakthroug, h{featuredIte, m, s.leng, t, h - showCou, n, t !== 1 ? 's' : ''};
              +{featuredIte, m, s.leng, t, h - showCou, n, t} more, breakthroug, h{featuredIte, m, s.leng, t, h - showCou, n, t !== 1 ? 's' : ''}';
            </Li, n, k>
          )}
        </d, i, v>
      </d, i, v>
    </d, i, v>
  );
};
export default UnifiedPromotionalBanner;
;