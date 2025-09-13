import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Zap, Shield, Cpu, Clock, TrendingUp, Target, Users } from 'lucide-react';

const QuantumComputingBreakthroughPromotionBanner2025: React.FC = () => {
  const highlights = [
    {
      icon: Atom,
      title: 'Quantum Supremacy',
      description: '10^15x faster than classical computers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quantum-Neural Fusion',
      description: 'Revolutionary AI integration',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum cryptography revolution',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: '1,000+ Qubits',
      description: 'Commercial quantum processors',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '10^15x', label: 'Processing Speed' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '∞', label: 'Data Capacity' },
    { value: '2025', label: 'Breakthrough Year' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            BREAKTHROUGH: Quantum Computing 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Breakthrough 2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum technologies that will make classical computing obsolete. 
            Experience 10^15x faster processing and unbreakable security.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className={`bg-gradient-to-r ${highlight.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{highlight.title}</h3>
                <p className="text-gray-300 text-center text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Revolutionary Quantum Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Exponential Speed</h4>
              <p className="text-gray-300">
                Solve problems in seconds that would take classical computers millennia
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Unbreakable Security</h4>
              <p className="text-gray-300">
                Quantum cryptography that makes current security systems obsolete
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Global Impact</h4>
              <p className="text-gray-300">
                Transform every industry and aspect of human civilization
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Get Left Behind in the Quantum Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Get exclusive access to quantum computing solutions, implementation guides, and ROI calculations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quantum-computing-2025" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Quantum Solutions
                <Target className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/quantum-roi-calculator" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
              >
                Calculate Quantum ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughPromotionBanner2025;