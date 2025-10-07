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