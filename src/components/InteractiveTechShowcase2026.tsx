import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience real-time AI consciousness processing and emotional responses',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time Processing', 'Emotional Intelligence', 'Self-Awareness', 'Neural Mapping']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Witness quantum supremacy and parallel universe computing in action',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Parallel Processing', 'Cryptography', 'Molecular Simulation']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Control technology with your mind through advanced brain-computer interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Mind Control', 'Thought Translation', 'Neural Feedback', 'Brain Mapping']
    },
    {
      id: 'space-technology',
      title: 'Space Technology Demo',
      description: 'Explore advanced space technology for interplanetary travel and colonization',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      features: ['Mars Colonization', 'FTL Travel', 'Space Mining', 'Planetary Defense']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology demos of 2026. Interact with AI consciousness, 
            quantum computing, neural interfaces, and space technology in real-time.
          </p>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-6xl mb-4 text-center group-hover:animate-bounce">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{demo.title}</h3>
              <p className="text-gray-200 mb-4 text-center text-sm">{demo.description}</p>
              
              {activeDemo === demo.id && (
                <div className="mt-4 space-y-2">
                  {demo.features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-2 text-sm text-center">
                      {feature}
                    </div>
                  ))}
                  <div className="mt-4">
                    <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                      Launch Demo →
                    </button>
                  </div>
                </div>
              )}
              
              {activeDemo !== demo.id && (
                <div className="text-center">
                  <div className="text-sm text-gray-300">Click to explore</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Live Performance Metrics */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-16 border border-blue-400/30">
          <h3 className="text-3xl font-bold mb-8 text-center">📊 Live Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-400">99.9%</div>
              <div className="text-lg font-semibold mb-1">AI Accuracy</div>
              <div className="text-sm text-blue-200">Real-time Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-purple-400">1M+</div>
              <div className="text-lg font-semibold mb-1">Qubits</div>
              <div className="text-sm text-purple-200">Quantum Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-emerald-400">1000x</div>
              <div className="text-lg font-semibold mb-1">Faster</div>
              <div className="text-sm text-emerald-200">Neural Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-orange-400">∞</div>
              <div className="text-lg font-semibold mb-1">Possibilities</div>
              <div className="text-sm text-orange-200">Space Exploration</div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">⚡ Technology Comparison 2026</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 rounded-xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4">Technology</th>
                  <th className="text-center p-4">Processing Speed</th>
                  <th className="text-center p-4">Accuracy</th>
                  <th className="text-center p-4">Scalability</th>
                  <th className="text-center p-4">Innovation Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">AI Consciousness</td>
                  <td className="p-4 text-center">Real-time</td>
                  <td className="p-4 text-center text-green-400">99.9%</td>
                  <td className="p-4 text-center">Infinite</td>
                  <td className="p-4 text-center text-yellow-400">★★★★★</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">Quantum Computing</td>
                  <td className="p-4 text-center">1M+ Qubits</td>
                  <td className="p-4 text-center text-green-400">99.7%</td>
                  <td className="p-4 text-center">Exponential</td>
                  <td className="p-4 text-center text-yellow-400">★★★★★</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-semibold">Neural Interfaces</td>
                  <td className="p-4 text-center">Instant</td>
                  <td className="p-4 text-center text-green-400">98.5%</td>
                  <td className="p-4 text-center">Global</td>
                  <td className="p-4 text-center text-yellow-400">★★★★★</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Space Technology</td>
                  <td className="p-4 text-center">FTL Speed</td>
                  <td className="p-4 text-center text-green-400">99.8%</td>
                  <td className="p-4 text-center">Interplanetary</td>
                  <td className="p-4 text-center text-yellow-400">★★★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-12 border border-blue-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join millions of users who are already experiencing the revolutionary technology of 2026. 
              Interact with the most advanced systems ever created.
            </p>
            <div className="flex justify-center space-x-6">
              <Link 
                to="/pages/UltimateAIConsciousness2026" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start Interactive Demo →
              </Link>
              <Link 
                to="/pages/RevolutionaryTechShowcase2026" 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg"
              >
                View All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;