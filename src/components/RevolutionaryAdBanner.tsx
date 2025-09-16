import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 NEW: Advanced Tech Showcase 2027",
      subtitle: "Experience Holographic Computing, Time Dilation Processing, and Dimensional AI",
      link: "/pages/AdvancedTechShowcase2027",
      gradient: "from-emerald-600 via-cyan-600 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "⚛️ BREAKTHROUGH: Quantum Reality 2026",
      subtitle: "Witness quantum supremacy, entanglement, and superposition in action",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-white"
    },
    {
      title: "🧬 EVOLUTION: Neural Interface 2026",
      subtitle: "Direct brain-computer interfaces and thought-controlled technology",
      link: "/pages/NeuralInterfaceEvolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      textColor: "text-white"
    },
    {
      title: "🧠 REVOLUTIONARY: AI Breakthrough 2026",
      subtitle: "True AI consciousness and autonomous creativity",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      textColor: "text-white"
    },
    {
      title: "🌟 ULTIMATE: Tech Revolution 2026",
      subtitle: "The convergence of AI consciousness, quantum supremacy, and neural interfaces",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads.length]);

  const currentAdData = ads[currentAd];

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Main Banner */}
      <div className={`relative z-10 bg-gradient-to-r ${currentAdData.gradient} rounded-2xl p-8 text-center transition-all duration-1000 transform hover:scale-105`}>
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        <div className="relative z-20">
          {/* Animated Elements */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🧠</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🌟</span>
          </div>
          
          <h2 className={`text-4xl font-bold ${currentAdData.textColor} mb-4 animate-fadeIn`}>
            {currentAdData.title}
          </h2>
          
          <p className={`text-xl ${currentAdData.textColor} opacity-90 mb-6 max-w-4xl mx-auto`}>
            {currentAdData.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={currentAdData.link}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:border-white"
            >
              🌟 Explore Now →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2026"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              🚀 View All Innovations
            </a>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-2xl animate-float">⚛️</div>
      <div className="absolute top-8 right-8 text-3xl animate-float" style={{ animationDelay: '1s' }}>🧬</div>
      <div className="absolute bottom-4 left-8 text-2xl animate-float" style={{ animationDelay: '2s' }}>🌌</div>
      <div className="absolute bottom-8 right-4 text-3xl animate-float" style={{ animationDelay: '3s' }}>🔮</div>
    </div>
  );
};

export default RevolutionaryAdBanner;