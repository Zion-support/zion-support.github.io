import React from 'react';
import { Link } from 'react-router-dom';

const AICostOptimizationBanner: React.FC = () => {
  const costOptimizationContent = [
    {
      id: 1,
      title: 'AI Cost Optimization Breakthrough: Cut Spending by 90%',
      slug: 'ai-cost-optimization-breakthrough-2026',
      excerpt: 'Revolutionary AI cost optimization strategies delivering 90% cost reduction, $200M+ savings, and 10x efficiency gains for Fortune 500 companies.',
      category: 'Cost Optimization',
      date: '2026-01-30',
      readTime: '22 min',
      trending: true,
      icon: '💰',
      metrics: { value: '90%', label: 'Cost Reduction' }
    },
    {
      id: 2,
      title: 'Generative AI Cost Breakthrough: 85% Savings',
      slug: 'generative-ai-cost-breakthrough-2025',
      excerpt: 'Proven strategies to slash generative AI costs by 85% through semantic caching, model cascading, and intelligent routing without sacrificing quality.',
      category: 'GenAI Optimization',
      date: '2025-09-30',
      readTime: '18 min',
      trending: true,
      icon: '🧠',
      metrics: { value: '85%', label: 'GenAI Savings' }
    },
    {
      id: 3,
      title: 'AI Infrastructure Automation: 70% Cost Cut',
      slug: 'ai-infrastructure-automation-2026',
      excerpt: 'Self-healing AI infrastructure achieving 70% cost reduction, 99.99% uptime, and 8-minute MTTR through intelligent automation and optimization.',
      category: 'Infrastructure AI',
      date: '2026-01-30',
      readTime: '25 min',
      trending: true,
      icon: '⚡',
      metrics: { value: '70%', label: 'Infra Cost Cut' }
    },
    {
      id: 4,
      title: 'Enterprise AI FinOps: $500M+ Savings Guide',
      slug: 'enterprise-ai-finops-optimization-2026',
      excerpt: 'Complete guide to AI Financial Operations achieving $500M+ savings through intelligent resource allocation, usage optimization, and cost governance.',
      category: 'AI FinOps',
      date: '2026-01-30',
      readTime: '30 min',
      trending: true,
      icon: '📊',
      metrics: { value: '$500M+', label: 'Total Savings' }
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-fade-in">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              💰 AI COST OPTIMIZATION BREAKTHROUGH • January 30, 2026
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            AI Cost Optimization Revolution
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the breakthrough strategies Fortune 500 companies use to reduce AI costs by 90%, 
            achieve $500M+ in savings, and maximize ROI with intelligent optimization techniques.
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { value: '90%', label: 'Cost Reduction', icon: '💰' },
              { value: '$500M+', label: 'Total Savings', icon: '📈' },
              { value: '10x', label: 'Efficiency Gains', icon: '⚡' },
              { value: '6', label: 'Months to Results', icon: '📅' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-[1600px] mx-auto">
          {costOptimizationContent.map((content, index) => (

            <div

              key={content.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-emerald-500/0 to-teal-500/0 group-hover:from-green-500/10 group-hover:via-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {content.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">

                        <span>🔥</span>
                        <span>TRENDING</span>

                      </div>
                    )}
                    <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      OPTIMIZE
                    </span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-teal-400 text-xs font-semibold border border-teal-500/30">
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {content.excerpt}
                </p>

                {/* Key Metric */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {content.metrics.value}
                      </div>
                      <div className="text-gray-300 text-xs font-medium">
                        {content.metrics.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span>⏱️</span>
                    {content.readTime}
                  </span>
                  <span>{new Date(content.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/blog/${content.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Optimization Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Cut Your AI Costs by 90%?
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg">
                Join Fortune 500 companies achieving $500M+ in AI cost savings with our proven 
                optimization strategies. Get your free cost optimization audit today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2"
                >

                  <span>Get Free Cost Audit</span>
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📞</span>
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '$2B+', label: 'Total Client Savings' },
            { value: '500+', label: 'Companies Optimized' },
            { value: '90%', label: 'Average Cost Reduction' },
            { value: '99.9%', label: 'Accuracy Maintained' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICostOptimizationBanner;