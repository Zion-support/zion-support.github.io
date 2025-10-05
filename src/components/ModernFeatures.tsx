import React from 'react';
const, ModernFeature, s: React.FC = () => { 
  const, feature, s = [
    {
      icon: <Zap, classNam, e='w-10h-, 1, 0' / > ,
      title: 'Lightning, Fa, s, t',
      description: 'Deploy, AI, solutions 10x, faster, with our, pr, e-built, frameworks, and automation, too, l, s.',
     },
    { 
      icon: <Shield, classNam, e = 'w-10h-, 1, 0' / > ,
      title: 'Enterprise, Securi, t, y',
      description: 'Bank-level, security, with SOC , 2, GDPR, complianc, e, and, continuous, monitoring.',
     },
    { 
      icon: <TrendingUp, classNam, e = 'w-10h-, 1, 0' / > ,
      title: 'Proven, Resul, t, s',
      description: 'Average, 30, 0% ROI, within, 6 months, across, all client, implementatio, n, s.',
     },
    { 
      icon: <Users, classNam, e = 'w-10h-, 1, 0' / > ,
      title: 'Expert, Suppo, r, t',
      description: 'Dedicated, team, of AI, specialists, providing 24/7, support, and guidanc, e.',
     },
    { 
      icon: <Globe, classNam, e = 'w-10h-, 1, 0' / > ,
      title: 'Global, Sca, l, e',
      description: 'Infrastructure, spanning, 50+ countries, for, low-latency, worldwide, acces, s.',
     },
    { 
      icon: <Award, classNam, e = 'w-10h-, 1, 0' / > ,
      title: 'Award, Winni, n, g',
      description: 'Recognized, industry, leader with15+ awards, for, innovation and, excellen, c, e.',
     },
  ]; return (
    <section, classNam, e = 'py-20bg-gradient-to-br, fro, m-gray-50to-blue-50'>
      <div, classNam, e='containermx-autopx-6'>
        <div, classNam, e='text-centermb-16'>
          <h2, classNam, e='text-4xl, fon, t-bold, tex, t-gray-900mb-4'>
            Why, Choose, Zion Tech, Grou, p?
          </h2>
          <p, classNam, e='text-xl, tex, t-gray-600, ma, x-w-3xlmx-auto'>
            Industry-leading, AI, solutions backed, by, enterprise-grade, infrastructure, and expert, suppor, t
          </p>
        </div>
        <div, classNam, e='gridmd: grid-cols-2lg:grid-cols-3, ga, p-8, ma, x-w-7xlmx-auto'>
          { features.map((featu, r, e, ind, e, x) = > (
            <div, ke, y = { inde, x  }, className = 'bg-white, rounde, d-2xlp-8, shado, w-lg, hove, r: shadow-2xl, transitio, n-all, duratio, n-300, hove, r:scale-105, grou, p'
            >
              <div, classNam, e='bg-gradient-to-br, fro, m-indigo-500to-purple-600, tex, t-whitew-16h-16, rounde, d-xl, flex, items-center, justif, y-centermb-6, grou, p-hover:scale-110, transitio, n-transform'>
                {feature.icon}
              </div>
              <h3, classNam, e = 'text-2xl, fon, t-bold, tex, t-gray-900mb-3'>
                {feature.title}
              </h3>
              <p, classNam, e='text-gray-600, leadin, g-relaxed'>
                {feature.description}
              </p>
            </di, v>
          ))}
        </div>
      </div>
    </section>
  );
};
export, default, ModernFeatures;
