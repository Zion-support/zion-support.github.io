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
      description: "Welcome to the world's most advanced innovation hub where the future is being created",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-green-600 to-teal-600",
      icon: "🚀",
      badge: "HOT"
    },
    {
      title: "AI-Powered Future 2027",
      description: "Experience the next generation of artificial intelligence that will transform everything",
      link: "/pages/AIPoweredFuture2027",
      gradient: "from-blue-600 to-indigo-600",
      icon: "🤖",
      badge: "TRENDING"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div key={currentSlide} className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">{featuredContent[currentSlide].icon}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                {featuredContent[currentSlide].badge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {featuredContent[currentSlide].title}
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {featuredContent[currentSlide].description}
            </p>
            
            <a
              href={featuredContent[currentSlide].link}
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
            >
              Explore Now →
            </a>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;