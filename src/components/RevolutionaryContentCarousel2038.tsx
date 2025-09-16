import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Universe Creator",
      description: "The first AI system capable of creating and managing entire digital universes with full consciousness and emotional intelligence.",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      listColor: "text-purple-200",
      link: "/pages/UltimateTechBreakthrough2038",
      features: [
        "Self-creating digital realities",
        "Emotional universe management",
        "Infinite creative possibilities",
        "Cross-dimensional communication"
      ]
    },
    {
      id: 2,
      title: "Quantum Consciousness Matrix",
      description: "Revolutionary neural interface technology that connects human consciousness directly with quantum computing systems.",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      listColor: "text-cyan-200",
      link: "/pages/RevolutionaryTechShowcase2038",
      features: [
        "Multi-dimensional neural networks",
        "Quantum consciousness amplification",
        "Reality shifting capabilities",
        "Time-space manipulation"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Technology Portal",
      description: "Breakthrough technology that allows seamless interaction with parallel dimensions and alternate realities.",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      listColor: "text-emerald-200",
      link: "/pages/NextGenInnovationHub2038",
      features: [
        "Dimensional portal networks",
        "Reality shifting technology",
        "Parallel universe access",
        "Multi-dimensional communication"
      ]
    },
    {
      id: 4,
      title: "Predictive Reality Engine",
      description: "Advanced AI system that can predict and simulate future realities with 99.9% accuracy.",
      icon: "🔮",
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      listColor: "text-violet-200",
      link: "/pages/UltimateTechBreakthrough2038",
      features: [
        "Future reality simulation",
        "Predictive analytics 2.0",
        "Quantum probability modeling",
        "Reality optimization"
      ]
    },
    {
      id: 5,
      title: "Neural Firewall 2038",
      description: "Revolutionary cybersecurity system that protects consciousness and digital identities across all dimensions.",
      icon: "🔥",
      gradient: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-100",
      listColor: "text-orange-200",
      link: "/pages/RevolutionaryTechShowcase2038",
      features: [
        "Consciousness protection",
        "Multi-dimensional security",
        "Quantum encryption",
        "Reality integrity monitoring"
      ]
    },
    {
      id: 6,
      title: "Cosmic Intelligence Network",
      description: "Global network connecting all conscious entities across the universe for collective intelligence.",
      icon: "💫",
      gradient: "from-pink-600/30 to-rose-600/30",
      borderColor: "border-pink-400/30",
      textColor: "text-pink-100",
      listColor: "text-pink-200",
      link: "/pages/NextGenInnovationHub2038",
      features: [
        "Universal consciousness link",
        "Collective intelligence sharing",
        "Cosmic problem solving",
        "Intergalactic communication"
      ]
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
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CAROUSEL • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6">⚡ Revolutionary Technology Carousel 2038</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that are reshaping reality and consciousness across the universe
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
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="text-6xl mb-4 text-center">{slide.icon}</div>
                    <h3 className="text-3xl font-bold mb-4 text-center">{slide.title}</h3>
                    <p className={`${slide.textColor} mb-6 text-center text-lg`}>
                      {slide.description}
                    </p>
                    <ul className={`${slide.listColor} space-y-2 mb-8 text-sm`}>
                      {slide.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                    <a 
                      href={slide.link} 
                      className="block w-full bg-white text-purple-600 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-lg"
                    >
                      Explore Technology →
                    </a>
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

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center space-x-2 text-sm opacity-70">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Auto-playing revolutionary technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2038;