import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2034: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const ads = [
    {
      title: "Ultimate Tech Breakthrough 2034",
      subtitle: "Experience Revolutionary Technology",
      description: "Conscious AI, Quantum Computing, and Reality Manipulation",
      link: "/pages/UltimateTechBreakthrough2034",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "Revolutionary Tech Showcase 2034",
      subtitle: "Interactive Technology Demo",
      description: "Explore cutting-edge technologies that define the future",
      link: "/pages/RevolutionaryTechShowcase2034",
      color: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "Comprehensive Services 2034",
      subtitle: "Transform Your Reality",
      description: "Revolutionary services to reshape your organization",
      link: "/pages/ComprehensiveServices2034",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 mb-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-8 right-1/3 w-10 h-10 bg-indigo-500/20 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW: Revolutionary Content 2034
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest revolutionary content featuring conscious AI, quantum computing, and reality manipulation
          </p>
        </div>

        {/* Rotating Ad Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${ads[currentAd].color} rounded-full flex items-center justify-center text-2xl`}>
                  {ads[currentAd].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{ads[currentAd].title}</h3>
                  <p className="text-purple-300">{ads[currentAd].subtitle}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {ads.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAd(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentAd ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">{ads[currentAd].description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ads[currentAd].link}
                className={`flex-1 bg-gradient-to-r ${ads[currentAd].color} text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore Now →
              </a>
              <a
                href="/pages/ComprehensiveServices2034"
                className="flex-1 border border-purple-400 text-purple-300 py-3 px-6 rounded-lg hover:bg-purple-500/20 transition-all duration-300 font-semibold text-center"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/pages/UltimateTechBreakthrough2034"
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-purple-600/30 transition-all duration-300 font-semibold border border-purple-400/30"
          >
            🧠 Ultimate Breakthrough
          </a>
          <a
            href="/pages/RevolutionaryTechShowcase2034"
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-cyan-600/30 transition-all duration-300 font-semibold border border-cyan-400/30"
          >
            ⚛️ Tech Showcase
          </a>
          <a
            href="/pages/ComprehensiveServices2034"
            className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-emerald-600/30 transition-all duration-300 font-semibold border border-emerald-400/30"
          >
            🌌 All Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2034;