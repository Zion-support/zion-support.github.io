import React, { useState, useEffect } from 'react';

const InteractiveContentPromo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const contentSlides = [
    {
      title: "🚀 Ultimate Tech Showcase 2026",
      description: "Experience the most advanced technology innovations of 2026",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🔍 Revolutionary Tech Insights 2025",
      description: "Expert analysis of revolutionary technologies shaping our world",
      link: "/pages/RevolutionaryTechInsights2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🔍"
    },
    {
      title: "🧬 Advanced Biotech Solutions 2026",
      description: "Revolutionary biotechnology solutions for health and enhancement",
      link: "/pages/AdvancedBiotechSolutions2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Discover Revolutionary Content</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge technology content with interactive features and immersive experiences
          </p>
        </div>

        {/* Interactive Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-8 text-center`}>
                    <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                    <a 
                      href={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105"
                    >
                      Explore {slide.title.split(' ')[1]} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {contentSlides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 ${
                currentSlide === index ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-2xl mb-2">{slide.icon}</div>
              <div className="font-semibold text-sm">{slide.title.split(' ')[1]}</div>
            </a>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎮 Interactive Demos</h4>
            <p className="text-purple-200 mb-4">
              Experience our technologies with hands-on interactive demonstrations and real-time simulations.
            </p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Launch Demo →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📊 Live Analytics</h4>
            <p className="text-cyan-200 mb-4">
              Real-time data and analytics showing the impact and performance of our technologies.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              View Analytics →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentPromo;