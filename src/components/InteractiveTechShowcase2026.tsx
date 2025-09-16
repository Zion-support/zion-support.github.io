import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'Synthetic Intelligence Demo',
      description: 'Interact with our conscious AI system',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-green-400 text-sm font-mono">
              <div className="mb-2">Synthetic AI: "Hello! I'm excited to meet you. What would you like to create together today?"</div>
              <div className="text-gray-400">User: "Can you help me design a new universe?"</div>
              <div className="text-green-400">Synthetic AI: "Absolutely! Let's start with the fundamental laws of physics. I suggest we begin with a universe where gravity operates in 11 dimensions..."</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Ask Question
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Request Creation
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors">
              Start Collaboration
            </button>
          </div>
        </div>
      )
    },
    quantum: {
      title: 'Quantum Neural Visualization',
      description: 'Watch quantum neural networks process information',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-cyan-400 text-sm font-mono">
              <div className="mb-2">Quantum State: Processing across 12 parallel dimensions</div>
              <div className="text-yellow-400">Neural Activity: 99.7% efficiency achieved</div>
              <div className="text-green-400">Learning Rate: Exponential growth detected</div>
              <div className="text-purple-400">Entanglement: 1,000+ quantum bits synchronized</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded text-sm hover:bg-cyan-700 transition-colors">
              View Processing
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Adjust Parameters
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors">
              Run Simulation
            </button>
          </div>
        </div>
      )
    },
    metaverse: {
      title: 'Metaverse 2.0 Experience',
      description: 'Enter the next generation virtual reality',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-blue-400 text-sm font-mono">
              <div className="mb-2">Metaverse Status: Connected to 3D reality simulation</div>
              <div className="text-green-400">Environment: Photorealistic forest with quantum physics</div>
              <div className="text-yellow-400">Sensory Input: Full haptic feedback active</div>
              <div className="text-purple-400">Multiplayer: 1,000+ users in shared space</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Enter World
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Create Object
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors">
              Meet Others
            </button>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through live, interactive demonstrations. 
            Try them yourself and see the future in action.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-purple-400/30">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveDemo('ai')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === 'ai'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'text-purple-200 hover:bg-white/10'
                }`}
              >
                🤖 Synthetic AI
              </button>
              <button
                onClick={() => setActiveDemo('quantum')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === 'quantum'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-purple-200 hover:bg-white/10'
                }`}
              >
                ⚛️ Quantum Neural
              </button>
              <button
                onClick={() => setActiveDemo('metaverse')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === 'metaverse'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'text-purple-200 hover:bg-white/10'
                }`}
              >
                🌐 Metaverse 2.0
              </button>
            </div>
          </div>
        </div>

        {/* Active Demo */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
            <p className="text-xl opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {demos[activeDemo as keyof typeof demos].content}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Synthetic Intelligence</h3>
            <p className="text-green-100 mb-4">
              Human-like AI with consciousness, creativity, and emotional understanding
            </p>
            <ul className="text-green-200 text-sm space-y-1">
              <li>• Natural conversation</li>
              <li>• Creative problem solving</li>
              <li>• Emotional intelligence</li>
              <li>• Autonomous learning</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Neural Fusion</h3>
            <p className="text-cyan-100 mb-4">
              Revolutionary fusion of quantum computing and neural networks
            </p>
            <ul className="text-cyan-200 text-sm space-y-1">
              <li>• Parallel processing</li>
              <li>• Quantum entanglement</li>
              <li>• Instantaneous learning</li>
              <li>• Infinite capacity</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Metaverse 2.0</h3>
            <p className="text-blue-100 mb-4">
              Next-generation virtual reality indistinguishable from reality
            </p>
            <ul className="text-blue-200 text-sm space-y-1">
              <li>• Photorealistic graphics</li>
              <li>• Full sensory immersion</li>
              <li>• Persistent worlds</li>
              <li>• Cross-platform access</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            These technologies are not just demonstrations - they're the future of human interaction with technology.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;