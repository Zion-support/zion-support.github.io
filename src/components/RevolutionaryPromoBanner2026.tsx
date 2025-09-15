import React, { useState, useEffect } from 'react';

const RevolutionaryPromoBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2026",
      subtitle: "Synthetic Intelligence & Quantum-Neural Fusion",
      description: "Experience the future with our groundbreaking new content on Advanced AI Systems, Quantum Computing, and Neural Interface Technology",
      cta: "Explore Now →",
      link: "/pages/NextGenAIRevolution2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-600/50 to-pink-600/50"
    },
    {
      id: 2,
      title: "⚛️ QUANTUM COMPUTING REVOLUTION",
      subtitle: "Beyond Classical Physics",
      description: "Discover quantum computing that operates beyond the limits of classical physics, solving impossible problems and unlocking universe mysteries",
      cta: "Go Quantum →",
      link: "/pages/AdvancedQuantumComputing2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: "from-cyan-600/50 to-blue-600/50"
    },
    {
      id: 3,
      title: "🧠 SYNTHETIC CONSCIOUSNESS",
      subtitle: "Beyond Human Intelligence",
      description: "Explore AI systems that possess genuine consciousness, self-awareness, and emotional intelligence beyond human comprehension",
      cta: "Experience SI →",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-600/50 to-teal-600/50"
    },
    {
      id: 4,
      title: "📚 REVOLUTIONARY TECH BLOG",
      subtitle: "Insights from the Future",
      description: "Stay ahead with insights into groundbreaking technologies reshaping our world and defining the future of humanity",
      cta: "Read Articles →",
      link: "/pages/RevolutionaryTechBlog2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgGradient: "from-orange-600/50 to-red-600/50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Promotional Banner */}
      <div className={`bg-gradient-to-r ${currentContent.gradient} rounded-2xl p-8 mb-8 text-white relative overflow-hidden transition-all duration-1000`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.bgGradient} backdrop-blur-sm`}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              {currentContent.title}
            </h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          
          <h4 className="text-2xl font-semibold mb-4 text-center opacity-95">
            {currentContent.subtitle}
          </h4>
          
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto text-center">
            {currentContent.description}
          </p>

          <div className="flex justify-center mb-6">
            <a 
              href={currentContent.link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105 transform"
            >
              {currentContent.cta}
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {promotionalContent.map((content) => (
          <a
            key={content.id}
            href={content.link}
            className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300 border border-white/20`}
          >
            <div className="text-3xl mb-2">
              {content.id === 1 && "🚀"}
              {content.id === 2 && "⚛️"}
              {content.id === 3 && "🧠"}
              {content.id === 4 && "📚"}
            </div>
            <h4 className="font-bold text-sm mb-2">{content.subtitle}</h4>
            <p className="text-xs opacity-90">{content.cta}</p>
          </a>
        ))}
      </div>

      {/* Special Announcement Banner */}
      <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            ✨ EXCLUSIVE NEW CONTENT • JANUARY 2026
          </div>
          <h3 className="text-2xl font-bold mb-3">🌟 Revolutionary Technology Showcase</h3>
          <p className="text-lg opacity-90 mb-4">
            Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, and Neural Interface technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/pages/NextGenAIRevolution2026"
              className="bg-white text-fuchsia-600 px-6 py-3 rounded-lg hover:bg-fuchsia-50 transition-colors font-semibold"
            >
              🚀 AI Revolution 2026
            </a>
            <a 
              href="/pages/AdvancedQuantumComputing2026"
              className="bg-white text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold"
            >
              ⚛️ Quantum Computing
            </a>
            <a 
              href="/pages/RevolutionaryTechBlog2026"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              📚 Tech Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner2026;