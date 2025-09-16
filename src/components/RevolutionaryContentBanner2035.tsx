import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Showcase 2035",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Technology",
      description: "Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Ultimate Innovation Hub 2035",
      subtitle: "Next-Gen Solutions • Advanced AI • Quantum Breakthroughs",
      description: "Discover cutting-edge innovations that will reshape industries and transform human capabilities",
      link: "/pages/NextGenInnovationHub2035",
      color: "from-cyan-600 to-blue-600",
      icon: "🧠"
    },
    {
      title: "🌌 Comprehensive Services 2035",
      subtitle: "Full-Service Solutions • Enterprise AI • Quantum Services",
      description: "Complete technology solutions for businesses ready to embrace the future",
      link: "/pages/ComprehensiveServices2035",
      color: "from-emerald-600 to-teal-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 animate-pulse"></div>
      
      {/* Main Banner */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className={`bg-gradient-to-r ${slides[currentSlide].color} backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Content */}
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="text-4xl animate-bounce">{slides[currentSlide].icon}</div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                  🌟 NEW: Revolutionary Content 2035
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h2>
              
              <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={slides[currentSlide].link}
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg group"
                >
                  Explore Now
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex-shrink-0 ml-0 md:ml-8">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <div className="text-8xl animate-spin-slow">
                    {slides[currentSlide].icon}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Additional Promotional Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-gradient-to-br ${slide.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'ring-2 ring-white/50' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{slide.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{slide.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{slide.description}</p>
              <div className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Learn More →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-300">Revolutionary Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-300">Possibilities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-300">Innovation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2035;