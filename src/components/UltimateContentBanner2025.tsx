import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2025",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Technology",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2025",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2025",
      subtitle: "Interactive Demos • Live Technology • Future Experience",
      description: "Interactive showcase of cutting-edge technologies with live demonstrations and real-time demos",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      icon: "🔬"
    },
    {
      title: "🧠 Advanced AI Transformation 2025",
      subtitle: "Conscious AI • Neural Networks • Human-AI Collaboration",
      description: "Transform your organization with conscious AI systems that think, feel, and create like humans",
      link: "/pages/AdvancedAITransformation2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🤖"
    },
    {
      title: "🌌 Quantum Computing Revolution 2025",
      subtitle: "Quantum Consciousness • Reality Manipulation • Time-Space Control",
      description: "Direct neural interface with quantum computing for enhanced cognitive processing and reality control",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-violet-600 to-purple-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Discover our revolutionary new content featuring the most advanced technologies that will define the future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-6xl">{slide.icon}</span>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                            <p className="text-lg text-purple-200">{slide.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-lg text-white/90 mb-6">{slide.description}</p>
                        <div className="flex space-x-4">
                          <Link
                            to={slide.link}
                            className={`bg-gradient-to-r ${slide.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore Now →
                          </Link>
                          <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl p-6 border border-purple-400/30">
                        <h4 className="text-xl font-bold mb-4 text-center">🎮 Interactive Preview</h4>
                        <div className="bg-black/50 rounded-lg p-4 mb-4">
                          <div className="text-green-400 font-mono text-sm">
                            <div className="mb-2">$ Loading {slide.title}...</div>
                            <div className="text-gray-400">Initializing breakthrough technology...</div>
                            <div className="text-gray-400">Connecting to quantum networks...</div>
                            <div className="text-green-400">✓ Ready for exploration</div>
                          </div>
                        </div>
                        <p className="text-center text-sm text-white/80">
                          Click "Explore Now" to experience the full interactive demonstration
                        </p>
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
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">🚀 Quick Access to New Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {slides.map((slide, index) => (
              <Link
                key={index}
                to={slide.link}
                className={`bg-gradient-to-r ${slide.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center group`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {slide.icon}
                </div>
                <div className="font-semibold text-sm">{slide.title.split(' ').slice(0, 3).join(' ')}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-white/80">New Content Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-white/80">Interactive Demos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-white/80">Live Technology</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-sm text-white/80">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;