import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const NewestContent2025Banner = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'AI Edge Computing Real-Time Intelligence 2025',
      description: 'Deploy intelligence at the source with <10ms latency. Achieve 95% bandwidth reduction, 87% cost savings, and enhanced privacy compliance at enterprise scale.',
      slug: 'ai-edge-computing-real-time-2025',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'AI Neural Networks Enterprise Transformation 2025',
      description: 'Deploy advanced neural network architectures. Fortune 500 implementations achieving 98.5% accuracy, 10x ROI, and 85% operational efficiency gains.',
      slug: 'ai-neural-networks-enterprise-transformation-2025',
      icon: '🧠',
    },
    {
      id: 3,
      title: 'AI Quantum Security Protocols 2026',
      description: 'Protect AI systems with quantum-resistant cryptography. Achieve 99.99% security against classical and quantum attacks with sub-millisecond overhead.',
      slug: 'ai-quantum-security-protocols-2026',
      icon: '⚛️',
    },
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

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">{article.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-6">{article.description}</p>
                <div className="flex items-center text-cyan-400 font-semibold">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>📞</span>
              <span>Call Now: +1 302 464 0950</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
