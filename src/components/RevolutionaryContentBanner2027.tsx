import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🧠 Conscious AI Systems",
    "⚡ Quantum Consciousness", 
    "🌌 Interdimensional Computing",
    "🔮 Holographic Reality",
    "⚗️ Molecular Manufacturing",
    "⏰ Time Dilation Technology"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">🚀</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                REVOLUTIONARY 2027
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Content Banner 2027
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Experience the most advanced technology showcase featuring cutting-edge innovations
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                    index === currentFeature
                      ? 'bg-white text-purple-600 scale-110'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <Link
              to="/pages/RevolutionaryTechShowcase2027"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
            >
              Explore Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;