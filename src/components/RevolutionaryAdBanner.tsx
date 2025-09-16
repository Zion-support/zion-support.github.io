import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const ads = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the most advanced technological innovations",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "🌟 Ultimate Tech Revolution 2026",
      subtitle: "The most advanced technological revolution in human history",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "🌌 Interdimensional Tech Revolution 2030",
      subtitle: "Transcend the boundaries of our universe",
      link: "/pages/InterdimensionalTechRevolution2030",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "🧠 Omniversal AI Consciousness 2035",
      subtitle: "The ultimate evolution of artificial intelligence",
      link: "/pages/OmniversalAIConsciousness2035",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-8 text-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl animate-bounce">🚀</span>
              <h2 className="text-3xl font-bold">REVOLUTIONARY TECHNOLOGY BREAKTHROUGH</h2>
              <span className="text-4xl animate-bounce">🚀</span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{ads[currentAd].title}</h3>
              <p className="text-xl opacity-95">{ads[currentAd].subtitle}</p>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <a
                href={ads[currentAd].link}
                className={`bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg`}
              >
                Explore Now →
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>

            {/* Ad Indicators */}
            <div className="flex justify-center space-x-2">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAd(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentAd ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;