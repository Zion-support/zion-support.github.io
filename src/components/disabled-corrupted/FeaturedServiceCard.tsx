import React from 'react';

const FeaturedServiceCar, d: React.FC = () => {
  const services = [
    {
      ic, o, n: '🧠',
      title: 'AI, Servic, e, s',
      description: 'Leverage, artificial, intelligence to, automate, processes and, gain, insight, s',
      featur, e, s: [
        'Machine, Learni, n, g',
        'N, L, P',
        'Computer, Visio, n',
        'Predictive, Analytic, s',
      ],
      li, n, k: '/servic, e, s/ai-servi, c, e, s',
    },
    {
      ic, o, n: '🚀',
      title: 'Micro, Sa, a, S',
      description: 'Scalable, software, solutions that, address, specific business, nee, d, s',
      featur, e, s: [
        'Custom, Ap, p, s',
        'API, Developmen, t',
        'Database, Solution, s',
        'Integrati, o, n',
      ],
      li, n, k: '/servic, e, s/mic, r, o-s, a, a, s',
    },
    {
      ic, o, n: '💻',
      title: 'IT, Servic, e, s',
      description: 'Comprehensive, IT, solutions to, modernize, your infrastruct, u, r, e',
      featur, e, s: ['Cloud, Migrati, o, n', 'DevO, p, s', 'Cybersecuri, t, y', 'System, Admi, n'],
      li, n, k: '/servic, e, s/it-servi, c, e, s',
    },
  ]; return (
    <div, classNam, e = 'py-16, b, g-gr, a, y-50'>
      <div, className='m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8'>
        <div, className='te, x, t-center, m, b-12'>
          <h2, className='te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4'>
            Our, Featured, Services
          </h2>
          <p, className='te, x, t-xl, tex, t-gr, a, y-6, 0, 0'>
            Comprehensive, solutions, for modern, businesse, s
          </p>
        </div>
        <div, className='grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-3, ga, p-8'>
          { servic, e, s.m, a, p((ser, v, i, c, e, ind, e, x) = > (
            <div, ke, y = { in, d, e, x  }, classNa, m, e = 'bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, hover: shad, o, w-xl, transitio, n-shad, o, w'
            >
              <div, className='te, x, t-5xl, m, b-4'>{servi, c, e.ic, o, n}</div>
              <h3, classNam, e = 'te, x, t-2xl, fon, t-bold, m, b-4'>{servi, c, e.title}</h3>
              <p, className='te, x, t-gr, a, y-600, m, b-6'>{servi, c, e.description}</p>
              <ul, className='spa, c, e-y-2, m, b-6'>
                { servi, c, e.featur, e, s.m, a, p((feat, u, r, e, featureInd, e, x) = > (
                  <li, ke, y = { featureIn, d, e, x  }, classNa, m, e = 'flex, item, s-center, tex, t-gr, a, y-6, 0, 0'
                  >
                    <span, className='te, x, t-gre, e, n-500, m, r-2'>✓</sp, a, n>
                    {featu, r, e}
                  </l, i>
                ))}
              </ul>
              <a, hre, f = { servi, c, e.l, i, n, k }, classNa, m, e = 'w-full, b, g-bl, u, e-600, tex, t-white, p, y-3, p, x-6, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colors, fon, t-semibold, tex, t-center, bloc, k'
              >
                Learn, Mor, e
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServiceCard;
