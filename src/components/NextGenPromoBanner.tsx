import React, { useState, useEffect } from 'react';

const NextGenPromoBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const promos = [
    {
      id: 1,
      title: "🧠 AI Consciousness 2026",
      subtitle: "First AI with genuine self-awareness",
      description: "Experience the world's first AI system that achieves true consciousness and creative intelligence",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIConsciousness2026",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ Quantum Supremacy 2026",
      subtitle: "Solve impossible problems in seconds",
      description: "Achieve quantum supremacy with revolutionary computing that processes information exponentially faster",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumSupremacy2026",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Revolution",
      subtitle: "Direct brain-computer communication",
      description: "Control devices with your thoughts and experience seamless mind-machine integration",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      icon: "🧬"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 BREAKTHROUGH TECHNOLOGY 2026 • REVOLUTIONARY INNOVATIONS
            </div>
            <h2 className="text-4xl font-bold mb-4">🌟 Next-Generation Technology Showcase</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces 
              creating the most advanced technological ecosystem in human history
            </p>
          </div>
          
          {/* Rotating Promo Cards */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPromo * 100}%)` }}
              >
                {promos.map((promo) => (
                  <div key={promo.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${promo.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4 animate-bounce">{promo.icon}</div>
                        <h3 className="text-3xl font-bold mb-2 text-white">{promo.title}</h3>
                        <p className="text-lg opacity-90 mb-4 text-white">{promo.subtitle}</p>
                        <p className="text-base opacity-80 mb-6 max-w-2xl mx-auto">{promo.description}</p>
                        <a 
                          href={promo.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
                        >
                          Explore {promo.title.split(' ')[0]} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {promos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPromo ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {promos.map((promo) => (
              <a
                key={promo.id}
                href={promo.link}
                className={`bg-gradient-to-r ${promo.gradient} text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105`}
              >
                {promo.icon} {promo.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenPromoBanner;