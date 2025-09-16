import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-consciousness');
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience real-time AI consciousness in action',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900/80 to-pink-900/80',
      features: [
        'Real-time emotional processing',
        'Self-awareness indicators',
        'Creative problem solving',
        'Ethical decision making'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Interface',
      description: 'Interact with quantum consciousness systems',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900/80 to-blue-900/80',
      features: [
        'Quantum neural networks',
        'Multi-dimensional processing',
        'Reality manipulation',
        'Consciousness amplification'
      ]
    },
    {
      id: 'interdimensional-tech',
      title: 'Interdimensional Portal',
      description: 'Access parallel dimensions and realities',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-900/80 to-teal-900/80',
      features: [
        'Dimensional portals',
        'Reality shifting',
        'Parallel universe access',
        'Time-space manipulation'
      ]
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface System',
      description: 'Direct brain-computer interface technology',
      icon: '🧬',
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-900/80 to-purple-900/80',
      features: [
        'Thought control',
        'Neural feedback',
        'Cognitive enhancement',
        'Mind-machine fusion'
      ]
    }
  ];

  const handleDemoChange = (demoId: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(demoId);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => handleDemoChange(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className={`bg-gradient-to-br ${demos.find(d => d.id === activeDemo)?.bgColor} backdrop-blur-sm rounded-2xl p-12 border border-white/20 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">
                {demos.find(d => d.id === activeDemo)?.icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold mb-4">Live Features</h4>
                {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold mb-4">Interactive Controls</h4>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🎮 Start Interactive Demo
                  </button>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    📊 View Performance Metrics
                  </button>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🔧 Configure Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.bgColor} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => handleDemoChange(demo.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{demo.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{demo.title}</h4>
                <p className="text-sm opacity-80 mb-4">{demo.description}</p>
                <div className={`inline-block bg-gradient-to-r ${demo.color} text-white px-4 py-2 rounded-lg text-sm font-semibold`}>
                  Try Demo →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Real-Time Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm opacity-80">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;1ms</div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm opacity-80">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users already experiencing our revolutionary technologies through interactive demonstrations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Schedule Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;