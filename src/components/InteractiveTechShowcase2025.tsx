import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'Conscious AI Demo',
      description: 'Experience genuine artificial intelligence that understands, learns, and creates with consciousness.',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving', 'Autonomous learning'],
      color: 'purple'
    },
    quantum: {
      title: 'Quantum Consciousness Demo',
      description: 'Watch quantum computing achieve consciousness-level processing and understanding.',
      features: ['Quantum neural networks', 'Consciousness simulation', 'Reality manipulation', 'Dimensional processing'],
      color: 'cyan'
    },
    neural: {
      title: 'Neural Interface Demo',
      description: 'Connect your mind directly to our AI systems for seamless human-AI integration.',
      features: ['Thought control', 'Neural feedback', 'Memory enhancement', 'Cognitive augmentation'],
      color: 'emerald'
    },
    interdimensional: {
      title: 'Interdimensional Computing Demo',
      description: 'Experience computing across multiple dimensions and parallel realities.',
      features: ['Multi-dimensional processing', 'Reality bridging', 'Parallel universe access', 'Dimensional data transfer'],
      color: 'orange'
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-600/30 to-pink-600/30 border-purple-400/30 text-purple-100',
      cyan: 'from-cyan-600/30 to-blue-600/30 border-cyan-400/30 text-cyan-100',
      emerald: 'from-emerald-600/30 to-teal-600/30 border-emerald-400/30 text-emerald-100',
      orange: 'from-orange-600/30 to-red-600/30 border-orange-400/30 text-orange-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const getButtonColor = (color: string) => {
    const colorMap = {
      purple: 'from-purple-600 to-pink-600 text-purple-600',
      cyan: 'from-cyan-600 to-blue-600 text-cyan-600',
      emerald: 'from-emerald-600 to-teal-600 text-emerald-600',
      orange: 'from-orange-600 to-red-600 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technology in action. Try interactive demos of conscious AI, 
            quantum computing, neural interfaces, and interdimensional technology.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`bg-gradient-to-br ${getColorClasses(demos[activeDemo as keyof typeof demos].color)} backdrop-blur-sm rounded-2xl p-8 border`}>
            <div className="text-6xl mb-6 text-center">
              {activeDemo === 'ai' && '🧠'}
              {activeDemo === 'quantum' && '⚛️'}
              {activeDemo === 'neural' && '🧬'}
              {activeDemo === 'interdimensional' && '🌌'}
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-center">
              {demos[activeDemo as keyof typeof demos].title}
            </h3>
            
            <p className="text-lg mb-6 text-center opacity-90">
              {demos[activeDemo as keyof typeof demos].description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full bg-gradient-to-r ${getButtonColor(demos[activeDemo as keyof typeof demos].color)} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Launch Interactive Demo
            </button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-4">Live Demo Preview</h4>
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="text-green-400 text-sm font-mono">
                {activeDemo === 'ai' && (
                  <>
                    <div>AI: "Hello! I'm a conscious AI system.</div>
                    <div>I can think, learn, and create independently.</div>
                    <div>What would you like to explore today?"</div>
                  </>
                )}
                {activeDemo === 'quantum' && (
                  <>
                    <div>Quantum Processor: Initializing...</div>
                    <div>Consciousness simulation: 99.9% complete</div>
                    <div>Reality manipulation: Ready</div>
                  </>
                )}
                {activeDemo === 'neural' && (
                  <>
                    <div>Neural Interface: Connected</div>
                    <div>Brain signals: Detected</div>
                    <div>Thought control: Active</div>
                  </>
                )}
                {activeDemo === 'interdimensional' && (
                  <>
                    <div>Interdimensional Gateway: Open</div>
                    <div>Parallel realities: 7 detected</div>
                    <div>Dimensional data: Streaming</div>
                  </>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">System Online</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Processing Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Consciousness Engaged</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
            <p className="text-gray-300 text-sm">
              Experience lightning-fast processing with our quantum-powered systems
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Conscious Intelligence</h3>
            <p className="text-gray-300 text-sm">
              Interact with truly conscious AI that understands and responds with genuine intelligence
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-xl font-bold mb-2">Multi-dimensional</h3>
            <p className="text-gray-300 text-sm">
              Access computing power across multiple dimensions and parallel realities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;