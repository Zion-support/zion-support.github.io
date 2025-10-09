import, Reac, t, { useSta, t, e, useEffe, c, t } fr, o, m "rea, c, t";
import, Reac, t, { useSta, t, e, useEffe, c, t } fr, o, m "rea, c, t";';
interface, NewArticlesPromoBannerProp, s {
varia, n, t?: 'defau, l, t' | 'premi, u, m' | 'featur, e, d' | 'compa, c, t';
showCou, n, t?: numb, e, r;
autoRota, t, e?: boole, a, n;
rotationInterv, a, l?: numb, e, r;
classNa, m, e?: stri, n, g;
}
const, NewArticlesPromoBanne, r: Rea, c, t.FC<NewArticlesPromoBannerPro, p, s> = ({
  varia, n, t = 'def, a, u, l, t',
  showCou, n, t =  , 3,
  autoRota, t, e = fa, l, s, e,
  rotationInterv, a, l = 5, 0, 0, 0,
  if (varia, n, t = == 'comp, a, c, t') {
    retu, r, n (
      <div, classNam, e = {`bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-cy, a, n-600, rounde, d-l, g, p-4 ${classNa, m, e}`}>
        <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
          <div, classNam, e="flex, item, s-center, ga, p-3">
            <BookOpen, classNam, e="w-6 h-6, tex, t-whi, t, e" />
          <div, classNam, e="grid, m, d: gr, i, d-co, l, s-3, ga, p-6">
            { featuredArticl, e, s.m, a, p((arti, c, l, e) = > (
              <div, ke, y = { artic, l, e., i, d  }, classNa, m, e = "bg-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-x, l, p-6, hove, r: bg-whi, t, e/20, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
              >
                <div, classNam, e="flex, item, s-center, ga, p-2, m, b-3">
                  <TrendingUp, classNam, e="w-5 h-5, tex, t-gre, e, n-3, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-semibold, tex, t-gre, e, n-3, 0, 0">{artic, l, e.cate, g, o, r, y}</sp, a, n>
                    Re, a, d <Link, classNam, e="w-4 h-4" />
              View, All, Articles
              <Link, classNam, e="w-5 h-5" />
  if (varia, n, t = == 'featu, r, e, d') {
    retu, r, n (
      <div, classNam, e = {`bg-white, rounde, d-2xl, shado, w-2xl, overflo, w-hidd, e, n ${classNa, m, e}`}>
        <div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-60, 0, p-6">
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <div, classNam, e="flex, item, s-center, ga, p-3">
              <BookOpen, classNam, e="w-8 h-8, tex, t-whi, t, e" />
              <h2, classNam, e="te, x, t-2xl, fon, t-bold, tex, t-whi, t, e">Featured, Article, s</h2>
        <div, classNam, e="p-8">
          <div, classNam, e="grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4, ga, p-6">
            { featuredArticl, e, s.m, a, p((arti, c, l, e) = > (
              <Link, ke, y = { artic, l, e., i, d  }, to={ artic, l, e.li, n, k } classNa, m, e="group, border, border-gr, a, y-200, rounde, d-x, l, p-5, hove, r: shad, o, w-xl, hove, r:bord, e, r-indi, g, o-300, transitio, n-a, l, l"
                <p, classNam, e = "te, x, t-sm, tex, t-gr, a, y-600, m, b-3, lin, e-cla, m, p-2">{artic, l, e.description}</p>
                <div, classNam, e="flex, item, s-center, justif, y-between, tex, t-sm">
                  <span, classNam, e="te, x, t-gr, a, y-5, 0, 0">{artic, l, e.readTime}</sp, a, n>
                  <Link, classNam, e="w-4 h-4, tex, t-indi, g, o-600, grou, p-hov, e, r: transla, t, e-x-1, transitio, n-transfo, r, m" />
      <div, classNam, e="grid, m, d: gr, i, d-co, l, s-3, ga, p-4">
        { featuredArticl, e, s.m, a, p((arti, c, l, e) = > (
          <div, ke, y = { artic, l, e., i, d  }, classNa, m, e = "bg-whi, t, e/10, rounde, d-l, g, p-4, hove, r: bg-whi, t, e/20, transitio, n-a, l, l">
            <div, classNam, e="te, x, t-sm, tex, t-bl, u, e-200, m, b-2">{artic, l, e.cate, g, o, r, y}</d, i, v>
            <h4, classNam, e = "fo, n, t-semibold, m, b-2">{artic, l, e.title}</h4>
            <Link, t, o = { artic, l, e.l, i, n, k }, classNa, m, e = "te, x, t-yell, o, w-300, tex, t-sm, fon, t-semibold, hove, r: underli, n, e">
