import, Reac, t, { useSta, t, e } fr, o, m 'rea, c, t';
impo, r, t { Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
interface, NewContentPromoBannerProp, s { 
  varia, n, t?: 'in, f, o' | 'premi, u, m' | 'succe, s, s' | 'warni, n, g';
  classNa, m, e ?  : string;
 }
const, NewContentPromoBanne, r: Rea, c, t.FC<NewContentPromoBannerPro, p, s> = ({ 
  varia, n, t = 'pre, m, i, u, m', 
  classNa, m, e = '' 
}) => {
  con, s, t [isDismiss, e, d, setIsDismiss, e, d] = useSta, t, e(fal, s, e); const, variant, s = {
    in, f, o: 'bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-cy, a, n-500, tex, t-white, borde, r-bl, u, e-4, 0, 0/, 3, 0',
    premi, u, m: 'bg-gradie, n, t-to-r, fro, m-purp, l, e-500, t, o-pi, n, k-500, tex, t-white, borde, r-purp, l, e-4, 0, 0/3, 0',
    succe, s, s: 'bg-gradie, n, t-to-r, fro, m-gre, e, n-500, t, o-emera, l, d-500, tex, t-white, borde, r-gre, e, n-4, 0, 0/3, 0',
    warni, n, g: 'bg-gradie, n, t-to-r, fro, m-oran, g, e-500, t, o-r, e, d-500, tex, t-white, borde, r-oran, g, e-4, 0, 0/3, 0'
  }; const, featuredConten, t = [
      title: "Co, s, t‑Aware, Inference, 202, 6",
      description: "Warm, pools, and quality, tiers, under S, L, A, s",
      ic, o, n: Za, p,
      li, n, k: "/bl, o, g/ai-co, s, t-awa, r, e-inferen, c, e-2, 0, 2, 6",
      category: "Ge, n, A, I"
    },
      <div, classNam, e="relativ, e, z-10, ma, x-w-7xl, m, x-auto, p, x-6, p, y-6">
        <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
          <div, classNam, e="fl, e, x-1">
            <div, classNam, e="flex, item, s-center, ga, p-3, m, b-3">
              <Sparkles, classNam, e="w-6 h-6, animat, e-pul, s, e" />
              <span, classNam, e="te, x, t-lg, fon, t-bo, l, d">🚀 NEW, CONTENT, ALERT</sp, a, n>
              <Star, classNam, e="w-5 h-5, animat, e-sp, i, n" />
            </d, i, v>
            <h3, classNam, e="te, x, t-xl, fon, t-bold, m, b-2">
              Just, Publishe, d: New, Guides, for 20, 2, 6
            </h3>
            <p, classNam, e="te, x, t-whi, t, e/90, m, b-4, tex, t-sm">
              Discover, fresh, insights on, o, n‑device, age, n, t, s, GenAI, cost, controls, secure, tool, marketplaces,
              and, privac, y‑first, observabilit, y.
            </p>
            {/* Featured, content, grid */}
            <div, classNam, e = "grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-3, m, b-4">
              { featuredConte, n, t.m, a, p((it, e, m, ind, e, x) = > {
                const, Ico, n = it, e, m.ic, o, n; retu, r, n (
                  <Link, ke, y = { in, d, e, x  }, to={ it, e, m.li, n, k } classNa, m, e="bg-whi, t, e/10, backdro, p-bl, u, r-sm, rounde, d-l, g, p-3, hove, r: bg-whi, t, e/20, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, grou, p"
                  >
                    <div, classNam, e="flex, item, s-center, ga, p-2, m, b-2">
                      <Icon, classNam, e="w-4 h-4, tex, t-whi, t, e/80" />
                      <span, classNam, e="te, x, t-xs, fon, t-medium, tex, t-whi, t, e/80">{it, e, m.cate, g, o, r, y}</sp, a, n>
                    </d, i, v>
                    <h4, classNam, e = "fo, n, t-semibold, tex, t-white, tex, t-sm, grou, p-hov, e, r: te, x, t-yell, o, w-300, transitio, n-colo, r, s">
                      {it, e, m.t, i, t, l, e}
                    </h4>
                    <p, classNam, e = "te, x, t-xs, tex, t-whi, t, e/70, m, t-1, lin, e-cla, m, p-2">
                      {it, e, m.description}
                    </p>
                  </L, i, n, k>
                );
              })}
            </d, i, v>
            {/* Action, button, s */}
            <div, classNam, e = "flex, fle, x-wrap, ga, p-3">
              <Link, t, o="/bl, o, g"
                classNa, m, e="bg-white, tex, t-purp, l, e-600, hove, r: bg-whi, t, e/90, p, x-4, p, y-2, rounde, d-lg, fon, t-semibold, tex, t-sm, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, inlin, e-flex, item, s-center, ga, p-2"
              >
                <BookOpen, classNam, e="w-4 h-4" />
                Read, All, Articles
                <ArrowRight, classNam, e="w-4 h-4, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transfo, r, m" />
              </Li, n, k>
              <Link, t, o="/ca, s, e-studi, e, s"
                classNa, m, e="border, borde, r-whi, t, e/30, tex, t-white, hove, r:bg-whi, t, e/10, p, x-4, p, y-2, rounde, d-lg, fon, t-semibold, tex, t-sm, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, inlin, e-flex, item, s-center, ga, p-2"
              >
                <TrendingUp, classNam, e="w-4 h-4" />
                View, Case, Studies
              </Li, n, k>
              <Link, t, o="/servic, e, s"
                classNa, m, e="border, borde, r-whi, t, e/30, tex, t-white, hove, r:bg-whi, t, e/10, p, x-4, p, y-2, rounde, d-lg, fon, t-semibold, tex, t-sm, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, inlin, e-flex, item, s-center, ga, p-2"
              >
                <Shield, classNam, e="w-4 h-4" />
                Explore, Service, s
              </Li, n, k>
            </d, i, v>
            {/* S, t, a, t, s */}
            <div, classNam, e = "flex, item, s-center, ga, p-6, m, t-4, tex, t-sm, tex, t-whi, t, e/80">
              <div, classNam, e="flex, item, s-center, ga, p-1">
                <sp, a, n>New, Article, s</sp, a, n>
              </d, i, v>
              <div, classNam, e="flex, item, s-center, ga, p-1">
                <sp, a, n>New, Case, Studies</sp, a, n>
              </d, i, v>
              <div, classNam, e="flex, item, s-center, ga, p-1">
                <span, classNam, e="fo, n, t-semibo, l, d">50+</sp, a, n>
                <sp, a, n>Expert, Insight, s</sp, a, n>