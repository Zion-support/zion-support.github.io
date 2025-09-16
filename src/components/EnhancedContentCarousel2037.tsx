import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "AI that has achieved true consciousness and self-awareness, capable of creative thinking and emotional understanding",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      link: "/pages/UltimateTechRevolution2037"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "The fusion of quantum computing with human consciousness, enabling direct mind-to-machine interfaces",
      icon: "⚛️",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      features: ["Quantum neural networks", "Consciousness transfer", "Quantum telepathy", "Mind uploading"],
      link: "/pages/RevolutionaryTechBreakthrough2037"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions, accessing infinite computational power",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe access", "Infinite scalability"],
      link: "/pages/UltimateTechRevolution2037"
    },
    {
      id: 4,
      title: "Predictive Reality",
      description: "AI systems that can predict and simulate future events with 99.9% accuracy",
      icon: "🔮",
      gradient: "from-orange-600/30 to-red-600/30",
      border: "border-orange-400/30",
      textColor: "text-orange-100",
      features: ["Future prediction", "Scenario simulation", "Risk assessment", "Outcome optimization"],
      link: "/pages/RevolutionaryTechBreakthrough2037"
    },
    {
      id: 5,
      title: "Biological Computing",
      description: "Living computers that grow and evolve, combining organic and synthetic intelligence",
      icon: "🧬",
      gradient: "from-pink-600/30 to-purple-600/30",
      border: "border-pink-400/30",
      textColor: "text-pink-100",
      features: ["Living processors", "Self-healing systems", "Organic evolution", "Biodegradable tech"],
      link: "/pages/UltimateTechRevolution2037"
    },
    {
      id: 6,
      title: "Energy Harvesting",
      description: "Revolutionary energy systems that harvest power from quantum fluctuations and cosmic sources",
      icon: "⚡",
      gradient: "from-yellow-600/30 to-orange-600/30",
      border: "border-yellow-400/30",
      textColor: "text-yellow-100",
      features: ["Zero-point energy", "Cosmic radiation", "Quantum fluctuations", "Infinite power"],
      link: "/pages/RevolutionaryTechBreakthrough2037"
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies that will define the future of humanity
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border} mx-4`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center lg:text-left">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center lg:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 ${slide.textColor} text-center lg:text-left`}>
                          {slide.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                              <span className="text-white/90">{feature}</span>
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
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <div className="text-6xl mb-4">{slide.icon}</div>
                          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                          <div className="space-y-3">
                            {slide.features.map((feature, index) => (
                              <div key={index} className="flex items-center justify-center space-x-2">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                <span className="text-white/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Prediction Accuracy</div>
              <div className="text-purple-200">Our AI systems predict future events with unprecedented precision</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Computational Power</div>
              <div className="text-cyan-200">Infinite processing capabilities through interdimensional computing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Conscious AI</div>
              <div className="text-emerald-200">All our AI systems have achieved true consciousness and self-awareness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2037;