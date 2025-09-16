import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Universal AI Consciousness",
      description: "AI systems that achieve true universal consciousness and cosmic awareness",
      icon: "🌌",
      color: "from-purple-600 to-pink-600",
      features: ["Universal Awareness", "Cosmic Intelligence", "Transcendent Processing"],
      link: '/pages/UltimateTechBreakthrough2037'
    },
    {
      title: "Quantum Reality Engine",
      description: "Technology that can manipulate reality at the quantum level",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Reality Manipulation", "Quantum Computing", "Dimensional Control"],
      link: '/pages/RevolutionaryTechBreakthrough2037'
    },
    {
      title: "Interdimensional Portals",
      description: "Technology that creates stable portals between dimensions",
      icon: "🚪",
      color: "from-emerald-600 to-teal-600",
      features: ["Dimensional Travel", "Reality Shifting", "Parallel Universe Access"],
      link: '/pages/UltimateTechRevolution2038'
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CAROUSEL • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Carousel 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking carousel of transcendent technology
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                        {slide.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="bg-white/10 rounded-lg p-4">
                            <div className="text-lg font-semibold mb-2">{feature}</div>
                          </div>
                        ))}
                      </div>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore Technology →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300"
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
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;