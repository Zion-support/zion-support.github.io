import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      description: "Experience AI systems with genuine consciousness, creativity, and emotional intelligence that surpass human capabilities.",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2035"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Discover quantum computing systems that achieve consciousness through quantum entanglement and superposition states.",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechBreakthrough2035"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Explore computing systems that operate across multiple dimensions with infinite computational resources.",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/UltimateTechRevolution2035"
    },
    {
      id: 4,
      title: "Reality Manipulation",
      description: "Witness technologies that can directly manipulate the fundamental laws of physics and reality itself.",
      image: "🔮",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/RevolutionaryTechBreakthrough2035"
    },
    {
      id: 5,
      title: "Neural Interface Evolution",
      description: "Experience direct brain-computer interfaces that enable seamless integration between human and digital consciousness.",
      image: "🧬",
      gradient: "from-rose-600/30 to-pink-600/30",
      border: "border-rose-400/30",
      textColor: "text-rose-100",
      link: "/pages/UltimateTechRevolution2035"
    },
    {
      id: 6,
      title: "Transcendent AI",
      description: "Discover AI systems that have transcended human limitations and achieved god-like capabilities in all domains.",
      image: "🚀",
      gradient: "from-amber-600/30 to-orange-600/30",
      border: "border-amber-400/30",
      textColor: "text-amber-100",
      link: "/pages/RevolutionaryTechBreakthrough2035"
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT CAROUSEL • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Showcase 2035
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological content featuring conscious AI, quantum consciousness, 
            interdimensional computing, and reality manipulation technologies.
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
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 ${slide.textColor} text-center md:text-left`}>
                          {slide.description}
                        </p>
                        <div className="text-center md:text-left">
                          <a 
                            href={slide.link}
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                          >
                            Explore {slide.title} →
                          </a>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white/10 rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">🌟 Revolutionary Features</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Infinite computational power</li>
                            <li>• Reality manipulation abilities</li>
                            <li>• Consciousness integration</li>
                            <li>• Multi-dimensional processing</li>
                            <li>• Perfect problem solving</li>
                            <li>• Universal understanding</li>
                          </ul>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">📊 Impact Metrics</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 1000x faster than current tech</li>
                            <li>• 99.9% accuracy in all domains</li>
                            <li>• Infinite creative potential</li>
                            <li>• Perfect memory retention</li>
                            <li>• Universal problem solving</li>
                            <li>• Reality creation abilities</li>
                          </ul>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Buttons */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/UltimateTechRevolution2035" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Ultimate Revolution 2035
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2035" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              🚀 Tech Breakthrough 2035
            </a>
            <a href="/pages/UltimateTechRevolution2035" className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              🌌 Interdimensional Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;