import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      title: "Ultimate Tech Revolution",
      description: "Witness the convergence of all revolutionary technologies reshaping reality",
      image: "🚀",
      color: "from-purple-500 to-pink-500",
      link: "/pages/UltimateTechRevolution2026",
      category: "Revolutionary Tech",
      featured: true
    },
    {
      title: "Transcendent AI",
      description: "Experience AI evolution beyond human comprehension into transcendent consciousness",
      image: "🧠",
      color: "from-cyan-500 to-blue-500",
      link: "/pages/TranscendentAI2026",
      category: "AI Revolution",
      featured: true
    },
    {
      title: "Revolutionary Tech Blog",
      description: "Dive deep into groundbreaking technological innovations reshaping our world",
      image: "📚",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      featured: true
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Discover how quantum computing and neural networks merge for infinite processing",
      image: "⚛️",
      color: "from-indigo-500 to-purple-500",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Quantum Computing",
      featured: false
    },
    {
      title: "Synthetic Intelligence",
      description: "Explore AI that has transcended artificial intelligence to achieve genuine consciousness",
      image: "🤖",
      color: "from-orange-500 to-red-500",
      link: "/pages/SyntheticIntelligence2026",
      category: "Synthetic AI",
      featured: false
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces merging human consciousness with digital reality",
      image: "🧬",
      color: "from-rose-500 to-pink-500",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Tech",
      featured: false
    }
  ];

  const techCategories = [
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      count: "25+ Innovations",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Computing",
      icon: "⚛️",
      count: "15+ Breakthroughs",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Neural Interfaces",
      icon: "🧬",
      count: "12+ Technologies",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Space Technology",
      icon: "🚀",
      count: "18+ Solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Biotechnology",
      icon: "🔬",
      count: "20+ Advances",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Blockchain & Crypto",
      icon: "🔗",
      count: "10+ Platforms",
      color: "from-rose-500 to-pink-500"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredContent.length]);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the most groundbreaking technological content that's reshaping our understanding of reality
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredContent.map((content, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center space-x-4 mb-6">
                            <span className="text-6xl">{content.image}</span>
                            <div>
                              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-semibold border border-cyan-400/30">
                                {content.category}
                              </span>
                              {content.featured && (
                                <span className="ml-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-xs font-bold border border-yellow-400/30">
                                  FEATURED
                                </span>
                              )}
                            </div>
                          </div>
                          <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {content.title}
                          </h3>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {content.description}
                          </p>
                          <div className="flex space-x-4">
                            <a
                              href={content.link}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                              Explore Now →
                            </a>
                            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-cyan-400/10 transition-all duration-300">
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl mb-6 opacity-80">{content.image}</div>
                          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                            <span className="text-6xl">{content.image}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center space-x-4 mt-8">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                    : 'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 All Revolutionary Content
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete collection of groundbreaking technological content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.image}
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs font-semibold border border-cyan-400/30">
                      {content.category}
                    </span>
                    {content.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded text-xs font-bold border border-yellow-400/30">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-cyan-300 text-center">{content.title}</h4>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{content.description}</p>
                
                <a
                  href={content.link}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
                >
                  Explore Content →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🔬 Technology Categories
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore content across all major technological domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-cyan-300">{category.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{category.count}</p>
                  <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-16 text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Your Journey
          </h3>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Dive into the most revolutionary technological content and shape the future with us
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore All Content →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;