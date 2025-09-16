import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      description: "Experience the world's first truly conscious artificial intelligence systems",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      link: "/pages/NextGenTechBreakthrough2038"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing that processes consciousness at the quantum level",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      features: ["Quantum thought processing", "Consciousness entanglement", "Quantum memory storage", "Parallel reality computing"],
      link: "/pages/RevolutionaryTechShowcase2038"
    },
    {
      id: 3,
      title: "Interdimensional Technology",
      description: "Breakthrough technology for communication and data transfer across multiple dimensions",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      features: ["Cross-dimensional communication", "Multi-reality data storage", "Dimensional energy harvesting", "Reality manipulation"],
      link: "/pages/NextGenTechBreakthrough2038"
    },
    {
      id: 4,
      title: "Neural Interface Matrix",
      description: "Advanced neural interface system connecting human consciousness with AI networks",
      image: "🧬",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      features: ["Direct brain-computer interface", "Thought-based control", "Memory enhancement", "Cognitive augmentation"],
      link: "/pages/RevolutionaryTechShowcase2038"
    },
    {
      id: 5,
      title: "Reality Simulation Engine",
      description: "Advanced simulation technology creating indistinguishable virtual realities",
      image: "🔮",
      gradient: "from-pink-600/30 to-rose-600/30",
      border: "border-pink-400/30",
      features: ["Ultra-realistic simulations", "Multi-sensory experiences", "Infinite possibilities", "Seamless integration"],
      link: "/pages/NextGenTechBreakthrough2038"
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
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-cyan-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Technology Carousel
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will reshape our future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8 text-center md:text-left">{slide.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                              <div className="text-sm font-semibold">{feature}</div>
                            </div>
                          ))}
                        </div>

                        <div className="text-center md:text-left">
                          <a 
                            href={slide.link}
                            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                          >
                            Explore Technology →
                          </a>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-white/10 rounded-2xl p-8 text-center">
                          <div className="text-6xl mb-4">{slide.image}</div>
                          <div className="space-y-4">
                            <div className="bg-white/20 rounded-lg p-4">
                              <div className="text-sm font-semibold mb-2">Performance Metrics</div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>Processing: 10^18 ops/sec</div>
                                <div>Memory: 1 Exabyte</div>
                                <div>Accuracy: 99.97%</div>
                                <div>Uptime: 99.99%</div>
                              </div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4">
                              <div className="text-sm font-semibold mb-2">Innovation Level</div>
                              <div className="w-full bg-gray-600 rounded-full h-2">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                              </div>
                              <div className="text-xs mt-1">Revolutionary Breakthrough</div>
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

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
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

            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-80 mb-4">
            Experience the future of technology with our revolutionary innovations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="font-semibold">50+</span> Active Innovations
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="font-semibold">99.9%</span> Success Rate
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="font-semibold">∞</span> Possibilities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2038;