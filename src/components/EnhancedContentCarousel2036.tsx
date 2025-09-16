import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2036",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2036",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2036",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2036",
      description: "Interactive showcase of cutting-edge technologies that will define the future of humanity",
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2036",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2036",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2036",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 FEATURED CONTENT • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest innovations that are reshaping industries and creating new possibilities
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slide Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 min-h-[500px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="text-8xl mb-6">{slides[currentSlide].image}</div>
                  <h3 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h3>
                  <p className="text-xl opacity-90 mb-8">{slides[currentSlide].description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={slides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Technology →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="flex justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-br ${slides[currentSlide].color} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                    {slides[currentSlide].image}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`bg-gradient-to-br ${slide.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{slide.image}</div>
                <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-80 mb-4">{slide.description}</p>
                <a
                  href={slide.link}
                  className="block w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-lg opacity-90">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">2036</div>
            <div className="text-lg opacity-90">Future Technology</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2036;