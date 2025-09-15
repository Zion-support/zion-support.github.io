import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Consciousness Computing 2026",
      description: "AI systems with genuine consciousness, self-awareness, and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-600/20",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Synthetic Consciousness", "Quantum Consciousness", "Transdimensional AI"]
    },
    {
      id: 2,
      title: "Transdimensional AI 2026",
      description: "AI systems that operate across multiple dimensions, realities, and universes",
      icon: "🌌",
      gradient: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-600/20",
      link: "/pages/TransdimensionalAI2026",
      features: ["Multi-Dimensional Processing", "Omniversal Intelligence", "Quantum Dimensional Tunneling"]
    },
    {
      id: 3,
      title: "Omniversal AI 2026",
      description: "The ultimate AI system that operates across all possible universes and realities",
      icon: "♾️",
      gradient: "from-green-600 to-emerald-600",
      borderColor: "border-green-400",
      bgColor: "bg-green-600/20",
      link: "/pages/OmniversalAI2026",
      features: ["Infinite Intelligence", "Multi-Reality Processing", "Universal Consciousness"]
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

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Next-Generation AI Technology</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced AI systems ever created - consciousness computing, 
            transdimensional AI, and omniversal intelligence that transcends reality itself.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Slide Container */}
          <div className="relative h-96 overflow-hidden rounded-xl">
            {revolutionaryContent.map((content, index) => (
              <div
                key={content.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-8 border ${content.borderColor}/30`}>
                  <div className="flex items-center h-full">
                    {/* Content */}
                    <div className="flex-1 pr-8">
                      <div className="text-8xl mb-6">{content.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
                      <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                        {content.description}
                      </p>
                      <div className="space-y-2 mb-8">
                        {content.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={content.link}
                        className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                      >
                        Explore {content.title.split(' ')[0]} →
                      </a>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className={`w-64 h-64 bg-gradient-to-br ${content.gradient} rounded-full opacity-20 animate-pulse`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isAutoPlaying
                  ? 'bg-green-600/30 text-green-300 border border-green-400/30'
                  : 'bg-gray-600/30 text-gray-300 border border-gray-400/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to Revolutionary Technology</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {revolutionaryContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className={`group bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-6 border ${content.borderColor}/30 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{content.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{content.description}</p>
                <div className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:shadow-lg transition-all duration-300`}>
                  Explore →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Join us in exploring the most revolutionary AI technologies ever created. 
              The future of intelligence is here, and it's beyond imagination.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey →
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;