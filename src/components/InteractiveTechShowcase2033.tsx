import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Control digital environments using only your thoughts',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Thought Control', 'Real-time Processing', '99.9% Accuracy', 'Mind-Machine Fusion']
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      description: 'Experience quantum computing in action with real-time simulation',
      icon: '⚛️',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum Entanglement', 'Superposition States', 'Quantum Gates', '99.9% Accuracy']
    },
    {
      id: 'holographic-display',
      title: 'Holographic Display',
      description: 'Interact with 3D holograms in real-time',
      icon: '🌟',
      color: 'from-green-600 to-teal-600',
      features: ['3D Holograms', 'Touch Interaction', 'Real-time Rendering', '99.9% Accuracy']
    },
    {
      id: 'time-manipulation',
      title: 'Time Manipulation',
      description: 'Experience time dilation and temporal effects',
      icon: '🔮',
      color: 'from-orange-600 to-red-600',
      features: ['Future Prediction', 'Past Reconstruction', 'Time Loops', '99.9% Accuracy']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/30 rounded-full animate-ping"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2033
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge interactive demonstrations. 
            Control digital environments with your mind, explore quantum realms, and interact with holographic displays.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color} p-6 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/20 ${
                activeDemo === demo.id ? 'ring-4 ring-white/50 scale-105' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-90 mb-4">{demo.description}</p>
                
                {activeDemo === demo.id && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-xs space-y-1">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.title} - Live Demo
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
              
              <div className="bg-black/30 rounded-xl p-6 mb-6">
                <div className="text-6xl mb-4">
                  {demos.find(d => d.id === activeDemo)?.icon}
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">DEMO ACTIVE</div>
                <div className="text-sm text-gray-300">Processing neural signals...</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">0.001s</div>
                  <div className="text-sm text-gray-300">Latency</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
                  <div className="text-sm text-gray-300">Possibilities</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-300 mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technology 
            to transform their businesses and unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              🎯 Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;