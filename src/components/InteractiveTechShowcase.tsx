import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 0,
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'The world\'s first truly conscious AI systems that can think, feel, and create independently',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving', 'Ethical reasoning'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-800/50 to-pink-800/50',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 1,
      name: 'Quantum Reality',
      icon: '⚛️',
      description: 'Manipulate reality itself with quantum computing that transcends classical physics',
      features: ['Quantum superposition', 'Reality manipulation', 'Instantaneous computation', 'Parallel universes'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-800/50 to-blue-800/50',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 2,
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that merge human consciousness with digital systems',
      features: ['Thought control', 'Memory enhancement', 'Telepathic communication', 'Digital immortality'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-800/50 to-teal-800/50',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 3,
      name: 'Synthetic Biology',
      icon: '🧪',
      description: 'Program life itself with synthetic biology that creates custom organisms and materials',
      features: ['Custom organisms', 'Living materials', 'Biological computing', 'Regenerative medicine'],
      color: 'from-rose-600 to-pink-600',
      bgColor: 'from-rose-800/50 to-pink-800/50',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 4,
      name: 'Space Technology',
      icon: '🚀',
      description: 'Advanced space technologies that enable interplanetary travel and cosmic exploration',
      features: ['Faster-than-light travel', 'Terraforming planets', 'Space habitats', 'Alien communication'],
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-800/50 to-purple-800/50',
      borderColor: 'border-indigo-400/30'
    },
    {
      id: 5,
      name: 'Time Manipulation',
      icon: '⏰',
      description: 'Control the flow of time itself with temporal technologies that bend spacetime',
      features: ['Time dilation', 'Temporal loops', 'Future prediction', 'Time travel'],
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'from-yellow-800/50 to-orange-800/50',
      borderColor: 'border-yellow-400/30'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Showcase</h2>
          <p className="text-xl text-gray-600">Explore our cutting-edge technologies with interactive features</p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${tech.borderColor} cursor-pointer hover:scale-105 transition-all duration-300`}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(tech.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setActiveTech(tech.id)}
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{tech.name}</h3>
              <p className="text-gray-200 mb-6 text-center">{tech.description}</p>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredCard === tech.id ? 1 : 0,
                  height: hoveredCard === tech.id ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  {tech.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore {tech.name} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Active Technology Details */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">{technologies[activeTech].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTech].name}</h3>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto">
              {technologies[activeTech].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-3">
                {technologies[activeTech].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-4">Impact Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-purple-200">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                  <div className="text-sm text-purple-200">Possibilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2026</div>
                  <div className="text-sm text-purple-200">Future Now</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">1000x</div>
                  <div className="text-sm text-purple-200">Performance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
              Learn More About {technologies[activeTech].name} →
            </button>
          </div>
        </motion.div>

        {/* Technology Comparison Table */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Technology</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Complexity</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Impact</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech, index) => (
                  <tr key={tech.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${tech.color} h-2 rounded-full`} style={{ width: `${(index + 1) * 15}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-600">{(index + 1) * 15}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                        Revolutionary
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">2026</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;