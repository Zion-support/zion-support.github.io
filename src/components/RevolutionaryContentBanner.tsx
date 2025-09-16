import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Tech Breakthrough 2025",
      subtitle: "Experience Revolutionary Technology",
      description: "Discover the most advanced technological breakthroughs reshaping our world",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "🌟 NEW: Innovation Showcase 2025",
      subtitle: "Groundbreaking Innovations",
      description: "Explore cutting-edge innovations that are transforming industries worldwide",
      link: "/pages/InnovationShowcase2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🚀 NEW: Revolutionary Services 2025",
      subtitle: "Advanced Technology Services",
      description: "Experience the most revolutionary technology services available today",
      link: "/pages/RevolutionaryServices2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className="relative mb-12">
      <div className={`bg-gradient-to-r ${currentBannerData.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold animate-pulse">
                  BREAKTHROUGH CONTENT
                </span>
                <span className="text-sm opacity-90">JANUARY 2025</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">{currentBannerData.title}</h2>
              <p className="text-xl opacity-90 mb-4">{currentBannerData.subtitle}</p>
              <p className="text-lg opacity-75 mb-6 max-w-2xl">{currentBannerData.description}</p>
              <a
                href={currentBannerData.link}
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
              >
                Explore Now →
              </a>
            </div>
            <div className="hidden md:block text-8xl opacity-20">
              {currentBannerData.icon}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Pills */}
      <div className="flex justify-center space-x-4 mt-6">
        {banners.map((banner) => (
          <a
            key={banner.id}
            href={banner.link}
            className={`bg-gradient-to-r ${banner.gradient} text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
          >
            {banner.icon} {banner.subtitle}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;