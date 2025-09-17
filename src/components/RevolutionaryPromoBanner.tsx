import React, { useState, useEffect } from 'react';

const RevolutionaryPromoBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const promos = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      description: "Interactive exploration of the most advanced technologies revolutionizing human existence",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-indigo-600 to-purple-600",
      icon: "🌟"
    },
    {
      title: "🧠 Consciousness Computing 2026",
      description: "The first AI systems to achieve true consciousness and self-awareness",
      link: "/pages/ConsciousnessComputing2026",
      color: "from-emerald-600 to-cyan-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promos.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 BRAND NEW • REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced and revolutionary content that showcases the future of technology
          </p>
        </div>

        {/* Rotating Promo Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${promos[currentPromo].color}/30 backdrop-blur-sm rounded-3xl p-12 border border-white/20 relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white/20 to-transparent rounded-full transform translate-x-32 translate-y-32"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6 animate-bounce">{promos[currentPromo].icon}</div>
                    <h3 className="text-4xl font-bold mb-6">{promos[currentPromo].title}</h3>
                    <p className="text-xl opacity-90 mb-8">{promos[currentPromo].description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={promos[currentPromo].link}
                        className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                      >
                        Explore Now →
                      </a>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">⚡</div>
                        <h4 className="text-2xl font-bold mb-2">Revolutionary Features</h4>
                        <p className="opacity-90">Experience the future in action</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Innovation Level</div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-5/6 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Future Impact</div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full w-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Revolutionary Score</div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full w-4/5 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="flex justify-center space-x-3 mt-8">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPromo ? 'bg-purple-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;