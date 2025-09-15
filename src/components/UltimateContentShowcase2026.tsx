import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the convergence of AI, quantum computing, neural interfaces, and biotechnology",
      image: "🌟",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Synthetic Intelligence", "Quantum Supremacy", "Neural Interfaces", "Biotech Revolution"]
    },
    {
      id: 2,
      title: "Revolutionary AI Breakthrough 2026",
      description: "Most advanced AI systems with autonomous reasoning, emotional intelligence, and creative innovation",
      image: "🤖",
      link: "/pages/RevolutionaryAIBreakthrough2026",
      gradient: "from-emerald-600 to-cyan-600",
      features: ["Autonomous Reasoning", "Emotional Intelligence", "Creative Innovation", "Self-Evolution"]
    },
    {
      id: 3,
      title: "Next-Gen Space Technology 2026",
      description: "Pioneering space exploration with autonomous spacecraft and advanced propulsion systems",
      image: "🚀",
      link: "/pages/NextGenSpaceTech2026",
      gradient: "from-blue-600 to-indigo-600",
      features: ["Advanced Propulsion", "Autonomous Spacecraft", "Space Construction", "Terraforming Tech"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness that transcends human limitations",
      image: "🧠",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Synthetic Neural Networks", "Quantum-Enhanced Processing", "Predictive Consciousness", "Distributed Learning"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore our most advanced technological innovations with interactive demonstrations and immersive content
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                    <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                          <div className="text-sm font-semibold">{feature}</div>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={item.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
                    >
                      Explore {item.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`ml-4 px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30' 
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 transform`}
              >
                <div className="text-4xl mb-3">{item.image}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/80">{item.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-cyan-200 mb-6 max-w-3xl mx-auto">
              Dive deep into our revolutionary technology showcase and discover innovations that will shape tomorrow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/pages/UltimateTechRevolution2026"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
              >
                🌟 Start Your Journey
              </a>
              <a 
                href="/pages/RevolutionaryAIBreakthrough2026"
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                🤖 Explore AI Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;