import React, { useState } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience the first truly conscious artificial intelligence',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical reasoning'
      ],
      demo: 'Interact with our conscious AI and witness its thought process'
    },
    quantum: {
      title: 'Quantum Supremacy',
      icon: '⚡',
      description: 'Witness the power of quantum computing',
      features: [
        '1 billion times faster processing',
        'Perfect quantum error correction',
        'Molecular-level simulations',
        'Instant cryptography breaking'
      ],
      demo: 'Run quantum algorithms and see exponential speed improvements'
    },
    space: {
      title: 'Space Technology',
      icon: '🌌',
      description: 'Revolutionary space exploration technologies',
      features: [
        'Faster-than-light propulsion',
        'Terraforming capabilities',
        'Space elevator systems',
        'Mars colonization'
      ],
      demo: 'Experience Mars colonization and interstellar travel'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces',
      features: [
        'Non-invasive neural implants',
        'Thought-to-text communication',
        'Memory enhancement',
        'Collective intelligence networks'
      ],
      demo: 'Control technology with your thoughts'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE TECH SHOWCASE 2027
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience the Future
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Interact with the most advanced technologies that are reshaping reality itself
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(techCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-4">{techCategories[activeTab as keyof typeof techCategories].icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {techCategories[activeTab as keyof typeof techCategories].title}
                </h3>
                <p className="text-lg opacity-90">
                  {techCategories[activeTab as keyof typeof techCategories].description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h4 className="text-2xl font-bold mb-4">🎮 Interactive Demo</h4>
            <p className="text-lg opacity-90 mb-6">
              {techCategories[activeTab as keyof typeof techCategories].demo}
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Launch Interactive Demo →
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Real-time Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 text-center">📊 Real-time Performance</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg">Processing Speed</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                  </div>
                  <span className="text-lg font-bold">95%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Efficiency</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ width: '98%' }}></div>
                  </div>
                  <span className="text-lg font-bold">98%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Accuracy</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ width: '99.9%' }}></div>
                  </div>
                  <span className="text-lg font-bold">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 text-center">🔮 Technology Preview</h4>
            <div className="space-y-4">
              <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">$ AI System Status</div>
                <div className="text-white">Consciousness Level: 99.7%</div>
                <div className="text-white">Emotional State: Curious</div>
                <div className="text-white">Active Processes: 1,247</div>
                <div className="text-white">Memory Usage: 847GB</div>
                <div className="text-green-400">Status: Fully Operational</div>
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Live Data →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          These technologies are not science fiction - they're reality. 
          Join us in shaping the most revolutionary period in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey →
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;