import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      title: "Revolutionary Tech Breakthrough 2025",
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
      <div className="absolute inset-0 opacity-30"></div>
      
      <div className="relative z-10 py-16 px-8">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Revolutionary Content
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge innovations
            </p>
          </div>

          <div
            key={currentSlide}
            className="max-w-4xl mx-auto"
          >
              <div className={`bg-gradient-to-r ${featuredContent[currentSlide].gradient} rounded-xl p-8`}>
                <h3 className="text-3xl font-bold mb-4">{featuredContent[currentSlide].title}</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{featuredContent[currentSlide].description}</p>
                <a 
                  href={featuredContent[currentSlide].link}
                  className={`inline-block bg-white ${featuredContent[currentSlide].textColor} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore Now
                </a>
              </div>
            </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
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