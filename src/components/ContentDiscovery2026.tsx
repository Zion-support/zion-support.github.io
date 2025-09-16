import React, { useState } from 'react';

const ContentDiscovery2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🌟', count: 24 },
    { id: 'ai', label: 'AI & Machine Learning', icon: '🤖', count: 8 },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️', count: 6 },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧠', count: 4 },
    { id: 'space', label: 'Space Technology', icon: '🚀', count: 3 },
    { id: 'biotech', label: 'Biotechnology', icon: '🧬', count: 2 },
    { id: 'robotics', label: 'Advanced Robotics', icon: '🤖', count: 1 }
  ];

  const allContent = [
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the most advanced technologies that will reshape our world",
      category: "quantum",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      link: "/pages/RevolutionaryTechShowcase2026",
      featured: true,
      tags: ["Quantum", "Revolutionary", "Future Tech"]
    },
    {
      title: "Next-Gen AI Revolution 2026",
      description: "Discover the next generation of artificial intelligence",
      category: "ai",
      icon: "🤖",
      color: "from-blue-500 to-purple-500",
      link: "/pages/NextGenAIRevolution2026",
      featured: true,
      tags: ["AI", "Machine Learning", "Synthetic Intelligence"]
    },
    {
      title: "Ultimate Tech Insights 2026",
      description: "Stay ahead with cutting-edge technology insights and predictions",
      category: "all",
      icon: "🔮",
      color: "from-indigo-500 to-cyan-500",
      link: "/pages/UltimateTechInsights2026",
      featured: true,
      tags: ["Insights", "Predictions", "Trends"]
    },
    {
      title: "Advanced Quantum Computing 2026",
      description: "Explore quantum computing breakthroughs and applications",
      category: "quantum",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      link: "/pages/AdvancedQuantumComputing2026",
      featured: false,
      tags: ["Quantum", "Computing", "Breakthrough"]
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces and neural enhancement",
      category: "neural",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      link: "/pages/NeuralInterfaceRevolution2026",
      featured: false,
      tags: ["Neural", "BCI", "Brain Interface"]
    },
    {
      title: "Advanced AI Systems 2026",
      description: "Autonomous AI systems and synthetic intelligence",
      category: "ai",
      icon: "🤖",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/AdvancedAISystems2026",
      featured: false,
      tags: ["AI Systems", "Autonomous", "Synthetic"]
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness",
      category: "ai",
      icon: "🧠",
      color: "from-violet-500 to-purple-500",
      link: "/pages/SyntheticIntelligence2026",
      featured: false,
      tags: ["Synthetic", "Consciousness", "AI"]
    },
    {
      title: "Quantum-Neural Fusion 2026",
      description: "The convergence of quantum computing and neural networks",
      category: "quantum",
      icon: "⚡",
      color: "from-orange-500 to-red-500",
      link: "/pages/QuantumNeuralFusion2026",
      featured: false,
      tags: ["Quantum", "Neural", "Fusion"]
    },
    {
      title: "Space Tech Innovation 2026",
      description: "Advanced space exploration and colonization technologies",
      category: "space",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      link: "/pages/SpaceTechInnovation2026",
      featured: false,
      tags: ["Space", "Exploration", "Colonization"]
    },
    {
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology and human enhancement",
      category: "biotech",
      icon: "🧬",
      color: "from-violet-500 to-purple-500",
      link: "/pages/AdvancedBiotechRevolution2026",
      featured: false,
      tags: ["Biotech", "Enhancement", "Revolution"]
    },
    {
      title: "Advanced Robotics 2026",
      description: "Humanoid robots and advanced automation systems",
      category: "robotics",
      icon: "🤖",
      color: "from-indigo-500 to-blue-500",
      link: "/pages/AdvancedRobotics2026",
      featured: false,
      tags: ["Robotics", "Automation", "Humanoid"]
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? allContent 
    : allContent.filter(content => content.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🔍</span>
            <span className="text-cyan-300 font-semibold ml-2">CONTENT DISCOVERY 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Discover Revolutionary Content
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive library of cutting-edge technology content. 
            Find exactly what you're looking for with our intelligent content discovery system.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 ${
                content.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              {content.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="text-6xl mb-6 text-center">{content.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{content.title}</h3>
              <p className="text-gray-300 mb-6 text-center text-sm">
                {content.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {content.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {content.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🔍 Advanced Search & Filter</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">📊 Content Stats</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Total Content:</span>
                  <span className="text-cyan-400 font-bold">24 Pages</span>
                </div>
                <div className="flex justify-between">
                  <span>Featured Content:</span>
                  <span className="text-purple-400 font-bold">3 Pages</span>
                </div>
                <div className="flex justify-between">
                  <span>Interactive Demos:</span>
                  <span className="text-pink-400 font-bold">8 Demos</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="text-emerald-400 font-bold">Today</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">🎯 Quick Access</h4>
              <div className="space-y-2">
                <a href="/pages/RevolutionaryTechShowcase2026" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                  🚀 Revolutionary Tech Showcase
                </a>
                <a href="/pages/NextGenAIRevolution2026" className="block text-purple-400 hover:text-purple-300 text-sm">
                  🤖 Next-Gen AI Revolution
                </a>
                <a href="/pages/UltimateTechInsights2026" className="block text-pink-400 hover:text-pink-300 text-sm">
                  🔮 Ultimate Tech Insights
                </a>
                <a href="/pages/InteractiveTechShowcase2026" className="block text-emerald-400 hover:text-emerald-300 text-sm">
                  🎮 Interactive Demos
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">📈 Popular Content</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>1. Quantum Computing</span>
                  <span className="text-yellow-400">🔥</span>
                </div>
                <div className="flex justify-between">
                  <span>2. Neural Interfaces</span>
                  <span className="text-yellow-400">🔥</span>
                </div>
                <div className="flex justify-between">
                  <span>3. AI Revolution</span>
                  <span className="text-yellow-400">🔥</span>
                </div>
                <div className="flex justify-between">
                  <span>4. Space Technology</span>
                  <span className="text-gray-400">📈</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our content library is constantly expanding. Request new content or suggest topics you'd like to explore.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              🚀 Request New Content
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              💡 Suggest Topics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDiscovery2026;