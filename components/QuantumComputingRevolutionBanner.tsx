import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Zap, Target, Brain, Network, Sparkles } from 'lucide-react';

const QuantumComputingRevolutionBanner: React.FC = () => {
  const quantumFeatures = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Supremacy",
      description: "Achieve computational power that surpasses classical computers by orders of magnitude"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Processors",
      description: "Advanced quantum processors with 1000+ qubits for enterprise applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Speed",
      description: "Solve complex problems in seconds that would take classical computers millennia"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Perfect Accuracy",
      description: "Quantum error correction ensures 99.99% accuracy in all computations"
    }
  ];

  const applications = [
    "Drug Discovery & Molecular Simulation",
    "Financial Risk Analysis & Portfolio Optimization",
    "Cryptography & Cybersecurity",
    "Climate Modeling & Weather Prediction",
    "Machine Learning & AI Training",
    "Supply Chain Optimization"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 overflow-hidden">
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.4),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.4),transparent_50%)]"></div>
      </div>

      {/* Quantum Particles Animation */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-semibold mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Revolution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Quantum
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Computing Era
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the next generation of computing power. Our quantum computing solutions 
            harness the principles of quantum mechanics to solve problems impossible for classical computers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-solutions" 
              className="group bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Quantum Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-demo" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
            >
              Watch Quantum Demo
              <Brain className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {quantumFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Applications Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Revolutionary Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10^15</div>
            <div className="text-gray-300">Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.99%</div>
            <div className="text-gray-300">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingRevolutionBanner;