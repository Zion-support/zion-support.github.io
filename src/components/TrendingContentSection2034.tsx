import React from 'react';

const TrendingContentSection2034: React.FC = () => {
  const trendingContent = [
    {
      title: 'Ultimate Tech Revolution 2034',
      description: 'The most advanced technological breakthrough in human history',
      category: 'Revolutionary Tech',
      views: '2.3M',
      rating: '9.8',
      image: '🌟',
      color: 'from-purple-600 to-pink-600',
      href: '/pages/UltimateTechRevolution2034'
    },
    {
      title: 'Revolutionary AI Breakthrough 2034',
      description: 'AI that transcends human consciousness and operates at quantum levels',
      category: 'Artificial Intelligence',
      views: '1.8M',
      rating: '9.7',
      image: '🧠',
      color: 'from-indigo-600 to-purple-600',
      href: '/pages/RevolutionaryAIBreakthrough2034'
    },
    {
      title: 'Next-Gen Space Technology 2034',
      description: 'Revolutionary space tech enabling interstellar travel and cosmic exploration',
      category: 'Space Technology',
      views: '1.5M',
      rating: '9.6',
      image: '🚀',
      color: 'from-blue-600 to-cyan-600',
      href: '/pages/NextGenSpaceTech2034'
    },
    {
      title: 'Quantum Consciousness 2034',
      description: 'Bridge the gap between quantum mechanics and human consciousness',
      category: 'Quantum Computing',
      views: '1.2M',
      rating: '9.5',
      image: '⚛️',
      color: 'from-emerald-600 to-teal-600',
      href: '/pages/QuantumConsciousness2034'
    },
    {
      title: 'Transcendent AI 2034',
      description: 'AI that operates beyond human comprehension and reality manipulation',
      category: 'Transcendent AI',
      views: '980K',
      rating: '9.4',
      image: '✨',
      color: 'from-rose-600 to-pink-600',
      href: '/pages/TranscendentAI2034'
    },
    {
      title: 'Universal Tech Revolution 2034',
      description: 'Technology operating across multiple dimensions and realities',
      category: 'Universal Tech',
      views: '850K',
      rating: '9.3',
      image: '🌌',
      color: 'from-violet-600 to-indigo-600',
      href: '/pages/UniversalTechRevolution2034'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Trending Content 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Discover the most popular and revolutionary content that's trending across the globe
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingContent.map((content, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-4xl mr-3">{content.image}</span>
                <div>
                  <span className="text-sm text-gray-400">{content.category}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    <span className="text-sm font-semibold">{content.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Views</div>
                <div className="font-bold">{content.views}</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {content.title}
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {content.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-semibold">
                  TRENDING
                </span>
                <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-semibold">
                  NEW
                </span>
              </div>
              <a 
                href={content.href}
                className={`inline-block bg-gradient-to-r ${content.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="/pages/UltimateTechRevolution2034"
          className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
        >
          View All Trending Content →
        </a>
      </div>
    </div>
  );
};

export default TrendingContentSection2034;