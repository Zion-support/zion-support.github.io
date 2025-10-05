import React from 'react';

const February2026ContentShowcaseBanner = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'Autonomous Neural Networks 2026',
      category: 'AI Architecture',
      readTime: '12 min',
      rating: 5.0,
      readers: '180K+',
      badge: 'BREAKTHROUGH',
      gradient: 'from-emerald-500 to-teal-500',
      icon: '🧠',
      link: '/blog/ai-2026-feb-autonomous-neural-networks',
      description: 'Self-evolving neural architectures achieving 99.97% accuracy in autonomous decision-making'
    },
    {
      id: 2,
      title: 'Quantum Edge Computing Revolution',
      category: 'Edge Computing',
      readTime: '15 min',
      rating: 4.9,
      readers: '145K+',
      badge: 'TRENDING',
      gradient: 'from-purple-500 to-pink-500',
      icon: '⚡',
      link: '/blog/quantum-edge-computing-2026',
      description: 'Quantum-classical hybrid systems delivering 1000x performance at the edge'
    },
    {
      id: 3,
      title: 'Meta-Cognitive AI Frameworks',
      category: 'AI Research',
      readTime: '18 min',
      rating: 4.8,
      readers: '120K+',
      badge: 'INNOVATION',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🔮',
      link: '/blog/meta-cognitive-ai-2026',
      description: 'AI systems that think about their own thinking processes and self-optimize'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 FEBRUARY 2026 BREAKTHROUGHS</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and autonomous systems that are reshaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {content.icon}
                </div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  {content.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold">{content.rating}</span>
                  </div>
                  <div className="text-sm text-blue-200">
                    {content.readers} readers
                  </div>
                </div>
                <div className="text-sm text-blue-300">
                  {content.readTime}
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {content.category}
                </span>
              </div>

              <a
                href={content.link}
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
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All February 2026 Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default February2026ContentShowcaseBanner;