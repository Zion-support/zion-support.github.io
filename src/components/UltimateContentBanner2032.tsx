import React, { useState, useEffect } from 'react';

const UltimateContentBanner2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2032",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      icon: "🌟",
      link: "/pages/UltimateTechRevolution2032",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2032",
      description: "Interactive demonstrations of cutting-edge technologies",
      icon: "⚡",
      link: "/pages/RevolutionaryTechShowcase2032",
      color: "from-cyan-600 to-blue-600",
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2032",
      description: "Discover and explore revolutionary technologies",
      icon: "🧠",
      link: "/pages/NextGenInnovationHub2032",
      color: "from-emerald-600 to-teal-600",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Tech Breakthrough 2032</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world in 2032
          </p>
          
          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-4 text-sm mb-8">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Live Now
            </span>
            <span>•</span>
            <span>Revolutionary Technology</span>
            <span>•</span>
            <span>2032 Breakthrough</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`bg-gradient-to-br ${slide.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 ${
                currentSlide === index ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-6xl mb-4 text-center">{slide.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{slide.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{slide.description}</p>
              <a
                href={slide.link}
                className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Explore Technology →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2032;