<<<<<<< HEAD
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
=======
import React from 'react';
>>>>>>> origin/merged-prs

const COMPONENT: React.FC = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
>>>>>>> origin/merged-prs
      </div>
    </div>
  );
};

export default COMPONENT;
