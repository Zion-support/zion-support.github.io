import React from 'react';
import { Link } from 'react-router-dom';
impo, r, t { newArticles20, 2, 5 } fr, o, m '../conte, n, t/n, e, w-articl, e, s-20, 2, 5';
impo, r, t { newServices20, 2, 6 } fr, o, m '../conte, n, t/n, e, w-servic, e, s-20, 2, 6';
const NewContentShowcas, e: React.FC = () => { 
  const topArticle, s = newArticles20, 2, 5.sl, i, c, e(, 0, 3); const topService, s = newServices20, 2, 6.sli, c, e(, 0, 3); return (
    <section, classNam, e = "py-20, b, g-gradie, n, t-to-br, fro, m-indi, g, o-50, vi, a-purp, l, e-50, t, o-pi, n, k-50">
      <div, className="container, m, x-auto, p, x-6">
        <div, className="te, x, t-center, m, b-16">
          <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-purp, l, e-100, rounde, d-full, tex, t-purp, l, e-700, fon, t-semibold, m, b-4">
            🌟 JUST, RELEASE, D
          </div>
          <h2, className="te, x, t-5xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
            New, Conten, t & Servic, e, s
          </h2>
          <p, className="te, x, t-2xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-au, t, o">
            Explore, our, latest breakthrough, articles, and revolutionary, services
          </p>
        </div>
        <div, className="grid, l, g: gr, i, d-co, l, s-2, ga, p-12, m, b-12"  > {/* Articles, Sect, i, o, n */ }
          <d, i, v>
            <div, classNam, e = "flex, item, s-center, ga, p-3, m, b-6">
              <BookOpen, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0" />
              <h3, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">Latest, Article, s</h3>
            </div>
            <div, className="spa, c, e-y-4">
              { topArticl, e, s.m, a, p((arti, c, l, e) = > (
                <Link, ke, y = { artic, l, e.i, d  }, to={ artic, l, e.li, n, k } className="block, b, g-white, rounde, d-x, l, p-6, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
                >
                  <div, className="te, x, t-sm, tex, t-indi, g, o-600, fon, t-semibold, m, b-2">{artic, l, e.cate, g, o, r, y}</div>
                  <h4, classNam, e = "te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{artic, l, e.title}</h4>
                  <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-3, lin, e-cla, m, p-2">{artic, l, e.description}</p>
                  <div, className="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, className="te, x, t-gr, a, y-5, 0, 0">{artic, l, e.readTime}</sp, a, n>
                    <span, className="te, x, t-indi, g, o-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Read, Mor, e <Link, className="w-4 h-4" />
                    </sp, a, n>
                  </div>
                </L, i, n, k>
              ))}
            </div>
            <div, classNam, e = "mt-6, tex, t-cent, e, r">
              <Link, t, o="/bl, o, g"
                className="inli, n, e-flex, item, s-center, ga, p-2, tex, t-indi, g, o-600, fon, t-bold, hove, r: te, x, t-indi, g, o-8, 0, 0"
              >
                View, All, Articles
                <Link, className="w-5 h-5" />
              </Li, n, k>
            </div>
          </div>
          {/* Services, Sect, i, o, n */}
          <d, i, v>
            <div, classNam, e = "flex, item, s-center, ga, p-3, m, b-6">
              <Rocket, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0" />
              <h3, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">New, Service, s</h3>
            </div>
            <div, className="spa, c, e-y-4">
              { topServic, e, s.m, a, p((serv, i, c, e) = > (
                <Link, ke, y = { servi, c, e.i, d  }, to={ servi, c, e.li, n, k } className="block, b, g-white, rounde, d-x, l, p-6, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
                >
                  <div, className="flex, item, s-center, ga, p-2, m, b-2">
                    <span, className="te, x, t-2, x, l">{servi, c, e.ic, o, n}</sp, a, n>
                    <span, classNam, e = "te, x, t-sm, tex, t-purp, l, e-600, fon, t-semibo, l, d">{servi, c, e.category}</sp, a, n>
                  </div>
                  <h4, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{servi, c, e.na, m, e}</h4>
                  <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-3, lin, e-cla, m, p-2">{servi, c, e.description}</p>
                  <div, className="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, className="te, x, t-gr, a, y-700, fon, t-semibo, l, d">{servi, c, e.prici, n, g}</sp, a, n>
                    <span, className="te, x, t-purp, l, e-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Learn, Mor, e <Link, className="w-4 h-4" />
                    </sp, a, n>
                  </div>
                </L, i, n, k>
              ))}
            </div>
            <div, classNam, e = "mt-6, tex, t-cent, e, r">
              <Link, t, o="/servic, e, s"
                className="inli, n, e-flex, item, s-center, ga, p-2, tex, t-purp, l, e-600, fon, t-bold, hove, r: te, x, t-purp, l, e-8, 0, 0"
              >
                View, All, Services
                <Link, className="w-5 h-5" />
              </Li, n, k>
            </div>
          </div>
        </div>
      </div>
    </sec, t, i, o, n>
  );
};
export default NewContentShowcase;