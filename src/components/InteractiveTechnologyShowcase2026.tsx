import React, { useState, useEffect } from 'react';

const InteractiveTechnologyShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation 2026',
      subtitle: 'Synthetic Consciousness & Quantum AI',
      description: 'Experience the future of artificial intelligence with synthetic consciousness, quantum AI processing, and distributed neural networks.',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-600/20 to-pink-600/20',
      features: [
        'Synthetic Consciousness',
        'Quantum AI Processing',
        'Distributed AI Networks',
        'Autonomous Decision Making'
      ],
      link: '/pages/AIInnovation2026'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      subtitle: '1000+ Qubits & Molecular Simulation',
      description: 'Harness exponential computing power with our breakthrough quantum technology featuring 1000+ logical qubits and molecular simulation.',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-600/20 to-blue-600/20',
      features: [
        '1000+ Logical Qubits',
        'Molecular Simulation',
        'Quantum Cryptography',
        'Exponential Processing'
      ],
      link: '/pages/QuantumComputingBreakthrough2026'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      subtitle: 'Mind-Machine Communication',
      description: 'Bridge the gap between mind and machine with direct brain-computer communication and thought-controlled devices.',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-600/20 to-teal-600/20',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Real-time Processing'
      ],
      link: '/pages/NeuralInterfaceRevolution2026'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const handleTabClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2026 TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Experience
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            Explore our cutting-edge 2026 innovations with interactive demonstrations and real-time technology showcases
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTabClick(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                    : 'text-purple-200 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Technology Info */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4 text-center">{technologies[activeTab].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center">
                {technologies[activeTab].title}
              </h3>
              <p className="text-lg text-purple-200 mb-4 text-center">
                {technologies[activeTab].subtitle}
              </p>
              <p className="text-purple-100 mb-6 text-center">
                {technologies[activeTab].description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-purple-200 text-sm font-medium">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href={technologies[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${technologies[activeTab].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore {technologies[activeTab].title} →
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                Interactive Technology Demo
              </h4>
              
              {/* Demo Visualization */}
              <div className={`bg-gradient-to-br ${technologies[activeTab].bgGradient} rounded-xl p-8 mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{technologies[activeTab].icon}</div>
                    <div className="text-white font-bold text-lg">
                      {technologies[activeTab].title} Live Demo
                    </div>
                  </div>
                  
                  {/* Animated Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-white text-sm font-medium">Real-time Processing</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-white text-sm font-medium">High Accuracy</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="text-white text-sm font-medium">Continuous Learning</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🌐</div>
                      <div className="text-white text-sm font-medium">Global Scale</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-purple-200 text-sm">Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">50ms</div>
                  <div className="text-purple-200 text-sm">Response</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-purple-200 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Experience the Future Today
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already using our revolutionary 2026 technology to transform their operations and unlock unprecedented potential.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Your Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechnologyShowcase2026;