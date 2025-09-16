import React, { useState, useEffect } from 'react';

const UltimateContentBanner2027: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      title: "🌟 Revolutionary Tech Trends 2027",
      subtitle: "Discover the most groundbreaking technological advances",
      description: "Conscious AI Systems • Quantum Consciousness • Interdimensional Computing",
      link: "/pages/RevolutionaryTechTrends2027",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟",
      badge: "NEW"
    },
    {
      title: "🚀 Ultimate Innovation Showcase 2027",
      subtitle: "Experience revolutionary technologies with interactive demos",
      description: "Interactive Demos • Live Technology Tests • Real-time Processing",
      link: "/pages/UltimateInnovationShowcase2027",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🚀",
      badge: "BREAKTHROUGH"
    },
    {
      title: "⚡ Next-Gen Tech Breakthrough 2027",
      subtitle: "Witness the most revolutionary technological breakthroughs",
      description: "Synthetic Intelligence • Quantum Reality • Consciousness Transfer",
      link: "/pages/NextGenTechBreakthrough2027",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡",
      badge: "REVOLUTIONARY"
    }
  ];

  return (
    <div className="relative overflow-hidden mb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mx-4">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🌟 ULTIMATE CONTENT • JANUARY 2027
              </div>

              {/* Main Content */}
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4 animate-bounce">{banners[currentBanner].icon}</span>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {banners[currentBanner].title}
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90 mb-4">
                    {banners[currentBanner].subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl opacity-80 mb-8 max-w-4xl mx-auto">
                {banners[currentBanner].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a 
                  href={banners[currentBanner].link}
                  className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentBanner === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8 px-4">
          {banners.map((banner, index) => (
            <a
              key={index}
              href={banner.link}
              className={`bg-gradient-to-r ${banner.gradient} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                currentBanner === index ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="text-3xl mb-2">{banner.icon}</div>
              <h3 className="text-lg font-bold mb-1">{banner.title}</h3>
              <p className="text-sm opacity-90">{banner.subtitle}</p>
              <div className="inline-flex items-center px-2 py-1 bg-white/20 rounded-full text-xs font-bold mt-2">
                {banner.badge}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2027;