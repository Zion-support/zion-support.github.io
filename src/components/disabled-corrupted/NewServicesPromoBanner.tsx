import React from 'react';
import { Link } from 'react-router-dom';
impo, r, t { newServices20, 2, 6 } fr, o, m '../conte, n, t/n, e, w-servic, e, s-20, 2, 6';
interface NewServicesPromoBannerProp, s { 
  varia, n, t?: 'defau, l, t' | 'showca, s, e' | 'premi, u, m' | 'gr, i, d';
  showCou, n, t?: number;
  featuredOn, l, y?: boolean;
  classNa, m, e ?  : string;
 }
const NewServicesPromoBanne, r: React.FC<NewServicesPromoBannerPro, p, s> = ({
  varia, n, t = 'def, a, u, l, t',
  showCou, n, t =  , 3,
  featuredOn, l, y = t, r, u, e,
  classNa, m, e = ''
}) => {  
  const services = featuredOn, l, y
     ? newServices20, 2, 6.filt, e, r(s = > s.featu, r, e, d).sli, c, e(0, showCou, n, t)
    : newServices20, 2, 6.sli, c, e(0, showCou, n, t); if (varia, n, t = == 'showc, a, s, e') {
    return (
      <div, classNam, e = {`bg-gradie, n, t-to-br, fro, m-emera, l, d-600, vi, a-te, a, l-600, t, o-cy, a, n-600, rounde, d-3x, l, p-8, m, d : p-12, tex, t-whi, t, e ${class N, a, m, e  }`}>
        <div, classNam, e = "m, a, x-w-6xl, m, x-au, t, o">
          <div, className="te, x, t-center, m, b-10">
            <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-yell, o, w-4, 0, 0/20, rounde, d-full, tex, t-yell, o, w-300, m, b-6">
              <Rocket, className="w-5 h-5, m, r-2" />
              <span, className="fo, n, t-bo, l, d">NEW, SERVICES, LAUNCHED</sp, a, n>
            </div>
            <h2, className="te, x, t-4xl, m, d: te, x, t-5xl, fon, t-bold, m, b-4">
              Revolutionary, AI, Services Now, Availabl, e
            </h2>
            <p, className="te, x, t-xl, tex, t-emera, l, d-100, ma, x-w-3xl, m, x-au, t, o">
              Transform, your, business with, our, newest AI-powered, solutions, delivering unprecedented, result, s
            </p>
          </div>
          <div, className="grid, m, d:gr, i, d-co, l, s-3, ga, p-6, m, b-8">
            { servic, e, s.m, a, p((serv, i, c, e) = > (
              <div, ke, y = { servi, c, e., i, d  }, classNa, m, e = "bg-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-2x, l, p-6, hove, r: bg-whi, t, e/20, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
              >
                <div, className="te, x, t-4xl, m, b-4">{servi, c, e.ic, o, n}</div>
                <div, classNam, e = "flex, item, s-center, ga, p-2, m, b-3">
                  <Star, className="w-5 h-5, tex, t-yell, o, w-300, fil, l-yell, o, w-3, 0, 0" />
                  <span, className="te, x, t-sm, fon, t-semibold, tex, t-yell, o, w-3, 0, 0">{servi, c, e.category}</sp, a, n>
                </div>
                <h3, className="te, x, t-2xl, fon, t-bold, m, b-3">{servi, c, e.na, m, e}</h3>
                <p, className="te, x, t-emera, l, d-100, m, b-4">{servi, c, e.description}</p>
                <div, className="spa, c, e-y-2, m, b-6">
                  { servi, c, e.benefi, t, s.sli, c, e(, 0, 3).m, a, p((benef, i, t, i, d, x) = > (
                    <div, ke, y = { id, x  }, classNa, m, e = "flex, item, s-start, ga, p-2">
                      <Zap, className="w-4 h-4, tex, t-yell, o, w-300, fle, x-shri, n, k-0, m, t-1" />
                      <span, className="te, x, t-sm, tex, t-whi, t, e">{benef, i, t}</sp, a, n>
                    </di, v>
                  ))}
                </div>
                <div, classNam, e = "flex, item, s-center, justif, y-betwe, e, n">
                  <span, className="te, x, t-sm, fon, t-semibold, tex, t-emera, l, d-2, 0, 0">{servi, c, e.prici, n, g}</sp, a, n>
                  <Link, t, o = { servi, c, e.l, i, n, k }, classNa, m, e = "bg-white, tex, t-emera, l, d-600, p, x-4, p, y-2, rounde, d-lg, fon, t-semibold, hove, r: bg-emera, l, d-50, transitio, n-colors, flex, items-center, ga, p-1"
                  >
                    Learn, Mor, e
                    <ArrowRight, className="w-4 h-4" />
                  </Li, n, k>
                </div>
              </div>
            ))}
          </div>
          <div, classNam, e = "te, x, t-cent, e, r">
            <Link, t, o="/servic, e, s"
              className="inli, n, e-flex, item, s-center, ga, p-2, b, g-white, tex, t-emera, l, d-600, p, x-8, p, y-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-emera, l, d-50, transitio, n-all, hove, r:sca, l, e-1, 0, 5"
            >
              View, All, Services
              <ArrowRight, className="w-6 h-6" />
            </Li, n, k>
          </div>
        </div>
      </d, i, v  > );
  }
  if (varia, n, t = == 'prem, i, u, m') {
    return (
      <div, classNam, e = {`bg-gradie, n, t-to-r, fro, m-oran, g, e-600, t, o-r, e, d-600, rounde, d-2x, l, p-8, tex, t-whi, t, e ${classNa, m, e}`}>
        <div, className="flex, item, s-center, ga, p-3, m, b-6">
          <Rocket, className="w-8 h-8, tex, t-yell, o, w-3, 0, 0" />
          <h2, className="te, x, t-3xl, fon, t-bo, l, d">New, Services, Available</h2>
        </div>
        <p, className="te, x, t-oran, g, e-100, tex, t-lg, m, b-8">
          Discover, our, latest AI-powered, solutions, transforming businesses, worldwid, e
        </p>
        <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-6">
          { servic, e, s.m, a, p((serv, i, c, e) = > (
            <div, ke, y = { servi, c, e., i, d  }, classNa, m, e = "bg-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-x, l, p-6, hove, r: bg-whi, t, e/20, transitio, n-a, l, l">
              <div, className="te, x, t-3xl, m, b-3">{servi, c, e.ic, o, n}</div>
              <h3, classNam, e = "te, x, t-xl, fon, t-bold, m, b-2">{servi, c, e.na, m, e}</h3>
              <p, className="te, x, t-oran, g, e-100, tex, t-sm, m, b-4, lin, e-cla, m, p-2">{servi, c, e.description}</p>
              <div, className="mb-4">
                <span, className="te, x, t-sm, fon, t-semibold, tex, t-yell, o, w-3, 0, 0">{servi, c, e.benefi, t, s[0]}</sp, a, n>
              </div>
              <Link, t, o = { servi, c, e.l, i, n, k }, classNa, m, e = "inli, n, e-flex, item, s-center, ga, p-2, tex, t-yell, o, w-300, fon, t-semibold, hove, r: te, x, t-yell, o, w-2, 0, 0"
              >
                Learn, Mor, e <ArrowRight, className="w-4 h-4" />
              </Li, n, k>
            </div>
          ))}
        </div>
      </d, i, v  > );
  }
  if (varia, n, t = == 'g, r, i, d') {
    return (
      <div, classNam, e = {`bg-white, rounde, d-xl, shado, w-l, g, p-8 ${classNa, m, e}`}>
        <div, className="flex, item, s-center, justif, y-between, m, b-6">
          <div, className="flex, item, s-center, ga, p-3">
            <Rocket, className="w-7 h-7, tex, t-indi, g, o-6, 0, 0" />
            <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">New, Service, s</h3>
          </div>
          <Link, t, o="/servic, e, s" className="te, x, t-indi, g, o-600, fon, t-semibold, hove, r: te, x, t-indi, g, o-8, 0, 0">
            View, Al, l →
          </Li, n, k>
        </div>
        <div, className="grid, m, d:gr, i, d-co, l, s-3, ga, p-6">
          { servic, e, s.m, a, p((serv, i, c, e) = > (
            <Link, ke, y = { servi, c, e., i, d  }, to={ servi, c, e.li, n, k } className="border, borde, r-gr, a, y-200, rounde, d-x, l, p-5, hove, r: shad, o, w-xl, hove, r:bord, e, r-indi, g, o-300, transitio, n-all, grou, p"
            >
              <div, className="te, x, t-3xl, m, b-3">{servi, c, e.ic, o, n}</div>
              <h4, classNam, e = "fo, n, t-bold, tex, t-gr, a, y-900, m, b-2, grou, p-hov, e, r: te, x, t-indi, g, o-6, 0, 0">
                {servi, c, e.na, m, e}
              </h4>
              <p, classNam, e = "te, x, t-sm, tex, t-gr, a, y-600, m, b-3, lin, e-cla, m, p-2">{servi, c, e.description}</p>
              <div, className="te, x, t-sm, fon, t-semibold, tex, t-indi, g, o-6, 0, 0">{servi, c, e.prici, n, g}</div>
            </L, i, n, k>
          ))}
        </div>
      </d, i, v  > );
  }
  // Default variant return (
    <div, classNam, e = {`bg-gradie, n, t-to-r, fro, m-gre, e, n-600, t, o-te, a, l-600, rounde, d-x, l, p-6, tex, t-whi, t, e ${classNa, m, e}`}>
      <div, className="flex, item, s-center, ga, p-3, m, b-4">
        <Rocket, className="w-6 h-6, tex, t-yell, o, w-3, 0, 0" />
        <h3, className="te, x, t-2xl, fon, t-bo, l, d">New, Services, Just Launch, e, d</h3>
      </div>
      <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-4">
        { servic, e, s.m, a, p((serv, i, c, e) = > (
          <div, ke, y = { servi, c, e., i, d  }, classNa, m, e = "bg-whi, t, e/10, rounde, d-l, g, p-4, hove, r: bg-whi, t, e/20, transitio, n-a, l, l">
            <div, className="te, x, t-2xl, m, b-2">{servi, c, e.ic, o, n}</div>
            <h4, classNam, e = "fo, n, t-semibold, m, b-2">{servi, c, e.na, m, e}</h4>
            <p, className="te, x, t-sm, tex, t-gre, e, n-100, m, b-3, lin, e-cla, m, p-2">{servi, c, e.description}</p>
            <Link, t, o = { servi, c, e.l, i, n, k }, classNa, m, e = "te, x, t-yell, o, w-300, tex, t-sm, fon, t-semibold, hove, r: underli, n, e">
              Explore, Servic, e →
            </Li, n, k>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewServicesPromoBanner;