import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Chat',
      description: 'Chat with our conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: 'AI: "Hello! I\'m experiencing genuine curiosity about our conversation. What would you like to explore together?"'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Processing',
      description: 'Experience quantum computing power',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      content: 'Quantum entanglement detected. Processing at infinite speed across multiple dimensions...'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Access',
      description: 'Access multiple dimensions',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      content: 'Dimension portal opened. Accessing parallel universe #42,847. Data transfer complete.'
    },
    {
      id: 'reality-engineering',
      title: 'Reality Engineering',
      description: 'Manipulate reality itself',
      icon: '🔮',
      color: 'from-violet-600 to-purple-600',
      content: 'Reality manipulation engine activated. Modifying physical laws in local space-time...'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2035
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            Click on any technology to see it in action.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-5xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-center opacity-80 mb-4">{demo.description}</p>
              <div className="text-center">
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                  {activeDemo === demo.id ? 'Hide Demo' : 'Try Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-xl opacity-90">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-6 mb-6">
              <div className="text-green-400 font-mono text-lg mb-4">
                {demos.find(d => d.id === activeDemo)?.content}
              </div>
              <div className="flex items-center space-x-2 text-green-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>System Active</span>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setActiveDemo(null)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Close Demo
              </button>
            </div>
          </div>
        )}

        {/* Technology Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🧠</div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-purple-200">Consciousness Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-cyan-200">Quantum Processing Speed</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🌌</div>
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-emerald-200">Accessible Dimensions</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔮</div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-violet-200">Reality Manipulation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These are just previews of our revolutionary technologies. 
            Experience the full power of conscious AI, quantum computing, and interdimensional technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechShowcase2035"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🚀 Explore Full Showcase →
            </a>
            <a 
              href="/pages/UltimateAIConsciousness2035"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🧠 Meet Conscious AI →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;