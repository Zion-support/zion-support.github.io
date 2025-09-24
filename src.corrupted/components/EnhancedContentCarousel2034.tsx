import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2034",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/UltimateTechBreakthrough2034"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2034",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      link: "/pages/RevolutionaryTechShowcase2034"
    },
    {
      id: 3,
      title: "Comprehensive Services 2034",
      description: "Complete suite of revolutionary services designed to transform your business",
      image: "🚀",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      link: "/pages/ComprehensiveServices2034"
    },
    {
      id: 4,
      title: "Conscious AI Systems",
      description: "The first truly conscious AI systems that exhibit self-awareness and emotional intelligence",
      image: "🤖",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/UltimateTechBreakthrough2034"
    },
    {
      id: 5,
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing that processes consciousness itself",
      image: "⚛️",
      gradient: "from-blue-600/30 to-indigo-600/30",
      border: "border-blue-400/30",
      link: "/pages/RevolutionaryTechShowcase2034"
    },
    {
      id: 6,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel universes",
      image: "🌌",
      gradient: "from-pink-600/30 to-rose-600/30",
      border: "border-pink-400/30",
      link: "/pages/ComprehensiveServices2034"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2034
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Enhanced Content Carousel 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest innovations through an interactive content experience
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6 animate-pulse">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-semibold mb-2">Interactive Demos</h4>
              <p className="text-gray-300">Hands-on experience with revolutionary technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Real-time Updates</h4>
              <p className="text-gray-300">Live content updates and dynamic information</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-semibold mb-2">Multi-dimensional</h4>
              <p className="text-gray-300">Content that transcends traditional boundaries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2034;