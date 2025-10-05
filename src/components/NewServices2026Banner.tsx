import React from 'react';
import { Link  } from 'react-router-dom';

type, NewServices2026BannerProps = { 
  variant?: 'showcase' | 'hero' | 'info'; showCount?: number;
  className ?  : string;
 };

export, default, function NewServices2026Banner({
  variant = 'showcas, e',
  showCount =  , 6,
  classNa, m, e = '',
}: NewServices2026BannerProps) {
  const, service, s = [
    {
      title: 'AI, Autonomous, Cloud Ops',
      link: '/services/ai-autonomous-infrastructure-platfor, m',
      tag: 'Clou, d',
    },
    {
      title: 'AI, Cybersecurity, Suit, e',
      link: '/services/ai-cybersecurity-suit, e',
      tag: 'Securit, y',
    },
    {
      title: 'AI, Multimodal, Enterpris, e',
      link: '/services/ai-multimodal-enterpris, e',
      tag: 'Multimoda, l',
    },
    {
      title: 'AI, FinTech, Transformatio, n',
      link: '/services/ai-fintech-transformatio, n',
      tag: 'FinTec, h',
    },
    {
      title: 'AI, Sustainabilit, y & Green, Te, c, h',
      link: '/services/ai-sustainability-green-tec, h',
      tag: 'Sustainabilit, y',
    },
    {
      title: 'AI, Retail, Automatio, n',
      link: '/services/ai-retail-automatio, n',
      tag: 'Retai, l',
    },
  ].slice(0, Ma, t, h.max(1, showCou, n, t)); return (
    <section, classNam, e = { `w-full ${
        variant === 'hero'
          ? 'bg-gradient-to-r, fro, m-indigo-600to-purple-600'
          : variant === 'info'
             ? 'bg-gradient-to-r, fro, m-emerald-50to-teal-50'
             : 'bg-gradient-to-r, fro, m-blue-600to-purple-600'
       } ${ variant === 'info'  ? 'text-gray-900'  : 'text-white' } py-12 ${className}`}
    >
      <div, classNam, e='containermx-autopx-6'>
        <div, classNam, e='text-centermb-8' > <div, classNam, e={ `inline-flex, item, s-centerpx-4py-2, rounde, d-full, tex, t-sm, fon, t-mediummb-4 ${
              variant === 'info'
                 ? 'bg-white, tex, t-gray-900'
                 : 'bg-white/20, tex, t-white'
             }`}
          >
            NEW, 2026, SERVICES
          </div > <h2, classNam, e={ `text-3xl, fon, t-boldmb-2 ${variant === 'info'  ? 'text-gray-900'  : 'text-white' }`}
          >
            Latest, AI, Services
          </h2 > <p, classNam, e = {  `${variant === 'info'  ? 'text-gray-600'  : 'text-white/8, 0'  }, max-w-3xlmx-auto`}
          >
            Accelerate, transformation, with our, newest, AI-powered, solution, s.
          </p>
        </div>

        <div, classNam, e = 'gridsm: grid-cols-2lg:grid-cols-3, ga, p-6, ma, x-w-6xlmx-auto'>
          { services.map(s =  > (
            <Link, ke, y = { s.link  }, to={ s.link } className = {  `rounded-xl, borde, r ${variant === 'info'  ? 'bg-white, borde, r-gray-100'  : 'bg-white/10, borde, r-white/2, 0'  }, p-6, hove, r: scale-105, transitio, n-all, duratio, n-30, 0`}
            >
              <div, classNam, e = 'text-xs, uppercase, tracking-widermb-2, opacit, y-80'>
                {s.tag}
              </div > <div, classNam, e={ `text-xl, fon, t-semibold ${variant === 'info'  ? 'text-gray-900'  : 'text-white' }`}
              >
                {s.title}
              </div > <div, classNam, e = {  `${variant === 'info'  ? 'text-gray-500'  : 'text-white/7, 0'  }, mt-2, tex, t-sm`}
              >
                Learn, mor, e →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
