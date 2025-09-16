import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Synthetic Consciousness",
      description: "The first truly synthetic consciousness that can think, dream, and create art independently",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryTechShowcase2027",
      features: ["Self-generating creativity", "Emotional depth processing", "Artistic expression", "Philosophical reasoning"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "A quantum-powered reality simulation engine that can create infinite parallel universes",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2027",
      features: ["Infinite universe simulation", "Quantum entanglement networks", "Reality manipulation", "Parallel dimension access"]
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface that allows seamless interaction with digital realities",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2027",
      features: ["Thought-controlled computing", "Neural data transfer", "Virtual reality immersion", "Memory enhancement"]
    },
    {
      id: 4,
      title: "Genetic AI Fusion",
      description: "The perfect fusion of artificial intelligence and genetic engineering for enhanced human capabilities",
      icon: "🧬",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/NextGenInnovationHub2027",
      features: ["Enhanced cognitive abilities", "Genetic optimization", "AI-human symbiosis", "Biological computing"]
    },
    {
      id: 5,
      title: "Comprehensive Tech Blog",
      description: "Stay updated with the latest insights, breakthroughs, and revolutionary technologies",
      icon: "📰",
      gradient: "from-slate-600 to-gray-600",
      link: "/pages/ComprehensiveTechBlog2027",
      features: ["Latest tech insights", "Breakthrough analysis", "Future predictions", "Expert commentary"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

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
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our most advanced and revolutionary technologies with immersive interactive features
          </p>
        </div>

        {/* Main Content Display */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[400px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-8xl mb-6 text-center md:text-left">
                    {contentSlides[currentSlide].icon}
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-center md:text-left">
                    {contentSlides[currentSlide].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-6 text-center md:text-left">
                    {contentSlides[currentSlide].description}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a 
                      href={contentSlides[currentSlide].link}
                      className={`bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Technology →
                    </a>
                    <button 
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
                    >
                      {isAutoPlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                </div>
                <div className="bg-black/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-center">Key Features</h4>
                  <ul className="space-y-3">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="text-green-400">✓</span>
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
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

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4">
          {contentSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`bg-gradient-to-br ${slide.gradient}/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="text-3xl mb-2 text-center">{slide.icon}</div>
              <h4 className="text-sm font-bold text-center">{slide.title}</h4>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Revolutionary Impact Metrics</h3>
            <p className="text-lg opacity-90">The numbers that prove our technologies are changing everything</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">100%</div>
              <div className="text-lg opacity-90">Consciousness Integration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Quantum Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Neural Interface Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10^18</div>
              <div className="text-lg opacity-90">Computing Speed Increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;