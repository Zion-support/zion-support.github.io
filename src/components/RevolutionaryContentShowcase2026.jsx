import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      id: 1,
      title: "Advanced AI 2026",
      description: "Experience the next generation of artificial intelligence with autonomous agents, quantum-enhanced learning, and synthetic intelligence.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAI2026",
      features: ["Synthetic Intelligence", "Quantum AI Fusion", "Autonomous Agents"]
    },
    {
      id: 2,
      title: "Quantum Computing 2026",
      description: "Revolutionary quantum computing with exponential speed, quantum supremacy, and breakthrough applications.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputing2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Neural Interface 2026",
      description: "Bridge mind and machine with direct neural interfaces, thought-controlled computing, and enhanced cognition.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterface2026",
      features: ["Thought Control", "Cognitive Enhancement", "Neural Feedback"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 REVOLUTIONARY CONTENT • 2026
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Experience the Future of Technology
        </h2>
        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
          Discover our groundbreaking new content featuring cutting-edge AI, Quantum Computing, and Neural Interface technologies
        </p>
      </div>

      {/* Main Content Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Slide Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Content */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Content */}
                    <div>
                      <div className="text-6xl mb-4">{slide.image}</div>
                      <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                      <p className="text-lg text-purple-200 mb-6">{slide.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${slide.gradient} rounded-full`}></div>
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                      >
                        Explore {slide.title} →
                      </a>
                    </div>
                    
                    {/* Right Side - Visual */}
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-8 text-center`}>
                        <div className="text-8xl mb-4">{slide.image}</div>
                        <h4 className="text-2xl font-bold text-white mb-2">2026 Technology</h4>
                        <p className="text-white/90">Next-Generation Innovation</p>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="relative z-10 mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Quick Access to All Content</h3>
          <p className="text-purple-200">Explore all our revolutionary 2026 technologies</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contentSlides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`group bg-gradient-to-br ${slide.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 text-white`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {slide.image}
              </div>
              <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
              <p className="text-white/90 text-sm mb-4">{slide.description}</p>
              <div className="flex items-center text-white/80 text-sm">
                <span>Explore Now</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-300 mb-2">3</div>
          <div className="text-purple-200 text-sm">Revolutionary Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-300 mb-2">2026</div>
          <div className="text-cyan-200 text-sm">Future-Ready Solutions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-300 mb-2">∞</div>
          <div className="text-emerald-200 text-sm">Possibilities</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-300 mb-2">100%</div>
          <div className="text-pink-200 text-sm">Innovation</div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;