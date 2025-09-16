import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const promotions = [
    {
      title: "🚀 Revolutionary Tech Trends 2026",
      subtitle: "Discover the future of technology",
      description: "Explore groundbreaking trends that will reshape our world",
      link: "/pages/RevolutionaryTechTrends2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🌟 Advanced Tech Innovation Hub",
      subtitle: "Experience cutting-edge innovation",
      description: "Join the most advanced technology research center",
      link: "/pages/AdvancedTechInnovationHub2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🌟"
    },
    {
      title: "⚡ Ultimate Tech Revolution",
      subtitle: "Witness the transformation",
      description: "Be part of the most profound technological revolution",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className={`bg-gradient-to-r ${promotions[currentPromo].gradient} rounded-3xl p-8 mb-12 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl animate-bounce">{promotions[currentPromo].icon}</span>
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-2 animate-pulse">
                    ✨ NEW CONTENT • JANUARY 2025
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{promotions[currentPromo].title}</h3>
                  <p className="text-lg opacity-90 mb-2">{promotions[currentPromo].subtitle}</p>
                  <p className="text-sm opacity-80">{promotions[currentPromo].description}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={promotions[currentPromo].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold"
                >
                  Explore Now →
                </a>
                <a 
                  href="/pages/ComprehensiveTechInsights2026"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
                >
                  View All Content
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-6xl">{promotions[currentPromo].icon}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPromo ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;