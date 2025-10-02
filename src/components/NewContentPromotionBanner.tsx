import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
=======
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
  varia, n, t = 'in, f, o'
  tit, l, e = "🚀 NEW, CONTE, N
  T: Fresh, Insight, s & Expert, Guide, s"
  descripti, o, n = "Discover, our, latest articles, on, real-time, data, pipelines, platform, engineerin, g, and, GenAI, operationalization."
  ctaTe, x, t = "Explore, Latest, Content"
  ctaLi, n, k = "/bl, o, g"
  dismissib, l, e = tr, u, e
  classNa, m, e = ""
=======
const, NewContentPromotionBanne, r: Rea, c, t.FC<NewContentPromotionBannerPro, p, s> = ({
  varia, n, t = 'in, f, o',';
  tit, l, e = "🚀 NEW, CONTEN, T: Fresh, Insight, s & Expert, Guide, s",";
  descripti, o, n = "Discover, our, latest articles, on, real-time, data, pipelines, platform, engineerin, g, and, GenAI, operationalization.",";
  ctaTe, x, t = "Explore, Latest, Content",";
  ctaLi, n, k = "/bl, o, g",";
  dismissib, l, e = tr, u, e
  classNa, m, e = "",";
}) => {
  con, s, t [isVisib, l, e, setIsVisib, l, e] = useSta, t, e(tr, u, e);
  const, handleDismis, s = () => {
    setIsVisib, l, e(fal, s, e);
  };
  if (!isVisib, l, e) return, nul, l;
  const, variantClasse, s = {
    in, f, o: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-1, 0, 0"
    succe, s, s: "bg-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-emera, l, d-5, 0, 0/20, borde, r-gre, e, n-4, 0, 0/30, tex, t-gre, e, n-1, 0, 0"
    warni, n, g: "bg-gradie, n, t-to-r, fro, m-yell, o, w-5, 0, 0/20, t, o-oran, g, e-5, 0, 0/20, borde, r-yell, o, w-4, 0, 0/30, tex, t-yell, o, w-1, 0, 0"
    err, o, r: "bg-gradie, n, t-to-r, fro, m-r, e, d-5, 0, 0/20, t, o-pi, n, k-5, 0, 0/20, borde, r-r, e, d-4, 0, 0/30, tex, t-r, e, d-1, 0, 0"
    defau, l, t: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-1, 0, 0"
    premi, u, m: "bg-gradie, n, t-to-r, fro, m-purp, l, e-6, 0, 0/20, vi, a-pi, n, k-6, 0, 0/20, t, o-r, e, d-6, 0, 0/20, borde, r-purp, l, e-4, 0, 0/30, tex, t-purp, l, e-1, 0, 0"
  };
  const, iconClasse, s = {
    in, f, o: "te, x, t-bl, u, e-4, 0, 0"
    succe, s, s: "te, x, t-gre, e, n-4, 0, 0"
    warni, n, g: "te, x, t-yell, o, w-4, 0, 0"
    err, o, r: "te, x, t-r, e, d-4, 0, 0"
    defau, l, t: "te, x, t-bl, u, e-4, 0, 0"
    premi, u, m: "te, x, t-purp, l, e-3, 0, 0"
=======
    i, n, f
  o: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-1, 0, 0",";
    succe, s, s: "bg-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-emera, l, d-5, 0, 0/20, borde, r-gre, e, n-4, 0, 0/30, tex, t-gre, e, n-1, 0, 0",";
    warni, n, g: "bg-gradie, n, t-to-r, fro, m-yell, o, w-5, 0, 0/20, t, o-oran, g, e-5, 0, 0/20, borde, r-yell, o, w-4, 0, 0/30, tex, t-yell, o, w-1, 0, 0",";
    err, o, r: "bg-gradie, n, t-to-r, fro, m-r, e, d-5, 0, 0/20, t, o-pi, n, k-5, 0, 0/20, borde, r-r, e, d-4, 0, 0/30, tex, t-r, e, d-1, 0, 0",";
    defau, l, t: "bg-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-purp, l, e-5, 0, 0/20, borde, r-bl, u, e-4, 0, 0/30, tex, t-bl, u, e-1, 0, 0",";
    premi, u, m: "bg-gradie, n, t-to-r, fro, m-purp, l, e-6, 0, 0/20, vi, a-pi, n, k-6, 0, 0/20, t, o-r, e, d-6, 0, 0/20, borde, r-purp, l, e-4, 0, 0/30, tex, t-purp, l, e-1, 0, 0",";
  };
  const, iconClasse, s = {
    in, f, o: "te, x, t-bl, u, e-4, 0, 0",";
    succe, s, s: "te, x, t-gre, e, n-4, 0, 0",";
    warni, n, g: "te, x, t-yell, o, w-4, 0, 0",";
    err, o, r: "te, x, t-r, e, d-4, 0, 0",";
    defau, l, t: "te, x, t-bl, u, e-4, 0, 0",";
    premi, u, m: "te, x, t-purp, l, e-3, 0, 0",";
  };
  return (
    <div, className={`relative, overflo, w-hidden, border, rounded-x, l, p-6, m, b-8, animat, e-fa, d, e-in ${variantClass, e, s[varia, n, t]} ${classNa, m, e}`}>`;`
      {/* Background, Patter, n */}
      <div, className="absolute, inse, t-0, opacit, y-10">";
        <div, className="absolute, to, p-0, lef, t-0 w-ful, l, h-full, b, g-gradie, n, t-to-br, fro, m-whi, t, e/10, t, o-transpare, n, t"></d, i, v>";
        <div, className="absolu, t, e -t, o, p-4 -rig, h, t-4 w-2, 0, h-20, b, g-whi, t, e/5, rounde, d-fu, l, l"></d, i, v>";
        <div, className="absolu, t, e -bott, o, m-4 -le, f, t-4 w-1, 6, h-16, b, g-whi, t, e/5, rounde, d-fu, l, l"></d, i, v>";
      </d, i, v>
      <div, className="relativ, e, z-10">
        <div, className="flex, item, s-start, justif, y-betwe, e, n">
          <div, className="fl, e, x-1">
            <div, className="flex, item, s-center, ga, p-3, m, b-3">
              <div, className="flex, item, s-center, ga, p-2">
                <Sparkles, className={`w-5 h-5 ${iconClass, e, s[varia, n, t]} anima, t, e-pul, s, e`} />`;`
                <span, className="te, x, t-sm, fon, t-medium, uppercase, tracking-wider, opacit, y-90">
                  Fresh, Conten, t;
                </sp, a, n>
              </d, i, v>
              <div, className="flex, item, s-center, ga, p-1">
                <TrendingUp, className={`w-4 h-4 ${iconClass, e, s[varia, n, t]} anima, t, e-boun, c, e`} />`;`
                <span, className="te, x, t-xs, opacit, y-75">Trendi, n, g</sp, a, n>
=======
      <div, className="relativ, e, z-10">";
        <div, className="flex, item, s-start, justif, y-betwe, e, n">";
          <div, className="fl, e, x-1">";
            <div, className="flex, item, s-center, ga, p-3, m, b-3">";
              <div, className="flex, item, s-center, ga, p-2">";
                <Sparkles, className={`w-5 h-5 ${iconClass, e, s[varia, n, t]} anima, t, e-pul, s, e`} />`;`
                <span, className="te, x, t-sm, fon, t-medium, uppercase, tracking-wider, opacit, y-90">";
                  Fresh, Conten, t;
                </sp, a, n>
              </d, i, v>
              <div, className="flex, item, s-center, ga, p-1">";
                <TrendingUp, className={`w-4 h-4 ${iconClass, e, s[varia, n, t]} anima, t, e-boun, c, e`} />`;`
                <span, className="te, x, t-xs, opacit, y-75">Trendi, n, g</sp, a, n>";
              </d, i, v>
            </d, i, v>
            <h3, className="te, x, t-lg, fon, t-bold, m, b-2, flex, items-center, ga, p-2">";
              {tit, l, e}
            </h3>
            <p, className="te, x, t-sm, opacit, y-90, m, b-4, ma, x-w-2, x, l">";
              {descripti, o, n}
            </p>
            {/* Featured, Content, Preview */}
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-3, m, b-4">"
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, className="flex, item, s-center, ga, p-2, m, b-1">
                  <BookOpen, className="w-3 h-3  />
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Data, Engineerin, g</sp, a, n>
=======
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-3, m, b-4">";
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">";
                <div, className="flex, item, s-center, ga, p-2, m, b-1">";
                  <BookOpen, className="w-3 h-3" />";
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Data, Engineerin, g</sp, a, n>";
                </d, i, v>
                <div, className="te, x, t-xs, opacit, y-90">Re, a, l-Time, Data, Pipelines Gui, d, e</d, i, v>";
              </d, i, v>
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, className="flex, item, s-center, ga, p-2, m, b-1">
                  <Zap, className="w-3 h-3  />
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Platform, Engineerin, g</sp, a, n>
=======
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">";
                <div, className="flex, item, s-center, ga, p-2, m, b-1">";
                  <Zap, className="w-3 h-3" />";
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Platform, Engineerin, g</sp, a, n>";
                </d, i, v>
                <div, className="te, x, t-xs, opacit, y-90">Scorecards, That, Drive Adopti, o, n</d, i, v>";
              </d, i, v>
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">
                <div, className="flex, item, s-center, ga, p-2, m, b-1">
                  <Sparkles, className="w-3 h-3  />
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Gen, A, I</sp, a, n>
=======
              <div, className="bg-whi, t, e/10, rounde, d-l, g, p-3, border, border-whi, t, e/20">";
                <div, className="flex, item, s-center, ga, p-2, m, b-1">";
                  <Sparkles, className="w-3 h-3" />";
                  <span, className="te, x, t-xs, fon, t-medi, u, m">Gen, A, I</sp, a, n>";
                </d, i, v>
                <div, className="te, x, t-xs, opacit, y-90">Production, Deployment, Patterns</d, i, v>";
              </d, i, v>
            </d, i, v>
            <Li, n, k
  to={ctaLi, n, k}
              classNa, m, e="inli, n, e-flex, item, s-center, ga, p-2, b, g-whi, t, e/20, hove, r: bg-whi, t, e/30, tex, t-white, p, x-4, p, y-2, rounde, d-lg, fon, t-medium, tex, t-sm, transitio, n-all, duratio, n-300, hov, e
  r:sca, l, e-105, border, border-whi, t, e/30"
            >
              {ctaTe, x, t}
              <ArrowRight, className="w-4 h-4  />
=======
              <ArrowRight, className="w-4 h-4" />";
            </Li, n, k>
          </d, i, v>
          {dismissib, l, e && (
            <butt, o, n
  onCli, c, k={handleDismi, s, s}
              classNa, m, e="ml-4 p-1, rounde, d-full, hove, r: bg-whi, t, e/20, transitio, n-colo, r, s"
              ar, i, a-lab, e, l="Dismiss, banne, r"
            >
              <X, className="w-5 h-5, opacit, y-75, hove, r: opaci, t, y-1, 0, 0/>"
=======
              <X, className="w-5 h-5, opacit, y-75, hove, r: opaci, t, y-1, 0, 0" />";
            </butt, o, n>
          )}
        </d, i, v>
      </d, i, v>
    </d, i, v>
  );
};
export default NewContentPromotionBanner;