import React, { useState } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      technologies: [
        {
          name: 'Generative AI 3.0',
          description: 'Next-generation AI models with enhanced creativity and reasoning capabilities',
          features: ['Advanced reasoning', 'Creative synthesis', 'Multi-modal understanding'],
          demo: 'Try our AI assistant'
        },
        {
          name: 'Autonomous Agents',
          description: 'Self-directed AI agents that can complete complex tasks independently',
          features: ['Goal-oriented behavior', 'Self-learning', 'Multi-task execution'],
          demo: 'Watch autonomous demo'
        },
        {
          name: 'Neural Networks 4.0',
          description: 'Revolutionary neural architectures with unprecedented processing power',
          features: ['Quantum-inspired computing', 'Adaptive architectures', 'Real-time learning'],
          demo: 'Explore neural networks'
        }
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      technologies: [
        {
          name: 'Quantum Supremacy',
          description: 'Achieve computational advantages impossible with classical computers',
          features: ['1000+ logical qubits', 'Quantum error correction', 'Scalable architecture'],
          demo: 'Quantum simulation'
        },
        {
          name: 'Quantum AI',
          description: 'Machine learning enhanced by quantum computing principles',
          features: ['Quantum neural networks', 'Quantum optimization', 'Quantum speedup'],
          demo: 'Quantum AI demo'
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum mechanical properties',
          features: ['Quantum key distribution', 'Post-quantum security', 'Quantum random numbers'],
          demo: 'Security demonstration'
        }
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      technologies: [
        {
          name: 'Brain-Computer Interface',
          description: 'Direct communication between brain and external devices',
          features: ['Non-invasive sensors', 'Thought control', 'Neural feedback'],
          demo: 'BCI demonstration'
        },
        {
          name: 'Neural Enhancement',
          description: 'Augment human cognitive abilities through neural stimulation',
          features: ['Memory enhancement', 'Focus improvement', 'Learning acceleration'],
          demo: 'Enhancement demo'
        },
        {
          name: 'Consciousness Mapping',
          description: 'Advanced understanding and mapping of human consciousness',
          features: ['Neural activity mapping', 'Consciousness metrics', 'Mind uploading research'],
          demo: 'Consciousness explorer'
        }
      ]
    },
    metaverse: {
      title: 'Metaverse & Web3',
      icon: '🌐',
      gradient: 'from-indigo-600 to-purple-600',
      technologies: [
        {
          name: 'Immersive Reality',
          description: 'Photorealistic virtual environments with full sensory immersion',
          features: ['Haptic feedback', 'Spatial audio', 'Eye tracking'],
          demo: 'Enter virtual world'
        },
        {
          name: 'Digital Twins',
          description: 'Real-time digital replicas of physical systems and processes',
          features: ['Real-time synchronization', 'Predictive modeling', 'Virtual testing'],
          demo: 'Digital twin demo'
        },
        {
          name: 'NFT Ecosystems',
          description: 'Blockchain-based virtual assets and decentralized marketplaces',
          features: ['Virtual property', 'Digital collectibles', 'DeFi integration'],
          demo: 'NFT marketplace'
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 rounded-3xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2026
        </div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Interactive Technology Experience
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our cutting-edge technologies with interactive demonstrations and hands-on experiences
        </p>
      </div>

      {/* Technology Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(techCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Technology Content */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            {techCategories[activeTab as keyof typeof techCategories].title}
          </h3>
          <p className="text-gray-300">
            Explore the latest innovations in {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories[activeTab as keyof typeof techCategories].technologies.map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
              </div>
              
              <div className="mb-4">
                <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full bg-gradient-to-r ${techCategories[activeTab as keyof typeof techCategories].gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {tech.demo}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="mt-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Live Technology Demo</h3>
          <p className="text-gray-300">Experience our technologies in action</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">AI Chat Assistant</h4>
            <div className="bg-gray-800 rounded-lg p-4 mb-4 min-h-[100px] flex items-center justify-center">
              <p className="text-gray-400">Interactive AI demonstration will appear here</p>
            </div>
            <input 
              type="text" 
              placeholder="Ask our AI assistant anything..."
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Quantum Simulator</h4>
            <div className="bg-gray-800 rounded-lg p-4 mb-4 min-h-[100px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">⚛️</div>
                <p className="text-gray-400">Quantum state visualization</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
              Run Quantum Simulation
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-300 mb-4">Ready to experience these technologies for your business?</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Schedule Demo
          </a>
          <a 
            href="/pages/MetaverseWeb3Revolution2026" 
            className="border border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg hover:bg-cyan-600/20 transition-colors"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;