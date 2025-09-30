import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

const LatestContentBanner2025: React.FC = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'AI Predictive Maintenance: 92% Downtime Reduction',
      slug: 'ai-predictive-maintenance-manufacturing-2026',
      excerpt: 'Slash equipment downtime by 92% with AI predictive maintenance delivering $25M+ annual savings through real-time anomaly detection and 14-day failure predictions.',
      category: 'Manufacturing & IoT',
      date: '2025-09-30',
      readTime: '24 min',
      trending: true,
      icon: '🏭'
    },
    {
      id: 2,
      title: 'Hybrid AI Architecture: 10x Performance at 60% Lower Cost',
      slug: 'hybrid-ai-architecture-multi-model-2026',
      excerpt: 'Orchestrate specialized AI models for 10x better results at 60% lower cost. Multi-model integration achieving 95% accuracy with 40ms response latency.',
      category: 'AI Architecture',
      date: '2025-09-30',
      readTime: '26 min',
      trending: true,
      icon: '🎼'
    },
    {
      id: 3,
      title: 'AI Customer Intelligence: $50M+ Revenue Growth',
      slug: 'ai-customer-intelligence-platform-2026',
      excerpt: 'Transform customer data into $50M+ revenue with AI intelligence delivering 45% conversion lift, 93% prediction accuracy, and 250% ROI in year one.',
      category: 'Customer Analytics',
      date: '2025-09-30',
      readTime: '28 min',
      trending: true,
      icon: '📊'
    },
    {
      id: 4,
      title: 'Healthcare AI Success: 98% Accuracy, $32M Savings',
      slug: '../case-studies/healthcare-ai-diagnostic-success-2026',
      excerpt: 'Hospital network achieves 98% diagnostic accuracy and $32M annual savings with AI-powered medical imaging delivering 65% faster diagnosis for 45K+ patients.',
      category: 'Healthcare AI',
      date: '2025-09-30',
      readTime: '18 min',
      trending: true,
      icon: '🏥'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
              🚀 4 BREAKTHROUGH ARTICLES JUST PUBLISHED • September 30, 2025
            </span>
            <Sparkles className="w-5 h-5 text-fuchsia-400 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
            Game-Changing AI Solutions for 2026
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover proven strategies delivering 92% downtime reduction, $50M+ revenue growth, and 
            98% diagnostic accuracy—real results from enterprise AI implementations.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {latestArticles.map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {article.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                    <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold border border-fuchsia-500/30">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of the AI Revolution
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get weekly insights, case studies, and breakthrough research delivered directly to your inbox. 
                Join 50,000+ AI leaders and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Explore All Articles</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Started with Zion AI</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
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

export default LatestContentBanner2025;