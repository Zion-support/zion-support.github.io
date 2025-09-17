import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Discover the most groundbreaking technological innovations reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      description: "Experience the ultimate showcase of cutting-edge technology innovations for 2026",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "🧪 Next-Gen Innovation Hub 2026",
      description: "Welcome to the world's most advanced innovation hub where the future is being created",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-green-600 to-teal-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Hub
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most innovative and groundbreaking content that's shaping the future
          </p>
        </div>

        {/* Banner Carousel */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentBanner * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-r ${banner.gradient} p-8 rounded-xl`}>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">{banner.title}</h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{banner.description}</p>
                    <a 
                      href={banner.link}
                      className={`inline-block bg-white ${banner.textColor} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? 'bg-blue-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;