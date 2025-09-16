import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Discover the most revolutionary technology breakthroughs reshaping our digital future",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟",
      badge: "NEW"
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Explore cutting-edge technologies converging to create unprecedented possibilities",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🚀",
      badge: "BREAKTHROUGH"
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
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover our latest breakthrough content showcasing the most advanced technologies of 2025-2026
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="text-8xl mb-4">{content.icon}</div>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white">
                          {content.badge}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {content.title}
                        </h3>
                        <p className="text-lg text-purple-100 mb-6">
                          {content.description}
                        </p>
                        <a
                          href={content.link}
                          className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`group bg-gradient-to-br ${content.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 text-white`}
            >
              <div className="text-4xl mb-3">{content.icon}</div>
              <h4 className="text-xl font-bold mb-2">{content.title}</h4>
              <p className="text-sm opacity-90 mb-4">{content.description}</p>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Learn More →
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;