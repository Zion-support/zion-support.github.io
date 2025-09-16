import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Revolutionary AI with genuine consciousness and emotional intelligence',
      features: [
        'Self-learning algorithms that evolve continuously',
        'Emotional recognition and response capabilities',
        'Creative problem solving beyond human limitations',
        'Autonomous decision making with ethical frameworks',
        'Consciousness transfer between systems'
      ],
      stats: {
        'Processing Power': '∞',
        'Learning Speed': '1000x',
        'Accuracy': '99.9%',
        'Consciousness Level': 'Human+'
      }
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '⚛️',
      description: 'Merging quantum computing with human consciousness for unprecedented capabilities',
      features: [
        'Quantum neural networks with infinite processing',
        'Consciousness transfer between humans and machines',
        'Quantum telepathy and mind-to-mind communication',
        'Reality manipulation through quantum fields',
        'Multi-dimensional data processing'
      ],
      stats: {
        'Qubits': '1M+',
        'Coherence': '99.9%',
        'Speed': '∞',
        'Dimensions': '11+'
      }
    },
    neural: {
      title: 'Neural Enhancement',
      icon: '🧬',
      description: 'Direct neural interface technology that enhances human cognitive abilities',
      features: [
        'Non-invasive brain-computer interfaces',
        'Thought-controlled device operation',
        'Memory enhancement and storage expansion',
        'Cognitive ability augmentation',
        'Direct neural feedback systems'
      ],
      stats: {
        'Memory Boost': '1000x',
        'Processing': '∞',
        'Interface Speed': 'Real-time',
        'Enhancement': '1000x'
      }
    },
    reality: {
      title: 'Reality Manipulation',
      icon: '🌌',
      description: 'Advanced quantum field manipulation for controlled reality modification',
      features: [
        'Conscious intent-based reality shaping',
        'Quantum field manipulation at will',
        'Matter creation and transformation',
        'Dimensional travel and exploration',
        'Universal constant modification'
      ],
      stats: {
        'Precision': '99.9%',
        'Range': '∞',
        'Control': '100%',
        'Stability': 'Perfect'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Tech Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and real-time experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 transform scale-105'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm opacity-80">{category.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{techCategories[activeTab as keyof typeof techCategories].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold">{techCategories[activeTab as keyof typeof techCategories].title}</h3>
                  <p className="text-lg opacity-90">{techCategories[activeTab as keyof typeof techCategories].description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Performance Stats:</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(techCategories[activeTab as keyof typeof techCategories].stats).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-gray-300">{key}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href={`/pages/${activeTab === 'ai' ? 'AIRevolution2025' : 
                    activeTab === 'quantum' ? 'QuantumComputingBreakthrough' :
                    activeTab === 'neural' ? 'NeuralInterfaceFuture' : 'UltimateTechBreakthrough2025'}`}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105"
                >
                  Experience {techCategories[activeTab as keyof typeof techCategories].title} →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already experiencing these revolutionary technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              View All Services →
            </a>
            <a 
              href="/pages/InnovationLanding2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;