import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, Globe, Atom, Brain, Target, TrendingUp } from 'lucide-react';

const QuantumComputingBreakthroughs2028PromotionBanner: React.FC = () => {
  const highlights = [
    { icon: Cpu, value: '1000x', label: 'Faster Processing' },
    { icon: Shield, value: '99.97%', label: 'Error Correction' },
    { icon: Globe, value: '100+', label: 'Quantum Nodes' },
    { icon: Brain, value: '10,000+', label: 'Stable Qubits' }
  ];

  const features = [
    {
      icon: Atom,
      title: 'Quantum-Neural Hybrid',
      description: 'Revolutionary integration of quantum computing with neural networks'
    },
    {
      icon: Globe,
      title: 'Global Quantum Internet',
      description: 'Ultra-secure worldwide quantum communication network'
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Exponentially faster AI training and inference processes'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-24 h-24 bg-indigo-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            BREAKTHROUGH: Quantum Computing 2028
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Revolution</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-300">Starts Here</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future with quantum-neural hybrid processing, global quantum internet, and revolutionary quantum machine learning that will transform every industry.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{highlight.value}</div>
                    <div className="text-sm text-gray-300">{highlight.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group">
                  <IconComponent className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Industry Impact */}
          <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-2xl p-8 border border-indigo-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Industry Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">10x</div>
                <div className="text-gray-300 text-sm">Faster Drug Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">More Accurate Climate Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Fraud Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100x</div>
                <div className="text-gray-300 text-sm">Mission Efficiency Gains</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-breakthroughs-2028"
              className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              Explore Quantum Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/quantum-computing-interactive-demo"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Interactive Demo
            </Link>
            <Link
              to="/quantum-computing-case-studies"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Case Studies
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Join 5,000+ quantum computing pioneers and industry leaders
            </p>
            <div className="flex justify-center items-center space-x-1">
              <Target className="w-4 h-4 text-indigo-400" />
              <span className="text-gray-400 text-sm ml-2">Backed by leading quantum research institutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughs2028PromotionBanner;