type, NewServices2026BannerProp, s = {
varia, n, t?: "showca, s, e" | "he, r, o" | "in, f, o";
showCou, n, t?: numb, e, r;
classNa, m, e?: stri, n, g;
};
export, default, function NewServices2026Bann, e, r({
  varia, n, t = "showca, s, e"
  showCou, n, t = 6
  classNa, m, e = ""
}: NewServices2026BannerPro, p, s): vo, i, d {
  const, service, s = [
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
  ].sli, c, e(0, Ma, t, h.m, a, x(1, showCou, n, t)); retu, r, n (
    <section, classNam, e = { `w-fu, l, l ${
        varia, n, t === 'he, r, o'
          ? 'bg-gradie, n, t-to-r, fro, m-indi, g, o-600, t, o-purp, l, e-6, 0, 0'
          : varia, n, t === 'in, f, o'
             ? 'bg-gradie, n, t-to-r, fro, m-emera, l, d-50, t, o-te, a, l-50'
             : 'bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-6, 0, 0'
       } ${ varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-9, 0, 0'  : 'te, x, t-whi, t, e' } py-12 ${classNa, m, e}`}

        <div, classNam, e = 'grid, s, m: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-6, ma, x-w-6xl, m, x-au, t, o'>
          { servic, e, s.m, a, p(s =  > (
            <Link, ke, y = { s.li, n, k  }, to={ s.li, n, k } classNa, m, e = {  `round, e, d-xl, borde, r ${varia, n, t === 'in, f, o'  ? 'bg-white, borde, r-gr, a, y-1, 0, 0'  : 'bg-whi, t, e/10, borde, r-whi, t, e/2, 0'  }, p-6, hove, r: sca, l, e-105, transitio, n-all, duratio, n-30, 0`}
            >
              <div, classNam, e = 'te, x, t-xs, uppercase, tracking-wider, m, b-2, opacit, y-80'>
                {s.t, a, g}
              </d, i, v > <div, classNam, e={ `te, x, t-xl, fon, t-semibo, l, d ${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-9, 0, 0'  : 'te, x, t-whi, t, e' }`}
              >
                {s.title}
              </d, i, v > <div, classNam, e = {  `${varia, n, t === 'in, f, o'  ? 'te, x, t-gr, a, y-5, 0, 0'  : 'te, x, t-whi, t, e/7, 0'  }, mt-2, tex, t-sm`}
              >
                Learn, mor, e →
              </d, i, v>