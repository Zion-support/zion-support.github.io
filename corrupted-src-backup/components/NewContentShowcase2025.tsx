import, React, from 'rea, c, t';
impo, r, t { Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
      title: "⚙️ AI, Predictive, Maintenanc, e",
      description: "85% downtime, reduction, with 98% prediction, accura, c, y",
      li, n, k: "/servic, e, s/ai-predicti, v, e-maintena, n, c, e",
      col, o, r: "fr, o, m-oran, g, e-500, t, o-r, e, d-50, 0"
    }
  ]; retu, r, n (
    <section, classNam, e = "py-16, b, g-gr, a, y-900, tex, t-whi, t, e">
      <div, classNam, e="container, m, x-auto, p, x-6">
        <div, classNam, e="te, x, t-center, m, b-12">
          <div, classNam, e="flex, item, s-center, justif, y-center, ga, p-2, m, b-4">
            <Sparkles, classNam, e="w-6 h-6, tex, t-yell, o, w-400, animat, e-pul, s, e" />
            <h2, classNam, e="te, x, t-4xl, fon, t-bo, l, d">2025, Breakthrough, Content</h2>
            <Sparkles, classNam, e="w-6 h-6, tex, t-yell, o, w-400, animat, e-pul, s, e" />
        <div, classNam, e="grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4, ga, p-6">
          { highligh, t, s.m, a, p((it, e, m, ind, e, x) = > (
            <Link, ke, y = { in, d, e, x  }, to={ it, e, m.li, n, k } classNa, m, e="group, relative, overflow-hidden, rounde, d-2x, l, p-6, b, g-gr, a, y-800, hove, r: sca, l, e-105, transitio, n-all, duratio, n-3, 0, 0"
            >
              <div, classNam, e = { `absolute, inse, t-0, b, g-gradie, n, t-to-br ${it, e, m.c, o, l, o, r }, opaci, t, y-0, grou, p-hov, e, r: opaci, t, y-20, transitio, n-opac, i, t, y`} />
              <h3, classNam, e = "te, x, t-xl, fon, t-bold, m, b-3, relative, z-10">{it, e, m.title}</h3>
              <p, classNam, e="te, x, t-gr, a, y-300, tex, t-sm, relative, z-10">{it, e, m.description}</p>
            </L, i, n, k>