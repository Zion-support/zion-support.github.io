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
      title: 'Quantum-Enhanced Machine Learning 2025',
      slug: 'quantum-enhanced-machine-learning-2025',
      excerpt: '1000x performance breakthrough with quantum computing. Real quantum advantage demonstrated in optimization, drug discovery, and financial modeling.',
      category: 'Quantum ML',
      date: '2025-09-30',
      readTime: '20 min',
      icon: '⚛️',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 5,
      title: 'AI-Powered Cloud FinOps 2025',
      slug: 'ai-powered-cloud-finops-2025',
      excerpt: '60% cloud cost reduction through autonomous optimization. $450M+ annual savings achieved with AI-driven resource management and predictive scaling.',
      category: 'Cloud FinOps',
      date: '2025-09-30',
      readTime: '14 min',
      icon: '💰',
      gradient: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">
              🔥 5 BREAKTHROUGH ARTICLES RELEASED • SEPTEMBER 30, 2025
            </span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Latest AI Breakthroughs & Innovations
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge research, enterprise implementations, and breakthrough technologies that are 
            revolutionizing AI operations, quantum computing, and cloud economics.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newArticles.slice(0, 3).map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{article.icon}</div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    <span>NEW</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${article.gradient} text-white text-sm font-semibold shadow-lg`}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newArticles.slice(3).map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{article.icon}</div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    <Star className="w-3 h-3" />
                    <span>FEATURED</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${article.gradient} text-white text-sm font-semibold shadow-lg`}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ Fortune 500 enterprises achieving breakthrough results with AI-powered operations, 
            quantum computing, and autonomous systems. Get expert guidance from our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore All Articles</span>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Schedule Expert Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '$2.5B+', label: 'Value Delivered', icon: '💎' },
            { value: '99.99%', label: 'System Reliability', icon: '⚡' },
            { value: '1000x', label: 'Performance Gains', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default September30NewContent2025Banner;