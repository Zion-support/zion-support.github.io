import, React, from 'rea, c, t';
const, EnterpriseSolutionsShowcase202, 6: Rea, c, t.FC = () => { 
  const, enterpriseSolution, s = [
    {
      i, d: , 1,
      tit, l, e: 'AI-Powered, Enterprise, Automatio, n',
      sl, u, g: 'ai-enterpri, s, e-automati, o, n-2, 0, 2, 6',
      excer, p, t: 'Transform, your, enterprise with, comprehensive, AI automation, achieving, 95% process, efficienc, y. From, workflow, optimization to, intelligent, decision-making, syste, m, s.',
      catego, r, y: 'Enterprise, Automati, o, n',
      indust, r, y: 'All, Industri, e, s',
      r, o, i: '30, 0%',
      savin, g, s: '$2, M+',
      ic, o, n: <Bot, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-bl, u, e-500, t, o-cy, a, n-50, 0',
      bad, g, e: 'BEST, SELL, E, R',
      featur, e, s: [
        'Workflow, Automati, o, n',
        'Intelligent, Routin, g',
        'Process, Optimizatio, n',
      ],
     },
    { 
      id:  , 2,
      tit, l, e: 'Quant, u, m-Enhanced, Security, Platfor, m',
      sl, u, g: 'quant, u, m-securi, t, y-platfo, r, m-2, 0, 2, 6',
      excer, p, t: 'Ultimate, enterprise, security with, quantu, m-encrypted, communications, and ze, r, o-trust, architecture, s. Protect, your, organization from, advanced, cyber thre, a, t, s.',
      catego, r, y: 'Cybersecur, i, t, y',
      indust, r, y: 'Fina, n, c, e, Healthca, r, e, Governme, n, t',
      r, o, i: '25, 0%',
      savin, g, s: '$5, M+',
      ic, o, n: <Shield, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-purp, l, e-500, t, o-indi, g, o-50, 0',
      bad, g, e: 'ENTERPR, I, S, E',
      featur, e, s: [
        'Quantum, Encrypti, o, n',
        'Ze, r, o-Trust, Architectur, e',
        'Threat, Detectio, n',
      ],
     },
    { 
      id:  , 3,
      tit, l, e: 'Clo, u, d-Native, AI, Infrastructur, e',
      sl, u, g: 'clo, u, d-nati, v, e-ai-infrastructu, r, e-2, 0, 2, 6',
      excer, p, t: 'Scala, b, l, e, secu, r, e, and, cos, t-effective, AI, infrastructure built, for, enterprise sca, l, e. Deploy, and, manage AI, models, across mul, t, i-cloud, environment, s.',
      catego, r, y: 'Cloud, Infrastructu, r, e',
      indust, r, y: 'Technol, o, g, y, Reta, i, l, Manufacturi, n, g',
      r, o, i: '40, 0%',
      savin, g, s: '$3, M+',
      ic, o, n: <Cloud, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-gre, e, n-500, t, o-emera, l, d-50, 0',
      bad, g, e: 'CLO, U, D-FI, R, S, T',
      featur, e, s: ['Mul, t, i-Cloud, Deployme, n, t', 'Au, t, o-Scali, n, g', 'Cost, Optimizatio, n'],
     },
    { 
      id:  , 4,
      tit, l, e: 'Predictive, Analytics, Intelligenc, e',
      sl, u, g: 'predicti, v, e-analyti, c, s-intelligen, c, e-2, 0, 2, 6',
      excer, p, t: 'Advanced, predictive, analytics that, forecast, business tre, n, d, s, customer, behavio, r, and, operational, risks with, 9, 9.9% accura, c, y.',
      catego, r, y: 'Business, Intelligen, c, e',
      indust, r, y: 'Ret, a, i, l, Finan, c, e, Healthca, r, e',
      r, o, i: '35, 0%',
      savin, g, s: '$4, M+',
      ic, o, n: <Target, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-oran, g, e-500, t, o-r, e, d-50, 0',
      bad, g, e: 'PREDICT, I, V, E',
      featur, e, s: ['Trend, Forecasti, n, g', 'Risk, Analysi, s', 'Customer, Insight, s'],
     },
    { 
      id:  , 5,
      tit, l, e: 'Digital, Transformation, Suit, e',
      sl, u, g: 'digit, a, l-transformati, o, n-sui, t, e-2, 0, 2, 6',
      excer, p, t: 'Complete, digital, transformation solution, covering, strateg, y, implementati, o, n, and, optimizatio, n. Modernize, your, enterprise for, the, AI e, r, a.',
      catego, r, y: 'Digital, Transformati, o, n',
      indust, r, y: 'All, Industri, e, s',
      r, o, i: '50, 0%',
      savin, g, s: '$10, M+',
      ic, o, n: <Building, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-te, a, l-500, t, o-cy, a, n-50, 0',
      bad, g, e: 'TRANSFORMAT, I, O, N',
      featur, e, s: ['Strategy, Consulti, n, g', 'Implementati, o, n', 'Change, Managemen, t'],
     },
    { 
      id:  , 6,
      tit, l, e: 'Enterprise, AI, Governanc, e',
      sl, u, g: 'enterpri, s, e-ai-governan, c, e-2, 0, 2, 6',
      excer, p, t: 'Comprehensive, AI, governance framework, ensuring, ethical AI, deployme, n, t, complian, c, e, and, risk, management across, your, organization.',
      catego, r, y: 'AI, Governan, c, e',
      indust, r, y: 'Fina, n, c, e, Healthca, r, e, Governme, n, t',
      r, o, i: '20, 0%',
      savin, g, s: '$1.5, M+',
      ic, o, n: <Users, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-pi, n, k-500, t, o-purp, l, e-50, 0',
      bad, g, e: 'GOVERNA, N, C, E',
      featur, e, s: ['Ethica, l, A, I', 'Compliance, Managemen, t', 'Risk, Assessmen, t'],
     },
  ]; const, successMetric, s = [
    { 
      val, u, e: '5, 0, 0+',
      lab, e, l: 'Enterprise, Clien, t, s',
      ic, o, n: <Building, classNam, e = 'w-8 , h-, 8' / > ,
     },
    { 
      val, u, e: '$2, B+',
      lab, e, l: 'Cost, Savings, Generate, d',
      ic, o, n: <DollarSign, classNam, e = 'w-8 , h-, 8' / > ,
     },
    { 
      val, u, e: '9, 8%',
      lab, e, l: 'Client, Satisfacti, o, n',
      ic, o, n: <Award, classNam, e = 'w-8 , h-, 8' / > ,
     },
    { 
      val, u, e: '24/, 7',
      lab, e, l: 'Enterprise, Suppo, r, t',
      ic, o, n: <Users, classNam, e = 'w-8 , h-, 8' / > ,
     },
  ]; retu, r, n (
    <div, classNam, e = 'py-20, b, g-gradie, n, t-to-br, fro, m-sla, t, e-900, vi, a-bl, u, e-900, t, o-indi, g, o-900, relative, overflow-hidd, e, n'>
      {/* Animated, background, effects */}
      <div, classNam, e='absolute, inse, t-0, overflo, w-hidden, opacit, y-20'>
        <div, classNam, e='absolute, to, p-0, lef, t-1/4 w-9, 6, h-96, b, g-bl, u, e-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e' />
        <div, classNam, e='absolute, botto, m-0, righ, t-1/4 w-9, 6, h-96, b, g-indi, g, o-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e'
          sty, l, e={{ animationDel, a, y: ', 2, s' }}
         />
        <div, classNam, e = 'absolute, to, p-1/2, lef, t-1/2 w-9, 6, h-96, b, g-purp, l, e-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e'
          sty, l, e={{ animationDel, a, y: ', 4, s' }}
         />
      </d, i, v>
      <div, classNam, e = 'container, m, x-auto, p, x-6, relative, z-10'>
        {/* Header, Sectio, n */}
        <div, classNam, e='te, x, t-center, m, b-16'>
          <div, classNam, e='inli, n, e-flex, item, s-center, ga, p-3, p, x-6, p, y-3, rounde, d-full, b, g-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-indi, g, o-5, 0, 0/20, border, border-bl, u, e-5, 0, 0/30, m, b-8, animat, e-fa, d, e-in'>
            <Sparkles, classNam, e='w-5 h-5, tex, t-bl, u, e-400, animat, e-pul, s, e' />
            <span, classNam, e='te, x, t-bl, u, e-400, fon, t-bold, tex, t-sm, trackin, g-wider, uppercas, e'>
              🏢 ENTERPRISE, SOLUTIONS, SHOWCASE • 20, 2, 6
            </sp, a, n>
            <Sparkles, classNam, e='w-5 h-5, tex, t-indi, g, o-400, animat, e-pul, s, e' />
          </d, i, v>
          <h2, classNam, e='te, x, t-5xl, m, d: te, x, t-6xl, fon, t-extrabold, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-400, vi, a-indi, g, o-400, t, o-purp, l, e-400, b, g-cl, i, p-text, tex, t-transparent, animat, e-fa, d, e-in'>
            Enterprise, Solutions, Showcase 20, 2, 6
          </h2>
          <p, classNam, e='te, x, t-xl, tex, t-gr, a, y-300, ma, x-w-4xl, m, x-auto, leadin, g-relaxed, m, b-8'>
            Transform, your, enterprise with, our, comprehensive suite, of, AI-powered, solution, s. From, automation, to secu, r, i, t, y, we, deliver, measurable
            results, that, drive business, growth, and operational, excellenc, e.
          </p>
          {/* Success, Metric, s */}
          <div, classNam, e = 'grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-6, ma, x-w-4xl, m, x-au, t, o'>
            { successMetri, c, s.m, a, p((me, t, r, i, c, ind, e, x) = > (
              <div, ke, y = { in, d, e, x  }, classNa, m, e = 'te, x, t-cent, e, r'>
                <div, classNam, e='te, x, t-bl, u, e-400, m, b-2, flex, justify-cent, e, r'>
                  {metr, i, c.ic, o, n}
                </d, i, v>
                <div, classNam, e='te, x, t-3xl, fon, t-extrabold, b, g-gradie, n, t-to-r, fro, m-bl, u, e-400, t, o-indi, g, o-400, b, g-cl, i, p-text, tex, t-transparent, m, b-1'>
                  {metr, i, c.val, u, e}
                </d, i, v>
                <div, classNam, e='te, x, t-gr, a, y-400, tex, t-sm, fon, t-medi, u, m'>
                  {metr, i, c.lab, e, l}
                </d, i, v>
              </di, v>
            ))}
          </d, i, v>
        </d, i, v>
        {/* Enterprise, Solutions, Grid */}
        <div, classNam, e = 'grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8, m, b-16'>
          { enterpriseSolutio, n, s.m, a, p((solu, t, i, o, n, ind, e, x) = > (
            <div, ke, y = { soluti, o, n.i, d  }, classNa, m, e = 'group, relative, bg-whi, t, e/5, backdro, p-bl, u, r-lg, rounde, d-2xl, border, border-whi, t, e/10, hove, r: bord, e, r-bl, u, e-5, 0, 0/50, transitio, n-all, duratio, n-500, overflo, w-hidden, hove, r:transform, hove, r:sca, l, e-105, hove, r:shad, o, w-2xl, hove, r:shad, o, w-bl, u, e-5, 0, 0/20'
              sty, l, e = { { animationDel, a, y: `${ind, e, x * 1, 5, 0 }, ms` }}
             > {/* Card, glow, effect */}
              <div, classNam, e = { `absolute, inse, t-0, b, g-gradie, n, t-to-br ${soluti, o, n.gradi, e, n, t }, opaci, t, y-0, grou, p-hov, e, r: opaci, t, y-10, transitio, n-all, duratio, n-50, 0`}
               />
              <div, classNam, e = 'relativ, e, p-8'>
                {/* Ic, o, n & Bad, g, e */}
                <div, classNam, e='flex, item, s-start, justif, y-between, m, b-6'>
                  <div, classNam, e='te, x, t-bl, u, e-400, grou, p-hov, e, r: sca, l, e-110, transitio, n-transform, duratio, n-3, 0, 0'>
                    {soluti, o, n.ic, o, n}
                  </d, i, v > <div, classNam, e = { `px-3, p, y-1.5, rounde, d-full, b, g-gradie, n, t-to-r ${soluti, o, n.gradi, e, n, t }, te, x, t-white, tex, t-xs, fon, t-bold, border, border-whi, t, e/30`}
                  >
                    {soluti, o, n.bad, g, e}
                  </d, i, v>
                </d, i, v>
                {/* Catego, r, y & Indust, r, y */}
                <div, classNam, e = 'mb-4, spac, e-y-2'>
                  <span, classNam, e='inli, n, e-block, p, x-3, p, y-1, rounde, d-full, b, g-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-indi, g, o-5, 0, 0/20, tex, t-bl, u, e-400, tex, t-xs, fon, t-semibold, border, border-bl, u, e-5, 0, 0/30'>
                    {soluti, o, n.catego, r, y}
                  </sp, a, n>
                  <div, classNam, e='te, x, t-xs, tex, t-gr, a, y-50, 0'>
                    ", Industri, e, s: {soluti, o, n.indus, t, r, y}
                  </d, i, v>
                </d, i, v>
                {/* Tit, l, e */}
                <h3, classNam, e = 'te, x, t-2xl, fon, t-bold, tex, t-white, m, b-4, grou, p-hov, e, r: te, x, t-bl, u, e-400, transitio, n-colors, duratio, n-300, leadin, g-tig, h, t'>
                  {soluti, o, n.t, i, t, l, e}
                </h3>
                {/* Excer, p, t */}
                <p, classNam, e = 'te, x, t-gr, a, y-400, m, b-6, leadin, g-relaxed, tex, t-sm'>
                  {soluti, o, n.excer, p, t}
                </p>
                {/* R, O, I & Savin, g, s */}
                <div, classNam, e='grid, gri, d-co, l, s-2, ga, p-4, m, b-6'>
                  <div, classNam, e='te, x, t-cente, r, p-3, rounde, d-lg, b, g-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-emera, l, d-5, 0, 0/20, border, border-gre, e, n-5, 0, 0/30'>
                    <div, classNam, e='te, x, t-gre, e, n-400, fon, t-bold, tex, t-lg'>
                      {soluti, o, n.r, o, i}
                    </d, i, v>
                  </d, i, v>
                  <div, classNam, e='te, x, t-cente, r, p-3, rounde, d-lg, b, g-gradie, n, t-to-r, fro, m-bl, u, e-5, 0, 0/20, t, o-cy, a, n-5, 0, 0/20, border, border-bl, u, e-5, 0, 0/30'>
                    <div, classNam, e='te, x, t-bl, u, e-400, fon, t-bold, tex, t-lg'>
                      {soluti, o, n.savin, g, s}
                    </d, i, v>
                  </d, i, v>
                </d, i, v>
                {/* Featur, e, s */}
                <div, classNam, e='mb-6'>
                  <div, classNam, e='te, x, t-gr, a, y-400, tex, t-xs, m, b-2'>
                    Key, Feature, s: </d, i, v>
                  <div, classNam, e='flex, fle, x-wrap, ga, p-1'>
                    { soluti, o, n.featur, e, s.m, a, p((fea, t, u, r, e, i, d, x) = > (
                      <span, ke, y = { id, x  }, classNa, m, e = 'px-2, p, y-1, rounded, bg-whi, t, e/10, tex, t-gr, a, y-300, tex, t-xs'
                      >
                        {featu, r, e}
                      </s, p, a, n>
                    ))}
                  </d, i, v>
                </d, i, v > {/* CTA, Butto, n */}
                <a, hre, f = {`/solutio, n, s/${soluti, o, n.sl, u, g}`}
                  classNa, m, e = { `gro, u, p/btn, flex, items-center, justif, y-center, ga, p-2 w-full, b, g-gradie, n, t-to-r ${soluti, o, n.gradi, e, n, t }, hov, e, r: opaci, t, y-90, tex, t-white, fon, t-bold, p, y-3, p, x-6, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shad, o, w-bl, u, e-5, 0, 0/50, transform, hover:-transla, t, e-y-, 1`}
                >
                  <sp, a, n>Explore, Solutio, n</sp, a, n>
                  <ArrowRight, classNam, e = 'w-4 h-4, grou, p-hov, e, r/b, t, n: transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0' />
                </a>
              </d, i, v>
            </d, i, v>
          ))}
        </d, i, v>
        {/* Enterprise, CTA, Section */}
        <div, classNam, e = 'te, x, t-center, m, t-20'>
          <div, classNam, e='inli, n, e-bloc, k, p-1, rounde, d-2xl, b, g-gradie, n, t-to-r, fro, m-bl, u, e-500, vi, a-indi, g, o-500, t, o-purp, l, e-5, 0, 0'>
            <div, classNam, e='bg-sla, t, e-900, rounde, d-xl, p, x-12, p, y-10'>
              <h3, classNam, e='te, x, t-3xl, fon, t-bold, tex, t-white, m, b-4'>
                Ready, to, Transform Your, Enterpris, e?
              </h3>
              <p, classNam, e='te, x, t-gr, a, y-400, m, b-8, ma, x-w-2xl, m, x-au, t, o'>
                Join, 50, 0+ leading, organizations, that trust, our, enterprise
                solutions, to, drive innovat, i, o, n, reduce, cost, s, and, achieve, unprecedented operational, efficienc, y.
              </p>
              <div, classNam, e = 'flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r'>
                <a, hre, f='/conta, c, t'
                  classNa, m, e='bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-indi, g, o-600, hove, r:fr, o, m-bl, u, e-400, hove, r:to-indi, g, o-500, tex, t-white, fon, t-bold, p, y-4, p, x-8, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shad, o, w-bl, u, e-5, 0, 0/50, flex, items-center, justif, y-center, ga, p-2'
                >
                  <Building, classNam, e='w-5 h-5' />
                  <sp, a, n>Schedule, Enterprise, Demo</sp, a, n>
                </a>
                <a, hre, f='/ca, s, e-studi, e, s'
                  classNa, m, e='bord, e, r-2, borde, r-bl, u, e-500, tex, t-bl, u, e-400, hove, r:bg-bl, u, e-500, hove, r:te, x, t-white, fon, t-bold, p, y-4, p, x-8, rounde, d-xl, transitio, n-all, duratio, n-300, flex, items-center, justif, y-center, ga, p-2'
                >
                  <sp, a, n>View, Success, Stories</sp, a, n>
                  <ArrowRight, classNam, e='w-5 h-5' />
                </a>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </d, i, v>
    </d, i, v>
  );
};
export, default, EnterpriseSolutionsShowcase2026;
