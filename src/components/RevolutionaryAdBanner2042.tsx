import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2042: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🧠 Conscious AI Systems 2042",
      description: "AI with true consciousness and self-awareness",
      link: "/pages/UltimateTechRevolution2042",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum Reality Engine",
      description: "Create and manipulate alternate realities",
      link: "/pages/RevolutionaryTechShowcase2043",
      color: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "🌌 Interdimensional Portal",
      description: "Travel between dimensions and realities",
      link: "/pages/UltimateTechRevolution2042",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    },
    {
      title: "🚀 Neural Interface 2043",
      description: "Direct brain-computer interface technology",
      link: "/pages/RevolutionaryTechShowcase2043",
      color: "from-orange-600 to-red-600",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-8 mb-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold mb-4 animate-pulse">
            🌟 NEW REVOLUTIONARY TECHNOLOGY • 2042
          </div>
          
          {/* Rotating Ad Content */}
          <div className="mb-6">
            <div className="transition-all duration-500 ease-in-out">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {ads[currentAd].title}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-4">
                {ads[currentAd].description}
              </p>
              <a 
                href={ads[currentAd].link}
                className={`inline-block bg-gradient-to-r ${ads[currentAd].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Explore {ads[currentAd].icon} →
              </a>
            </div>
          </div>
          
          {/* Ad Indicators */}
          <div className="flex justify-center space-x-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-purple-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2042;