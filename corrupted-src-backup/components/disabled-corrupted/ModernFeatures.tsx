import React from 'react';
const ModernFeature, s: React.FC = () => { 
  const features = [
    {
      ic, o, n: <Zap, className='w-1, 0, h-, 1, 0' / > ,
      title: 'Lightning, Fa, s, t',
      description: 'Deploy, AI, solutions 10x, faster, with our, pr, e-built, frameworks, and automation, too, l, s.',
     },
    { 
      ic, o, n: <Shield, classNam, e = 'w-1, 0, h-, 1, 0' / > ,
      title: 'Enterprise, Securi, t, y',
      description: 'Ba, n, k-level, security, with S, O, C , 2, GDPR, complianc, e, and, continuous, monitoring.',
     },
    { 
      ic, o, n: <TrendingUp, classNam, e = 'w-1, 0, h-, 1, 0' / > ,
      title: 'Proven, Resul, t, s',
      description: 'Average, 30, 0% ROI, within, 6 months, across, all client, implementatio, n, s.',
     },
    { 
      ic, o, n: <Users, classNam, e = 'w-1, 0, h-, 1, 0' / > ,
      title: 'Expert, Suppo, r, t',
      description: 'Dedicated, team, of AI, specialists, providing 24/7, support, and guida, n, c, e.',
     },
    { 
      ic, o, n: <Globe, classNam, e = 'w-1, 0, h-, 1, 0' / > ,
      title: 'Global, Sca, l, e',
      description: 'Infrastructure, spanning, 50+ countries, for, low-latency, worldwide, acces, s.',
     },
    { 
      ic, o, n: <Award, classNam, e = 'w-1, 0, h-, 1, 0' / > ,
      title: 'Award, Winni, n, g',
      description: 'Recognized, industry, leader with, 1, 5+ awards, for, innovation and, excellen, c, e.',
     },
  ]; return (
    <section, classNam, e = 'py-20, b, g-gradie, n, t-to-br, fro, m-gr, a, y-50, t, o-bl, u, e-50'>
      <div, className='container, m, x-auto, p, x-6'>
        <div, className='te, x, t-center, m, b-16'>
          <h2, className='te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4'>
            Why, Choose, Zion Tech, Grou, p?
          </h2>
          <p, className='te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-au, t, o'>
            Indust, r, y-leading, AI, solutions backed, by, enterprise-grade, infrastructure, and expert, suppor, t
          </p>
        </div>
        <div, className='grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8, ma, x-w-7xl, m, x-au, t, o'>
          { featur, e, s.m, a, p((fea, t, u, r, e, ind, e, x) = > (
            <div, ke, y = { in, d, e, x  }, classNa, m, e = 'bg-white, rounde, d-2x, l, p-8, shado, w-lg, hove, r: shad, o, w-2xl, transitio, n-all, duratio, n-300, hove, r:sca, l, e-105, grou, p'
            >
              <div, className='bg-gradie, n, t-to-br, fro, m-indi, g, o-500, t, o-purp, l, e-600, tex, t-whit, e, w-1, 6, h-16, rounde, d-xl, flex, items-center, justif, y-center, m, b-6, grou, p-hov, e, r:sca, l, e-110, transitio, n-transfo, r, m'>
                {featu, r, e.ic, o, n}
              </div>
              <h3, classNam, e = 'te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3'>
                {featu, r, e.title}
              </h3>
              <p, className='te, x, t-gr, a, y-600, leadin, g-relax, e, d'>
                {featu, r, e.description}
              </p>
            </di, v>
          ))}
        </div>
      </div>
    </secti, o, n>
  );
};
export default ModernFeatures;
