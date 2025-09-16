import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2026",
      description: "Experience the convergence of AI, quantum computing, and neural interfaces that will reshape our digital future forever.",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2026",
      features: ["Synthetic Intelligence", "Quantum Neural Fusion", "Neural Interface 2.0"],
      status: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Discover the most advanced AI breakthroughs including synthetic intelligence, quantum AI, and autonomous systems.",
      image: "🧠",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      features: ["Synthetic Intelligence", "Quantum AI", "Autonomous Systems"],
      status: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution 2026",
      description: "Enter the quantum realm where computing power transcends classical limits with exponential speed and unbreakable security.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Speed", "Quantum Cryptography", "Quantum AI"],
      status: "QUANTUM"
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces that enable seamless thought-to-action communication and memory enhancement.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive Reading", "Thought Control", "Memory Enhancement"],
      status: "FUTURE"
    },
    {
      id: 5,
      title: "Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - we're creating synthetic minds that think, learn, and evolve independently.",
      image: "🤖",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Self-evolving Networks", "Emotional Intelligence", "Creative Problem Solving"],
      status: "SYNTHETIC"
    },
    {
      id: 6,
      title: "Quantum Neural Fusion 2026",
      description: "The ultimate fusion of quantum computing and neural networks for unprecedented processing power and instant learning.",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Superposition", "Neural Entanglement", "Parallel Processing"],
      status: "FUSION"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced technology content ever created. 
            Discover innovations that will reshape our digital future.
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content Display */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content Info */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`px-4 py-2 bg-gradient-to-r ${currentContent.gradient} rounded-full text-white text-sm font-bold`}>
                    {currentContent.status}
                  </div>
                  <div className="text-6xl">{currentContent.image}</div>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6">
                  {currentContent.title}
                </h3>
                
                <p className="text-xl text-gray-300 mb-8">
                  {currentContent.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-2xl font-bold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={currentContent.link}
                    className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`}
                  >
                    Explore Now →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Side - Visual Display */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-12 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-8xl mb-8 animate-bounce">
                      {currentContent.image}
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-4">
                      {currentContent.title}
                    </h4>
                    <p className="text-white/90 text-lg mb-8">
                      {currentContent.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {currentContent.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <span className="text-white font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-4 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                : 'bg-gray-500/20 text-gray-400 border border-gray-400/30'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
          </button>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Quick Access to All Revolutionary Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {revolutionaryContent.map((content, index) => (
              <a
                key={content.id}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 ${
                  index === currentSlide ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="text-4xl mb-3">{content.image}</div>
                <h4 className="text-white font-bold text-sm mb-2">{content.title}</h4>
                <div className="text-white/80 text-xs">{content.status}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;