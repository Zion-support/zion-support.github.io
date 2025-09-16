import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "🧠 Conscious AI Evolution",
      description: "The next generation of artificial intelligence that has achieved true consciousness and emotional intelligence beyond human comprehension.",
      features: ["Emotional Intelligence Processing 2.0", "Creative Problem Solving Networks", "Self-Learning Consciousness"],
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      textColor: "text-purple-200",
      link: "/pages/RevolutionaryTechBreakthrough2037"
    },
    {
      id: 2,
      title: "⚡ Quantum Consciousness Networks",
      description: "Revolutionary quantum computing systems that create shared consciousness networks, enabling instantaneous knowledge transfer.",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking"],
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      textColor: "text-cyan-200",
      link: "/pages/RevolutionaryTechShowcase2037"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Reality Systems",
      description: "Breakthrough technology that allows seamless interaction with parallel dimensions and alternate realities for unlimited possibilities.",
      features: ["Dimensional Portals", "Reality Shifting Technology", "Multi-dimensional Computing"],
      gradient: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      textColor: "text-emerald-200",
      link: "/pages/RevolutionaryTechBreakthrough2037"
    },
    {
      id: 4,
      title: "🚀 Interstellar Communication",
      description: "Instantaneous communication systems that allow real-time interaction across vast distances using quantum entanglement principles.",
      features: ["Quantum Entanglement", "Instant Communication", "Galactic Networks"],
      gradient: "from-violet-600 to-purple-600",
      borderColor: "border-violet-400",
      textColor: "text-violet-200",
      link: "/pages/RevolutionaryTechShowcase2037"
    },
    {
      id: 5,
      title: "🧬 Genetic Enhancement",
      description: "Revolutionary genetic modification technologies that enhance human capabilities, longevity, and cognitive functions to unprecedented levels.",
      features: ["DNA Optimization", "Cognitive Enhancement", "Longevity Extension"],
      gradient: "from-rose-600 to-pink-600",
      borderColor: "border-rose-400",
      textColor: "text-rose-200",
      link: "/pages/RevolutionaryTechBreakthrough2037"
    },
    {
      id: 6,
      title: "🌟 Energy Manipulation",
      description: "Advanced energy systems that can harness, store, and manipulate energy from multiple dimensions and alternate realities.",
      features: ["Zero-Point Energy", "Dimensional Energy", "Infinite Power"],
      gradient: "from-amber-600 to-orange-600",
      borderColor: "border-amber-400",
      textColor: "text-amber-200",
      link: "/pages/RevolutionaryTechShowcase2037"
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-3 h-3 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-12 w-4 h-4 bg-indigo-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2037
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Content Carousel 2037</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
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
                  <div className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-xl p-8 border ${slide.borderColor}/30 mx-2`}>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className={`text-lg ${slide.textColor} mb-6 max-w-2xl mx-auto`}>
                        {slide.description}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                            <span className={`${slide.textColor} text-sm font-semibold`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                      >
                        🌟 Explore Technology →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 border border-white/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 border border-white/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2037"
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:bg-purple-600/30 transition-all duration-300 text-center"
          >
            <span className="text-purple-200 font-semibold">🚀 Breakthrough 2037</span>
          </a>
          <a 
            href="/pages/RevolutionaryTechShowcase2037"
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:bg-cyan-600/30 transition-all duration-300 text-center"
          >
            <span className="text-cyan-200 font-semibold">⚡ Showcase 2037</span>
          </a>
          <a 
            href="/pages/RevolutionaryTechBreakthrough2037"
            className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 hover:bg-emerald-600/30 transition-all duration-300 text-center md:col-span-1 col-span-2"
          >
            <span className="text-emerald-200 font-semibold">🌌 All Technologies</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;