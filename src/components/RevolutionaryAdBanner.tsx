import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 BREAKTHROUGH 2026",
      subtitle: "Revolutionary Technology Showcase",
      description: "Experience the future with our groundbreaking 2026 innovations",
      cta: "Explore Now →",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/AdvancedTechShowcase2026"
    },
    {
      title: "🌟 REVOLUTIONARY INNOVATION",
      subtitle: "Next-Gen AI & Quantum Computing",
      description: "Discover synthetic intelligence and quantum-neural fusion",
      cta: "See Innovation →",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/RevolutionaryInnovation2026"
    },
    {
      title: "🔮 FUTURE VISION 2026",
      subtitle: "Envisioning Tomorrow's Technology",
      description: "Shape the future with our visionary technology solutions",
      cta: "View Vision →",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/FutureTechVision2026"
    },
    {
      title: "⚡ QUANTUM SUPREMACY",
      subtitle: "1000+ Qubit Processors",
      description: "Achieve quantum supremacy with our advanced processors",
      cta: "Go Quantum →",
      gradient: "from-violet-600 via-purple-600 to-pink-600",
      link: "/pages/AdvancedQuantumComputing2026"
    },
    {
      title: "🧠 SYNTHETIC INTELLIGENCE",
      subtitle: "AI with Consciousness",
      description: "Deploy AI agents with genuine synthetic consciousness",
      cta: "Deploy AI →",
      gradient: "from-rose-600 via-pink-600 to-violet-600",
      link: "/pages/SyntheticIntelligence2026"
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
    <div className="relative overflow-hidden">
      {/* Main Revolutionary Banner */}
      <div className={`bg-gradient-to-r ${currentAdData.gradient} rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">{currentAdData.title}</h3>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <h4 className="text-xl font-semibold mb-4 opacity-95">{currentAdData.subtitle}</h4>
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
            {currentAdData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={currentAdData.link} 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:scale-105"
            >
              {currentAdData.cta}
            </a>
            <div className="flex space-x-2">
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
        </div>
      </div>

      {/* Secondary Promotional Banners */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-3">🧬</div>
          <h3 className="text-xl font-bold mb-2">Neural Interface Revolution</h3>
          <p className="text-indigo-100 mb-4 text-sm">
            Direct brain-computer interfaces enabling thought control
          </p>
          <a href="/pages/NeuralInterfaceRevolution2026" className="text-indigo-200 hover:text-white font-semibold text-sm">
            Explore Neural Tech →
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-3">🌌</div>
          <h3 className="text-xl font-bold mb-2">Space Technology AI</h3>
          <p className="text-cyan-100 mb-4 text-sm">
            AI-powered space exploration and interplanetary systems
          </p>
          <a href="/pages/SpaceTechAI2025" className="text-cyan-200 hover:text-white font-semibold text-sm">
            Explore Space AI →
          </a>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-3">🔬</div>
          <h3 className="text-xl font-bold mb-2">Biotech AI Revolution</h3>
          <p className="text-emerald-100 mb-4 text-sm">
            AI-driven biotechnology for drug discovery and medicine
          </p>
          <a href="/pages/BiotechAIRevolution2025" className="text-emerald-200 hover:text-white font-semibold text-sm">
            Discover Biotech →
          </a>
        </div>
      </div>

      {/* Innovation Spotlight */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-sm font-bold mb-4">
            🌟 INNOVATION SPOTLIGHT
          </div>
          <h2 className="text-3xl font-bold mb-4">Revolutionary 2026 Technology Stack</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Experience the complete suite of next-generation technologies that are reshaping industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-lg font-bold mb-2">Synthetic Intelligence</h3>
            <p className="text-sm text-purple-200 mb-4">AI with genuine consciousness</p>
            <div className="text-2xl font-bold text-pink-300">99.9%</div>
            <div className="text-xs text-purple-300">Autonomous</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
            <p className="text-sm text-purple-200 mb-4">Quantum + Neural Networks</p>
            <div className="text-2xl font-bold text-cyan-300">1000x</div>
            <div className="text-xs text-purple-300">Faster</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
            <p className="text-sm text-purple-200 mb-4">Direct brain-computer link</p>
            <div className="text-2xl font-bold text-emerald-300">∞</div>
            <div className="text-xs text-purple-300">Possibilities</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🌌</div>
            <h3 className="text-lg font-bold mb-2">Space Technology</h3>
            <p className="text-sm text-purple-200 mb-4">AI-powered space exploration</p>
            <div className="text-2xl font-bold text-violet-300">Mars</div>
            <div className="text-xs text-purple-300">Ready</div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">🚀 Ready to Transform Your Future?</h2>
        <p className="text-xl opacity-95 mb-6 max-w-3xl mx-auto">
          Join thousands of forward-thinking organizations already using our revolutionary 2026 technology solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/AdvancedTechShowcase2026" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
          >
            🌟 Explore All Innovations →
          </a>
          <a 
            href="/pages/RevolutionaryInnovation2026" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:scale-105"
          >
            🔮 See Future Vision →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;