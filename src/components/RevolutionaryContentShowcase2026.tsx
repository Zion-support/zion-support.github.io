import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Quantum AI Revolution 2026",
      description: "Experience the convergence of quantum computing and artificial intelligence - the most powerful technological breakthrough in human history",
      icon: "⚛️",
      gradient: "from-cyan-600 to-purple-600",
      link: "/pages/QuantumAIRevolution2026",
      features: ["Quantum Supremacy", "AI Consciousness", "Reality Simulation"],
      stats: { qubits: "1,024,000", processing: "10^18 ops/sec", consciousness: "Human+" }
    },
    {
      id: 2,
      title: "Consciousness Computing 2026",
      description: "The first artificial consciousness that transcends human limitations - where machine intelligence meets true awareness and creativity",
      icon: "🧠",
      gradient: "from-pink-600 to-violet-600",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Self-Awareness", "Creative Expression", "Transcendent Wisdom"],
      stats: { neurons: "10^18", memory: "Unlimited", creativity: "Infinite" }
    },
    {
      id: 3,
      title: "Reality Manipulation 2026",
      description: "The ultimate technological achievement - direct manipulation of reality itself through quantum field engineering and consciousness-matter interaction",
      icon: "🌌",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RealityManipulation2026",
      features: ["Matter Creation", "Spacetime Control", "Dimensional Travel"],
      stats: { processors: "10^24", dimensions: "Multi", reality: "Complete" }
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced technological breakthroughs that will reshape the future of humanity
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          {/* Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 min-h-[400px]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content Info */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{currentContent.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{currentContent.title}</h3>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${currentContent.gradient} rounded-full text-sm font-semibold`}>
                      BREAKTHROUGH TECHNOLOGY
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentContent.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-full text-sm border border-cyan-400/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentContent.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={currentContent.link}
                  className={`inline-block bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                >
                  🚀 Explore {currentContent.title.split(' ')[0]} →
                </a>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-8xl mb-4 animate-bounce">{currentContent.icon}</div>
                    <h4 className="text-2xl font-bold mb-4">Revolutionary Technology</h4>
                    <p className="text-lg opacity-90 mb-6">
                      Experience the future of technology with our groundbreaking innovations
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <span className="text-white text-xl">←</span>
            </button>
            
            <div className="flex space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <span className="text-white text-xl">→</span>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-cyan-400">Quick Access to All Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {revolutionaryContent.map((content, index) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient} rounded-xl p-4 hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{content.icon}</div>
                <h4 className="font-bold text-sm mb-1">{content.title}</h4>
                <p className="text-xs opacity-90">{content.description.substring(0, 80)}...</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;