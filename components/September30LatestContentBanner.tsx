import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, DollarSign, Zap } from 'lucide-react';

const September30LatestContentBanner: React.FC = () => {
  const latestContent = [
    {
      id: 1,
      title: 'AI Hyperautomation Enterprise 2026: 500% Productivity Gains',
      slug: '/blog/ai-hyperautomation-enterprise-2026',
      excerpt: 'Complete guide to AI hyperautomation: integrate RPA, AI, ML, and process mining for 500% productivity gains, 95% cost reduction, and $100M+ ROI.',
      category: 'Enterprise Automation',
      date: 'September 30, 2025',
      readTime: '24 min',
      type: 'blog',
      trending: true,
      icon: '🤖',
      stats: ['500%', '95%', '$100M+'],
      statLabels: ['Productivity', 'Cost Cut', 'ROI']
    },
    {
      id: 2,
      title: 'AI Digital Transformation ROI Playbook 2026: $500M+ Value',
      slug: '/blog/ai-digital-transformation-roi-playbook-2026',
      excerpt: 'The definitive guide to AI-powered digital transformation with proven frameworks delivering $500M+ enterprise value and 400% ROI in 18 months.',
      category: 'Strategy & ROI',
      date: 'September 30, 2025',
      readTime: '28 min',
      type: 'blog',
      trending: true,
      icon: '💰',
      stats: ['$500M+', '400%', '18 mo'],
      statLabels: ['Value', 'ROI', 'Payback']
    },
    {
      id: 3,
      title: '$250M ROI: Financial Services AI Transformation Success',
      slug: '/case-studies/financial-services-ai-mega-success-250m-roi',
      excerpt: 'How a global bank achieved $250M ROI through comprehensive AI transformation: 95% automation, 99.9% fraud detection, 85% cost reduction in 24 months.',
      category: 'Success Story',
      date: 'September 30, 2025',
      readTime: '15 min',
      type: 'case-study',
      trending: true,
      icon: '🏆',
      stats: ['$250M', '99.9%', '95%'],
      statLabels: ['ROI', 'Fraud Det', 'Automation']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
            <span className="text-green-400 font-bold text-sm tracking-wider uppercase">
              🔥 3 GAME-CHANGING PUBLICATIONS • JUST RELEASED • SEPTEMBER 30, 2025
            </span>
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Latest Enterprise AI Insights
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides and proven success stories: $500M+ ROI frameworks, 500% productivity gains, 
            and real-world transformation results from Fortune 500 leaders.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {latestContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
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
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        <span>HOT</span>
                      </div>
                    )}
                    <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      {content.type === 'case-study' ? '🏆 SUCCESS' : '📚 NEW'}
                    </span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {content.excerpt}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {content.stats.map((stat, idx) => (
                    <div key={idx} className="text-center bg-white/5 rounded-lg p-2">
                      <div className="text-xl font-bold text-green-400">{stat}</div>
                      <div className="text-xs text-gray-400">{content.statLabels[idx]}</div>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    {content.readTime}
                  </span>
                  <span>{content.date}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={content.slug}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                >
                  <span>{content.type === 'case-study' ? 'Read Success Story' : 'Read Full Guide'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
            <div className="bg-gray-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join Fortune 500 leaders achieving $100M-$500M+ ROI through AI transformation. 
                Schedule a consultation with our transformation experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2"
                >
                  <span>📞 Call +1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📧 Get Custom Transformation Plan</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '$1B+', label: 'Total Value Delivered', icon: <DollarSign className="w-8 h-8 text-green-400" /> },
            { value: '100+', label: 'Enterprise Transformations', icon: <TrendingUp className="w-8 h-8 text-emerald-400" /> },
            { value: '500%', label: 'Avg Productivity Gain', icon: <Zap className="w-8 h-8 text-teal-400" /> },
            { value: '99.9%', label: 'Client Success Rate', icon: <Sparkles className="w-8 h-8 text-green-400" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default September30LatestContentBanner;