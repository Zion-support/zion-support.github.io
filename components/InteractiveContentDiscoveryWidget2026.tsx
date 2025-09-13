import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Target, Globe, Shield, Rocket, ArrowRight } from 'lucide-react';

export default function InteractiveContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Content Revolution",
      description: "Experience the most advanced AI-powered content ecosystem ever created with 10,000%+ ROI.",
      href: "/ai-2025-ultimate-content-revolution",
      category: "Content Revolution",
      tags: ["AI", "Content", "ROI", "Revolution"],
      icon: <Zap className="w-5 h-5" />,
      stats: "10,000%+ ROI",
      color: "from-yellow-400 to-orange-500",
      featured: true
    },
    {
      id: 2,
      title: "AI 2026 Future Predictions Revolutionary",
      description: "Discover revolutionary AI predictions that will reshape industries and change everything.",
      href: "/ai-2026-future-predictions-revolutionary",
      category: "Future Predictions",
      tags: ["AI", "Predictions", "Future", "Revolutionary"],
      icon: <Brain className="w-5 h-5" />,
      stats: "50,000% ROI",
      color: "from-cyan-400 to-blue-500",
      featured: true
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion 2026",
      description: "The first successful integration of quantum computing with neural networks.",
      href: "/ai-2026-quantum-neural-fusion",
      category: "Quantum Computing",
      tags: ["Quantum", "Neural", "Fusion", "Computing"],
      icon: <Cpu className="w-5 h-5" />,
      stats: "1000x Speed",
      color: "from-purple-400 to-pink-500",
      featured: false
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Revolutionary brain-computer interfaces that will transform human-AI interaction.",
      href: "/ai-2026-neural-interface-revolution",
      category: "Neural Interfaces",
      tags: ["Neural", "Interface", "Brain", "Revolution"],
      icon: <Target className="w-5 h-5" />,
      stats: "99.99% Accuracy",
      color: "from-green-400 to-teal-500",
      featured: false
    },
    {
      id: 5,
      title: "Autonomous Business Systems",
      description: "Fully autonomous business operations with zero human intervention required.",
      href: "/ai-2025-autonomous-operations-showcase",
      category: "Automation",
      tags: ["Autonomous", "Business", "Systems", "Automation"],
      icon: <Rocket className="w-5 h-5" />,
      stats: "100% Automation",
      color: "from-red-400 to-orange-500",
      featured: false
    },
    {
      id: 6,
      title: "Global AI Transformation",
      description: "Worldwide AI network connecting all devices and systems for unprecedented coordination.",
      href: "/ai-2026-global-transformation",
      category: "Global Impact",
      tags: ["Global", "AI", "Transformation", "Network"],
      icon: <Globe className="w-5 h-5" />,
      stats: "1B+ Users",
      color: "from-indigo-400 to-purple-500",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: <Filter className="w-4 h-4" /> },
    { id: 'Content Revolution', name: 'Content Revolution', icon: <Zap className="w-4 h-4" /> },
    { id: 'Future Predictions', name: 'Future Predictions', icon: <Brain className="w-4 h-4" /> },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" /> },
    { id: 'Neural Interfaces', name: 'Neural Interfaces', icon: <Target className="w-4 h-4" /> },
    { id: 'Automation', name: 'Automation', icon: <Rocket className="w-4 h-4" /> },
    { id: 'Global Impact', name: 'Global Impact', icon: <Globe className="w-4 h-4" /> }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm mb-6">
            <Search className="w-4 h-4 mr-2" />
            INTERACTIVE CONTENT DISCOVERY
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of revolutionary AI content, breakthrough technologies, 
            and transformative solutions. Use our intelligent discovery system to find exactly what you need.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for AI content, technologies, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                      : 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div key={item.id} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3">
                  <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 mr-1" />
                    FEATURED
                  </div>
                </div>
              )}
              
              {/* Category badge */}
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs font-bold rounded-full">
                  {item.category}
                </span>
              </div>
              
              {/* Icon */}
              <div className={`text-${item.color.split('-')[1]}-400 mb-4 mt-4`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className={`text-${item.color.split('-')[1]}-400 font-bold`}>
                  {item.stats}
                </div>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <Link 
                href={item.href}
                className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 w-full justify-center text-sm`}
              >
                Explore Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-12 border border-cyan-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our AI-powered content discovery system is constantly learning and expanding. 
            Contact us to request specific content or get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Request Content
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}