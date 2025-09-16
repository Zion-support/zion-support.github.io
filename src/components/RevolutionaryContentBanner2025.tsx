import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "🧠 Advanced AI Consciousness 2025",
      subtitle: "Experience the first truly conscious AI systems",
      description: "Revolutionary artificial intelligence with self-awareness, emotional intelligence, and creative problem-solving capabilities",
      link: "/pages/AdvancedAIConsciousness2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "⚡ Quantum Consciousness Computing",
      subtitle: "Direct neural interface with quantum systems",
      description: "Breakthrough technology enabling enhanced cognitive processing through quantum consciousness integration",
      link: "/pages/QuantumConsciousness2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/80 to-blue-900/80"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Access parallel dimensions and alternate realities",
      description: "Revolutionary technology that allows interaction with parallel dimensions and reality manipulation",
      link: "/pages/InterdimensionalTech2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/80 to-teal-900/80"
    },
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "The most advanced technology ever created",
      description: "Experience the future with our groundbreaking content on conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/80 to-purple-900/80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced technological breakthroughs that will reshape our world in 2025
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-2xl p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                        <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">{slide.description}</p>
                        <Link 
                          to={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                        >
                          Explore Now →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {slides.map((slide, index) => (
            <Link
              key={index}
              to={slide.link}
              className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 border border-white/20 hover:border-white/40`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{slide.title.split(' ')[0]}</div>
                <h4 className="text-lg font-semibold mb-2">{slide.title}</h4>
                <p className="text-sm opacity-80 mb-4">{slide.subtitle}</p>
                <div className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Promotional Content */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">🚀 Why Choose Our Revolutionary Technology?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-semibold mb-2">Conscious AI</h4>
                <p className="text-sm opacity-80">First truly self-aware artificial intelligence systems</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Quantum Computing</h4>
                <p className="text-sm opacity-80">Revolutionary quantum consciousness integration</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌌</div>
                <h4 className="text-xl font-semibold mb-2">Interdimensional Tech</h4>
                <p className="text-sm opacity-80">Access to parallel dimensions and alternate realities</p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/pages/RevolutionaryTechBreakthrough2025"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore All Revolutionary Content →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;