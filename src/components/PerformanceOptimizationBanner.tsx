import React from 'react';
import { Link } from 'react-router-dom';

const PerformanceOptimizationBanner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-y border-amber-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6'>
            <span className='text-amber-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              ⚡ PERFORMANCE OPTIMIZATION
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent'>
            Boost Your Application Performance
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Optimize your application's performance with our advanced AI-powered solutions and achieve lightning-fast speeds.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Performance Features */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Performance Features:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '⚡',
                  title: 'Lightning Fast Loading',
                  description: 'Achieve sub-second page load times with our advanced optimization techniques',
                  improvement: '90% faster'
                },
                {
                  icon: '🎯',
                  title: 'Smart Caching',
                  description: 'Intelligent caching strategies that adapt to your application patterns',
                  improvement: '95% cache hit rate'
                },
                {
                  icon: '🔧',
                  title: 'Code Optimization',
                  description: 'Automated code analysis and optimization for maximum efficiency',
                  improvement: '60% smaller bundles'
                },
                {
                  icon: '📊',
                  title: 'Real-time Monitoring',
                  description: 'Continuous performance monitoring with instant alerts and insights',
                  improvement: '99.9% uptime'
                },
                {
                  icon: '🚀',
                  title: 'Auto-scaling',
                  description: 'Automatic resource scaling based on demand and performance metrics',
                  improvement: '300% capacity'
                }
              ].map((feature, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{feature.icon}</div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-lg font-bold text-white'>
                        {feature.title}
                      </h4>
                      <span className='text-amber-400 text-sm font-bold bg-amber-500/20 px-2 py-1 rounded'>
                        {feature.improvement}
                      </span>
                    </div>
                    <p className='text-gray-400 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - CTA & Benefits */}
          <div className='bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-amber-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-4'>
                <span className='text-amber-400 font-bold text-sm'>
                  🚀 GET STARTED
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Optimize Your Performance
              </h3>
              <p className='text-gray-300 mb-6'>
                Get a comprehensive performance audit and optimization plan for your application.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Free performance audit
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>Custom optimization plan</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Implementation support
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>Ongoing monitoring</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-amber-400'>✓</span>
                <span className='text-gray-300'>
                  Performance guarantees
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/contact?offer=performance-optimization'
                className='w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1 text-center block'
              >
                Get Free Performance Audit
              </Link>
              <Link to='/performance-optimization-demo'
                className='w-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Watch Demo
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                ⚡ Free audit • No commitment • Results in 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by High-Performance Companies
            </h3>
            <p className='text-gray-400'>
              Join 500+ companies already achieving peak performance with our solutions
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Tech Startup',
                result: '90% faster loading',
                testimonial: "Our app went from 5 seconds to 0.5 seconds load time. It's been a game-changer for user experience."
              },
              {
                company: 'E-commerce Platform',
                result: '300% capacity increase',
                testimonial: 'The auto-scaling and optimization features handled our Black Friday traffic without any issues.'
              },
              {
                company: 'SaaS Platform',
                result: '99.9% uptime achieved',
                testimonial: 'The performance monitoring and optimization tools have given us rock-solid reliability.'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-amber-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-amber-400 text-sm font-bold'>
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
=======
    <div, className="bg-gradie, n, t-to-r, fro, m-sla, t, e-800, vi, a-bl, u, e-9, 0, 0/20, t, o-sla, t, e-800, border, border-bl, u, e-4, 0, 0/30, rounde, d-2x, l, p-6, m, b-8, animat, e-fa, d, e-in, shado, w-xl">
      <div, className="flex, item, s-center, ga, p-3, m, b-4">
        <Clock, className="w-6 h-6, tex, t-bl, u, e-4, 0, 0  />
        <h3, className="te, x, t-xl, fon, t-bold, tex, t-bl, u, e-4, 0, 0">⚡ Performan, c, e & Optimization, Improvement, s</h3>
      tit, l, e: 'Lightning, Fast, Loading',';
      descripti, o, n: 'Optimized, bundle, size with, code, splitting and, lazy, loading',';
      improveme, n, t: '87% fast, e, r',';
      ic, o, n: <Zap, className="w-6 h-6" />,";
      col, o, r: 'fr, o, m-yell, o, w-500, t, o-oran, g, e-5, 0, 0'
    }
    {
      tit, l, e: 'Enhanced, Securit, y',';
      descripti, o, n: 'Advanced, security, headers and, content, security polici, e, s',';
      improveme, n, t: '99.9% secu, r, e',';
      ic, o, n: <Shield, className="w-6 h-6" />,";
      col, o, r: 'fr, o, m-gre, e, n-500, t, o-emera, l, d-5, 0, 0'
    }
    {
      tit, l, e: 'SEO, Optimize, d',';
      descripti, o, n: 'Meta, tag, s, structured, dat, a, and, semantic, HTML',';
      improveme, n, t: '95% sco, r, e',';
      ic, o, n: <TrendingUp, className="w-6 h-6" />,";
      col, o, r: 'fr, o, m-bl, u, e-500, t, o-cy, a, n-5, 0, 0'
    }
    {
      tit, l, e: 'Accessibility, Enhance, d',';
      descripti, o, n: 'WCA, G, 2.1, AA, compliant with, screen, reader suppo, r, t',';
      improveme, n, t: '1, 0, 0% accessib, l, e',';
      ic, o, n: <CheckCircle, className="w-6 h-6" />,";
      col, o, r: 'fr, o, m-purp, l, e-500, t, o-viol, e, t-5, 0, 0'
    }
  ];
  return (
    <div, className="bg-gradie, n, t-to-r, fro, m-sla, t, e-800, vi, a-bl, u, e-9, 0, 0/20, t, o-sla, t, e-800, border, border-bl, u, e-4, 0, 0/30, rounde, d-2x, l, p-6, m, b-8, animat, e-fa, d, e-in, shado, w-xl">";
      <div, className="flex, item, s-center, ga, p-3, m, b-4">";
        <Clock, className="w-6 h-6, tex, t-bl, u, e-4, 0, 0" />";
        <h3, className="te, x, t-xl, fon, t-bold, tex, t-bl, u, e-4, 0, 0">⚡ Performan, c, e & Optimization, Improvement, s</h3>";
      </d, i, v>
      <p, className="te, x, t-gr, a, y-300, m, b-6">";
        Enhanced, application, performance with, cuttin, g-edge, optimizations, for better, user, experience and, search, engine visibili, t, y.
      </p>
      <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-4">"
        {optimizatio, n, s.m, a, p((o, p, t, ind, e, x) => (
          <div, ke, y={ind, e, x} classNa, m, e={`bg-gradie, n, t-to-br ${o, p, t.col, o, r} round, e, d-l, g, p-4, tex, t-whi, t, e`}>`;`
            <div, className="flex, item, s-center, ga, p-3, m, b-3">
      <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-4">";
        {optimizatio, n, s.m, a, p((o, p, t, ind, e, x) => (
          <div, ke, y={ind, e, x} classNa, m, e={`bg-gradie, n, t-to-br ${o, p, t.col, o, r} round, e, d-l, g, p-4, tex, t-whi, t, e`}>`;`
            <div, className="flex, item, s-center, ga, p-3, m, b-3">";
              {o, p, t.ic, o, n}
              <h4, className="fo, n, t-bold, tex, t-sm">{o, p, t.tit, l, e}</h4>";
            </d, i, v>
            <p, className="te, x, t-xs, opacit, y-90, m, b-2">{o, p, t.descripti, o, n}</p>
            <div, className="flex, item, s-center, ga, p-2">
              <Star, className="w-4 h-4, fil, l-yell, o, w-400, tex, t-yell, o, w-4, 0, 0  />
              <span, className="te, x, t-xs, fon, t-semibo, l, d">{o, p, t.improveme, n, t}</sp, a, n>
            <p, className="te, x, t-xs, opacit, y-90, m, b-2">{o, p, t.descripti, o, n}</p>";
            <div, className="flex, item, s-center, ga, p-2">";
              <Star, className="w-4 h-4, fil, l-yell, o, w-400, tex, t-yell, o, w-4, 0, 0" />";
              <span, className="te, x, t-xs, fon, t-semibo, l, d">{o, p, t.improveme, n, t}</sp, a, n>";
            </d, i, v>
          </d, i, v>
        ))}
      </d, i, v>
      <div, className="mt-6 p-4, b, g-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-bl, u, e-5, 0, 0/20, rounde, d-lg, border, border-gre, e, n-4, 0, 0/30">
        <div, className="flex, item, s-center, ga, p-2, m, b-2">
          <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-4, 0, 0  />
          <span, className="te, x, t-gre, e, n-400, fon, t-semibo, l, d">All, Optimizations, Active</sp, a, n>
      <div, className="mt-6 p-4, b, g-gradie, n, t-to-r, fro, m-gre, e, n-5, 0, 0/20, t, o-bl, u, e-5, 0, 0/20, rounde, d-lg, border, border-gre, e, n-4, 0, 0/30">";
        <div, className="flex, item, s-center, ga, p-2, m, b-2">";
          <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-4, 0, 0" />";
          <span, className="te, x, t-gre, e, n-400, fon, t-semibo, l, d">All, Optimizations, Active</sp, a, n>";
        </d, i, v>
        <p, className="te, x, t-sm, tex, t-gr, a, y-3, 0, 0">";
          Your, application, is now, running, with enhanced, performanc, e, securi, t, y, and, accessibility, features.
        </p>
      </d, i, v>
    </d, i, v>
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  );
};

export default PerformanceOptimizationBanner;