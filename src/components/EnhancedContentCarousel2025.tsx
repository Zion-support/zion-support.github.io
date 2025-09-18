import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: 'Next-Gen AI Consciousness',
      description: 'Experience truly conscious artificial intelligence that thinks, feels, and evolves beyond human comprehension',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/NextGenAIConsciousness2025',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Quantum consciousness', 'Transcendent learning']
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      description: 'Step into quantum-powered realities where multiple dimensions coexist and anything is possible',
      icon: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumRealityEngine2025',
      features: ['Quantum simulation', 'Multi-dimensional reality', 'Consciousness integration', 'Reality manipulation']
    },
    {
      id: 3,
      title: 'Interdimensional Revolution',
      description: 'Break through dimensional barriers and explore infinite realities beyond space and time',
      icon: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/InterdimensionalTechRevolution2025',
      features: ['Dimensional portals', 'Reality manipulation', 'Consciousness transfer', 'Multi-universe access']
    },
    {
      id: 4,
      title: 'Advanced AI Solutions',
      description: 'Comprehensive AI solutions that transform businesses and accelerate innovation',
      icon: '🤖',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/AISolutionsComprehensive2025',
      features: ['Business automation', 'Predictive analytics', 'Natural language processing', 'Computer vision']
    },
    {
      id: 5,
      title: 'Revolutionary Tech Showcase',
      description: 'Explore cutting-edge technologies that will shape the future of humanity',
      icon: '🚀',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/RevolutionaryTechShowcase2025',
      features: ['Emerging technologies', 'Innovation labs', 'Research partnerships', 'Future predictions']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping our world and defining the future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="text-8xl mb-4">{contentItems[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {contentItems[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {contentItems[currentSlide].description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {contentItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                        ✓
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
                  </div>
                  <div className="text-2xl font-semibold mb-4">
                    {contentItems[currentSlide].title} Demo
                  </div>
                  <div className="w-full h-4 bg-gray-600 rounded-full mb-4">
                    <div 
                      className={`h-4 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full animate-pulse`}
                      style={{width: '75%'}}
                    ></div>
                  </div>
                  <p className="text-gray-300">
                    Interactive demonstration of {contentItems[currentSlide].title.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">‹</span>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-center">{item.title}</div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Available Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnhancedContentCarousel2025;
