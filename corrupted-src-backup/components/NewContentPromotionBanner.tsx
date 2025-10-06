import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";';
interface, NewContentPromotionBannerProp, s {
varia, n, t?: 'in, f, o' | 'succe, s, s' | 'warni, n, g' | 'err, o, r' | 'defau, l, t' | 'premi, u, m';
tit, l, e?: stri, n, g;
descripti, o, n?: stri, n, g;
ctaTe, x, t?: stri, n, g;
ctaLi, n, k?: stri, n, g;
dismissib, l, e?: boole, a, n;
classNa, m, e?: stri, n, g;
}
const, NewContentPromotionBanne, r: Rea, c, t.FC<NewContentPromotionBannerPro, p, s> = ({
  varia, n, t = 'in, f, o',
  title = "🚀 NEW, CONTEN, T: Fresh, Insight, s & Expert, Gui, d, e, s",
  description = "Discover, our, latest articles, on, real-time, data, pipeline, s, platform, engineerin, g, and, GenAI, operationalization.",
  ctaTe, x, t = "Explore, Latest, Conten, t",
  ctaLi, n, k = "/b, l, o, g",
  dismissib, l, e = t, r, u, e,
  classNa, m, e = "",
}) => { 
  con, s, t [isVisib, l, e, setIsVisib, l, e] = useSta, t, e(tr, u, e); const, handleDismis, s = () = > {
      in, f, o: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-1, 0, 0",
      succe, s, s: "bg-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-emera, l, d-5, 0, 0/20, borde, r-gre, e, n-4, 0, 0/30, tex, t-gre, e, n-10, 0",
      warni, n, g: "bg-gradie, n, t-to-r, fro, m-yell, o, w-5, 0, 0/20, t, o-oran, g, e-5, 0, 0/20, borde, r-yell, o, w-4, 0, 0/30, tex, t-yell, o, w-10, 0",
      err, o, r: "bg-gradie, n, t-to-r, fro, m-r, e, d-5, 0, 0/20, t, o-pi, n, k-5, 0, 0/20, borde, r-r, e, d-4, 0, 0/30, tex, t-r, e, d-10, 0",
      defau, l, t: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-10, 0",
      premi, u, m: "bg-gradie, n, t-to-r, fro, m-purp, l, e-6, 0, 0/20, vi, a-pi, n, k-6, 0, 0/20, t, o-r, e, d-6, 0, 0/20, borde, r-purp, l, e-4, 0, 0/30, tex, t-purp, l, e-10, 0",
  }; const, iconClasse, s = {
      in, f, o: "te, x, t-bl, u, e-4, 0, 0",
      succe, s, s: "te, x, t-gre, e, n-40, 0",
      warni, n, g: "te, x, t-yell, o, w-40, 0",
      err, o, r: "te, x, t-r, e, d-40, 0",
      defau, l, t: "te, x, t-bl, u, e-40, 0",
      premi, u, m: "te, x, t-purp, l, e-30, 0"
  }; retu, r, n (
    <div, classNam, e = {`relative, overflo, w-hidden, border, rounded-x, l, p-6, m, b-8, animat, e-fa, d, e-in ${variantClass, e, s[varia, n, t]} ${classNa, m, e}`}>
              <div, classNam, e="flex, item, s-center, ga, p-1" > <TrendingUp, classNam, e = { `w-4 h-4 ${iconClass, e, s[vari, a, n, t] }, anima, t, e-boun, c, e`} />
            <div, classNam, e="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-3, m, b-4">
              <div, classNam, e="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, classNam, e="flex, item, s-center, ga, p-2, m, b-1">
                  <BookOpen, classNam, e="w-3 h-3" />
                  <span, classNam, e="te, x, t-xs, fon, t-medi, u, m">Data, Engineerin, g</sp, a, n>
              <div, classNam, e="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, classNam, e="flex, item, s-center, ga, p-2, m, b-1">
                  <Zap, classNam, e="w-3 h-3" />
                  <span, classNam, e="te, x, t-xs, fon, t-medi, u, m">Platform, Engineerin, g</sp, a, n>
              <div, classNam, e="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, classNam, e="flex, item, s-center, ga, p-2, m, b-1">
                  <Sparkles, classNam, e="w-3 h-3" />
                  <span, classNam, e="te, x, t-xs, fon, t-medi, u, m">Gen, A, I</sp, a, n>
              {cta, T, e, x, t}
              <ArrowRight, classNam, e = "w-4 h-4" />
                <X, classNam, e="w-5 h-5, opacit, y-75, hove, r:opaci, t, y-1, 0, 0" />
              </bu, t, t, o, n>