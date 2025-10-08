import React from 'react';
import { Link } from 'react-router-dom';

const NewestContent2025Banner = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'AI Edge Computing Real-Time Intelligence 2025',
      description: 'Deploy intelligence at the source with <10ms latency. Achieve 95% bandwidth reduction, 87% cost savings, and enhanced privacy compliance at enterprise scale.',
      slug: 'ai-edge-computing-real-time-2025',
      icon: '⚡',
      category: 'Edge AI & Real-Time',
      stats: [
        { value: '<10ms', label: 'Latency', color: 'cyan' },
        { value: '95%', label: 'Bandwidth ↓', color: 'green' },
        { value: '87%', label: 'Cost ↓', color: 'yellow' }
      ],
      readingTime: '35 min read',
      gradientFrom: 'cyan-500/20',
      gradientTo: 'blue-600/20',
      hoverColor: 'cyan-400'
    },
    {
      id: 2,
      title: 'AI Neural Networks Enterprise Transformation 2025',
      description: 'Deploy advanced neural network architectures. Fortune 500 implementations achieving 98.5% accuracy, 10x ROI, and 85% operational efficiency gains.',
      slug: 'ai-neural-networks-enterprise-transformation-2025',
      icon: '🧠',
      category: 'Neural Networks & AI',
      stats: [
        { value: '98.5%', label: 'Accuracy', color: 'purple' },
        { value: '10x', label: 'ROI', color: 'green' },
        { value: '85%', label: 'Efficiency', color: 'yellow' }
      ],
      readingTime: '40 min read',
      gradientFrom: 'purple-500/20',
      gradientTo: 'fuchsia-600/20',
      hoverColor: 'purple-400'
    },
    {
      id: 3,
      title: 'AI Quantum Security Protocols 2026',
      description: 'Protect AI systems with quantum-resistant cryptography. Achieve 99.99% security against classical and quantum attacks with sub-millisecond overhead.',
      slug: 'ai-quantum-security-protocols-2026',
      icon: '⚛️',
      category: 'Quantum Security',
      stats: [
        { value: '99.99%', label: 'Security', color: 'red' },
        { value: '<1ms', label: 'Overhead', color: 'green' },
        { value: 'Zero', label: 'Breaches', color: 'yellow' }
      ],
      readingTime: '45 min read',
      gradientFrom: 'red-500/20',
      gradientTo: 'orange-600/20',
      hoverColor: 'red-400'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of
            enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article) => (
            <Link 
              key={article.id}
              to={`/blog/${article.slug}`} 
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${article.gradientFrom} to-${article.gradientTo} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}></div>
                <div className="relative z-10">
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{article.icon}</div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                    </div>
                  </div>

                  {/* Category Bookmark */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-${article.hoverColor} transition-colors`}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {article.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <span>⏱️ {article.readingTime}</span>
                    <span>📅 Sep 30, 2025</span>
                  </div>

                  {/* CTA Button */}
                  <div className={`flex items-center justify-center gap-2 text-${article.hoverColor} font-semibold group-hover:text-white transition-colors`}>
                    <span>Read Full Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group&apos;s AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>📞</span>
              <span>Call: (302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <span>Get Started Today</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
