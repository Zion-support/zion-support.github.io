import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Witness groundbreaking technological breakthroughs that will revolutionize every aspect of human life",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Neural Quantum Fusion", "Reality Engine", "Quantum Consciousness"]
    },
    {
      id: 3,
      title: "AI Revolution 2025",
      description: "Discover how artificial intelligence is reshaping industries and creating new opportunities",
      image: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AIRevolution2025",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough",
      description: "Experience the future of computing with quantum technology that's solving impossible problems",
      image: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumComputingBreakthrough",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 5,
      title: "Neural Interface Future",
      description: "Bridge the gap between mind and machine with direct neural interfaces",
      image: "🧬",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralInterfaceFuture",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our most advanced and revolutionary content through an interactive carousel experience
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${item.gradient} rounded-2xl p-12 flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    <div>
                      <div className="text-8xl mb-6">{item.image}</div>
                      <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl opacity-90 mb-6">{item.description}</p>
                      <ul className="space-y-2 mb-8">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="opacity-90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={item.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Content →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4">Interactive Features</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Real-time Processing</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            <span>Interactive Demos</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                            <span>Immersive Experience</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                            <span>Revolutionary Technology</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentItems.map((_, index) => (
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
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {contentItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 ${
                  index === currentSlide ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="text-4xl mb-3">{item.image}</div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs opacity-90">{item.description.substring(0, 60)}...</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;