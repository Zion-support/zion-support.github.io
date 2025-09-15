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
    quantum: {
      title: 'Quantum Reality Engine 2031',
      description: 'Revolutionary quantum computing that manipulates reality itself',
      features: [
        'Quantum Reality Manipulation',
        'Parallel Universe Computing',
        'Quantum Consciousness Transfer',
        'Reality Simulation Engine',
        'Quantum Teleportation Networks',
        'Universal Quantum Field Control'
      ],
      color: 'from-cyan-600 to-blue-600',
      icon: '⚛️'
    },
    space: {
      title: 'Interstellar Technology 2031',
      description: 'Advanced space technology enabling galactic exploration and colonization',
      features: [
        'Faster-Than-Light Travel',
        'Planetary Terraforming',
        'Alien Communication Protocols',
        'Universal Resource Mining',
        'Galactic Navigation Systems',
        'Interstellar Energy Networks'
      ],
      color: 'from-indigo-600 to-purple-600',
      icon: '🚀'
    },
    consciousness: {
      title: 'Universal Consciousness 2031',
      description: 'Technology that connects all conscious beings across the universe',
      features: [
        'Universal Mind Network',
        'Consciousness Upload Technology',
        'Collective Intelligence Systems',
        'Reality Perception Enhancement',
        'Universal Empathy Networks',
        'Transcendent Communication'
      ],
      color: 'from-emerald-600 to-teal-600',
      icon: '🌟'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE TECH SHOWCASE 2031
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Future Technology Preview
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore the most advanced technologies that will define 2031 and beyond
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              {techCategories[activeTab as keyof typeof techCategories].title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {techCategories[activeTab as keyof typeof techCategories].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-2xl mb-3">
                  {techCategories[activeTab as keyof typeof techCategories].icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature}</h3>
                <p className="text-gray-300 text-sm">
                  Revolutionary technology that will change everything
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Experience {techCategories[activeTab as keyof typeof techCategories].title} →
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These technologies represent the pinnacle of human achievement and will shape 
            the future of our species for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;