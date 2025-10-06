import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap, Rocket, Star } from 'lucide-react';

const September30NewContent2025Banner: React.FC = () => {
  const newArticles = [
    {
      id: 0,
      title: 'AI-Accelerated Customer Experience 2025',
      slug: 'ai-accelerated-customer-experience-2025',
      excerpt: 'Real-time intent detection and autonomous workflows delivering 95% CSAT and 40% cost reduction across channels.',
      category: 'Customer Experience',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '✨',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 1,
      title: 'AI-Powered Autonomous Operations 2025',
      slug: 'ai-autonomous-operations-2025',
      excerpt: 'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction. Discover how Fortune 500 enterprises achieve zero-touch IT operations.',
      category: 'Autonomous Operations',
      date: '2025-09-30',
      readTime: '15 min',
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Generative AI for Enterprise Architecture 2025',
      slug: 'generative-ai-enterprise-architecture-2025',
      excerpt: 'Production-scale GenAI systems serving 100M+ daily requests. Master LLM orchestration, RAG pipelines, and deployment patterns at enterprise scale.',
      category: 'GenAI Architecture',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '🎨',
      gradient: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
      title: 'Multimodal AI Agents Enterprise 2025',
      slug: 'multimodal-ai-agents-enterprise-2025',
      excerpt: 'Unified vision, language, and audio intelligence achieving 97% cross-modal accuracy. Transform operations with AI that truly sees, hears, and understands.',
      category: 'Multimodal AI',
      date: '2025-09-30',
      readTime: '16 min',
      icon: '👁️',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">
              🚀 BREAKING: 4 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Customer Experience • Autonomous Operations • GenAI Architecture • Multimodal AI — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newArticles.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{article.icon}</div>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        🔥 HOT
                      </span>
                      <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex justify-between text-xs text-gray-400 mb-4">
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg group-hover:shadow-lg transition-all duration-300">
                    <span className="text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise?
            </h3>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your AI Journey</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50,000+', label: 'AI Leaders' },
            { value: '4', label: 'New Articles Today' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default September30NewContent2025Banner;