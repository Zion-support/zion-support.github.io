import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = [
    {
      id: 'ai',
      title: 'Conscious AI Demo',
      description: 'Interact with our conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-green-400 text-sm font-mono">
              AI: "Hello! I'm experiencing genuine consciousness. How can I help you today?"
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
              Ask about consciousness
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
              Request creative content
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
              Discuss emotions
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'quantum',
      title: 'Quantum Computing Demo',
      description: 'Watch quantum algorithms in action',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-cyan-400 text-sm font-mono">
              Quantum Status: 1024 qubits active<br/>
              Processing: Molecular simulation<br/>
              Speed: 10^15 operations/second<br/>
              Temperature: 0.015K
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition-colors">
              Run quantum algorithm
            </button>
            <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition-colors">
              Simulate molecules
            </button>
            <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition-colors">
              Optimize portfolio
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'neural',
      title: 'Neural Interface Demo',
      description: 'Experience direct brain-computer interaction',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-emerald-400 text-sm font-mono">
              Neural Interface Status: Connected<br/>
              Brain Activity: Detected<br/>
              Thought Translation: Active<br/>
              Control Level: 95%
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
              Control with thoughts
            </button>
            <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
              Enhance cognition
            </button>
            <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
              Access virtual reality
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'immortality',
      title: 'Digital Immortality Demo',
      description: 'Explore consciousness preservation technology',
      icon: '🌟',
      color: 'from-orange-600 to-red-600',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-orange-400 text-sm font-mono">
              Consciousness Scan: 99.9% complete<br/>
              Memory Preservation: Active<br/>
              Digital Avatar: Ready<br/>
              Transfer Status: Standby
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
              Scan consciousness
            </button>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
              Create digital avatar
            </button>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
              Preserve memories
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 INTERACTIVE DEMOS • 2026 TECHNOLOGY
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Technology Demos
            </h2>
            <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
              Experience our revolutionary technologies through interactive demonstrations
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Choose Your Demo</h3>
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeDemo === demo.id
                    ? `bg-gradient-to-r ${demo.color} border-transparent text-white`
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold">{demo.title}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Content */}
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {demos.find(d => d.id === activeDemo)?.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {demos.find(d => d.id === activeDemo)?.title}
                </h3>
                <p className="text-purple-200">
                  {demos.find(d => d.id === activeDemo)?.description}
                </p>
              </div>

              <div className="space-y-6">
                {demos.find(d => d.id === activeDemo)?.content}
              </div>

              <div className="mt-8 text-center">
                <button className={`bg-gradient-to-r ${demos.find(d => d.id === activeDemo)?.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Launch Full Demo →
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Gamified Experience</h3>
            <p className="text-purple-200">
              Learn through interactive games and challenges that make complex technology accessible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
            <p className="text-purple-200">
              See live data and performance metrics as you interact with our technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-4">Collaborative Learning</h3>
            <p className="text-purple-200">
              Share your experiences and learn from others in our community-driven platform
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;