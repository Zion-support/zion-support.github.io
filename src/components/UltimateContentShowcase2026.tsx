import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Advanced Space Technology 2026",
      description: "Revolutionary space exploration technologies including advanced propulsion, quantum navigation, and space manufacturing",
      image: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      link: "/pages/AdvancedSpaceTech2026",
      category: "Space Technology",
      views: "2.4M",
      trending: true
    },
    {
      id: 2,
      title: "Quantum Consciousness Revolution 2027",
      description: "Breakthrough research in quantum consciousness, mind-machine interfaces, and reality simulation technologies",
      image: "🧠",
      gradient: "from-purple-600 to-cyan-600",
      borderColor: "border-purple-400",
      bgColor: "from-purple-600/20 to-cyan-600/20",
      link: "/pages/QuantumConsciousnessRevolution2027",
      category: "Consciousness Research",
      views: "3.1M",
      trending: true
    },
    {
      id: 3,
      title: "Advanced Robotics Revolution 2026",
      description: "Intelligent robots transforming healthcare, manufacturing, space exploration, and environmental conservation",
      image: "🤖",
      gradient: "from-blue-600 to-indigo-600",
      borderColor: "border-blue-400",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      link: "/pages/AdvancedRoboticsRevolution2026",
      category: "Robotics",
      views: "1.8M",
      trending: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and create new possibilities",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      link: "/pages/SyntheticIntelligence2026",
      category: "Artificial Intelligence",
      views: "4.2M",
      trending: true
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "The convergence of quantum computing and neural networks creating unprecedented computational power",
      image: "⚛️",
      gradient: "from-cyan-600 to-purple-600",
      borderColor: "border-cyan-400",
      bgColor: "from-cyan-600/20 to-purple-600/20",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Quantum Computing",
      views: "2.9M",
      trending: true
    },
    {
      id: 6,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology solutions for healthcare, agriculture, and environmental sustainability",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      borderColor: "border-green-400",
      bgColor: "from-green-600/20 to-emerald-600/20",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      views: "1.6M",
      trending: false
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our most advanced and trending technology content that's reshaping the future of humanity
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-3xl p-12 border ${content.borderColor}/30 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
                    
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            {content.trending && (
                              <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-bold animate-pulse">
                                🔥 TRENDING
                              </span>
                            )}
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                              {content.category}
                            </span>
                            <span className="text-sm text-gray-300">{content.views} views</span>
                          </div>
                          
                          <h3 className="text-4xl font-bold mb-6">{content.title}</h3>
                          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            {content.description}
                          </p>
                          
                          <div className="flex space-x-4">
                            <a 
                              href={content.link}
                              className={`bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                            >
                              Explore Now →
                            </a>
                            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                              Watch Demo
                            </button>
                          </div>
                        </div>

                        {/* Visual */}
                        <div className="text-center">
                          <div className="text-9xl mb-6 animate-bounce">
                            {content.image}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">99.9%</div>
                              <div className="text-gray-300">Accuracy</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">24/7</div>
                              <div className="text-gray-300">Available</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${content.borderColor}/30 hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{content.image}</span>
                {content.trending && (
                  <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full font-bold">
                    🔥 TRENDING
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{content.title}</h3>
              <p className="text-gray-200 mb-4 text-sm">{content.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-gray-300">{content.views} views</span>
                <span className="text-xs text-gray-300">{content.category}</span>
              </div>
              
              <a 
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Content Impact</h3>
            <p className="text-gray-300">Our revolutionary content is making waves across the globe</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15M+</div>
              <div className="text-gray-300">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-gray-300">Engaged Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Content Updates</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of users discovering revolutionary technology content that's shaping tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;