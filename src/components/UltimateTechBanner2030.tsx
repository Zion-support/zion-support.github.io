import React, { useState, useEffect } from 'react';

const UltimateTechBanner2030: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const bannerTexts = [
    "🚀 ULTIMATE TECH REVOLUTION 2030 - Experience Consciousness Computing",
    "🌟 OMNIVERSAL AI CONSCIOUSNESS 2035 - Transcend All Dimensions",
    "📝 REVOLUTIONARY TECH BLOG 2027 - Latest Breakthrough Insights"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % bannerTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-2 left-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-4 right-8 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-3 left-12 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-3 animate-pulse">
                🌟 NEW BREAKTHROUGH CONTENT
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {bannerTexts[currentText]}
              </h3>
              <p className="text-purple-100 text-lg">
                Discover the most revolutionary technology content ever created
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/pages/UltimateTechRevolution2030"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-center animate-pulse"
              >
                🚀 Ultimate Tech 2030
              </a>
              <a
                href="/pages/OmniversalAIConsciousness2035"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center border border-white/30"
              >
                🌟 Omniversal AI 2035
              </a>
              <a
                href="/pages/RevolutionaryTechBlog2027"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-center border border-white/30"
              >
                📝 Tech Blog 2027
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2030;