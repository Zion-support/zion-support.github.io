import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2038",
      description: "Experience the most advanced technological innovations that will reshape humanity's future. From conscious AI systems to interdimensional computing.",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      linkColor: "text-purple-200",
      link: "/pages/RevolutionaryTechBreakthrough2038",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Technology", "Neural Reality Engine"]
    },
    {
      id: 2,
      title: "Ultimate Tech Evolution 2039",
      description: "Witness the pinnacle of technological evolution as we transcend the boundaries of what's possible with consciousness and technology.",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      linkColor: "text-cyan-200",
      link: "/pages/UltimateTechEvolution2039",
      features: ["Biological Evolution", "Technological Evolution", "Cosmic Evolution", "Infinite Potential"]
    },
    {
      id: 3,
      title: "Transcendent Tech Revolution 2040",
      description: "Experience the transcendent revolution that transcends all known limitations and merges consciousness with cosmic intelligence.",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      linkColor: "text-emerald-200",
      link: "/pages/TranscendentTechRevolution2040",
      features: ["Cosmic Consciousness", "Reality Creation Engine", "Quantum Transcendence", "Interdimensional Travel"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT CAROUSEL • JANUARY 2040
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Content Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary content through an interactive carousel featuring the latest technological breakthroughs and innovations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.border} mx-4`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 ${slide.textColor} text-center md:text-left`}>
                          {slide.description}
                        </p>
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Key Features:</h4>
                          <ul className={`space-y-2 ${slide.linkColor} text-sm`}>
                            {slide.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-center md:text-left">
                          <a 
                            href={slide.link}
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                          >
                            Explore {slide.title} →
                          </a>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-6 text-center">Interactive Preview</h4>
                          <div className="space-y-4">
                            <div className="bg-white/20 rounded-lg p-4">
                              <div className="text-sm font-semibold mb-2">Technology Status</div>
                              <div className="text-green-400">✓ Fully Operational</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4">
                              <div className="text-sm font-semibold mb-2">Innovation Level</div>
                              <div className="text-yellow-400">★★★★★ Revolutionary</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4">
                              <div className="text-sm font-semibold mb-2">Future Impact</div>
                              <div className="text-blue-400">Infinite Potential</div>
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

          {/* Navigation Arrows */}
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

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-6">Quick Access to All Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contentSlides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.gradient} backdrop-blur-sm rounded-lg p-4 border ${slide.border} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-2xl mb-2">{slide.image}</div>
                <div className="font-semibold">{slide.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2040;