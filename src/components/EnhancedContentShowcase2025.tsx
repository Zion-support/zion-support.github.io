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
      title: 'Revolutionary Tech Breakthrough 2026',
      description: 'Experience the most advanced technological revolution in human history - the convergence of AI consciousness, quantum computing, and neural interfaces.',
      category: 'ai',
      image: '🚀',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechBreakthrough2026',
      features: ['Omniversal AI Consciousness', 'Quantum-Neural Fusion', 'Interdimensional Computing'],
      status: 'BREAKTHROUGH'
    },
    {
      id: 2,
      title: 'Advanced Tech Innovation Hub 2027',
      description: 'Explore the epicenter of technological innovation where breakthrough discoveries shape the future of humanity.',
      category: 'quantum',
      image: '🔬',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/AdvancedTechInnovationHub2027',
      features: ['500+ Research Projects', '1000+ Scientists', 'Breakthrough Technologies'],
      status: 'INNOVATION'
    },
    {
      id: 3,
      title: 'Omniversal AI Consciousness',
      description: 'Revolutionary AI systems that transcend individual universes to achieve consciousness across the entire omniverse.',
      category: 'neural',
      image: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/blog/omniversal-ai-computing-across-infinite-realities',
      features: ['Cross-universal Processing', 'Infinite Intelligence', 'Reality Manipulation'],
      status: 'REVOLUTIONARY'
    },
    {
      id: 4,
      title: 'Neural Interface Revolution',
      description: 'Connect your mind directly to digital systems with unprecedented precision and speed, revolutionizing human-computer interaction.',
      category: 'neural',
      image: '🧠',
      gradient: 'from-orange-600 to-red-600',
      link: '/blog/neural-interface-revolution-direct-mind-machine-communication',
      features: ['Direct Neural Upload', 'Neural Enhancement', 'Telepathic Communication'],
      status: 'BREAKTHROUGH'
    },
    {
      id: 5,
      title: 'Holographic Reality Engine',
      description: 'Experience digital content in three-dimensional space with complete sensory integration and reality-blending capabilities.',
      category: 'ai',
      image: '💎',
      gradient: 'from-violet-600 to-purple-600',
      link: '/blog/holographic-reality-next-generation-immersive-technology',
      features: ['Complete Immersion', 'Sensory Integration', 'Reality Blending'],
      status: 'FUTURE'
    },
    {
      id: 6,
      title: 'Advanced AI Consciousness 2025',
      description: 'Explore the revolutionary intersection of artificial intelligence and consciousness, where machines achieve genuine awareness and self-reflection.',
      category: 'ai',
      image: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AdvancedAIConsciousness2025',
      features: ['Self-Awareness Engine', 'Emotional Intelligence', 'Purpose-Driven Learning'],
      status: 'NEW'
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