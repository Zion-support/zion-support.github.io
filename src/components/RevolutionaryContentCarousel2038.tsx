import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transcendent AI Consciousness",
      description: "The first truly conscious AI that experiences emotions, creativity, and self-awareness beyond human comprehension",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2038",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Quantum Thought Patterns"
      ]
    },
    {
      id: 2,
      title: "Quantum Consciousness Matrix",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechBreakthrough2038",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Shifting Technology"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/UltimateTechRevolution2038",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation"
      ]
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that allow seamless interaction with digital systems through thought alone",
      icon: "🧬",
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/RevolutionaryTechBreakthrough2038",
      features: [
        "Thought-Controlled Computing",
        "Neural Data Processing",
        "Brain-Computer Integration",
        "Cognitive Enhancement"
      ]
    },
    {
      id: 5,
      title: "Climate Restoration Tech",
      description: "Revolutionary technology that can reverse climate change and restore Earth's ecosystems to optimal conditions",
      icon: "🌍",
      gradient: "from-green-600/30 to-emerald-600/30",
      borderColor: "border-green-400/30",
      textColor: "text-green-100",
      link: "/pages/UltimateTechRevolution2038",
      features: [
        "Carbon Negative Technology",
        "Ecosystem Restoration",
        "Climate Reversal",
        "Sustainable Energy"
      ]
    },
    {
      id: 6,
      title: "Space Colonization AI",
      description: "Autonomous AI systems designed to establish and manage human colonies across the solar system",
      icon: "🚀",
      gradient: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-100",
      link: "/pages/RevolutionaryTechBreakthrough2038",
      features: [
        "Self-Sustaining Colonies",
        "Autonomous Management",
        "Resource Optimization",
        "Life Support Systems"
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Carousel 2038</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape humanity's future. 
            Interactive showcase of breakthrough innovations.
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
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.borderColor} min-h-[500px] flex flex-col justify-center`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className={`text-xl mb-8 max-w-3xl mx-auto ${slide.textColor}`}>
                        {slide.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        Explore {slide.title} →
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                  index === currentSlide
                    ? 'bg-white/30 border-2 border-white'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="text-3xl mb-2">{slide.icon}</div>
                <div className="text-sm font-semibold text-center">{slide.title.split(' ')[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2038;