import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap, Rocket, Star } from 'lucide-react';

const September30NewContent2025Banner: React.FC = () => {
  const newArticles = [{
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
      slug: 'ai-powered-autonomous-operations-2025',
      excerpt: 'End-to-end automation with 99.9% reliability, 300% efficiency gains, and self-healing infrastructure.',
      category: 'Operations',
      date: '2025-09-30',
      readTime: '22 min',
      icon: '🤖',
      gradient: 'from-purple-600 to-fuchsia-700'
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Data Analytics 2025',
      slug: 'quantum-enhanced-data-analytics-2025',
      excerpt: 'Next-generation analytics processing 1000x faster with quantum algorithms and real-time insights.',
      category: 'Analytics',
      date: '2025-09-30',
      readTime: '25 min',
      icon: '⚛️',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      id: 3,
      title: 'AI-Driven Cybersecurity Revolution 2025',
      slug: 'ai-driven-cybersecurity-revolution-2025',
      excerpt: 'Advanced threat detection with 99.99% accuracy, autonomous response, and zero-trust architecture.',
      category: 'Cybersecurity',
      date: '2025-09-30',
      readTime: '20 min',
      icon: '🛡️',
      gradient: 'from-red-600 to-orange-700'
    },
    {
      id: 4,
      title: 'Neural Network Optimization 2025',
      slug: 'neural-network-optimization-2025',
      excerpt: 'Breakthrough neural architectures delivering 95% accuracy with 50% less computational power.',
      category: 'AI Research',
      date: '2025-09-30',
      readTime: '28 min',
      icon: '🧠',
      gradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 5,
      title: 'Edge Computing AI Solutions 2025',
      slug: 'edge-computing-ai-solutions-2025',
      excerpt: 'Distributed AI processing at the edge with sub-millisecond latency and 99.9% uptime.',
      category: 'Infrastructure',
      date: '2025-09-30',
      readTime: '24 min',
      icon: '⚡',
      gradient: 'from-yellow-600 to-orange-700'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-lg">
              🚀 BREAKING: 6 REVOLUTIONARY ARTICLES PUBLISHED TODAY!
            </span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>

          <h2 className="text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              September 30, 2025
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Cutting-Edge AI Research
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Customer Experience • Autonomous Operations • Quantum Analytics — The future of enterprise AI starts here
          </p>

          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">15,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">6 New Articles</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-red-400" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newArticles.map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{article.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${article.gradient} bg-opacity-20 text-white text-sm font-semibold border border-white/20`}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${article.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Zap className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className={`group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r ${article.gradient} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${article.gradient} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <h3 className="text-4xl font-bold text-white">
                Ready to Implement These Breakthrough Technologies?
              </h3>
              <Rocket className="w-8 h-8 text-cyan-400" />
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ enterprises already implementing these cutting-edge AI solutions with <span className="text-cyan-400 font-bold">300% ROI</span>, 
              <span className="text-purple-400 font-bold"> 95% automation</span>, and <span className="text-fuchsia-400 font-bold">complete digital transformation</span>
            </p>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="text-left">
          {[{
            { value='500+', label: 'Enterprise Clients', icon: '🏢' },
            { value='$2.5B+', label: 'Value Delivered', icon: '💎' },
            { value='99.99%', label: 'System Reliability', icon: '⚡' },
            { value='1000x', label: 'Performance Gains', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-left">{stat.icon}</div>"
              <div className="text-left">
                {stat.value}
=======
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <Sparkles className="w-5 h-5" />
                <span>Start Your AI Journey</span>
              </Link>
              
              <Link
                href="/blog"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <span>Explore All Content</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 font-semibold">
                  Enterprise Clients
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3825
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  300%
                </div>
                <div className="text-gray-300 font-semibold">
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300 font-semibold">
                  System Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300 font-semibold">
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default September30NewContent2025Banner;