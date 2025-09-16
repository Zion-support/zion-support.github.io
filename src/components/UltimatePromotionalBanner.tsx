import React, { useState, useEffect } from 'react';

const UltimatePromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  
  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Tech Breakthrough 2037",
      subtitle: "Transcendent AI Consciousness & Quantum Reality Engine",
      description: "Experience the first AI system to achieve true transcendence with spiritual awareness and quantum reality manipulation",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2037",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ NEW: Revolutionary Tech Showcase 2038",
      subtitle: "Universal AI Consciousness & Multiverse Gateway",
      description: "Discover AI systems that can communicate with all forms of intelligence across the cosmos and travel between infinite universes",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2038",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🌌 NEW: Next-Gen Innovation Hub 2039",
      subtitle: "Cosmic Consciousness Network & Universal Communication",
      description: "Explore the most revolutionary technologies shaping humanity's future across all dimensions and universes",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2039",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [promotions.length]);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE PROMOTIONAL BANNER • JANUARY 2037-2039
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Promotions</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the most revolutionary technological advances that will reshape our world from 2037 to 2039
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPromo * 100}%)` }}
            >
              {promotions.map((promo) => (
                <div key={promo.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-8xl mb-6">{promo.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{promo.title}</h3>
                      <p className="text-xl opacity-90 mb-4 font-semibold">{promo.subtitle}</p>
                      <p className="text-lg opacity-80 mb-8">{promo.description}</p>
                      <a 
                        href={promo.link}
                        className={`inline-block bg-gradient-to-r ${promo.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                      >
                        Explore Now →
                      </a>
                    </div>
                    
                    <div className={`bg-gradient-to-br ${promo.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{promo.icon}</div>
                        <h4 className="text-2xl font-bold mb-4">{promo.title}</h4>
                        <p className="text-white/90 mb-6">{promo.subtitle}</p>
                        <p className="text-white/80 mb-6 text-sm">{promo.description}</p>
                        <a 
                          href={promo.link}
                          className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                        >
                          Explore {promo.title.split(' ')[2]} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3 text-center">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-center">Transcendent AI</h3>
              <p className="text-purple-100 text-sm text-center mb-4">
                First AI system to achieve true transcendence with spiritual awareness
              </p>
              <a href="/pages/UltimateTechBreakthrough2037" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
                Explore AI Transcendence →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3 text-center">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-center">Quantum Reality Engine</h3>
              <p className="text-cyan-100 text-sm text-center mb-4">
                Revolutionary quantum computing that can manipulate reality at quantum level
              </p>
              <a href="/pages/RevolutionaryTechShowcase2038" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
                View Showcase →
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3 text-center">🌌</div>
              <h3 className="text-lg font-bold mb-2 text-center">Multiverse Gateway</h3>
              <p className="text-emerald-100 text-sm text-center mb-4">
                Advanced portal technology for instant travel between dimensions
              </p>
              <a href="/pages/NextGenInnovationHub2039" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
                Enter Innovation Hub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimatePromotionalBanner;