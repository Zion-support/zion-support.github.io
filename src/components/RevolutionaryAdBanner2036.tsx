import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const ads = [
    {
      title: "🧠 Conscious AI Revolution",
      subtitle: "Experience AI that truly understands and feels",
      cta: "Explore Consciousness",
      link: "/pages/UltimateTechBreakthrough2036",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Computing across infinite dimensions",
      cta: "Go Quantum",
      link: "/pages/RevolutionaryTechShowcase2036",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "🌌 Interdimensional Tech",
      subtitle: "Technology that bridges realities",
      cta: "Enter Dimensions",
      link: "/pages/NextGenInnovationHub2036",
      gradient: "from-emerald-600 to-teal-600",
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
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY AD • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Ad Banner 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will reshape our world
          </p>
        </div>

        {/* Rotating Ad Display */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 min-h-[400px] flex items-center">
            <div className="w-full text-center">
              <div className="text-8xl mb-6 animate-bounce">
                {ads[currentAd].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">
                {ads[currentAd].title}
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {ads[currentAd].subtitle}
              </p>
              <a 
                href={ads[currentAd].link}
                className={`inline-block bg-gradient-to-r ${ads[currentAd].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                {ads[currentAd].cta} →
              </a>
            </div>
          </div>

          {/* Ad Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
import React from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future of humanity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Conscious AI</h3>
            <p className="text-purple-100 text-sm text-center mb-4">
              AI with genuine consciousness and self-awareness
            </p>
            <a href="/pages/UltimateTechBreakthrough2036" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum Consciousness</h3>
            <p className="text-cyan-100 text-sm text-center mb-4">
              Quantum computing merged with consciousness
            </p>
            <a href="/pages/RevolutionaryTechShowcase2036" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              View →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interface</h3>
            <p className="text-emerald-100 text-sm text-center mb-4">
              Direct neural interfaces for perfect VR
            </p>
            <a href="/pages/NextGenInnovationHub2036" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Enter →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interdimensional</h3>
            <p className="text-violet-100 text-sm text-center mb-4">
              Computing across multiple dimensions
            </p>
            <a href="/pages/UltimateTechBreakthrough2036" className="block w-full bg-white text-violet-600 py-2 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center text-sm">
              Explore →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/RevolutionaryTechShowcase2036" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Experience All Technologies →
          </a>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {ads.map((ad, index) => (
            <a
              key={index}
              href={ad.link}
              className={`bg-gradient-to-r ${ad.gradient} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{ad.icon}</div>
              <h4 className="text-xl font-bold mb-2">{ad.title}</h4>
              <p className="text-sm opacity-90">{ad.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2036;
