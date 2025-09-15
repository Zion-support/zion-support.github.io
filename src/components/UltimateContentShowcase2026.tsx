import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
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
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ 6 NEW REVOLUTIONARY PAGES
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 CUTTING-EDGE TECHNOLOGY
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌟 INTERACTIVE SHOWCASE
            </span>
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-16 text-center relative overflow-hidden`}>
                    <div className="absolute top-4 right-4">
                      {item.new && (
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                          NEW!
                        </span>
                      )}
                    </div>
                    <div className="text-9xl mb-8 animate-bounce">{item.image}</div>
                    <h3 className="text-5xl font-bold mb-6">{item.title}</h3>
                    <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">{item.description}</p>
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={item.link}
                        className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl"
                      >
                        Explore {item.category} →
                      </a>
                      <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              {item.new && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
                </div>
              )}
              <div className="text-5xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
            Dive into our revolutionary content and discover the technologies that are shaping tomorrow. 
            Experience the most advanced AI, Quantum Computing, Neural Interfaces, and more.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-6 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-xl">
              Explore All Content →
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;