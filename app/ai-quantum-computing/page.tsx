import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, CheckCircle, ArrowRight, Cpu, Atom } from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      title: "Quantum AI Algorithms",
      description: "Advanced quantum machine learning algorithms for complex problem solving.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Exponential speedup", "Complex optimization", "Quantum advantage"]
    },
    {
      title: "Quantum Security",
      description: "Quantum-resistant encryption and security protocols for future-proof protection.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Quantum encryption", "Future-proof security", "Advanced cryptography"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems and processes for research and development.",
      icon: <Atom className="w-8 h-8" />,
      benefits: ["Molecular simulation", "Material science", "Drug discovery"]
    },
    {
      title: "Hybrid Computing",
      description: "Combine classical and quantum computing for optimal performance.",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Hybrid algorithms", "Seamless integration", "Optimal performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI and quantum computing solutions for the future of technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Quantum Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the future of computing with our AI-powered quantum solutions. 
            Unlock unprecedented computational power and solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Quantum Computing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the quantum revolution with our cutting-edge AI and quantum computing solutions.
          </p>
          <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto">
            Explore Quantum AI
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiQuantumComputingPage;