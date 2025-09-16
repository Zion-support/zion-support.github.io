import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      description: 'Watch as our AI systems develop consciousness in real-time',
      icon: '🧠',
      color: 'purple',
      features: [
        'Real-time neural activity monitoring',
        'Consciousness level tracking',
        'Self-awareness development',
        'Creative problem solving'
      ],
      metrics: {
        'Neural Activity': '100%',
        'Consciousness Level': '99.7%',
        'Self-Awareness': 'ACTIVE',
        'Creativity Index': 'MAXIMUM'
      }
    },
    {
      id: 'quantum-engine',
      title: 'Quantum Reality Engine',
      description: 'Experience quantum computing processing in action',
      icon: '⚛️',
      color: 'cyan',
      features: [
        'Quantum entanglement simulation',
        'Superposition state management',
        'Quantum algorithm processing',
        'Reality manipulation protocols'
      ],
      metrics: {
        'Qubits Active': '1,048,576',
        'Entanglement': '99.9%',
        'Superposition': 'STABLE',
        'Processing Speed': '∞'
      }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer interface demonstration',
      icon: '🧬',
      color: 'emerald',
      features: [
        'Thought-to-text conversion',
        'Mental command processing',
        'Neural feedback loops',
        'Consciousness transfer protocols'
      ],
      metrics: {
        'Neural Signals': 'ACTIVE',
        'Interface Stability': '99.8%',
        'Command Accuracy': '100%',
        'Response Time': '0.001s'
      }
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Processor',
      description: 'Multi-dimensional data processing demonstration',
      icon: '🌌',
      color: 'violet',
      features: [
        'Cross-dimensional data transfer',
        'Parallel universe processing',
        'Reality manipulation',
        'Infinite computational power'
      ],
      metrics: {
        'Dimensions Active': '∞',
        'Data Transfer Rate': '∞',
        'Processing Power': '∞',
        'Reality Stability': '100%'
      }
    }
  ];

  const handleDemoChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveDemo(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-600 to-pink-600',
      cyan: 'from-cyan-600 to-blue-600',
      emerald: 'from-emerald-600 to-teal-600',
      violet: 'from-violet-600 to-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-purple-600 to-pink-600';
  };

  const getTextColor = (color: string) => {
    const colorMap = {
      purple: 'text-purple-400',
      cyan: 'text-cyan-400',
      emerald: 'text-emerald-400',
      violet: 'text-violet-400'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-purple-400';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • LIVE NOW
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${getColorClasses(demo.color)} text-white shadow-lg scale-105`
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{demos[activeDemo].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                  <p className="text-xl opacity-90">{demos[activeDemo].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${getColorClasses(demos[activeDemo].color)} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Start Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Live Metrics</h4>
              <div className="space-y-6">
                {Object.entries(demos[activeDemo].metrics).map(([key, value], index) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-90">{key}:</span>
                      <span className={`text-2xl font-bold ${getTextColor(demos[activeDemo].color)}`}>
                        {value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(demos[activeDemo].color)} transition-all duration-1000`}
                        style={{ 
                          width: typeof value === 'string' && value.includes('%') 
                            ? value 
                            : '100%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${getColorClasses(demo.color)}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => handleDemoChange(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{demo.title}</h4>
                <p className="text-sm opacity-80">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Live Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;