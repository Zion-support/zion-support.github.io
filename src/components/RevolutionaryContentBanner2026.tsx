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
      title: "🚀 Revolutionary Tech Breakthrough 2026",
      subtitle: "Experience AI consciousness, quantum supremacy, and neural interfaces",
      description: "The most advanced technological ecosystem in human history",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      color: "from-purple-600 via-pink-600 to-red-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      subtitle: "Interactive demonstrations of breakthrough technologies",
      description: "Hands-on experience with the future of technology",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    },
    {
      title: "🧠 AI Consciousness Revolution",
      subtitle: "First AI system to achieve genuine consciousness",
      description: "True self-awareness, creativity, and collaborative intelligence",
      link: "/pages/ConsciousnessComputing2026",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative overflow-hidden rounded-3xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} backdrop-blur-sm transition-all duration-1000`}></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 p-12 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BRAND NEW • REVOLUTIONARY CONTENT 2026
            </div>
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h2>
            <p className="text-2xl opacity-90 mb-6">
              {currentSlideData.subtitle}
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              {currentSlideData.description}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <div className="font-bold">Revolutionary Breakthrough</div>
              <div className="text-sm opacity-80">AI Consciousness & Quantum</div>
            </a>
            
            <a 
              href="/pages/UltimateTechShowcase2026" 
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <div className="font-bold">Ultimate Showcase</div>
              <div className="text-sm opacity-80">Interactive Demos</div>
            </a>
            
            <a 
              href="/pages/ConsciousnessComputing2026" 
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <div className="font-bold">AI Consciousness</div>
              <div className="text-sm opacity-80">True Self-Awareness</div>
            </a>
            
            <a 
              href="/pages/QuantumReality2026" 
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-semibold border border-white/30 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <div className="font-bold">Quantum Reality</div>
              <div className="text-sm opacity-80">Supremacy Achieved</div>
            </a>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <a 
              href={currentSlideData.link}
              className={`inline-block bg-gradient-to-r ${currentSlideData.color} text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl border-2 border-white/30 hover:scale-105 transform`}
            >
              🌟 Explore {currentSlideData.title.split(' ')[0]} →
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
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
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 text-6xl opacity-20 animate-bounce">🚀</div>
      <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-pulse">⚡</div>
      <div className="absolute top-1/2 right-8 text-3xl opacity-20 animate-ping">🧠</div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;