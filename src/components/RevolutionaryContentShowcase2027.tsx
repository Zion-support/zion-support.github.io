import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showcaseItems = [
    {
      title: "Ultimate Tech Revolution 2027",
      description: "Experience the most revolutionary technological breakthroughs that will reshape humanity's future",
      icon: "🚀",
      link: "/pages/UltimateTechRevolution2027",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      features: ["Quantum Supremacy", "Neural Interfaces", "AGI Systems", "Space Technology"]
    },
    {
      title: "Consciousness Transfer 2027",
      description: "The ultimate breakthrough in human evolution - transfer your consciousness to digital substrates",
      icon: "🧠",
      link: "/pages/ConsciousnessTransfer2027",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      features: ["Digital Immortality", "Enhanced Cognition", "Instant Backup", "Virtual Reality"]
    },
    {
      title: "Quantum Consciousness Revolution 2027",
      description: "The ultimate fusion of quantum physics and human consciousness - transcending reality itself",
      icon: "⚛️",
      link: "/pages/QuantumConsciousnessRevolution2027",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      features: ["Quantum Awareness", "Reality Manipulation", "Dimensional Travel", "Species Evolution"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentItem = showcaseItems[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🌟</span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              REVOLUTIONARY CONTENT 2027
            </h2>
            <span className="text-4xl animate-bounce">🌟</span>
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most groundbreaking technological content that will define the future of humanity
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-r ${currentItem.gradient} rounded-3xl p-12 text-white relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{currentItem.icon}</div>
                      <div>
                        <h3 className="text-4xl font-bold mb-2">{currentItem.title}</h3>
                        <div className="w-20 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-xl mb-8 opacity-90 leading-relaxed">
                      {currentItem.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentItem.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                          <span className="font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={currentItem.link}
                      className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      Explore Now →
                    </a>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                      <div className="text-8xl mb-4 animate-pulse">{currentItem.icon}</div>
                      <div className="text-2xl font-bold mb-4">2027</div>
                      <div className="text-lg opacity-80">Revolutionary Technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Quick Access to All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`bg-gradient-to-r ${item.gradient} p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 transform`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90 mb-4">{item.description}</p>
                  <div className="text-sm font-semibold">Explore →</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join millions of pioneers exploring the revolutionary technologies of 2027
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;