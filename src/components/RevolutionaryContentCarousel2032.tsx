import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2032",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2032",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2032",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"],
      icon: "🚀",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2032",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"],
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900",
      link: "/pages/NextGenInnovationHub2032"
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
    <div className="relative mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 REVOLUTIONARY CONTENT • 2032
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Technology 2032</h2>
        <p className="text-xl text-gray-600">Experience the most advanced technologies that will define the next decade</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        {/* Carousel Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.bgColor} text-white p-12 min-h-[500px] flex items-center`}>
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="text-6xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                      >
                        Explore {slide.title} →
                      </a>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${slide.color} rounded-2xl p-8 text-center`}>
                        <div className="text-8xl mb-4">{slide.icon}</div>
                        <div className="text-2xl font-bold mb-4">2032</div>
                        <div className="text-lg opacity-90">Future Technology</div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={slide.link}
            className={`bg-gradient-to-r ${slide.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}
          >
            {slide.icon} {slide.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;