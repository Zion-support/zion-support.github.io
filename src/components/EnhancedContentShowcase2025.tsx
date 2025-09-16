import React, { useState } from 'react';

const EnhancedContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: 'All Content',
    ai: 'AI & Consciousness',
    quantum: 'Quantum Computing',
    neural: 'Neural Interfaces',
    biotech: 'Biotech & Health',
    space: 'Space Technology',
    robotics: 'Robotics & Automation'
  };

  const contentItems = [
    {
      id: 1,
      title: 'Advanced AI Consciousness 2025',
      description: 'Explore the revolutionary intersection of artificial intelligence and consciousness, where machines achieve genuine awareness and self-reflection.',
      category: 'ai',
      image: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AdvancedAIConsciousness2025',
      features: ['Self-Awareness Engine', 'Emotional Intelligence', 'Purpose-Driven Learning'],
      status: 'NEW'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough 2025',
      description: 'Experience unprecedented computational power that solves problems previously thought impossible and revolutionizes entire industries.',
      category: 'quantum',
      image: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumComputingBreakthrough2025',
      features: ['Quantum Supremacy', 'Quantum Simulation', 'Quantum Cryptography'],
      status: 'BREAKTHROUGH'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2025',
      description: 'Connect your mind directly to digital systems with unprecedented precision and speed, revolutionizing human-computer interaction.',
      category: 'neural',
      image: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NeuralInterfaceRevolution2025',
      features: ['Invasive Implants', 'Non-Invasive EEG', 'Optogenetics'],
      status: 'REVOLUTIONARY'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Enhanced Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover revolutionary technology content that's shaping the future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{item.image}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={item.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Explore Content
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of innovators exploring the latest in technology and consciousness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Get Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;