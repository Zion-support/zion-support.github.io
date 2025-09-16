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
    },
    {
      id: 4,
      title: 'Advanced Biotech Revolution 2026',
      description: 'Revolutionary biotechnology solutions that merge AI with biological systems for unprecedented medical breakthroughs.',
      category: 'biotech',
      image: '🧬',
      gradient: 'from-green-600 to-emerald-600',
      link: '/pages/AdvancedBiotechRevolution2026',
      features: ['Gene Editing', 'Synthetic Biology', 'Personalized Medicine'],
      status: 'INNOVATION'
    },
    {
      id: 5,
      title: 'Space Tech Innovation 2026',
      description: 'Cutting-edge space technology solutions that enable interplanetary travel and space colonization.',
      category: 'space',
      image: '🚀',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/SpaceTechInnovation2026',
      features: ['Interplanetary Travel', 'Space Colonization', 'Asteroid Mining'],
      status: 'FUTURE'
    },
    {
      id: 6,
      title: 'Advanced Robotics 2026',
      description: 'Next-generation robotics systems with human-like capabilities and autonomous decision-making.',
      category: 'robotics',
      image: '🤖',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/AdvancedRobotics2026',
      features: ['Humanoid Robots', 'Autonomous Systems', 'AI Integration'],
      status: 'ADVANCED'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-green-500/20 text-green-300';
      case 'BREAKTHROUGH': return 'bg-blue-500/20 text-blue-300';
      case 'REVOLUTIONARY': return 'bg-purple-500/20 text-purple-300';
      case 'INNOVATION': return 'bg-pink-500/20 text-pink-300';
      case 'FUTURE': return 'bg-cyan-500/20 text-cyan-300';
      case 'ADVANCED': return 'bg-orange-500/20 text-orange-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🌟 Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of cutting-edge technology content, 
            featuring the latest breakthroughs in AI, Quantum Computing, Neural Interfaces, and more.
          </p>
        </divdiv>

        {/* Category Filter */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
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
        </divdiv>

        {/* Content Grid */}
          <divdiv
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <divdiv
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Header */}
                <div className={`h-32 bg-gradient-to-r ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <diva
                    href={item.link}
                    className={`inline-block w-full text-center py-3 px-6 bg-gradient-to-r ${item.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Explore {item.title.split(' ')[0]} →
                  </diva>
                </div>
              </divdiv>
            ))}
          </divdiv>
        </div>

        {/* Stats Section */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Statistics</h3>
            <p className="text-gray-600">Our growing library of revolutionary technology content</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Technology Pages', color: 'text-purple-600' },
              { number: '15+', label: 'AI Solutions', color: 'text-blue-600' },
              { number: '12+', label: 'Quantum Breakthroughs', color: 'text-cyan-600' },
              { number: '8+', label: 'Neural Interfaces', color: 'text-emerald-600' }
            ].map((stat, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </divdiv>
            ))}
          </div>
        </divdiv>

        {/* Call to Action */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl mb-6 opacity-95">
              Dive deep into revolutionary technology content and discover what's possible tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Browse All Content
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Get Notifications
              </button>
            </div>
          </div>
        </divdiv>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;