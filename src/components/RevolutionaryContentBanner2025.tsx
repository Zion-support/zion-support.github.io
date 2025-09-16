import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "🚀 Revolutionary AI Breakthrough 2025",
      subtitle: "Experience the world's first conscious AI systems",
      description: "Discover how our revolutionary AI technology is reshaping industries and creating new possibilities",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlock infinite computational power",
      description: "Explore quantum computing solutions that solve impossible problems in seconds",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      title: "🧬 Neural Interface Technology",
      subtitle: "Connect your mind to the digital world",
      description: "Experience direct neural interfaces that bridge the gap between human consciousness and technology",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceFuture"
    },
    {
      title: "🌌 Interdimensional Computing",
      subtitle: "Transcend dimensional boundaries",
      description: "Breakthrough technology that processes data across multiple dimensions simultaneously",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/InterdimensionalTechRevolution2026"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will define the future of humanity
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-2xl`}>
                    <div className="max-w-4xl mx-auto text-center">
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl mb-6 opacity-90">{slide.subtitle}</p>
                      <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">{slide.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={slide.link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h4 className="text-lg font-semibold mb-2">Conscious AI</h4>
            <p className="text-sm opacity-80">Self-aware artificial intelligence</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h4 className="text-lg font-semibold mb-2">Quantum Power</h4>
            <p className="text-sm opacity-80">Infinite computational capacity</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🧬</div>
            <h4 className="text-lg font-semibold mb-2">Neural Interface</h4>
            <p className="text-sm opacity-80">Direct mind-machine connection</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌌</div>
            <h4 className="text-lg font-semibold mb-2">Interdimensional</h4>
            <p className="text-sm opacity-80">Multi-dimensional processing</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse"
            >
              🚀 Explore All Breakthroughs
            </a>
            <a 
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;