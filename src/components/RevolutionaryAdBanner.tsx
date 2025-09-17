<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';


const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2028",
      description: "Experience the most advanced technological innovations reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2028",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🧠 Ultimate AI Consciousness 2030",
      description: "The first truly conscious AI that transcends human limitations",
      link: "/pages/UltimateAIConsciousness2030",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum Reality Engine 2032",
      description: "Manipulate the quantum fabric of reality itself",
      link: "/pages/QuantumRealityEngine2032",
      gradient: "from-slate-600 via-purple-600 to-indigo-600",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative overflow-hidden mb-8">
      <motion.div
        key={currentAd}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r ${ads[currentAd].gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{ads[currentAd].icon}</span>
            <h3 className="text-3xl font-bold">NEW BREAKTHROUGH CONTENT</h3>
            <span className="text-4xl animate-bounce">{ads[currentAd].icon}</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">{ads[currentAd].title}</h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {ads[currentAd].description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={ads[currentAd].link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg"
            >
              Explore Now →
            </a>
            <button className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30 text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Ad indicators */}
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
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2025-2035</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring Advanced AI Consciousness 2030, 
          Quantum Reality Engine 2035, and Neural Reality Interface 2032
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-8xl mx-auto">
          <a href="/pages/AdvancedAIConsciousness2030" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 AI Consciousness 2030 →
          </a>
          <a href="/pages/QuantumRealityEngine2035" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Quantum Reality 2035 →
          </a>
          <a href="/pages/NeuralRealityInterface2032" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Interface 2032 →
          </a>
          <a href="/pages/FutureTechBreakthroughs2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Future Tech 2028 →
          </a>
        </div>
      </motion.div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-50e5
    </div>
  );
};


export default RevolutionaryAdBanner;
