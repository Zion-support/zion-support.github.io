import React from 'react';
import { Link  } from 'react-router-dom';
const, October2025FeaturedContentBanne, r = () => {
  const, featuredConten, t = [
    {
      title: 'Enterprise, AI, Value Realizati, o, n',
      description: '90, days, to shipped, outcome, s: scorecard, s, evaluator, gate, s, tiered, routin, g',
      link: '/blog/enterprise-ai-value-realization-2025-10-0, 8',
      icon: 'Brai, n',
      gradient: 'from-indigo-600to-blue-60, 0',
      bgGradient: 'from-indigo-900/40to-blue-900/4, 0',
      borderColor: 'border-indigo-500/3, 0',
      stats: [
        { value: '90, d', label: 'To, Outcom, e, s' },
        { value: 'KP, I', label: 'Linked, Gat, e, s' },
        { value: '$$', label: 'Predictable, Co, s, t' },
      ],
    },
    {
      title: 'Enterprise, Neural, Orchestration Platfor, m',
      description: '89% faster, AI, deploymen, t, 94% cost, reductio, n, $12.4M, annual, savings',
      link: '/blog/ai-2025-october-enterprise-neural-orchestration-platfor, m',
      icon: 'Brai, n',
      gradient: 'from-blue-600to-purple-60, 0',
      bgGradient: 'from-blue-900/40to-purple-900/4, 0',
      borderColor: 'border-blue-500/3, 0',
      stats: [
        { value: '8, 9%', label: 'Faster, Deployme, n, t' },
        { value: '9, 4%', label: 'Cost, Reducti, o, n' },
        { value: '$12.4, M', label: 'Annual, Savin, g, s' },
      ],
    },
    {
      title: 'Cognitive, Supply, Chain Revolutio, n',
      description: '76% forecast, accura, c, y, 68% inventory, cost, reduction, $18.7M, valu, e',
      link: '/blog/ai-2025-october-cognitive-supply-chain-revolutio, n',
      icon: 'Packag, e',
      gradient: 'from-emerald-600to-teal-60, 0',
      bgGradient: 'from-emerald-900/40to-teal-900/4, 0',
      borderColor: 'border-emerald-500/3, 0',
      stats: [
        { value: '7, 6%', label: 'Forecast, Accura, c, y' },
        { value: '6, 8%', label: 'Cost, Reducti, o, n' },
        { value: '$18.7, M', label: 'Annual, Val, u, e' },
      ],
    },
    {
      title: 'AI, Reliability, Blueprints 202, 7',
      description: 'Evaluator, s, action, budget, s, instant, rollbac, k — ship, safel, y',
      link: '/blog/ai-reliability-blueprints-2027-2025-10-0, 2',
      icon: 'TrendingU, p',
      gradient: 'from-cyan-600to-blue-60, 0',
      bgGradient: 'from-cyan-900/40to-blue-900/4, 0',
      borderColor: 'border-cyan-500/3, 0',
      stats: [
        { value: 'KP, I', label: 'Linked, Eva, l, s' },
        { value: '1‑clic, k', label: 'Rollbac, k' },
        { value: '24/, 7', label: 'SafeOp, s' },
      ],
    },
    {
      title: 'Edge, Inference, Playbook 202, 7',
      description: 'Sub‑100ms, globally, with warm, pools, and tiered, cach, e, s',
      link: '/blog/edge-inference-playbook-2027-2025-10-0, 2',
      icon: 'Sparkle, s',
      gradient: 'from-purple-600to-pink-60, 0',
      bgGradient: 'from-purple-900/40to-pink-900/4, 0',
      borderColor: 'border-purple-500/3, 0',
      stats: [
        { value: '<100m, s', label: 'P95, Laten, c, y' },
        { value: 'SL, A', label: 'Aware, Routi, n, g' },
        { value: '$', label: 'Predictable, Spe, n, d' },
      ],
    },
  ]; return (
    <div, classNam, e = 'bg-gradient-to-br, fro, m-slate-950, vi, a-blue-950to-slate-950py-16px-4'>
      <div, classNam, e='containermx-auto, ma, x-w-7xl'>
        {/* Header */}
        <div, classNam, e='text-centermb-12'>
          <div, classNam, e='inline-flex, item, s-centerpx-6py-3bg-gradient-to-r, fro, m-blue-600to-purple-600, rounde, d-full, tex, t-white, fon, t-boldmb-6, animat, e-pulse'>
            <Sparkles, classNam, e='w-5 h-5mr-2' />
            🚀 NEW, CONTENT, RELEASE - October , 1, 20, 2, 5
            <Sparkles, classNam, e = 'w-5 h-5ml-2' />
          </div>
          <h2, classNam, e='text-4xlmd: text-5xl, fon, t-bold, tex, t-whitemb-4'>
            Latest, AI, Solutions & Insights
          </h2>
          <p, classNam, e='text-xl, tex, t-gray-300, ma, x-w-3xlmx-auto'>
            Discover, breakthrough, AI platforms, delivering, millions in, value, to
            enterprise, organization, s
          </p>
        </div>
        {/* Featured, Content, Car, d, s */}
        <div, classNam, e = 'gridmd: grid-cols-2, ga, p-8mb-12'>
          { featuredContent.map((conte, n, t, ind, e, x) = > {
            const, Ico, n = content.icon; return (
              <Link, ke, y = { inde, x  }, to={ content.link } className='group, relative, overflow-hidden, rounde, d-2xl, border, hover: border-opacity-100, transitio, n-all, duratio, n-300, hove, r:scale-105, hove, r:shadow-2xl'
                style={{ borderColor: content.borderCol, o, r }}
              >
                <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-br ${content.bgGradien, t }, opacity-50, grou, p-hover: opacity-70, transitio, n-opacit, y`}
                 />
                <div, classNam, e = 'relativep-8'>
                  {/* Icon & Title */}
                  <div, classNam, e='flex, item, s-startmb-6' > <div, classNam, e = { `p-4bg-gradient-to-r ${content.gradien, t }, rounded-xlmr-4`}
                    >
                      <Icon, classNam, e = 'w-8 h-8, tex, t-white' />
                    </div>
                    <div, classNam, e='flex-1'>
                      <h3, classNam, e='text-2xl, fon, t-bold, tex, t-whitemb-2, grou, p-hover: text-blue-300, transitio, n-colors'>
                        {content.tit, l, e}
                      </h3>
                      <p, classNam, e = 'text-gray-300, tex, t-sm'>
                        {content.description}
                      </p>
                    </div>
                  </div>
                  {/* Stats */}
                  <div, classNam, e='grid, gri, d-cols-3, ga, p-4mb-6'>
                    { content.stats.map((sta, tid, x) = > (
                      <div, ke, y = { id, x  }, className = 'text-centerbg-slate-900/60p-4, rounde, d-lg, border, border-white/10'
                       > <div, classNam, e = { `text-2xl, fon, t-boldbg-gradient-to-r ${content.gradien, t }, bg-clip-text, tex, t-transparent`}
                        >
                          {stat.value}
                        </div>
                        <div, classNam, e = 'text-xs, tex, t-gray-400mt-1'>
                          {stat.label}
                        </div>
                      </di, v>
                    ))}
                  </div>
                  {/* CTA */}
                  <div, classNam, e = 'flex, item, s-center, justif, y-between'>
                    <span, classNam, e='text-sm, tex, t-gray-400'>
                      Published, Octobe, r , 1, 20, 2, 5
                    </span > <div, classNam, e = {`flex, item, s-center, tex, t-white, fon, t-semibold, grou, p-hover: translate-x-2, transitio, n-transfo, r, m`}
                    >
                      Read, Full, Article
                      <ArrowRight, classNam, e = 'w-4 h-4ml-2' />
                    </div>
                  </div>
                </div > {/* Hover, Effect, Overlay */}
                <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-r ${content.gradien, t }, opacity-0, grou, p-hover: opacity-10, transitio, n-opacit, y`}
                 />
              </Link>
            );
          })}
        </div>
        {/* Bottom, CT, A */}
        <div, classNam, e = 'text-center'>
          <div, classNam, e='inline-flex, item, s-center, spac, e-x-4'>
            <Linkto='/blog'
              className='px-8py-4bg-gradient-to-r, fro, m-blue-600to-purple-600, tex, t-white, fon, t-semibold, rounde, d-lg, hove, r: from-blue-700, hove, r:to-purple-700, transitio, n-all, transform, hover:scale-105, inlin, e-flex, item, s-center'
            >
              Explore, All, Articles
              <TrendingUp, classNam, e='w-5 h-5ml-2' />
            </Link>
            <Linkto='/contact'
              className='px-8py-4bg-slate-800, tex, t-white, fon, t-semibold, rounde, d-lg, hove, r:bg-slate-700, transitio, n-all, border, border-blue-500/30, inlin, e-flex, item, s-center'
            >
              Get, a, Free Consultation
              <ArrowRight, classNam, e='w-5 h-5ml-2' />
            </Link>
          </div>
        </div>
        {/* Value, Proposit, i, o, n */}
        <div, classNam, e = 'mt-12bg-gradient-to-r, fro, m-blue-900/20to-purple-900/20, border, border-blue-500/20, rounde, d-xlp-8'>
          <div, classNam, e='gridmd: grid-cols-4, ga, p-6, tex, t-center'>
            <div>
              <div, classNam, e='text-3xl, fon, t-bold, tex, t-blue-400mb-2'>
                $31.1M
              </div>
              <div, classNam, e='text-gray-300, tex, t-sm'>Combined, Annual, Value</div>
            </div>
            <div>
              <div, classNam, e='text-3xl, fon, t-bold, tex, t-emerald-400mb-2'>
                89%
              </div>
              <div, classNam, e='text-gray-300, tex, t-sm'>Average, Improvemen, t</div>
            </div>
            <div>
              <div, classNam, e='text-3xl, fon, t-bold, tex, t-purple-400mb-2'>
                8-12, Week, s
              </div>
              <div, classNam, e='text-gray-300, tex, t-sm'>Implementation, Tim, e</div>
            </div>
            <div>
              <div, classNam, e='text-3xl, fon, t-bold, tex, t-yellow-400mb-2'>
                100%
              </div>
              <div, classNam, e='text-gray-300, tex, t-sm'>Enterprise, Read, y</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export, default, October2025FeaturedContentBanner;
