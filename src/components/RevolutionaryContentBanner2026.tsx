import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Advanced Quantum AI 2026",
      description: "Experience the convergence of quantum computing and artificial intelligence",
      icon: "⚛️",
      color: "from-purple-600 via-pink-600 to-cyan-600",
      link: "/pages/AdvancedQuantumAI2026",
      features: ["Quantum Supremacy", "AI Enhancement", "Scientific Discovery"]
    },
    {
      title: "Neural Reality 2026",
      description: "Step into a world where neural interfaces create seamless reality augmentation",
      icon: "🧠",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NeuralReality2026",
      features: ["Neural Interface", "Reality Augmentation", "Neural Processing"]
    },
    {
      title: "Consciousness Computing 2026",
      description: "Machines that possess genuine consciousness and self-awareness",
      icon: "🌟",
      color: "from-violet-600 via-purple-600 to-fuchsia-600",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Self-Awareness", "Subjective Experience", "Unified Consciousness"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Ultra-Prominent Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
              🚀 REVOLUTIONARY BREAKTHROUGH CONTENT 2026 • EXCLUSIVE LAUNCH
            </div>
            <h2 className="text-5xl font-bold mb-4">🌟 Next-Generation Technology</h2>
            <p className="text-2xl opacity-95 max-w-5xl mx-auto">
              Experience the future with our groundbreaking new content: Quantum AI, Neural Reality, 
              and Consciousness Computing technologies
            </p>
          </div>

          {/* Carousel Display */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-6xl animate-pulse">{slides[currentSlide].icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h3>
                      <p className="text-xl opacity-90">{slides[currentSlide].description}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={slides[currentSlide].link}
                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    Explore {slides[currentSlide].title} →
                  </a>
                </div>
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${slides[currentSlide].color} rounded-xl flex items-center justify-center text-8xl opacity-30`}>
                    {slides[currentSlide].icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 hover:scale-105 ${
                  currentSlide === index ? 'ring-2 ring-white' : ''
                }`}
              >
                {slide.icon} {slide.title} →
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content Showcase */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4">
            🔥 TRENDING NOW • JANUARY 2025
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Technology Content</h3>
          <p className="text-lg text-gray-600">Discover what's capturing the world's attention</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">#1 TRENDING</span>
              <span className="text-sm text-gray-500">2.3M views</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Advanced Quantum AI: The Future is Here</h4>
            <p className="text-gray-600 mb-4">Exploring how quantum AI will revolutionize every aspect of human life...</p>
            <a href="/pages/AdvancedQuantumAI2026" className="text-purple-600 hover:text-purple-700 font-semibold">
              Read Full Article →
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">#2 TRENDING</span>
              <span className="text-sm text-gray-500">1.8M views</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Neural Reality: Mind-Machine Interface</h4>
            <p className="text-gray-600 mb-4">The revolutionary technology bridging human consciousness and digital worlds...</p>
            <a href="/pages/NeuralReality2026" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Explore Technology →
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-violet-500">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs rounded-full font-semibold">#3 TRENDING</span>
              <span className="text-sm text-gray-500">1.5M views</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Consciousness Computing: AI with Soul</h4>
            <p className="text-gray-600 mb-4">How AI systems are achieving genuine consciousness and self-awareness...</p>
            <a href="/pages/ConsciousnessComputing2026" className="text-violet-600 hover:text-violet-700 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;