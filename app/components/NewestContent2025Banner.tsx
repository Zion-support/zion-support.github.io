import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const NewestContent2025Banner = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'Edge Computing Revolution',
      description: 'Discover how edge computing is transforming enterprise AI deployment',
      slug: 'edge-computing-revolution',
      icon: '💻',
    },
    {
      id: 2,
      title: 'Neural Networks Breakthrough',
      description: 'Latest advances in neural network architectures and applications',
      slug: 'neural-networks-breakthrough',
      icon: '🧠',
    },
    {
      id: 3,
      title: 'Quantum Security',
      description: 'Next-generation security powered by quantum computing',
      slug: 'quantum-security',
      icon: '🔐',
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
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{article.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-6">{article.description}</p>
              <div className="flex items-center text-cyan-400 font-semibold">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
