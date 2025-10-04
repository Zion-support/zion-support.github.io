import React from "react";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
=======
impo, r, t {
Li, n, k;
} fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t {
} fr, o, m "luci, d, e-rea, c, t";
// Mock, dat, a
  const, newArticles202, 5 = [
  {
    id: '1'
    tit, l, e: 'AI, Autonomous, Infrastructure Platfo, r, m'
    descripti, o, n: 'Revolutionary, sel, f-healing, infrastructure, with 99.9% uptime, and, 85% MTTR, reductio, n'
    catego, r, y: 'AI, Infrastructur, e'
    li, n, k: '/bl, o, g/ai-autonomo, u, s-infrastructu, r, e-platfo, r, m'
    readTi, m, e: '8, min, read'
  }
  {
    id: '2'
    tit, l, e: 'Quant, u, m-AI, Hybrid, Computing'
    descripti, o, n: 'Breakthrough, quantum, computing applications, for, enterprise transformati, o, n'
    catego, r, y: 'Quantum, Computin, g'
    li, n, k: '/bl, o, g/quant, u, m-ai-hybr, i, d-computi, n, g'
    readTi, m, e: '12, min, read'
  }
  {
    id: '3'
    tit, l, e: 'Zero, Trust, Security Framewo, r, k'
    descripti, o, n: 'Advanced, security, with 99.9% threat, detection, accuracy and, automated, response'
    catego, r, y: 'Cybersecuri, t, y'
    li, n, k: '/bl, o, g/ze, r, o-tru, s, t-securi, t, y-framewo, r, k'
    readTi, m, e: '6, min, read'
  }
];
const, newServices202, 6 = [
  {
    id: '1'
    na, m, e: 'AI, Autonomous, Infrastructure Platfo, r, m'
    descripti, o, n: 'Se, l, f-healing, systems, with 99.9% uptime, and, 85% MTTR, reductio, n'
    catego, r, y: 'AI, Infrastructur, e'
    ic, o, n: '🤖'
    li, n, k: '/servic, e, s/ai-autonomo, u, s-infrastructu, r, e-platfo, r, m'
    prici, n, g: 'Starting, a, t $5,0, 0, 0/mon, t, h'
  }
  {
    id: '2'
    na, m, e: 'Quant, u, m-AI, Hybrid, Computing'
    descripti, o, n: 'Revolutionary, quantum, computing applications, for, enterprise'
    catego, r, y: 'Quantum, Computin, g'
    ic, o, n: '⚛️'
    li, n, k: '/servic, e, s/quant, u, m-ai-hybr, i, d-computi, n, g'
    prici, n, g: 'Starting, a, t $10,0, 0, 0/mon, t, h'
  }
  {
    id: '3'
    na, m, e: 'Zero, Trust, Security Framewo, r, k'
    descripti, o, n: 'Advanced, security, with 99.9% threat, detection, accuracy'
    catego, r, y: 'Cybersecuri, t, y'
    ic, o, n: '🔒'
    li, n, k: '/servic, e, s/ze, r, o-tru, s, t-securi, t, y'
=======
    na, m, e: 'Zero, Trust, Security Framewo, r, k'
    descripti, o, n: 'Advanced, security, with 99.9% threat, detection, accuracy'
    catego, r, y: 'Cybersecuri, t, y'
    ic, o, n: '🔒'
    li, n, k: '/servic, e, s/ze, r, o-tru, s, t-securi, t, y'
    pric, i, n
  g: 'Starting, a, t $3,0, 0, 0/mon, t, h'
  }
];
const, NewContentShowcas, e: Rea, c, t.FC = () => {
  const, topArticle, s = newArticles20, 2, 5.sli, c, e(0, 3);
  const, topService, s = newServices20, 2, 6.sli, c, e(0, 3);
  return (
    <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-indi, g, o-50, vi, a-purp, l, e-50, t, o-pi, n, k-50">
      <div, className="container, m, x-auto, p, x-6">
        <div, className="te, x, t-center, m, b-16">
          <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-purp, l, e-100, rounde, d-full, tex, t-purp, l, e-700, fon, t-semibold, m, b-4">
            🌟 JUST, RELEASE, D;
          </d, i, v>
          <h2, className="te, x, t-5xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
            New, Conten, t & Servic, e, s;
          </h2>
          <p, className="te, x, t-2xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-au, t, o">
            Explore, our, latest breakthrough, articles, and revolutionary, service, s;
          </p>
        </d, i, v>
        <div, className="grid, l, g:gr, i, d-co, l, s-2, ga, p-12, m, b-12">
          {/* Articles, Sectio, n */}
          <d, i, v>
            <div, className="flex, item, s-center, ga, p-3, m, b-6">
              <span, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0">📘</sp, a, n>
              <h3, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">Latest, Article, s</h3>
            </d, i, v>
            <div, className="spa, c, e-y-4">
              {topArticl, e, s.m, a, p((artic, l, e) => (
                <Li, n, k
  k, e, y={artic, l, e.id}
                  to={artic, l, e.li, n, k}
                  classNa, m, e="block, b, g-white, rounde, d-x, l, p-6, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, hov, e
  r:sca, l, e-1, 0, 5"
                >
                  <div, className="te, x, t-sm, tex, t-indi, g, o-600, fon, t-semibold, m, b-2">{artic, l, e.catego, r, y}</d, i, v>
                  <h4, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{artic, l, e.tit, l, e}</h4>
                  <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-3, lin, e-cla, m, p-2">{artic, l, e.descripti, o, n}</p>
                  <div, className="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, className="te, x, t-gr, a, y-5, 0, 0">{artic, l, e.readTi, m, e}</sp, a, n>
                    <span, className="te, x, t-indi, g, o-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Read, Mor, e ›
                    </sp, a, n>
                  </d, i, v>
                </Li, n, k>
              ))}
            </d, i, v>
            <div, className="mt-6, tex, t-cent, e, r">
              <Li, n, k
  to="/bl, o, g"
                classNa, m, e="inli, n, e-flex, item, s-center, ga, p-2, tex, t-indi, g, o-600, fon, t-bold, hove, r:te, x, t-indi, g, o-8, 0, 0"
              >
                View, All, Articles;
                <ArrowRight, className="w-5 h-5"  />
              </Li, n, k>
            </d, i, v>
          </d, i, v>
          {/* Services, Sectio, n */}
          <d, i, v>
            <div, className="flex, item, s-center, ga, p-3, m, b-6">
              <span, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0">🚀</sp, a, n>
              <h3, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">New, Service, s</h3>
            </d, i, v>
            <div, className="spa, c, e-y-4">
              {topServic, e, s.m, a, p((servi, c, e) => (
                <Li, n, k
  k, e, y={servi, c, e.id}
                  to={servi, c, e.li, n, k}
                  classNa, m, e="block, b, g-white, rounde, d-x, l, p-6, shado, w-md, hove, r: shad, o, w-2xl, transitio, n-all, hov, e
  r:sca, l, e-1, 0, 5"
                >
                  <div, className="flex, item, s-center, ga, p-2, m, b-2">
                    <span, className="te, x, t-2, x, l">{servi, c, e.ic, o, n}</sp, a, n>
                    <span, className="te, x, t-sm, tex, t-purp, l, e-600, fon, t-semibo, l, d">{servi, c, e.catego, r, y}</sp, a, n>
                  </d, i, v>
                  <h4, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{servi, c, e.na, m, e}</h4>
                  <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-3, lin, e-cla, m, p-2">{servi, c, e.descripti, o, n}</p>
                  <div, className="flex, item, s-center, justif, y-between, tex, t-sm">
                    <span, className="te, x, t-gr, a, y-700, fon, t-semibo, l, d">{servi, c, e.prici, n, g}</sp, a, n>
                    <span, className="te, x, t-purp, l, e-600, fon, t-semibold, flex, items-center, ga, p-1">
                      Learn, Mor, e ›
                    </sp, a, n>
                  </d, i, v>
                </Li, n, k>
              ))}
            </d, i, v>
            <div, className="mt-6, tex, t-cent, e, r">
              <Li, n, k
  to="/servic, e, s"
                classNa, m, e="inli, n, e-flex, item, s-center, ga, p-2, tex, t-purp, l, e-600, fon, t-bold, hove, r:te, x, t-purp, l, e-8, 0, 0"
              >
                View, All, Services;
                <ArrowRight, className="w-5 h-5"  />
              </Li, n, k>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </d, i, v>
    </secti, o, n>
  );
};
export default NewContentShowcase;