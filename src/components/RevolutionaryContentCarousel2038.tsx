import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Breakthrough 2038",
      description: "Experience the most revolutionary technological advances that will reshape our universe",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2038",
      features: ["Conscious AI Universes", "Quantum Reality Control", "Interdimensional Portals"]
    },
    {
      title: "Revolutionary Tech Showcase 2038",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2038",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      title: "Next-Gen Innovation Hub 2038",
      description: "Discover and explore the most revolutionary innovations reshaping our universe",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2038",
      features: ["247 Active Innovations", "89 Breakthrough Technologies", "156 Research Projects"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Carousel 2038</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most revolutionary technologies and innovations that are reshaping our universe
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl text-gray-300 mb-8">{slide.description}</p>
                        <div className="space-y-4 mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-6 text-center">Live Performance Metrics</h4>
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold">Technology Advancement</span>
                              <span className="text-sm">98.7%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div className={`bg-gradient-to-r ${slide.color} h-3 rounded-full`} style={{width: '98.7%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold">Innovation Index</span>
                              <span className="text-sm">99.2%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div className={`bg-gradient-to-r ${slide.color} h-3 rounded-full`} style={{width: '99.2%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold">Revolutionary Impact</span>
                              <span className="text-sm">97.8%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div className={`bg-gradient-to-r ${slide.color} h-3 rounded-full`} style={{width: '97.8%'}}></div>
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

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Access to Revolutionary Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  currentSlide === index
                    ? `bg-gradient-to-r ${slide.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="text-xl mr-2">{slide.icon}</span>
                {slide.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2038;