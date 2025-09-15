import React, { useState, useEffect } from 'react';

const TrendingContentSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const trendingContent = [
    {
      id: 1,
      title: "Synthetic Intelligence: The Future is Here",
      description: "Exploring how synthetic AI will revolutionize every aspect of human life with self-evolving systems that transcend traditional limitations.",
      views: "2.3M",
      category: "AI Revolution",
      color: "purple",
      icon: "🧠",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Breakthrough",
      description: "The revolutionary convergence of quantum computing and neural networks creating unprecedented computational power and intelligence.",
      views: "1.8M",
      category: "Quantum Computing",
      color: "cyan",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      id: 3,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology solutions transforming healthcare, agriculture, and environmental sustainability through genetic engineering.",
      views: "1.5M",
      category: "Biotechnology",
      color: "green",
      icon: "🧬",
      link: "/pages/AdvancedBiotechRevolution2026"
    },
    {
      id: 4,
      title: "Space Technology Revolution",
      description: "Making interplanetary travel, space colonization, and cosmic exploration a reality with advanced propulsion and habitat systems.",
      views: "1.2M",
      category: "Space Tech",
      color: "indigo",
      icon: "🚀",
      link: "/pages/SpaceTechRevolution2026"
    },
    {
      id: 5,
      title: "Advanced Robotics Revolution",
      description: "Intelligent machines that can think, learn, and adapt to any environment, revolutionizing industries and human-robot collaboration.",
      views: "1.0M",
      category: "Robotics",
      color: "orange",
      icon: "🤖",
      link: "/pages/AdvancedRoboticsRevolution2026"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, trendingContent.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-500 to-pink-500 border-purple-200 bg-purple-50 text-purple-700",
      cyan: "from-cyan-500 to-blue-500 border-cyan-200 bg-cyan-50 text-cyan-700",
      green: "from-green-500 to-emerald-500 border-green-200 bg-green-50 text-green-700",
      indigo: "from-indigo-500 to-purple-500 border-indigo-200 bg-indigo-50 text-indigo-700",
      orange: "from-orange-500 to-red-500 border-orange-200 bg-orange-50 text-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const currentContent = trendingContent[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4">
          🔥 TRENDING NOW • JANUARY 2026
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Technology Content</h2>
        <p className="text-lg text-gray-600">Discover what's capturing the world's attention</p>
      </div>
      
      {/* Main Trending Card */}
      <div className="bg-white rounded-2xl p-8 shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 bg-gradient-to-r ${getColorClasses(currentContent.color).split(' ')[0]} ${getColorClasses(currentContent.color).split(' ')[1]} text-white text-xs rounded-full font-semibold`}>
                #{currentIndex + 1} TRENDING
              </span>
              <span className="text-sm text-gray-500">{currentContent.views} views</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoPlaying ? "⏸️" : "▶️"}
              </button>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="text-6xl">{currentContent.icon}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{currentContent.title}</h3>
              <p className="text-gray-600 mb-4 text-lg">{currentContent.description}</p>
              <div className="flex items-center space-x-4">
                <a 
                  href={currentContent.link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${getColorClasses(currentContent.color).split(' ')[0]} ${getColorClasses(currentContent.color).split(' ')[1]} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Read Full Article →
                </a>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(currentContent.color).split(' ')[2]} ${getColorClasses(currentContent.color).split(' ')[3]}`}>
                  {currentContent.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mb-8">
        {trendingContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-indigo-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Trending List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingContent.slice(0, 3).map((content, index) => (
          <div 
            key={content.id}
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 ${
              index === 0 ? 'border-purple-500' : 
              index === 1 ? 'border-cyan-500' : 
              'border-emerald-500'
            } ${currentIndex === content.id - 1 ? 'ring-2 ring-indigo-500' : ''}`}
            onClick={() => setCurrentIndex(content.id - 1)}
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className={`px-3 py-1 ${
                index === 0 ? 'bg-purple-100 text-purple-700' :
                index === 1 ? 'bg-cyan-100 text-cyan-700' :
                'bg-emerald-100 text-emerald-700'
              } text-xs rounded-full font-semibold`}>
                #{index + 1} TRENDING
              </span>
              <span className="text-sm text-gray-500">{content.views} views</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">{content.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{content.description}</p>
            <a 
              href={content.link}
              className={`text-sm font-semibold ${
                index === 0 ? 'text-purple-600 hover:text-purple-700' :
                index === 1 ? 'text-cyan-600 hover:text-cyan-700' :
                'text-emerald-600 hover:text-emerald-700'
              }`}
            >
              Read Full Article →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingContentSection;