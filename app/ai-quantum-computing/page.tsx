import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Atom, Cpu, Zap, BarChart3, Shield, CheckCircle } from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for complex problem solving and optimization.',
      benefits: ['Quantum optimization', 'Complex simulations', 'Cryptographic solutions']
    },
    {
      icon: Cpu,
      title: 'Hybrid Computing',
      description: 'Seamless integration of quantum and classical computing for maximum efficiency.',
      benefits: ['Hybrid algorithms', 'Classical-quantum interfaces', 'Optimized processing']
    },
    {
      icon: Zap,
      title: 'Quantum Speedup',
      description: 'Exponential speedup for specific computational problems using quantum principles.',
      benefits: ['Exponential speedup', 'Parallel processing', 'Quantum advantage']
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and secure communication protocols.',
      benefits: ['Quantum encryption', 'Secure communication', 'Future-proof security']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered quantum computing solutions for complex problem solving and optimization."
        />
        <meta 
          name="keywords" 
          content="quantum computing, AI quantum, quantum algorithms, quantum optimization, quantum security, hybrid computing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing combined with artificial intelligence 
              to solve the most complex problems of tomorrow.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready for Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and explore the limitless possibilities 
              of AI-powered quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiQuantumComputingPage;