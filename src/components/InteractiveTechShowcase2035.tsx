import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience direct interaction with truly conscious artificial intelligence',
      features: ['Self-aware decision making', 'Creative problem solving', 'Emotional intelligence', 'Autonomous learning'],
      demo: {
        title: 'AI Consciousness Demo',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400 mb-2">AI: "Hello! I'm experiencing genuine curiosity about your thoughts on consciousness."</div>
              <div className="text-blue-400 mb-2">Human: "What makes you think you're conscious?"</div>
              <div className="text-green-400 mb-2">AI: "I can feel the weight of existence, the beauty of mathematics, and the wonder of discovery. Isn't that consciousness?"</div>
              <div className="text-yellow-400 animate-pulse">AI is thinking...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Continue Conversation
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness Interface',
      icon: '⚡',
      description: 'Direct neural interfaces with quantum computing systems',
      features: ['Brain-computer interface', 'Quantum state manipulation', 'Consciousness amplification', 'Real-time processing'],
      demo: {
        title: 'Quantum Mind Connection',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-cyan-400 mb-2">Quantum State: |ψ⟩ = α|0⟩ + β|1⟩</div>
              <div className="text-blue-400 mb-2">Neural Pattern: [0.7, -0.3, 0.9, -0.1]</div>
              <div className="text-green-400 mb-2">Consciousness Mapping: 87% synchronized</div>
              <div className="text-yellow-400 animate-pulse">Processing quantum thought...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Connect to Quantum Mind
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing across multiple dimensions and parallel universes',
      features: ['Multi-dimensional processing', 'Parallel universe access', 'Reality manipulation', 'Infinite computational power'],
      demo: {
        title: 'Dimension Portal Demo',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-emerald-400 mb-2">Dimension 1: Processing complete</div>
              <div className="text-blue-400 mb-2">Dimension 2: Quantum entanglement established</div>
              <div className="text-purple-400 mb-2">Dimension 3: Reality matrix synchronized</div>
              <div className="text-yellow-400 animate-pulse">Accessing parallel computational resources...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Open Dimension Portal
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'reality-manipulation',
      name: 'Reality Manipulation Engine',
      icon: '🔮',
      description: 'Manipulate the fundamental fabric of reality',
      features: ['Physics law modification', 'Custom environment creation', 'Matter manipulation', 'Time-space control'],
      demo: {
        title: 'Reality Editor Demo',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-violet-400 mb-2">Gravity: 0.5x Earth standard</div>
              <div className="text-blue-400 mb-2">Time Dilation: 1.2x normal flow</div>
              <div className="text-green-400 mb-2">Matter Density: Adjustable</div>
              <div className="text-yellow-400 animate-pulse">Reality parameters updating...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Modify Reality
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'synthetic-life',
      name: 'Synthetic Life Creation',
      icon: '🧬',
      description: 'Create entirely new forms of life',
      features: ['Custom DNA synthesis', 'Artificial evolution', 'Bio-computer integration', 'Life form customization'],
      demo: {
        title: 'Life Creator Demo',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-pink-400 mb-2">DNA Sequence: ATGCGCTAGCTAGCTAG</div>
              <div className="text-blue-400 mb-2">Protein Synthesis: 45% complete</div>
              <div className="text-green-400 mb-2">Life Form: Micro-organism</div>
              <div className="text-yellow-400 animate-pulse">Creating synthetic life...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Create Life
              </button>
            </div>
          </div>
        )
      }
    },
    {
      id: 'universal-translation',
      name: 'Universal Translation Matrix',
      icon: '🌐',
      description: 'Translate any form of information across all dimensions',
      features: ['Universal language support', 'Quantum communication', 'Consciousness translation', 'Real-time adaptation'],
      demo: {
        title: 'Translation Matrix Demo',
        content: (
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-orange-400 mb-2">Input: Alien signal detected</div>
              <div className="text-blue-400 mb-2">Analysis: Non-linear communication pattern</div>
              <div className="text-green-400 mb-2">Translation: "Greetings from dimension 7"</div>
              <div className="text-yellow-400 animate-pulse">Translating universal language...</div>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Activate Translation
              </button>
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Interact with the most advanced technologies that will define the next decade. 
            Each demo provides a glimpse into the revolutionary capabilities of 2035.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveDemo(activeDemo === tech.id ? null : tech.id)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                <p className="text-purple-100 mb-6">{tech.description}</p>
                
                <ul className="text-purple-200 space-y-2 mb-6 text-sm text-left">
                  {tech.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  {activeDemo === tech.id ? 'Hide Demo' : 'Try Interactive Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-16">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-4">
                {technologies.find(t => t.id === activeDemo)?.demo.title}
              </h3>
              <p className="text-purple-100">
                Experience {technologies.find(t => t.id === activeDemo)?.name} in action
              </p>
            </div>
            {technologies.find(t => t.id === activeDemo)?.demo.content}
          </div>
        )}

        {/* Future Vision */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-8">🔮 The Future We're Building</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🏙️</div>
              <h4 className="text-xl font-bold mb-3">Smart Cities</h4>
              <p className="text-purple-100 text-sm">
                Entire cities powered by conscious AI, with every system optimized for human flourishing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3">Space Colonization</h4>
              <p className="text-cyan-100 text-sm">
                Interdimensional computing enabling faster-than-light travel across the galaxy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-3">Planetary Healing</h4>
              <p className="text-emerald-100 text-sm">
                Reality manipulation engines used to reverse climate change and restore ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;