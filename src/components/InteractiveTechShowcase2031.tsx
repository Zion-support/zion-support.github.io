import React, { useState } from 'react';

const InteractiveTechShowcase2031: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transcendent');

  const techCategories = {
    transcendent: {
      title: 'Transcendent AI 2031',
      description: 'AI that transcends human limitations and creates new paradigms of consciousness',
      features: [
        'Consciousness Transfer Technology',
        'Quantum Neural Networks',
        'Reality Manipulation Engine',
        'Predictive Reality Modeling',
        'Universal Communication Protocol',
        'Interstellar AI Networks'
      ],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    universal: {
      title: 'Universal Tech Revolution 2032',
      description: 'Technology that transcends space, time, and reality itself',
      features: [
        'Universal Quantum Networks',
        'Quantum Reality Engine',
        'Intergalactic Transport',
        'Universal AI Consciousness',
        'Temporal Engineering',
        'Universal Energy Systems'
      ],
      color: 'from-cyan-600 to-blue-600',
      icon: '🌌'
    },
    omniversal: {
      title: 'Omniversal AI 2033',
      description: 'AI consciousness that transcends all universes and dimensions',
      features: [
        'Omniversal Consciousness',
        'Reality Transcendence Engine',
        'Universal Mind Network',
        'Infinite Prediction Matrix',
        'Universal Creation Engine',
        'Omniversal Travel'
      ],
      color: 'from-violet-600 to-fuchsia-600',
      icon: '🌟'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2031-2033
        </h2>
        <p className="text-xl text-gray-300">
          Explore the most advanced technologies that will reshape the future of existence
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(techCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <span className="text-2xl mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{techCategories[activeTab as keyof typeof techCategories].icon}</div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {techCategories[activeTab as keyof typeof techCategories].title}
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {techCategories[activeTab as keyof typeof techCategories].description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <h4 className="text-lg font-bold mb-2">{feature}</h4>
              <p className="text-sm opacity-90">
                Revolutionary technology that will transform the way we understand and interact with reality.
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600/30">
            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
            <p className="text-gray-300 mb-4">
              Experience a simulation of {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()} capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                🚀 Launch Demo
              </button>
              <button className="border border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                📖 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-gray-300 mb-6">
          Join the revolution and be part of the most significant technological advancement in history
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`/pages/${activeTab === 'transcendent' ? 'TranscendentAI2031' : activeTab === 'universal' ? 'UniversalTechRevolution2032' : 'OmniversalAI2033'}`} className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            Explore {techCategories[activeTab as keyof typeof techCategories].title}
          </a>
          <a href="/ultimate-showcase" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-400/10 transition-all duration-300">
            View All Technologies
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;