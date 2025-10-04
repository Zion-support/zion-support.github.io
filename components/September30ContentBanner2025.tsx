import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap, Brain, Network, AlertCircle, Layers } from 'lucide-react';

const September30ContentBanner2025: React.FC = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'AI Agent Mesh Networks: Distributed Intelligence Revolution',
      slug: 'ai-agent-mesh-networks-2025',
      excerpt: 'Discover how mesh-connected AI agents achieve 99.99% uptime, 10x faster coordination, and zero single points of failure through peer-to-peer autonomous networking.',
      category: 'Distributed AI',
      date: '2025-09-30',
      readTime: '25 min',
      trending: true,
      icon: <Network className="w-12 h-12" />,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    {
      id: 2,
      title: 'Cognitive AI Architectures: Systems That Think Like Humans',
      slug: 'cognitive-ai-architectures-2025',
      excerpt: 'Explore cognitive AI architectures combining reasoning, memory, and learning—achieving 92% accuracy on complex multi-step tasks with human-like problem-solving capabilities.',
      category: 'Cognitive AI',
      date: '2025-09-30',
      readTime: '28 min',
      trending: true,
      icon: <Brain className="w-12 h-12" />,
      gradient: 'from-purple-500 to-fuchsia-600',
      bgGradient: 'from-purple-50 to-fuchsia-50'
    },
    {
      id: 3,
      title: 'AI-Driven Incident Response: 45-Second Resolution Times',
      slug: 'ai-driven-incident-response-2025',
      excerpt: 'Learn how AI-powered incident response systems detect, diagnose, and resolve IT incidents automatically in under 60 seconds—reducing MTTR by 90% and saving $12M+ annually.',
      category: 'AIOps',
      date: '2025-09-30',
      readTime: '22 min',
      trending: true,
      icon: <AlertCircle className="w-12 h-12" />,
      gradient: 'from-red-500 to-orange-600',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      id: 4,
      title: 'Enterprise LLM Orchestration: Managing 50+ Models at Scale',
      slug: 'enterprise-llm-orchestration-2025',
      excerpt: 'Master intelligent LLM orchestration with dynamic model routing, achieving 70% cost reduction and 99.9% reliability across dozens of specialized models.',
      category: 'LLM Infrastructure',
      date: '2025-09-30',
      readTime: '26 min',
      trending: true,
      icon: <Layers className="w-12 h-12" />,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 border-2 border-cyan-500/30 mb-10 animate-fade-in shadow-2xl">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-extrabold text-base tracking-wider uppercase">
              🚀 4 BREAKTHROUGH ARTICLES JUST PUBLISHED • SEPTEMBER 30, 2025
            </span>
            <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in leading-tight">
            Latest AI Breakthroughs & Enterprise Solutions
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Deep-dive into cutting-edge AI architectures, infrastructure optimization, and autonomous systems that are transforming enterprises worldwide. 
            <span className="text-cyan-400 font-bold"> Real results. Production-ready. ROI-proven.</span>
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {latestArticles.map((article, index) => (
            <Link 
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group relative"
            >
              <div 
                className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500"></div>
                
                <div className="relative p-10">
                  {/* Icon & Badges */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${article.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {article.icon}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-4 h-4" />
                        <span>TRENDING</span>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 shadow-lg">
                        🆕 NEW
                      </span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-5">
                    <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${article.bgGradient} text-gray-700 text-sm font-bold border-2 border-white/20`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-5 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-8 leading-relaxed text-base">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-8 pb-6 border-b border-white/10">
                    <span className="flex items-center gap-2 font-semibold">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      {article.readTime}
                    </span>
                    <span className="font-semibold">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 transform group-hover:-translate-y-1">
                    <span className="text-lg">Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-24">
          <div className="inline-block p-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 shadow-2xl">
            <div className="bg-slate-950 rounded-2xl px-16 py-14">
              <h3 className="text-4xl font-black text-white mb-6">
                🎯 Stay Ahead in the AI Revolution
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get exclusive insights, breakthrough research, and proven enterprise strategies delivered weekly. 
                Join <span className="text-cyan-400 font-bold">65,000+ AI leaders and innovators</span> who trust Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg transform hover:-translate-y-1"
                >
                  <Sparkles className="w-6 h-6" />
                  <span>Explore All AI Insights</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-3 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl transform hover:-translate-y-1"
                >
                  <span>Transform Your Enterprise</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-10 mt-24">
          {[
            { value: '650+', label: 'Fortune 500 Clients', icon: '🏢' },
            { value: '25B+', label: 'Data Points Processed Daily', icon: '📊' },
            { value: '99.99%', label: 'Platform Uptime SLA', icon: '⚡' },
            { value: '15M+', label: 'AI Operations Hours', icon: '🤖' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-300 text-base font-bold tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="text-2xl font-bold text-white mb-4">Expert Analysis</h4>
            <p className="text-gray-300 leading-relaxed">
              In-depth technical breakdowns by AI researchers, architects, and practitioners with decades of real-world experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="text-4xl mb-4">💼</div>
            <h4 className="text-2xl font-bold text-white mb-4">Proven ROI</h4>
            <p className="text-gray-300 leading-relaxed">
              Real case studies with measurable results—cost savings, performance gains, and competitive advantages achieved by enterprises.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-2xl font-bold text-white mb-4">Production-Ready</h4>
            <p className="text-gray-300 leading-relaxed">
              Practical implementation guides, technology stacks, and deployment roadmaps you can use immediately in your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September30ContentBanner2025;