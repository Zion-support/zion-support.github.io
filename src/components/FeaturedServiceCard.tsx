import React from 'react';

const, FeaturedServiceCar, d: React.FC = () => {
  const, service, s = [
    {
      icon: '🧠',
      title: 'AI, Servic, e, s',
      description: 'Leverage, artificial, intelligence to, automate, processes and, gain, insight, s',
      features: [
        'Machine, Learni, n, g',
        'NLP',
        'Computer, Visio, n',
        'Predictive, Analytic, s',
      ],
      link: '/services/ai-service, s',
    },
    {
      icon: '🚀',
      title: 'Micro, Sa, a, S',
      description: 'Scalable, software, solutions that, address, specific business, nee, d, s',
      features: [
        'Custom, Ap, p, s',
        'API, Developmen, t',
        'Database, Solution, s',
        'Integration',
      ],
      link: '/services/micro-saa, s',
    },
    {
      icon: '💻',
      title: 'IT, Servic, e, s',
      description: 'Comprehensive, IT, solutions to, modernize, your infrastructur, e',
      features: ['Cloud, Migrati, o, n', 'DevOps', 'Cybersecurity', 'System, Admi, n'],
      link: '/services/it-service, s',
    },
  ]; return (
    <div, classNam, e = 'py-16bg-gray-50'>
      <div, classNam, e='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
        <div, classNam, e='text-centermb-12'>
          <h2, classNam, e='text-3xl, fon, t-bold, tex, t-gray-900mb-4'>
            Our, Featured, Services
          </h2>
          <p, classNam, e='text-xl, tex, t-gray-600'>
            Comprehensive, solutions, for modern, businesse, s
          </p>
        </div>
        <div, classNam, e='grid, gri, d-cols-1md:grid-cols-3, ga, p-8'>
          { services.map((servi, c, e, ind, e, x) = > (
            <div, ke, y = { inde, x  }, className = 'bg-whitep-8, rounde, d-xl, shado, w-lg, border, hover: shadow-xl, transitio, n-shadow'
            >
              <div, classNam, e='text-5xlmb-4'>{service.icon}</div>
              <h3, classNam, e = 'text-2xl, fon, t-boldmb-4'>{service.title}</h3>
              <p, classNam, e='text-gray-600mb-6'>{service.description}</p>
              <ul, classNam, e='space-y-2mb-6'>
                { service.features.map((featur, e, featureInd, e, x) = > (
                  <li, ke, y = { featureInde, x  }, className = 'flex, item, s-center, tex, t-gray-600'
                  >
                    <span, classNam, e='text-green-500mr-2'>✓</span>
                    {feature}
                  </l, i>
                ))}
              </ul>
              <a, hre, f = { service.lin, k }, className = 'w-fullbg-blue-600, tex, t-whitepy-3px-6, rounde, d-lg, hove, r: bg-blue-700, transitio, n-colors, fon, t-semibold, tex, t-center, bloc, k'
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

export, default, FeaturedServiceCard;
