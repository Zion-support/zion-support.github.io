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
    },
    {
      id: 4,
      title: 'AI-Driven Financial Intelligence 2025',
      slug: 'ai-financial-intelligence-2025',
      excerpt: 'Real-time risk assessment and autonomous trading achieving 99.7% accuracy. Discover how AI transforms financial operations and decision-making.',
      category: 'Financial AI',
      date: '2025-09-30',
      readTime: '14 min',
      icon: '💰',
      gradient: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600/20 to-blue-600/20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Rocket className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              🚀 JUST PUBLISHED • SEPTEMBER 30, 2025
            </span>
            <Rocket className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Articles
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Just Released Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology, autonomous operations, and enterprise transformation. 
            These cutting-edge insights are already delivering <span className="text-yellow-400 font-semibold">300%+ ROI</span> for forward-thinking companies.
          </p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">15,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">5 New Articles</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Expert Insights</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newArticles.map((article, index) => (
            <Link 
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{article.icon}</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-xs font-semibold text-white">
                        NEW
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="uppercase tracking-wider">{article.category}</span>
                    <div className="flex items-center gap-2">
                      <span>{article.readTime}</span>
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement These Breakthroughs?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already implementing these revolutionary AI strategies. 
              Get exclusive access to our implementation guides, expert consultations, and proven frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Get Implementation Guide
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September30NewContent2025Banner;