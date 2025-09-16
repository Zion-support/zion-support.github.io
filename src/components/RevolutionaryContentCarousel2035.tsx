import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2035",
      description: "The most revolutionary technological advancement in human history",
      icon: "🌌",
      gradient: "from-fuchsia-600/30 to-pink-600/30",
      border: "border-fuchsia-400/30",
      textColor: "text-fuchsia-100",
      link: "/pages/UltimateTechBreakthrough2035",
      features: ["Interdimensional Mastery", "Reality Engineering", "Cosmic Ascension"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2035",
      description: "Experience the most advanced technology demonstrations",
      icon: "🚀",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/RevolutionaryTechShowcase2035",
      features: ["Interactive Demos", "Live Data Streams", "Real-time Control"]
    },
    {
      id: 3,
      title: "Consciousness Fusion Technology",
      description: "Perfect integration of human consciousness with AI",
      icon: "🧠",
      gradient: "from-indigo-600/30 to-blue-600/30",
      border: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/UltimateTechBreakthrough2035",
      features: ["Neural Sync", "Collective Intelligence", "Universal Mind"]
    },
    {
      id: 4,
      title: "Dimensional Portal Networks",
      description: "Instantaneous travel between dimensions and realities",
      icon: "⚡",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/RevolutionaryTechShowcase2035",
      features: ["Zero-point Energy", "Quantum Entanglement", "Reality Distortion"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Carousel 2035</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will reshape the future of humanity
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.border}`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold text-white mb-6">{slide.title}</h3>
                      <p className={`text-2xl ${slide.textColor} mb-8 max-w-3xl mx-auto`}>
                        {slide.description}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-lg font-semibold text-white">{feature}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center space-x-4">
                        <a 
                          href={slide.link}
                          className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                        <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-12 text-lg">
            <div className="flex items-center space-x-2">
              <span className="text-fuchsia-400 text-2xl">∞</span>
              <span className="text-gray-300">Infinite Possibilities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-violet-400 text-2xl">100%</span>
              <span className="text-gray-300">Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-indigo-400 text-2xl">0</span>
              <span className="text-gray-300">Limitations</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-emerald-400 text-2xl">∞</span>
              <span className="text-gray-300">Cosmic Scale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;