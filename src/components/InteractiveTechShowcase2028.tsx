import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'consciousness-ai',
      title: 'Consciousness AI Demo',
      description: 'Watch AI systems demonstrate self-awareness and creative thinking',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Self-aware decision making',
        'Creative problem solving',
        'Emotional intelligence',
        'Autonomous learning'
      ],
      status: 'Live Demo Available'
    },
    {
      id: 'quantum-processing',
      title: 'Quantum Processing',
      description: 'Experience quantum computing solving complex problems in real-time',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Exponential processing speed',
        'Quantum cryptography',
        'Molecular simulation',
        'Parallel universe computing'
      ],
      status: 'Interactive Demo'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      description: 'Control systems with your thoughts using advanced BCI technology',
      icon: '🔮',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Non-invasive BCI',
        'Thought control',
        'Neural feedback',
        'Mind-machine fusion'
      ],
      status: 'Beta Testing'
    },
    {
      id: 'reality-engineering',
      title: 'Reality Engineering',
      description: 'Create and manipulate virtual realities with unprecedented precision',
      icon: '🌌',
      color: 'from-orange-600 to-red-600',
      features: [
        'Reality simulation',
        'Virtual world creation',
        'Holographic projections',
        'Interdimensional portals'
      ],
      status: 'Prototype Ready'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demos.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technology through interactive demonstrations and real-time showcases
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg text-white'
              }`}
            >
              {isPlaying ? '⏸️ Pause Demo' : '▶️ Start Auto Demo'}
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              📞 Schedule Live Demo
            </button>
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Demo Content */}
              <div>
                <div className="text-8xl mb-6 animate-bounce">{demos[activeDemo].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-xl opacity-90 mb-6">{demos[activeDemo].description}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    {demos[activeDemo].status}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                    Real-time
                  </span>
                </div>
                <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Launch Interactive Demo →
                </button>
              </div>

              {/* Demo Features */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <div className="space-y-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Demo Progress</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className={`bg-gradient-to-r ${demos[activeDemo].color} h-3 rounded-full animate-pulse`} style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Navigation */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Choose Your Demo</h3>
            <p className="text-xl opacity-90">Select from our available interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`p-6 rounded-xl transition-all duration-300 text-left ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                <p className="text-sm opacity-90 mb-4">{demo.description}</p>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    activeDemo === index ? 'bg-white' : 'bg-green-400'
                  }`}></div>
                  <span className="text-xs">{demo.status}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Live Demo Statistics</h3>
            <p className="text-xl opacity-90">Real-time data from our interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">2,847</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">15ms</div>
              <div className="text-lg opacity-90">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already experiencing our revolutionary technology through interactive demonstrations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;