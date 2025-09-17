import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Discover the most revolutionary technology breakthroughs reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
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

  const featuredContent = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Discover the most revolutionary technology breakthroughs reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀",
      badge: "NEW"
    },
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Experience the most advanced technologies that will revolutionize industries",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🎯",
      badge: "FEATURED"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

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
              Discover our latest revolutionary content showcasing the most advanced technological innovations and breakthrough solutions.
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
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Banner Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentBanner ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Content</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredContent.map((content, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold">
                      {content.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                  <p className="text-gray-300 mb-4">{content.description}</p>
                  <a 
                    href={content.link}
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Explore →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;