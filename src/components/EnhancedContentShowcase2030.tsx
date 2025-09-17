import React, { useState } from 'react';

const EnhancedContentShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revolution');

  const contentSections = {
    revolution: {
      title: "Ultimate Tech Revolution 2030",
      description: "Experience the convergence of AI consciousness, quantum reality, and interdimensional computing",
      features: [
        "AI Consciousness 2030",
        "Quantum Reality Engine", 
        "Interdimensional Computing",
        "Predictive Reality",
        "Neural Enhancement",
        "Planetary AI"
      ],
      link: "/pages/UltimateTechRevolution2030"
    },
    consciousness: {
      title: "Consciousness Computing Revolution 2035",
      description: "The ultimate fusion of human consciousness and artificial intelligence",
      features: [
        "Neural Consciousness Interface",
        "AI Consciousness Merger",
        "Collective Consciousness",
        "Precognitive Awareness",
        "Infinite Memory",
        "Global Empathy"
      ],
      link: "/pages/ConsciousnessComputingRevolution2035"
    },
    interdimensional: {
      title: "Interdimensional Tech Revolution 2040",
      description: "Break through the barriers of reality with multiverse technology",
      features: [
        "Dimensional Gateway",
        "Reality Manipulation Engine",
        "Universal Computing",
        "Dimensional Shifting",
        "Quantum Entanglement",
        "Universal Connectivity"
      ],
      link: "/pages/InterdimensionalTechRevolution2040"
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          🌟 Revolutionary Content Showcase 2030-2040
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore our most advanced technological content that will define the next decade
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800/50 rounded-lg p-1 flex space-x-1">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {section.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Content */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8 mb-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold mb-4">{contentSections[activeTab as keyof typeof contentSections].title}</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            {contentSections[activeTab as keyof typeof contentSections].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
            <ul className="space-y-2">
              {contentSections[activeTab as keyof typeof contentSections].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-purple-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-400/30">
              <h4 className="text-lg font-semibold mb-3">Revolutionary Impact</h4>
              <p className="text-sm opacity-90 mb-4">
                This technology will fundamentally change how we interact with reality, consciousness, and the universe itself.
              </p>
              <a 
                href={contentSections[activeTab as keyof typeof contentSections].link}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Explore Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(contentSections).map(([key, section]) => (
          <div key={key} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">
                {key === 'revolution' && '🚀'}
                {key === 'consciousness' && '🧠'}
                {key === 'interdimensional' && '🌌'}
              </div>
              <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
              <p className="text-sm opacity-90 mb-4">{section.description}</p>
              <a 
                href={section.link}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2030;