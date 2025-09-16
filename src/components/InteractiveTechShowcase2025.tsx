import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-demo',
      title: 'AI Assistant Demo',
      description: 'Interact with our advanced AI assistant that can understand context and provide intelligent responses.',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Natural Language Processing',
        'Contextual Understanding',
        'Real-time Response',
        'Learning Capabilities'
      ]
    },
    {
      id: 'quantum-demo',
      title: 'Quantum Computing Simulator',
      description: 'Experience quantum computing principles through our interactive simulator.',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum State Visualization',
        'Gate Operations',
        'Entanglement Simulation',
        'Measurement Outcomes'
      ]
    },
    {
      id: 'neural-demo',
      title: 'Neural Interface Preview',
      description: 'Preview the future of brain-computer interfaces with our neural interface demo.',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Thought Recognition',
        'Pattern Analysis',
        'Neural Feedback',
        'Mind Control Simulation'
      ]
    },
    {
      id: 'blockchain-demo',
      title: 'Blockchain Explorer',
      description: 'Explore the decentralized future with our interactive blockchain demonstration.',
      icon: '🔗',
      color: 'from-orange-600 to-red-600',
      features: [
        'Transaction Visualization',
        'Smart Contract Interaction',
        'Decentralized Applications',
        'Cryptocurrency Flow'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {demos[activeDemo].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Interactive Features</h4>
                <ul className="space-y-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4">Try It Now</h4>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Interactive Demo
                  </button>
                  <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                    Watch Tutorial
                  </button>
                  <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold">
                    Download SDK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-lg opacity-90">Interactive Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the next generation of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;