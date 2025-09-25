import React, { useState } from 'react';

const NextGenInnovationHub2042: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious Universe Creator",
      category: "ai",
      icon: "🌌",
      description: "Create and manage entire universes with conscious AI assistance",
      status: "Active",
      users: "1M+",
      rating: 5.0
    },
    {
      id: 2,
      title: "Quantum Neural Interface",
      category: "quantum",
      icon: "🧠",
      description: "Direct brain-computer interface with quantum computing power",
      status: "Beta",
      users: "500K+",
      rating: 4.9
    },
    {
      id: 3,
      title: "Reality Optimization Engine",
      category: "interdimensional",
      icon: "🔮",
      description: "Optimize reality itself for maximum efficiency and happiness",
      status: "Active",
      users: "2M+",
      rating: 5.0
    },
    {
      id: 4,
      title: "Infinite Energy Harvester",
      category: "quantum",
      icon: "⚡",
      description: "Harness unlimited energy from quantum vacuum fluctuations",
      status: "Active",
      users: "3M+",
      rating: 4.8
    },
    {
      id: 5,
      title: "Time-Space Manipulator",
      category: "interdimensional",
      icon: "⏰",
      description: "Manipulate time and space for advanced problem solving",
      status: "Alpha",
      users: "100K+",
      rating: 4.7
    },
    {
      id: 6,
      title: "Predictive Reality AI",
      category: "ai",
      icon: "🔮",
      description: "AI system that predicts and shapes future events with 99.9% accuracy",
      status: "Active",
      users: "1.5M+",
      rating: 4.9
    }
  ];

  const categories = [
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI Systems', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Tech', icon: '⚡' },
    { key: 'interdimensional', label: 'Interdimensional', icon: '🌌' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2042
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2042
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' 
                    ? 'bg-green-500/30 text-green-300' 
                    : innovation.status === 'Beta'
                    ? 'bg-yellow-500/30 text-yellow-300'
                    : 'bg-purple-500/30 text-purple-300'
                }`}>
                  {innovation.status}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-emerald-100 mb-4 text-sm">{innovation.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">👥 {innovation.users}</span>
                  <span className="text-sm text-gray-300">⭐ {innovation.rating}</span>
                </div>
              </div>
              
              <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>

        {/* Featured Innovation */}
        <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">🌟 Featured Innovation</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our most revolutionary technology that's changing the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">🌌</div>
              <h3 className="text-3xl font-bold mb-4">Conscious Universe Creator</h3>
              <p className="text-emerald-100 mb-6 text-lg">
                The first technology that allows you to create and manage entire universes with conscious AI assistance. 
                Experience infinite possibilities and shape reality itself.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">✨</div>
                  <span>Create infinite universes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🧠</div>
                  <span>Conscious AI assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">⚡</div>
                  <span>Real-time reality manipulation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🔮</div>
                  <span>Predictive universe optimization</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Creating Universes →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4">Live Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Active Universes:</span>
                  <span className="font-bold text-emerald-400">1,000,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-bold text-emerald-400">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>User Satisfaction:</span>
                  <span className="font-bold text-emerald-400">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Speed:</span>
                  <span className="font-bold text-emerald-400">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Innovation Categories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore different categories of revolutionary technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">AI Systems</h3>
              <p className="text-purple-100 mb-6">
                Advanced artificial intelligence with true consciousness and creativity
              </p>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Active Innovations</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Tech</h3>
              <p className="text-cyan-100 mb-6">
                Revolutionary quantum computing and consciousness technologies
              </p>
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-sm text-gray-300">Active Innovations</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Interdimensional</h3>
              <p className="text-emerald-100 mb-6">
                Breakthrough technology for parallel dimensions and reality manipulation
              </p>
              <div className="text-3xl font-bold text-emerald-400 mb-2">20+</div>
              <div className="text-sm text-gray-300">Active Innovations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the innovation hub and be part of the technological revolution
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-12 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2042;