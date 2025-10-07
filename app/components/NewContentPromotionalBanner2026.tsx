import React from 'react';
import Link from 'next/link';

const NewContentPromotionalBanner2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI Autonomous Workflows 2026',
      slug: 'ai-autonomous-workflows-2026',
      excerpt:
        'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
      category: 'Enterprise Automation',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      badge: 'NEW',
      badgeColor: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Quantum-Enhanced AI Processing',
      slug: 'quantum-enhanced-ai-processing',
      excerpt:
        'Revolutionary quantum algorithms delivering 1000x faster AI computations and breakthrough insights',
      category: 'Quantum Computing',
      icon: '⚡',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Neural Network Optimization 2026',
      slug: 'neural-network-optimization-2026',
      excerpt:
        'Advanced neural architectures achieving 99.9% accuracy with 90% reduced computational overhead',
      category: 'Machine Learning',
      icon: '🧠',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      badge: 'OPTIMIZED',
      badgeColor: 'from-green-500 to-emerald-600',
    },
    {
      id: 4,
      title: 'Edge AI Deployment Strategies',
      slug: 'edge-ai-deployment-strategies',
      excerpt:
        'Deploy AI models at the edge with 50ms latency, 99.9% uptime, and seamless cloud integration',
      category: 'Edge Computing',
      icon: '🌐',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      badge: 'EDGE',
      badgeColor: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence',
      slug: 'ai-powered-business-intelligence',
      excerpt:
        'Real-time insights, predictive analytics, and automated decision-making for enterprise growth',
      category: 'Business Intelligence',
      icon: '📊',
      color: 'from-indigo-500 to-violet-600',
      bgColor: 'from-indigo-50 to-violet-50',
      badge: 'INSIGHTS',
      badgeColor: 'from-indigo-500 to-violet-600',
    },
    {
      id: 6,
      title: 'Autonomous System Integration',
      slug: 'autonomous-system-integration',
      excerpt:
        'Seamlessly integrate AI across all business systems with zero downtime and maximum efficiency',
      category: 'System Integration',
      icon: '🔗',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50',
      badge: 'INTEGRATED',
      badgeColor: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section className='relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20' />
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <span className='text-3xl'>✨</span>
            <h2 className='text-4xl font-bold text-white'>
              Revolutionary AI Content 2026
            </h2>
          </div>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Discover the latest breakthroughs in AI technology that are
            transforming enterprises worldwide
          </p>
        </div>

        {/* Hero Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <span className='text-sm font-bold text-yellow-400 flex items-center gap-2'>
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <span className='text-xl'>✨</span>
          </div>

          <h2 className='text-5xl md:text-6xl font-extrabold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Latest AI Innovations
            </span>
            <br />
            <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              That Transform Business
            </span>
          </h2>

          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Explore cutting-edge AI strategies, implementation roadmaps, and
            security innovations that are delivering{' '}
            <span className='text-yellow-400 font-bold'>300%+ ROI</span> for
            enterprises worldwide
          </p>

          <div className='flex items-center justify-center gap-8 text-gray-300'>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>📈</span>
              <span className='font-semibold'>10,000+ Readers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-400'>⚡</span>
              <span className='font-semibold'>3 New Articles</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-blue-400'>🎯</span>
              <span className='font-semibold'>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className='group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}
              ></div>

              <div className='relative z-10'>
                {/* Icon & Badge */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='text-4xl'>{content.icon}</div>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${content.badgeColor} text-white text-xs font-bold rounded-full`}
                  >
                    {content.badge}
                  </span>
                </div>

                {/* Category */}
                <div className='mb-4'>
                  <span
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}
                  >
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors'>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                <Link href={`/blog/${content.slug}`}>
                  <span className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25'>
                    Read More
                    <span className='group-hover:translate-x-1 transition-transform'>→</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-12'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <span className='text-3xl text-cyan-400'>✨</span>
            <h3 className='text-3xl font-bold text-white'>
              Ready to Transform Your Enterprise?
            </h3>
            <span className='text-3xl text-purple-400'>✨</span>
          </div>

          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Join 500+ enterprises achieving{' '}
            <span className='text-cyan-400 font-bold'>300% ROI</span>,
            <span className='text-purple-400 font-bold'> 85% automation</span>,
            and
            <span className='text-pink-400 font-bold'>
              {' '}
              complete digital transformation
            </span>{' '}
            with Zion Tech Group's AI solutions
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
            <Link href='/contact'>
              <span className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'>
                <span>✨</span>
                <span>Start Your AI Journey</span>
              </span>
            </Link>

            <Link
              href='/blog'
              className='group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <span>Explore All Content</span>
              <span className='group-hover:translate-x-1 transition-transform'>→</span>
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>500+</div>
              <div className='text-gray-300'>Enterprise Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-400 mb-2'>
                300%
              </div>
              <div className='text-gray-300'>Average ROI</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-400 mb-2'>
                99.9%
              </div>
              <div className='text-gray-300'>System Uptime</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-yellow-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-300'>Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionalBanner2026;
