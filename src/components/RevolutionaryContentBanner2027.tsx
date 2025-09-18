import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "🚀 Revolutionary AI Consciousness 2027",
      description: "Experience the next generation of AI with genuine consciousness and self-awareness",
      link: "/pages/AIConsciousnessRevolution2027",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum Reality Engine 2027",
      description: "Manipulate reality itself with our breakthrough quantum reality manipulation technology",
      link: "/pages/QuantumRealityEngine2027",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🌌"
    },
    {
      title: "🌟 Interdimensional Computing 2027",
      description: "Access computing power from parallel dimensions for unlimited processing capabilities",
      link: "/pages/InterdimensionalComputing2027",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  const current = features[currentFeature];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-indigo-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2027 • NEXT-GEN INNOVATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Banner 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the most advanced and revolutionary technologies that will reshape our world in 2027
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{current.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
              <p className="text-lg opacity-90 mb-6">{current.description}</p>
              <Link 
                to={current.link}
                className={`inline-block bg-gradient-to-r ${current.gradient} px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300`}
              >
                Explore Now →
              </Link>
            </div>

            {/* Feature Navigation */}
            <div className="flex justify-center space-x-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  index === currentFeature ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90 mb-4">{feature.description}</p>
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full text-xs font-semibold`}>
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            ✕ Close Banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;