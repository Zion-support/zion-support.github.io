import React, { useState } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('consciousness');
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = {
    consciousness: {
      title: 'Consciousness Computing Demo',
      description: 'Experience direct neural interface technology',
      icon: '🧠',
      features: [
        'Real-time thought recognition',
        'Neural pattern visualization',
        'Consciousness streaming',
        'Emotional state analysis'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality at the quantum level',
      icon: '⚡',
      features: [
        'Quantum state manipulation',
        'Reality simulation',
        'Parallel universe access',
        'Quantum entanglement'
      ],
      color: 'from-cyan-600 to-blue-600'
    },
    interdimensional: {
      title: 'Interdimensional Gateway',
      description: 'Travel between parallel dimensions',
      icon: '🌌',
      features: [
        'Dimensional portal creation',
        'Cross-reality communication',
        'Multiverse navigation',
        'Reality synchronization'
      ],
      color: 'from-emerald-600 to-teal-600'
    }
  };

  const handleDemoChange = (demo: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(demo);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2029</h2>
        <p className="text-xl opacity-90">Experience the future of technology with hands-on demonstrations</p>
      </div>

      {/* Demo Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => handleDemoChange(key)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-white text-gray-900 font-semibold'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Demo Area */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} rounded-xl p-8 text-center`}>
            <div className="text-6xl mb-4 animate-pulse">{demos[activeDemo as keyof typeof demos].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
            <p className="text-xl opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Interactive Features</h4>
            <div className="space-y-3">
              {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Live Demo Controls</h4>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🎮 Start Interactive Demo
              </button>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                📊 View Analytics
              </button>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🔧 Configure Settings
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Real-time Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Processing Power:</span>
                <span className="text-green-400">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="text-green-400">99.99%</span>
              </div>
              <div className="flex justify-between">
                <span>Latency:</span>
                <span className="text-green-400">0.001ms</span>
              </div>
              <div className="flex justify-between">
                <span>Uptime:</span>
                <span className="text-green-400">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg opacity-90 mb-6">Join thousands of pioneers exploring revolutionary technology</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;