import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2039: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2039",
      description: "Experience the most revolutionary technological advances that will reshape reality itself. From conscious AI systems to quantum consciousness and interdimensional computing.",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2039",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2039",
      description: "Witness the most revolutionary technological breakthroughs that will fundamentally change how we perceive and interact with reality itself.",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechBreakthrough2039",
      features: ["Conscious AI Revolution", "Quantum Consciousness", "Reality Manipulation"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2039",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future. Experience conscious AI, quantum consciousness, and interdimensional computing.",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/NextGenInnovationHub2039",
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

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2039
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2039
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 text-center md:text-left ${slide.textColor}`}>
                          {slide.description}
                        </p>
                        <ul className={`space-y-3 mb-8 text-center md:text-left ${slide.textColor}`}>
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center justify-center md:justify-start">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="text-center md:text-left">
                          <a 
                            href={slide.link} 
                            className="inline-block bg-white text-purple-600 py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                          >
                            Explore {slide.title.split(' ')[0]} →
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-black/20 rounded-2xl p-8">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🚀</div>
                            <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                            <p className="opacity-90 mb-6">
                              Experience this revolutionary technology through our interactive demonstration
                            </p>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                              Start Demo
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users already exploring these revolutionary breakthroughs. 
            Be part of the technological revolution that's reshaping reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/UltimateTechRevolution2039" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Explore All Technologies
            </a>
            <a 
              href="/pages/NextGenInnovationHub2039" 
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Enter Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2039;