import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const banners = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🌟 Ultimate Tech Revolution 2025",
      description: "Witness the ultimate technological revolution that will transform every aspect of human existence",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      icon: "⚡"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2025",
      description: "Discover and explore the most revolutionary innovations that will shape the future of humanity",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🔮"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="mb-12">
      <div className={`bg-gradient-to-r ${banners[currentBanner].color} rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl animate-bounce">{banners[currentBanner].icon}</div>
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-2 animate-pulse">
                    🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{banners[currentBanner].title}</h2>
                  <p className="text-lg opacity-90 max-w-2xl">
                    {banners[currentBanner].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href={banners[currentBanner].link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore Now →
              </a>
              <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Banner Indicators */}
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

export default RevolutionaryContentBanner2025;