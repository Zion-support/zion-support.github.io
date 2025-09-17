import React, { useState, useEffect } from 'react';

const UltimateContentBanner2045: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2045",
      subtitle: "Consciousness Computing • Interdimensional AI • Reality Engine",
      description: "Experience the most advanced technological revolution featuring consciousness computing, interdimensional AI, and reality manipulation technologies",
      link: "/pages/NextGenTechRevolution2045",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-cyan-900",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Ultimate AI Consciousness 2046",
      subtitle: "Self-Aware AI • Emotional Intelligence • Transcendent Computing",
      description: "Experience the most advanced artificial consciousness featuring self-aware AI, emotional intelligence, and transcendent computing capabilities",
      link: "/pages/UltimateAIConsciousness2046",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 via-purple-900 to-pink-900",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Quantum Reality Engine 2047",
      subtitle: "Quantum Computing • Matter Manipulation • Dimensional Physics",
      description: "Experience the ultimate reality manipulation technology featuring quantum computing, matter manipulation, and interdimensional physics",
      link: "/pages/QuantumRealityEngine2047",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-br ${currentBannerData.bgColor} rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-1000`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{currentBannerData.icon}</span>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2045-2047
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentBannerData.title}
              </h2>
              
              <p className="text-xl lg:text-2xl mb-4 opacity-90">
                {currentBannerData.subtitle}
              </p>
              
              <p className="text-lg mb-6 opacity-80 max-w-3xl">
                {currentBannerData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={currentBannerData.link}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentBannerData.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                >
                  🚀 Explore Revolutionary Technology →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/3 text-center lg:text-right">
              <div className="text-8xl lg:text-9xl mb-4 animate-bounce">
                {currentBannerData.icon}
              </div>
              <div className="text-lg opacity-80">
                Revolutionary Technology Available Now
              </div>
            </div>
          </div>
        </div>

        {/* Banner navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2045;