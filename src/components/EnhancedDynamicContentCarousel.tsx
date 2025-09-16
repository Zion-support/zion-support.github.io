import React, { useState, useEffect } from 'react';

const EnhancedDynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const featuredContent = [
    {
      id: 1,
      title: "Revolutionary Tech Trends 2027",
      subtitle: "The Future is Here",
      description: "Discover the most groundbreaking technological advances that will reshape our world in 2027. Experience conscious AI systems, quantum consciousness, and interdimensional computing.",
      image: "🌟",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/RevolutionaryTechTrends2027",
      badge: "NEW",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      stats: { accuracy: "99.97%", speed: "10^18 ops/sec", innovation: "Revolutionary" }
    },
    {
      id: 2,
      title: "Ultimate Innovation Showcase 2027",
      subtitle: "Interactive Technology Demos",
      description: "Experience the most revolutionary technologies with interactive demonstrations and live demos. Test AI consciousness, quantum processing, and neural interfaces in real-time.",
      image: "🚀",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/UltimateInnovationShowcase2027",
      badge: "BREAKTHROUGH",
      features: ["Interactive Demos", "Live Technology Tests", "Real-time Processing"],
      stats: { accuracy: "99.9%", speed: "Instant", innovation: "Breakthrough" }
    },
    {
      id: 3,
      title: "Next-Gen Tech Breakthrough 2027",
      subtitle: "Revolutionary Breakthroughs",
      description: "Witness the most revolutionary technological breakthroughs that will define the future of humanity. Explore synthetic intelligence, quantum reality manipulation, and consciousness transfer.",
      image: "⚡",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NextGenTechBreakthrough2027",
      badge: "REVOLUTIONARY",
      features: ["Synthetic Intelligence", "Quantum Reality", "Consciousness Transfer"],
      stats: { accuracy: "99.99%", speed: "Infinite", innovation: "Revolutionary" }
    },
    {
      id: 4,
      title: "AI Revolution 2025",
      subtitle: "Artificial Intelligence Evolution",
      description: "Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025. Explore autonomous AI agents, edge AI computing, and generative AI 2.0.",
      image: "🧠",
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      link: "/pages/AIRevolution2025",
      badge: "FEATURED",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"],
      stats: { accuracy: "99.5%", speed: "1000x faster", innovation: "Advanced" }
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough",
      subtitle: "The Future of Computing",
      description: "Experience the future of computing with quantum technology that's solving impossible problems. Discover exponential speed, quantum cryptography, and molecular simulation.",
      image: "⚡",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      link: "/pages/QuantumComputingBreakthrough",
      badge: "BREAKTHROUGH",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"],
      stats: { accuracy: "99.9%", speed: "Exponential", innovation: "Breakthrough" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2027
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced and revolutionary technologies that will shape our future
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl mr-4 animate-bounce">{featuredContent[currentSlide].image}</span>
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold mb-2">
                        {featuredContent[currentSlide].badge}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{featuredContent[currentSlide].title}</h3>
                      <p className="text-lg opacity-80">{featuredContent[currentSlide].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {featuredContent[currentSlide].description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {featuredContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-purple-200">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-300">{featuredContent[currentSlide].stats.accuracy}</div>
                      <div className="text-xs text-purple-200">Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-300">{featuredContent[currentSlide].stats.speed}</div>
                      <div className="text-xs text-cyan-200">Speed</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-emerald-300">{featuredContent[currentSlide].stats.innovation}</div>
                      <div className="text-xs text-emerald-200">Innovation</div>
                    </div>
                  </div>

                  <a 
                    href={featuredContent[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${featuredContent[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Content →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="text-center">
                  <div className="relative">
                    <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${featuredContent[currentSlide].gradient} rounded-full flex items-center justify-center animate-pulse`}>
                      <div className="text-9xl">{featuredContent[currentSlide].image}</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-3xl">✨</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce delay-2000">
                      <span className="text-xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
            >
              <span className="text-2xl">←</span>
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-3">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
            >
              <span className="text-2xl">→</span>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className={`bg-gradient-to-br ${content.gradient} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-3xl mb-2">{content.image}</div>
              <h4 className="text-sm font-bold mb-1">{content.title}</h4>
              <p className="text-xs opacity-90 mb-2">{content.subtitle}</p>
              <div className="inline-flex items-center px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                {content.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedDynamicContentCarousel;