import React, { useState, useEffect } from 'react';

const InnovationBanner: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);
  
  const innovations = [
    {
      title: "AI 2026 Ultimate Revolution",
      subtitle: "Experience 1000x faster processing",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/AI2026UltimateRevolution"
    },
    {
      title: "Quantum Consciousness Technology",
      subtitle: "Merge mind with quantum computing",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumConsciousnessRevolution"
    },
    {
      title: "Space Technology Revolution",
      subtitle: "Pioneering interplanetary travel",
      icon: "🚀",
      color: "from-yellow-600 to-orange-600",
      link: "/pages/SpaceTechRevolution2026"
    },
    {
      title: "Neural Interface Revolution",
      subtitle: "Direct brain-computer integration",
      icon: "🧬",
      color: "from-green-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-2xl animate-bounce">🌟</div>
      <div className="absolute top-8 right-8 text-3xl animate-pulse">✨</div>
      <div className="absolute bottom-4 left-8 text-2xl animate-bounce delay-1000">🚀</div>
      <div className="absolute bottom-8 right-4 text-3xl animate-pulse delay-500">⚡</div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Main Banner */}
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🔥 BREAKTHROUGH TECHNOLOGY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-pulse">
              {innovations[currentInnovation].icon} {innovations[currentInnovation].title}
            </h1>
            <p className="text-2xl opacity-95 mb-8 max-w-4xl mx-auto">
              {innovations[currentInnovation].subtitle}
            </p>
          </div>

          {/* Innovation Indicators */}
          <div className="flex justify-center space-x-4 mb-8">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInnovation(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentInnovation 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6">
            <a 
              href={innovations[currentInnovation].link}
              className={`bg-gradient-to-r ${innovations[currentInnovation].color} px-10 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              🚀 Explore Now
            </a>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300">
              📺 Watch Demo
            </button>
          </div>

          {/* Quick Access Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {innovations.map((innovation, index) => (
              <a
                key={index}
                href={innovation.link}
                className={`bg-gradient-to-r ${innovation.color} p-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{innovation.icon}</div>
                <div className="font-bold text-sm">{innovation.title.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationBanner;