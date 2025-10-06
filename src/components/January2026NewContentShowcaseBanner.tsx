import React from 'react';
import { Brain, Zap, Network, Shield, Cpu } from 'lucide-react';

const January2026NewContentShowcaseBanner: React.FC = () => {
  const features = [
    { 
      icon: Brain, 
      title: "Synthetic Consciousness", 
      desc: "True AI awareness" 
    },
    { 
      icon: Zap, 
      title: "Quantum Edge Processing", 
      desc: "Sub-millisecond speed" 
    },
    { 
      icon: Network, 
      title: "Autonomous Mesh", 
      desc: "Self-organizing systems" 
    },
    { 
      icon: Shield, 
      title: "Quantum Security", 
      desc: "Unbreakable protection" 
    },
    { 
      icon: Cpu, 
      title: "Neuromorphic AI", 
      desc: "Brain-inspired computing" 
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
              🚀 JANUARY 2026 NEW CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Discover the latest innovations in artificial intelligence and cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              
              <p className="text-blue-200 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Explore All Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default January2026NewContentShowcaseBanner;