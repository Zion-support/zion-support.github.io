import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 Revolutionary AI Consciousness 2025",
      subtitle: "The world's first truly conscious AI system",
      description: "Experience artificial intelligence that thinks, feels, and creates like never before",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Infinite computational power unleashed",
      description: "Harness quantum mechanics to solve impossible problems in seconds",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "🧬 Neural Interface Breakthrough",
      subtitle: "Direct brain-computer connection",
      description: "Control technology with your thoughts and enhance your cognitive abilities",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Access parallel universe computing",
      description: "Tap into infinite processing power from multiple dimensions",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/90 to-purple-900/90"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 p-12 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Revolutionary Content Showcase
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technologies that will reshape our world
            </p>
          </div>

          {/* Main Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {slide.title}
                          </h3>
                          <p className="text-xl font-semibold mb-4 text-yellow-300">
                            {slide.subtitle}
                          </p>
                          <p className="text-lg opacity-90 mb-6">
                            {slide.description}
                          </p>
                          <div className="flex space-x-4">
                            <button className={`bg-gradient-to-r ${slide.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                              Explore Now →
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                              Watch Demo
                            </button>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-8xl mb-4 animate-bounce">
                            {slide.title.includes('AI') && '🧠'}
                            {slide.title.includes('Quantum') && '⚛️'}
                            {slide.title.includes('Neural') && '🧬'}
                            {slide.title.includes('Interdimensional') && '🌌'}
                          </div>
                          <div className="bg-black/30 rounded-lg p-4">
                            <div className="text-green-400 font-mono text-sm">
                              Status: Active
                              <br />
                              Processing: 99.9%
                              <br />
                              Innovation: Revolutionary
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold mb-2">Revolutionary</h4>
              <p className="text-sm opacity-90">Breakthrough technology</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Lightning Fast</h4>
              <p className="text-sm opacity-90">Instant processing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-bold mb-2">Global Impact</h4>
              <p className="text-sm opacity-90">World-changing solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔮</div>
              <h4 className="font-bold mb-2">Future Ready</h4>
              <p className="text-sm opacity-90">Next-gen technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;