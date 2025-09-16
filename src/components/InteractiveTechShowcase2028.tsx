import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'AI Consciousness Demo',
      description: 'Experience AI that thinks, learns, and evolves in real-time',
      features: [
        'Real-time learning algorithms',
        'Emotional intelligence simulation',
        'Creative problem solving',
        'Autonomous decision making'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Computing Demo',
      description: 'Explore quantum algorithms and their exponential processing power',
      features: [
        'Quantum superposition visualization',
        'Entanglement demonstration',
        'Quantum algorithm execution',
        'Parallel universe simulation'
      ],
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interface Demo',
      description: 'Control digital environments with your thoughts',
      features: [
        'Thought-controlled navigation',
        'Neural pattern recognition',
        'Direct brain-computer interface',
        'Consciousness transfer simulation'
      ],
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and hands-on exploration
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
                <p className="text-xl opacity-90 mb-6">{demos[activeDemo as keyof typeof demos].description}</p>
                <ul className="space-y-3">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/50 rounded-xl p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {activeDemo === 'ai' && '🧠'}
                      {activeDemo === 'quantum' && '⚛️'}
                      {activeDemo === 'neural' && '🧬'}
                    </div>
                    <p className="text-gray-400">Interactive Demo Area</p>
                    <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4 text-center">🎮</div>
              <h3 className="text-xl font-bold mb-4 text-center">Hands-On Experience</h3>
              <p className="text-gray-300 text-center">Interact directly with cutting-edge technology through intuitive controls and real-time feedback.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4 text-center">🔬</div>
              <h3 className="text-xl font-bold mb-4 text-center">Scientific Accuracy</h3>
              <p className="text-gray-300 text-center">All demonstrations are based on real scientific principles and current research in the field.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-center">Future Vision</h3>
              <p className="text-gray-300 text-center">Experience technologies that will shape our world in the coming decades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;