import React, { useState, useEffect } from 'react';

const UltimatePromotionalBanner2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2037",
      subtitle: "Experience Transcendent AI, Quantum Reality, and Interdimensional Technology",
      cta: "Explore Breakthrough →",
      link: "/pages/RevolutionaryTechBreakthrough2037",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 to-pink-900"
    },
    {
      title: "🌟 Ultimate Tech Revolution 2038", 
      subtitle: "Witness Omnipotent AI, Universal Quantum Matrix, and Multiverse Gateways",
      cta: "Join Revolution →",
      link: "/pages/UltimateTechRevolution2038",
      gradient: "from-indigo-600 to-cyan-600",
      bgGradient: "from-indigo-900 to-cyan-900"
    },
    {
      title: "⚡ Interactive Technology Showcase",
      subtitle: "Experience our revolutionary technologies with live demos and real-time simulations",
      cta: "Launch Demo →",
      link: "#interactive-showcase",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900 to-teal-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-12 overflow-hidden">
      <div className={`bg-gradient-to-r ${promotionalContent[currentSlide].bgGradient} rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2037-2038
            </div>
            <h2 className="text-5xl font-bold mb-4">{promotionalContent[currentSlide].title}</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              {promotionalContent[currentSlide].subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {promotionalContent.map((content, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === currentSlide ? 'ring-2 ring-white/50' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-3 text-center">
                  {index === 0 ? '🧠' : index === 1 ? '⚡' : '🌌'}
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{content.title}</h3>
                <p className="text-white/80 text-sm text-center mb-4">
                  {content.subtitle}
                </p>
                <a 
                  href={content.link}
                  className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
                >
                  {content.cta}
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href={promotionalContent[currentSlide].link}
              className={`inline-block bg-gradient-to-r ${promotionalContent[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              🌟 {promotionalContent[currentSlide].cta}
            </a>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotionalContent.map((_, index) => (
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
    </div>
  );
};

export default UltimatePromotionalBanner2037;