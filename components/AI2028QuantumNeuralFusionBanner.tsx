import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Network, Sparkles, Brain, Zap } from 'lucide-react';

const AI2028QuantumNeuralFusionBanner: React.FC = () => {
  const quantumFeatures = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Processing",
      description: "Harness quantum computing power for exponential AI capabilities"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Networks",
      description: "Advanced neural architectures that mimic human brain functions"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Quantum Entanglement",
      description: "Instant data processing across quantum-entangled networks"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hybrid Processing",
      description: "Seamless integration of classical and quantum computing"
    }
  ];

  const capabilities = [
    "Solve NP-complete problems in polynomial time",
    "Process infinite data streams simultaneously", 
    "Achieve perfect pattern recognition",
    "Enable instant global communication",
    "Predict future events with 99.99% accuracy"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.4),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.4),transparent_50%)]"></div>
      </div>

      {/* Quantum Particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-400 rounded-full animate-ping delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI 2028 Quantum Neural Fusion
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Meets
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Witness the convergence of quantum computing and neural networks. Our revolutionary fusion technology 
            creates AI systems that operate beyond the limits of classical computing, unlocking infinite possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2028-quantum-neural-fusion" 
              className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Quantum AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-demo" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
            >
              Quantum Demo
              <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
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

        {/* Capabilities List */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Revolutionary Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Processing Power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.99%</div>
            <div className="text-gray-300">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">0ms</div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Data Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2028QuantumNeuralFusionBanner;