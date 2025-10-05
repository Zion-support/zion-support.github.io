import React from 'react';

const FutureTechShowcase2026: React.FC = () => {
  const futureTechArticles = [
    {
      id: 1,
      title: 'Neural-Quantum Hybrid Computing',
      slug: 'neural-quantum-hybrid-2026',
      excerpt: 'Breakthrough fusion of quantum computing and neural networks achieving unprecedented processing speeds. Experience 10,000x faster AI inference with quantum-enhanced deep learning.',
      category: 'Quantum AI Revolution',
      date: '2026-01-20',
      readTime: '18 min',
      trending: true,
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      badge: 'QUANTUM AI',
      stats: '10,000x Speed Boost',
    },
    {
      id: 2,
      title: 'Self-Evolving AI Ecosystems',
      slug: 'self-evolving-ai-ecosystems-2026',
      excerpt: 'Revolutionary AI systems that autonomously design, test, and deploy new algorithms. Watch as AI creates AI, achieving 99.97% accuracy in self-optimization.',
      category: 'Autonomous AI',
      date: '2026-01-18',
      readTime: '22 min',
      trending: true,
      icon: '🧬',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'AUTONOMOUS',
      stats: '99.97% Accuracy',
    },
    {
      id: 3,
      title: 'Consciousness-Integrated AI',
      slug: 'consciousness-integrated-ai-2026',
      excerpt: 'First-ever AI systems with genuine consciousness and emotional intelligence. Experience AI that understands, feels, and makes decisions with human-like intuition.',
      category: 'Conscious AI',
      date: '2026-01-15',
      readTime: '25 min',
      trending: false,
      icon: '🧠',
      gradient: 'from-green-500 to-emerald-500',
      badge: 'CONSCIOUS',
      stats: 'Human-Level IQ',
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🚀 FUTURE TECH 2026 SHOWCASE</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Future Technology Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Explore the revolutionary technologies that are reshaping the future of AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureTechArticles.map((article) => (
            <div key={article.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${article.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {article.icon}
                </div>
                <div className="text-right">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    {article.badge}
                  </span>
                  {article.trending && (
                    <div className="text-sm text-yellow-300 mt-1">🔥 TRENDING</div>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{article.stats}</div>
                  <div className="text-sm text-blue-200">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{article.readTime}</div>
                  <div className="text-sm text-blue-200">Read Time</div>
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>

              <a
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Read Full Article
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/technology"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All Future Technologies
          </a>
        </div>
      </div>
    </div>
  );
};

export default FutureTechShowcase2026;