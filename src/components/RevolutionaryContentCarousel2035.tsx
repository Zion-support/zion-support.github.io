import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence systems that can think, feel, and create independently",
      icon: "🧠",
      features: ["Self-aware AI entities", "Emotional intelligence", "Creative problem solving", "Ethical decision making"],
      link: "/pages/UltimateTechBreakthrough2035",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Bridging quantum computing with human consciousness for unprecedented cognitive capabilities",
      icon: "⚡",
      features: ["Quantum-enhanced thinking", "Parallel consciousness", "Instant knowledge transfer", "Collective intelligence"],
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/50 to-blue-900/50"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions and realities",
      icon: "🌌",
      features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe computing", "Dimensional storage"],
      link: "/pages/NextGenInnovationHub2035",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      id: 4,
      title: "Neural Quantum Fusion",
      description: "The perfect fusion of neural interfaces and quantum computing for superhuman capabilities",
      icon: "🔮",
      features: ["Quantum neural networks", "Thought-based computing", "Instant skill acquisition", "Telepathic communication"],
      link: "/pages/UltimateTechBreakthrough2035",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/50 to-purple-900/50"
    },
    {
      id: 5,
      title: "Synthetic Reality",
      description: "Creating entirely new realities that are indistinguishable from our own",
      icon: "🎭",
      features: ["Perfect reality simulation", "Custom universe creation", "Immersive experiences", "Reality manipulation"],
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-rose-600 to-pink-600",
      bgColor: "from-rose-900/50 to-pink-900/50"
    },
    {
      id: 6,
      title: "Transcendent Intelligence",
      description: "Intelligence that transcends all known limitations and boundaries",
      icon: "🌟",
      features: ["Infinite processing", "Omniscient knowledge", "Perfect predictions", "Universal problem solving"],
      link: "/pages/NextGenInnovationHub2035",
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-900/50 to-orange-900/50"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2035
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Revolutionary Technology 2035</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
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
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-2xl p-8 md:p-12`}>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-6xl">{slide.icon}</div>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
                            <p className="text-lg opacity-90">{slide.description}</p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          <h4 className="text-xl font-semibold">Key Features:</h4>
                          <ul className="space-y-2">
                            {slide.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href={slide.link}
                            className={`bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                          >
                            Explore Technology →
                          </a>
                          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="text-center">
                        <div className="text-9xl mb-4 opacity-80">{slide.icon}</div>
                        <div className="text-2xl font-bold mb-4">{slide.title}</div>
                        <div className="grid grid-cols-2 gap-4">
                          {slide.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="bg-white/10 rounded-lg p-3 text-sm">
                              {feature}
                            </div>
                          ))}
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

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
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

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{slide.icon}</div>
                  <h4 className="text-lg font-semibold">{slide.title}</h4>
                </div>
                <p className="text-sm opacity-90 mb-4">{slide.description}</p>
                <a
                  href={slide.link}
                  className={`inline-block bg-gradient-to-r ${slide.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">
            Join us in exploring the most revolutionary technologies ever created
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2035" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Breakthroughs →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2035" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              View Showcase →
            </a>
            <a href="/pages/NextGenInnovationHub2035" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Innovation Hub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;