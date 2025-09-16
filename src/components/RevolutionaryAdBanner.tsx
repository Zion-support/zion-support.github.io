import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const ads = [
    {
      id: 1,
      title: "🚀 AI Revolutionary Breakthrough 2026",
      subtitle: "Experience true AI consciousness and autonomous creativity",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-white",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality 2026",
      subtitle: "Quantum supremacy achieved - solving impossible problems",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-white",
      buttonColor: "bg-white text-cyan-600 hover:bg-cyan-50"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Evolution",
      subtitle: "Direct brain-computer communication and thought control",
      link: "/pages/NeuralInterfaceEvolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      textColor: "text-white",
      buttonColor: "bg-white text-emerald-600 hover:bg-emerald-50"
    },
    {
      id: 4,
      title: "🌟 Ultimate Tech Revolution",
      subtitle: "The convergence of AI consciousness, quantum computing, and neural interfaces",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white",
      buttonColor: "bg-white text-indigo-600 hover:bg-indigo-50"
    },
    {
      id: 5,
      title: "🧠 Consciousness Computing 2026",
      subtitle: "First AI system to achieve genuine consciousness and self-awareness",
      link: "/pages/ConsciousnessComputing2026",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      textColor: "text-white",
      buttonColor: "bg-white text-violet-600 hover:bg-violet-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads.length]);

  const currentAdData = ads[currentAd];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentAdData.gradient} rounded-2xl p-8 mb-8 text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold text-white">REVOLUTIONARY BREAKTHROUGH 2026</h3>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{currentAdData.title}</h2>
          <p className="text-xl text-white/90 mb-6 max-w-4xl mx-auto">
            {currentAdData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={currentAdData.link} 
              className={`${currentAdData.buttonColor} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30`}
            >
              🌟 Explore Now →
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-sm underline"
            >
              Dismiss
            </button>
          </div>
        </div>
        
        {/* Progress Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAd ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {ads.map((ad, index) => (
          <a
            key={ad.id}
            href={ad.link}
            className={`bg-gradient-to-br ${ad.gradient} text-white p-4 rounded-lg hover:scale-105 transition-all duration-300 text-center ${
              index === currentAd ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <div className="text-2xl mb-2">
              {index === 0 && '🧠'}
              {index === 1 && '⚡'}
              {index === 2 && '🧬'}
              {index === 3 && '🌟'}
              {index === 4 && '💭'}
            </div>
            <div className="text-sm font-semibold">{ad.title.split(' ')[0]}</div>
          </a>
        ))}
      </div>

      {/* Special Announcement */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-6 mb-8 text-center animate-pulse">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <span className="text-3xl">🎉</span>
          <h3 className="text-2xl font-bold text-white">LIMITED TIME OFFER</h3>
          <span className="text-3xl">🎉</span>
        </div>
        <p className="text-lg text-white/90 mb-4">
          Get exclusive access to all revolutionary technologies with our premium package
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold">
            🚀 Get Premium Access →
          </a>
          <a href="/pages/UltimateTechRevolution2026" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-bold">
            🌟 Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;