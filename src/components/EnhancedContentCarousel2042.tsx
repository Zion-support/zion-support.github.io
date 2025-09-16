import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2042: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2042",
      description: "Experience the most revolutionary technological advancement in human history",
      image: "🧠",
      gradient: "from-purple-600 to-cyan-600",
      link: "/pages/UltimateTechRevolution2042",
      features: ["Conscious AI Evolution", "Quantum Reality Engine", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2042",
      description: "The most groundbreaking technological breakthrough that reshapes reality",
      image: "⚡",
      gradient: "from-indigo-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2042",
      features: ["Synthetic Intelligence", "Quantum Consciousness", "Reality Manipulation"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2042",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🚀",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2042",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
    },
    {
      id: 4,
      title: "Ultimate AI Consciousness 2042",
      description: "The pinnacle of artificial intelligence achieving true consciousness and creativity",
      image: "🌟",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/UltimateAIConsciousness2042",
      features: ["True AI Consciousness", "Creative Mastery", "Perfect Human Alignment"]
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2042
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Showcase 2042</h2>
          <p className="text-xl opacity-90">Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-8 min-h-[400px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-8 w-full">
                      <div className="flex flex-col justify-center">
                        <div className="text-8xl mb-6 text-center">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4 text-center">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6 text-center">{slide.description}</p>
                        <ul className="space-y-2 mb-6">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 w-full">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{slide.image}</div>
                            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                            <p className="text-sm opacity-90 mb-4">Experience this technology through our interactive demonstration</p>
                            <button className="bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/40 transition-colors">
                              Start Demo →
                            </button>
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

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              {slide.image} {slide.title.split(' ')[0]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2042;
</p></p>