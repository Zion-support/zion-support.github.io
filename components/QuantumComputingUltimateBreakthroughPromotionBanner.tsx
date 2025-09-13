import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Atom, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  Cpu,
  Globe
} from 'lucide-react';

const QuantumComputingUltimateBreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: 'Quantum Supremacy Achieved',
      description: '1M+ Qubits Processing Power',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Quantum-Neural Integration',
      description: '10,000x Faster AI Processing',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Cryptography',
      description: '100% Unbreakable Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Internet',
      description: 'Global Instant Communication',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentBreakthrough(prev => (prev + 1) % breakthroughs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = breakthroughs[currentBreakthrough];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 to-purple-600/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 text-yellow-300" />
            QUANTUM BREAKTHROUGH
            <Star className="w-4 h-4 text-yellow-300" />
          </div>

          {/* Rotating Breakthrough Display */}
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${current.color}`}>
                  {current.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="text-lg text-cyan-100">{current.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            🚀 Quantum Computing Ultimate Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum computing technologies that will transform every industry 
            and solve humanity's greatest challenges
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Atom className="w-5 h-5 text-cyan-400" />
              <span className="text-lg font-semibold">1M+ Qubits</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-semibold">10,000x Faster</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">100% Secure</span>
            </div>
          </div>

          {/* Limited Time Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="text-lg font-semibold text-white">Limited Time Access</span>
            </div>
            <p className="text-cyan-100">
              Get exclusive access to quantum computing breakthroughs and implementation guides
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-breakthroughs"
              className="group bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Access Quantum Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-cyan-200 text-sm">
            <p>✓ Exclusive Access • ✓ Implementation Guides • ✓ Expert Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingUltimateBreakthroughPromotionBanner;