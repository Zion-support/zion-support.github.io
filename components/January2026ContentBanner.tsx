import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Star, Award } from 'lucide-react';

const January2026ContentBanner: React.FC = () => {
  const breakthroughArticles = [
    {
      id: 1,
      title: 'AI 2026: The Quantum-Neural Revolution',
      slug: 'ai-quantum-neural-revolution-2026',
      excerpt: 'Breakthrough quantum-neural architectures achieving 1000x processing speed with 99.9% accuracy in enterprise applications. Real-world implementations saving $500M+ annually.',
      category: 'Quantum AI',
      date: '2026-01-15',
      readTime: '45 min',
      trending: true,
      icon: '⚛️',
      impact: '1000x Speed',
      highlight: 'BREAKTHROUGH'
    },
    {
      id: 2,
      title: 'Meta-Cognitive AI: Thinking About Thinking',
      slug: 'meta-cognitive-ai-thinking-2026',
      excerpt: 'Revolutionary meta-cognitive AI systems that reason about their own reasoning processes, achieving 95% decision accuracy in complex enterprise scenarios.',
      category: 'Cognitive AI',
      date: '2026-01-15',
      readTime: '38 min',
      trending: true,
      icon: '🧠',
      impact: '95% Accuracy',
      highlight: 'REVOLUTIONARY'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations: 98% Automation',
      slug: 'autonomous-business-operations-2026',
      excerpt: 'Complete enterprise automation framework achieving 98% operational autonomy. Fortune 500 case studies showing $2B+ annual savings and 10x productivity gains.',
      category: 'Business Automation',
      date: '2026-01-15',
      readTime: '52 min',
      trending: true,
      icon: '🤖',
      impact: '98% Automation',
      highlight: 'GAME-CHANGING'
    },
    {
      id: 4,
      title: 'Neuromorphic Computing: Brain-Inspired AI',
      slug: 'neuromorphic-computing-ai-2026',
      excerpt: 'Next-generation neuromorphic processors mimicking biological neural networks, delivering 100x energy efficiency and real-time learning capabilities.',
      category: 'Neuromorphic AI',
      date: '2026-01-15',
      readTime: '41 min',
      trending: true,
      icon: '🔬',
      impact: '100x Efficiency',
      highlight: 'BREAKTHROUGH'
    },
    {
      id: 5,
      title: 'AI Edge Computing: Real-Time Intelligence',
      slug: 'ai-edge-computing-realtime-2026',
      excerpt: 'Ultra-low latency AI processing at the edge, enabling real-time decision making with sub-millisecond response times for mission-critical applications.',
      category: 'Edge AI',
      date: '2026-01-15',
      readTime: '35 min',
      trending: true,
      icon: '⚡',
      impact: '<1ms Latency',
      highlight: 'REAL-TIME'
    },
    {
      id: 6,
      title: 'Synthetic Data Generation: Privacy-Preserving AI',
      slug: 'synthetic-data-generation-2026',
      excerpt: 'Advanced synthetic data creation techniques preserving privacy while maintaining data quality, enabling AI training without compromising sensitive information.',
      category: 'Data Privacy',
      date: '2026-01-15',
      readTime: '43 min',
      trending: true,
      icon: '🛡️',
      impact: '100% Privacy',
      highlight: 'SECURE'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-300">JANUARY 2026 BREAKTHROUGHS</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <Award className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-sm font-semibold text-purple-300">6 REVOLUTIONARY ARTICLES</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            🚀 January 2026: The AI Revolution Accelerates
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Witness the future of AI with our <span className="font-bold text-yellow-300">6 groundbreaking articles</span> covering 
            Quantum-Neural Computing (1000x speed), Meta-Cognitive AI (95% accuracy), Autonomous Operations (98% automation), 
            Neuromorphic Computing (100x efficiency), Edge AI (sub-millisecond latency), and Synthetic Data (100% privacy).
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-bold text-lg">
              ⚡ 1000x Performance Gains • 98% Automation • $2B+ Savings
            </span>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughArticles.map((article, index) => (
            <div
              key={article.slug}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg">
                      <Zap className="w-3 h-3" />
                      <span>{article.highlight}</span>
                    </div>
                    {article.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 text-xs font-semibold border border-pink-500/30">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Impact Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm font-bold border border-green-500/30">
                    <Sparkles className="w-4 h-4" />
                    {article.impact}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                🔮 Experience the Future of AI Today
              </h3>
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg">
                Join the AI revolution with Zion Tech Group. Our breakthrough technologies are already transforming 
                Fortune 500 companies with <span className="font-bold text-yellow-300">1000x performance gains</span> and 
                <span className="font-bold text-green-300"> $2B+ annual savings</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Start Your AI Transformation</span>
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Success Stories</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">1000x</div>
              <div className="text-sm text-gray-300">Quantum Processing Speed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">98%</div>
              <div className="text-sm text-gray-300">Autonomous Operations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-sm text-gray-300">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-300 mb-2">$2B+</div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026ContentBanner;