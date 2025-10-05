import, React, from 'rea, c, t';
const, EnterpriseSolutionsShowcase202, 6: Rea, c, t.FC = () => { 
  const, enterpriseSolution, s = [
    {
      i, d: , 1,
      title: 'AI-Powered, Enterprise, Automatio, n',
      slug: 'ai-enterpri, s, e-automati, o, n-2, 0, 2, 6',
      excerpt: 'Transform, your, enterprise with, comprehensive, AI automation, achieving, 95% process, efficienc, y. From, workflow, optimization to, intelligent, decision-making, syste, m, s.',
      category: 'Enterprise, Automati, o, n',
      industry: 'All, Industri, e, s',
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
      title: 'Quant, u, m-Enhanced, Security, Platfor, m',
      slug: 'quant, u, m-securi, t, y-platfo, r, m-2, 0, 2, 6',
      excerpt: 'Ultimate, enterprise, security with, quantu, m-encrypted, communications, and ze, r, o-trust, architecture, s. Protect, your, organization from, advanced, cyber thre, a, t, s.',
      category: 'Cybersecur, i, t, y',
      industry: 'Fina, n, c, e, Healthca, r, e, Governme, n, t',
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
      title: 'Clo, u, d-Native, AI, Infrastructur, e',
      slug: 'clo, u, d-nati, v, e-ai-infrastructu, r, e-2, 0, 2, 6',
      excerpt: 'Scala, b, l, e, secu, r, e, and, cos, t-effective, AI, infrastructure built, for, enterprise sca, l, e. Deploy, and, manage AI, models, across mul, t, i-cloud, environment, s.',
      category: 'Cloud, Infrastructu, r, e',
      industry: 'Technol, o, g, y, Reta, i, l, Manufacturi, n, g',
      r, o, i: '40, 0%',
      savin, g, s: '$3, M+',
      ic, o, n: <Cloud, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-gre, e, n-500, t, o-emera, l, d-50, 0',
      bad, g, e: 'CLO, U, D-FI, R, S, T',
      featur, e, s: ['Mul, t, i-Cloud, Deployme, n, t', 'Au, t, o-Scali, n, g', 'Cost, Optimizatio, n'],
     },
    { 
      id:  , 4,
      title: 'Predictive, Analytics, Intelligenc, e',
      slug: 'predicti, v, e-analyti, c, s-intelligen, c, e-2, 0, 2, 6',
      excerpt: 'Advanced, predictive, analytics that, forecast, business tre, n, d, s, customer, behavio, r, and, operational, risks with, 9, 9.9% accura, c, y.',
      category: 'Business, Intelligen, c, e',
      industry: 'Ret, a, i, l, Finan, c, e, Healthca, r, e',
      r, o, i: '35, 0%',
      savin, g, s: '$4, M+',
      ic, o, n: <Target, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-oran, g, e-500, t, o-r, e, d-50, 0',
      bad, g, e: 'PREDICT, I, V, E',
      featur, e, s: ['Trend, Forecasti, n, g', 'Risk, Analysi, s', 'Customer, Insight, s'],
     },
    { 
      id:  , 5,
      title: 'Digital, Transformation, Suit, e',
      slug: 'digit, a, l-transformati, o, n-sui, t, e-2, 0, 2, 6',
      excerpt: 'Complete, digital, transformation solution, covering, strateg, y, implementati, o, n, and, optimizatio, n. Modernize, your, enterprise for, the, AI e, r, a.',
      category: 'Digital, Transformati, o, n',
      industry: 'All, Industri, e, s',
      r, o, i: '50, 0%',
      savin, g, s: '$10, M+',
      ic, o, n: <Building, classNam, e = 'w-8 , h-, 8' / > ,
      gradie, n, t: 'fr, o, m-te, a, l-500, t, o-cy, a, n-50, 0',
      bad, g, e: 'TRANSFORMAT, I, O, N',
      featur, e, s: ['Strategy, Consulti, n, g', 'Implementati, o, n', 'Change, Managemen, t'],
     },
    { 
      id:  , 6,
      title: 'Enterprise, AI, Governanc, e',
      slug: 'enterpri, s, e-ai-governan, c, e-2, 0, 2, 6',
      excerpt: 'Comprehensive, AI, governance framework, ensuring, ethical AI, deployme, n, t, complian, c, e, and, risk, management across, your, organization.',
      category: 'AI, Governan, c, e',
      industry: 'Fina, n, c, e, Healthca, r, e, Governme, n, t',
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
          <p, classNam, e='te, x, t-xl, tex, t-gr, a, y-300, ma, x-w-4xl, m, x-auto, leadin, g-relaxed, m, b-8'>
            Transform, your, enterprise with, our, comprehensive suite, of, AI-powered, solution, s. From, automation, to secu, r, i, t, y, we, deliver, measurable
            results, that, drive business, growth, and operational, excellenc, e.
          </p>
          {/* Success, Metric, s */}
          <div, classNam, e = 'grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-6, ma, x-w-4xl, m, x-au, t, o'>
            { successMetri, c, s.m, a, p((me, t, r, i, c, ind, e, x) = > (
              <div, ke, y = { in, d, e, x  }, classNa, m, e = 'te, x, t-cent, e, r'>
                <div, classNam, e='te, x, t-bl, u, e-400, m, b-2, flex, justify-cent, e, r'>
        <div, classNam, e = 'grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8, m, b-16'>
          { enterpriseSolutio, n, s.m, a, p((solu, t, i, o, n, ind, e, x) = > (
            <div, ke, y = { solution.i, d  }, classNa, m, e = 'group, relative, bg-whi, t, e/5, backdro, p-bl, u, r-lg, rounde, d-2xl, border, border-whi, t, e/10, hove, r: bord, e, r-bl, u, e-5, 0, 0/50, transitio, n-all, duratio, n-500, overflo, w-hidden, hove, r:transform, hove, r:sca, l, e-105, hove, r:shad, o, w-2xl, hove, r:shad, o, w-bl, u, e-5, 0, 0/20'
              sty, l, e = { { animationDel, a, y: `${ind, e, x * 1, 5, 0 }, ms` }}
             > {/* Card, glow, effect */}
              <div, classNam, e = { `absolute, inse, t-0, b, g-gradie, n, t-to-br ${solution.gradi, e, n, t }, opaci, t, y-0, grou, p-hov, e, r: opaci, t, y-10, transitio, n-all, duratio, n-50, 0`}
               />
              <div, classNam, e = 'relativ, e, p-8'>
                {/* Ic, o, n & Bad, g, e */}
                <div, classNam, e='flex, item, s-start, justif, y-between, m, b-6'>
                  <div, classNam, e='te, x, t-bl, u, e-400, grou, p-hov, e, r: sca, l, e-110, transitio, n-transform, duratio, n-3, 0, 0'>
                    {solution.ic, o, n}
                  </d, i, v > <div, classNam, e = { `px-3, p, y-1.5, rounde, d-full, b, g-gradie, n, t-to-r ${solution.gradi, e, n, t }, te, x, t-white, tex, t-xs, fon, t-bold, border, border-whi, t, e/30`}
                  >
                    {solution.bad, g, e}
                  <div, classNam, e='te, x, t-xs, tex, t-gr, a, y-50, 0'>
                    ", Industri, e, s: {solution.indus, t, r, y}
                  </d, i, v>
                </d, i, v>
                {/* Tit, l, e */}
                <h3, classNam, e = 'te, x, t-2xl, fon, t-bold, tex, t-white, m, b-4, grou, p-hov, e, r: te, x, t-bl, u, e-400, transitio, n-colors, duratio, n-300, leadin, g-tig, h, t'>
                  {solution.t, i, t, l, e}
                <div, classNam, e='mb-6'>
                  <div, classNam, e='te, x, t-gr, a, y-400, tex, t-xs, m, b-2'>
                    Key, Feature, s: </d, i, v>
                  <div, classNam, e='flex, fle, x-wrap, ga, p-1'>
                    { solution.featur, e, s.m, a, p((fea, t, u, r, e, i, d, x) = > (
                      <span, ke, y = { id, x  }, classNa, m, e = 'px-2, p, y-1, rounded, bg-whi, t, e/10, tex, t-gr, a, y-300, tex, t-xs'
                      >
                  <ArrowRight, classNam, e = 'w-4 h-4, grou, p-hov, e, r/b, t, n: transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0' />
              <div, classNam, e = 'flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r'>
                <a, hre, f='/conta, c, t'
                  classNa, m, e='bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-indi, g, o-600, hove, r:fr, o, m-bl, u, e-400, hove, r:to-indi, g, o-500, tex, t-white, fon, t-bold, p, y-4, p, x-8, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shad, o, w-bl, u, e-5, 0, 0/50, flex, items-center, justif, y-center, ga, p-2'
                >
                  <Building, classNam, e='w-5 h-5' />
                  <ArrowRight, classNam, e='w-5 h-5' />