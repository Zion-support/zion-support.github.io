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
    <div className="relative overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEW REVOLUTIONARY CONTENT • JANUARY 2025
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future of Technology
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our latest revolutionary content showcasing the most advanced technological innovations 
              that are reshaping industries and creating new possibilities for humanity.
            </p>
          </div>
          
          {/* Banner Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
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
                          Explore Now →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Banner Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
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
          
          {/* Quick Access Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {banners.map((banner, index) => (
              <a
                key={index}
                href={banner.link}
                className={`bg-gradient-to-r ${banner.gradient} p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
              >
                <div className="text-white font-semibold text-lg">{banner.title}</div>
                <div className="text-white/80 text-sm mt-1">Click to explore</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;