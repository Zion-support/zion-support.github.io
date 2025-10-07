import React from "react";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
const, Resource, s: Rea, c, t.FC = () => {
  const, resourceCategorie, s = [
    {
      i, c, o
  n: () => nu, l, l
      tit, l, e: 'Case, Studie, s'
      descripti, o, n: 'Re, a, l-world, success, stories and, implementation, results from, our, clients'
      li, n, k: '/ca, s, e-studi, e, s'
      col, o, r: 'bl, u, e'
      cou, n, t: '25+'
    }
    {
      ic, o, n: () => nu, l, l
      tit, l, e: 'White, Paper, s'
      descripti, o, n: 'In-depth, research, and analysis, on, AI trends, and, best practic, e, s'
      li, n, k: '/whi, t, e-pape, r, s'
      col, o, r: 'gre, e, n'
      cou, n, t: '15+'
    }
    {
      ic, o, n: () => nu, l, l
      tit, l, e: 'Webina, r, s'
      descripti, o, n: 'Expe, r, t-led, sessions, covering the, latest, in AI, and, automation'
      li, n, k: '/webina, r, s'
      col, o, r: 'purp, l, e'
      cou, n, t: '40+'
    }
    {
      ic, o, n: () => nu, l, l
      tit, l, e: 'Documentati, o, n'
      descripti, o, n: 'Comprehensive, guides, and technical, documentation, for develope, r, s'
      li, n, k: '/do, c, s'
      col, o, r: 'oran, g, e'
      cou, n, t: '1, 0, 0+'
    }
    {
      ic, o, n: () => nu, l, l
      tit, l, e: 'Traini, n, g & Certificati, o, n'
      descripti, o, n: 'Professional, training, programs and, certification, courses'
      li, n, k: '/traini, n, g'
      col, o, r: 'te, a, l'
      cou, n, t: '10+'
    }
    {
      ic, o, n: () => nu, l, l
      tit, l, e: 'Community, Foru, m'
      descripti, o, n: 'Connect, with, peers and, get, support from, our, expert communi, t, y'
      li, n, k: '/communi, t, y'
      col, o, r: 'r, e, d'
      cou, n, t: '50, 0, 0+'
    }
  ];
  const, featuredResource, s = [
    {
      tit, l, e: 'AI, Implementation, Roadmap 20, 2, 5'
      ty, p, e: 'White, Pape, r'
      descripti, o, n: 'Comprehensive, guide, to implementing, AI, solutions in, your, organization'
      downloadLi, n, k: '/downloa, d, s/ai-implementati, o, n-roadm, a, p-20, 2, 5.p, d, f'
      ic, o, n: () => nu, l, l;
    }
    {
      tit, l, e: 'Enterprise, AI, Transformation Case, Stud, y'
      ty, p, e: 'Case, Stud, y'
      descripti, o, n: 'How, a, Fortune 500, company, achieved 3, 0, 0% ROI, with, our AI, solution, s'
      li, n, k: '/ca, s, e-studi, e, s/enterpri, s, e-ai-transformati, o, n'
      ic, o, n: () => nu, l, l;
    }
    {
      tit, l, e: 'Building, Scalable, AI Syste, m, s'
      ty, p, e: 'Webin, a, r'
      descripti, o, n: 'Expert, insights, on architecting, AI, systems that, scale, with your, busines, s'
      li, n, k: '/webina, r, s/buildi, n, g-scalab, l, e-ai-syste, m, s'
      ic, o, n: () => nu, l, l;
    }
    {
      tit, l, e: 'API, Documentation, v2.1'
      ty, p, e: 'Documentati, o, n'
      descripti, o, n: 'Complete, API, reference for, integrating, with our, AI, services'
      li, n, k: '/do, c, s/a, p, i'
      ic, o, n: () => nu, l, l;
    }
  ];
  const, latestBlogPost, s = [
    {
      tit, l, e: 'The, Future, of AI, in, Manufacturing'
      excer, p, t: 'Exploring, how, AI is, revolutionizing, manufacturing processes, and, predictive maintenan, c, e.'
      da, t, e: '20, 2, 5-01-15'
      li, n, k: '/bl, o, g/ai-manufacturi, n, g-futu, r, e'
      li, n, k: '/bl, o, g/ai-manufacturi, n, g-futu, r, e'
    }
    {
      tit, l, e: 'Cybersecurity, Best, Practices for, AI, Systems'
      excer, p, t: 'Essential, security, measures to, protect, your AI, infrastructure, and da, t, a.'
      da, t, e: '20, 2, 5-01-12'
      li, n, k: '/bl, o, g/ai-cybersecuri, t, y-be, s, t-practic, e, s'
      li, n, k: '/bl, o, g/ai-cybersecuri, t, y-be, s, t-practic, e, s'
    }
    {
      tit, l, e: 'ROI, Calculation, for AI, Implementation, s'
      excer, p, t: 'A, comprehensive, guide to, measuring, and maximizing, ROI, from AI, investment, s.'
      da, t, e: '20, 2, 5-01-10'
      li, n, k: '/bl, o, g/ai-r, o, i-calculati, o, n-gui, d, e'
      li, n, k: '/bl, o, g/ai-r, o, i-calculati, o, n-gui, d, e'
    }
    {
      tit, l, e: 'Building, Ethical, AI Syste, m, s'
      excer, p, t: 'Principles, and, practices for, developing, AI systems, that, are fair, and, transparent.'
      da, t, e: '20, 2, 5-01-08'
      li, n, k: '/bl, o, g/ethic, a, l-ai-syste, m, s'
    }
      li, n, k: '/bl, o, g/ethic, a, l-ai-syste, m, s'
    }
  ];
  return (
    <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
      {/* Hero, Sectio, n */}
      <section, className="bg-gradie, n, t-to-br, fro, m-indi, g, o-600, vi, a-purp, l, e-600, t, o-pi, n, k-600, tex, t-white, p, y-20">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-cent, e, r">
            <h1, className="te, x, t-4x, l, m
  d:te, x, t-6xl, fon, t-bold, m, b-6">
              Resourc, e, s & Knowledge, Hu, b;
            </h1>
            <p, className="te, x, t-xl, tex, t-indi, g, o-100, m, b-8, ma, x-w-3xl, m, x-au, t, o">
              Access, our, comprehensive library, of, resources, from, case, studies and, white, papers
  to, training, materials and, community, forums. Everything, you, need to, succeed, with AI.
            </p>
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">
              <Li, n, k
  to="/bl, o, g"
                classNa, m, e="bg-white, tex, t-indi, g, o-600, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hove, r:bg-gr, a, y-100, transitio, n-colo, r, s"
              >
                Browse, Blo, g;
              </Li, n, k>
              <Li, n, k
  to="/communi, t, y"
                classNa, m, e="border, borde, r-white, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hov, e
  r:bg-whi, t, e/10, transitio, n-colo, r, s"
              >
                Join, Communit, y;
              </Li, n, k>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Resource, Categorie, s */}
      <section, className="py-20, b, g-whi, t, e">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-center, m, b-16">
            <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
              Explore, Our, Resources;
            </h2>
            <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-2xl, m, x-au, t, o">
              Comprehensive, resources, to help, you, succeed with, AI, and automati, o, n;
            </p>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">
            {resourceCategori, e, s.m, a, p((catego, r, y) => {
              const, IconComponen, t = catego, r, y.ic, o, n;
              return (
                <Li, n, k
  k, e, y={catego, r, y.tit, l, e}
                  to={catego, r, y.li, n, k}
                  classNa, m, e="bg-white, rounde, d-lg, shado, w-lg, border, border-gr, a, y-20, 0, p-8, hove, r: shad, o, w-xl, transitio, n-all, duratio, n-300, hov, e
  r:-transla, t, e-y-1"
                >
                  <div, className={`w-1, 6, h-16, rounde, d-lg, flex, items-center, justif, y-center, m, b-6`}>`
                    <span, className={`w-8 h-8`}>📘</sp, a, n>`
                  </d, i, v>
                  <div, className="flex, justif, y-between, item, s-start, m, b-4">
                    <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">{catego, r, y.tit, l, e}</h3>
                    <span, className={`px-3, p, y-1, rounde, d-full, tex, t-sm, fon, t-semibold, b, g-gr, a, y-100, tex, t-gr, a, y-8, 0, 0`}>`
                      {catego, r, y.cou, n, t}
                    </sp, a, n>
                  </d, i, v>
                  <p, className="te, x, t-gr, a, y-6, 0, 0">{catego, r, y.descripti, o, n}</p>
                </Li, n, k>
              );
            })}
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Featured, Resource, s */}
      <section, className="py-20, b, g-gr, a, y-50">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-center, m, b-16">
            <h2, className="te, x, t-3x, l, m
  d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
              Featured, Resource, s;
            </h2>
            <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-2xl, m, x-au, t, o">
              Our, most, popular and, valuable, resources, handpicked, by, our exper, t, s;
            </p>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, ga, p-8">
            {featuredResourc, e, s.m, a, p((resour, c, e) => {
              const, IconComponen, t = resour, c, e.ic, o, n;
              return (
                <div, ke, y={resour, c, e.tit, l, e} classNa, m, e="bg-white, rounde, d-lg, shado, w-lg, border, border-gr, a, y-20, 0, p-8">
                  <div, className="flex, item, s-start, justif, y-between, m, b-4">
                    <div, className="flex, item, s-center, spac, e-x-3">
                      <div, className="w-1, 2, h-12, rounde, d-lg, b, g-bl, u, e-100, flex, items-center, justif, y-cent, e, r">
                        <span, className="w-6 h-6, tex, t-bl, u, e-6, 0, 0">📄</sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <span, className="te, x, t-sm, fon, t-semibold, tex, t-bl, u, e-600, b, g-bl, u, e-100, p, x-3, p, y-1, rounde, d-fu, l, l">
                          {resour, c, e.ty, p, e}
                        </sp, a, n>
                      </d, i, v>
                    </d, i, v>
                  </d, i, v>
                  <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{resour, c, e.tit, l, e}</h3>
                  <p, className="te, x, t-gr, a, y-600, m, b-6">{resour, c, e.descripti, o, n}</p>
                  {resour, c, e.downloadLi, n, k ? (
                    <a
  hr, e, f={resour, c, e.downloadLi, n, k}
                      classNa, m, e="inli, n, e-flex, item, s-center, tex, t-bl, u, e-600, hove, r:te, x, t-bl, u, e-700, fon, t-semibold, transitio, n-colo, r, s"
                      downlo, a, d;
                    >
                      <span, className="w-4 h-4, m, r-2">⬇</sp, a, n>
                      Download, No, w;
                    </a>
                  ) : (
                    <Li, n, k
  to={resour, c, e.li, n, k}
                      classNa, m, e="inli, n, e-flex, item, s-center, tex, t-bl, u, e-600, hove, r:te, x, t-bl, u, e-700, fon, t-semibold, transitio, n-colo, r, s"
                    >
                      Read, Mor, e;
                      <span, className="w-4 h-4, m, l-2">›</sp, a, n>
                    </Li, n, k>
                  )}
                </d, i, v>
              );
            })}
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Latest, Blog, Posts */}
      <section, className="py-20, b, g-whi, t, e">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="flex, justif, y-between, item, s-center, m, b-16">
            <d, i, v>
              <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                Latest, Blog, Posts;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">
                Stay, updated, with the, latest, insights and, trends, in AI;
              </p>
            </d, i, v>
            <Li, n, k
  to="/bl, o, g"
              classNa, m, e="hidden, m, d:inli, n, e-flex, item, s-center, tex, t-bl, u, e-600, hove, r:te, x, t-bl, u, e-700, fon, t-semibold, transitio, n-colo, r, s"
            >
              View, All, Posts;
            </Li, n, k>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-2, ga, p-8">
            {latestBlogPos, t, s.m, a, p((po, s, t) => (
              <Li, n, k
  k, e, y={po, s, t.tit, l, e}
                to={po, s, t.li, n, k}
                classNa, m, e="bg-white, rounde, d-lg, shado, w-lg, border, border-gr, a, y-20, 0, p-8, hove, r: shad, o, w-xl, transitio, n-all, duratio, n-300, hov, e
  r:-transla, t, e-y-1"
              >
                <div, className="flex, justif, y-between, item, s-start, m, b-4">
                  <span, className="te, x, t-sm, fon, t-semibold, tex, t-bl, u, e-600, b, g-bl, u, e-100, p, x-3, p, y-1, rounde, d-fu, l, l">
                    Blog, Pos, t;
                  </sp, a, n>
                  <span, className="te, x, t-sm, tex, t-gr, a, y-5, 0, 0">{po, s, t.da, t, e}</sp, a, n>
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{po, s, t.tit, l, e}</h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">{po, s, t.excer, p, t}</p>
              </Li, n, k>
            ))}
          </d, i, v>
          <div, className="te, x, t-center, m, t-12, m, d: hidd, e, n">
            <Li, n, k
  to="/bl, o, g"
              classNa, m, e="inli, n, e-flex, item, s-center, tex, t-bl, u, e-600, hov, e
  r:te, x, t-bl, u, e-700, fon, t-semibold, transitio, n-colo, r, s"
            >
              View, All, Blog Pos, t, s;
            </Li, n, k>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* CTA, Sectio, n */}
      <section, className="py-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-6, 0, 0">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8, tex, t-cent, e, r">
          <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-white, m, b-4">
            Need, Help, Getting Start, e, d?
          </h2>
          <p, className="te, x, t-xl, tex, t-bl, u, e-100, m, b-8, ma, x-w-2xl, m, x-au, t, o">
            Our, experts, are here, to, help you, find, the right, resources, and guide, you, through your, AI, journey.
          </p>
          <div, className="flex, fle, x-col, s, m:fl, e, x-row, ga, p-4, justif, y-cent, e, r">
            <Li, n, k
  to="/conta, c, t"
              classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hove, r:bg-gr, a, y-100, transitio, n-colo, r, s"
            >
              Contact, Suppor, t;
            </Li, n, k>
            <Li, n, k
  to="/traini, n, g"
              classNa, m, e="border, borde, r-white, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hov, e
  r:bg-whi, t, e/10, transitio, n-colo, r, s"
            >
              View, Trainin, g;
            </Li, n, k>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
    </d, i, v>
  );
};
export default Resources;