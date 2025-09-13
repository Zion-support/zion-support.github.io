import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖', color: 'from-red-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { id: 'neural', name: 'Neural Interface', icon: '🧠', color: 'from-purple-500 to-indigo-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', color: 'from-green-500 to-emerald-500' },
    { id: 'resources', name: 'Resources', icon: '📚', color: 'from-orange-500 to-red-500' },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technologies delivering 15,000% ROI through quantum-neural fusion and autonomous operations.',
      category: 'ai-2025',
      roi: '15,000%',
      difficulty: 'Revolutionary',
      readTime: '15 min',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      image: '🚀',
      tags: ['AI 2025', 'Breakthrough', 'ROI', 'Revolutionary']
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing with error-corrected quantum computers and quantum supremacy capabilities.',
      category: 'quantum',
      roi: '20,000%',
      difficulty: 'Advanced',
      readTime: '20 min',
      link: '/quantum-computing-solutions-2025',
      image: '⚛️',
      tags: ['Quantum', 'Computing', 'Supremacy', 'Breakthrough']
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2035',
      description: 'Transcendent human-AI integration with direct brain-computer interfaces and consciousness upload.',
      category: 'neural',
      roi: '∞',
      difficulty: 'Transcendent',
      readTime: '25 min',
      link: '/neural-interface-revolution-2035',
      image: '🧠',
      tags: ['Neural', 'Interface', 'Consciousness', 'Transcendent']
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation Success',
      description: 'Real-world case study of Fortune 500 company achieving 15,000% ROI through AI implementation.',
      category: 'case-studies',
      roi: '15,000%',
      difficulty: 'Advanced',
      readTime: '12 min',
      link: '/case-studies/fortune-500-ai-transformation',
      image: '🏢',
      tags: ['Case Study', 'Fortune 500', 'Success', 'ROI']
    },
    {
      id: 5,
      title: 'AI Implementation Master Guide 2025',
      description: 'Comprehensive guide to implementing AI solutions with step-by-step instructions and best practices.',
      category: 'resources',
      roi: 'N/A',
      difficulty: 'Beginner',
      readTime: '45 min',
      link: '/resources/ai-implementation-master-guide-2025',
      image: '📚',
      tags: ['Guide', 'Implementation', 'Best Practices', 'Tutorial']
    },
    {
      id: 6,
      title: 'Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary fusion of quantum computing and AI delivering exponential computational capabilities.',
      category: 'ai-2025',
      roi: '25,000%',
      difficulty: 'Revolutionary',
      readTime: '18 min',
      link: '/blog/quantum-ai-fusion-breakthrough',
      image: '⚛️',
      tags: ['Quantum-AI', 'Fusion', 'Breakthrough', 'Revolutionary']
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold mb-6 animate-pulse">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, and implementation guides.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Content Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{content.image}</div>
                <div className="flex flex-col items-end">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    content.difficulty === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                    content.difficulty === 'Transcendent' ? 'bg-purple-500/20 text-purple-400' :
                    content.difficulty === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {content.difficulty}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">{content.readTime}</span>
                </div>
              </div>

              {/* Content Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {content.title}
              </h3>

              {/* Content Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>

              {/* ROI Badge */}
              {content.roi !== 'N/A' && (
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">ROI Potential:</span>
                  <span className="text-lg font-bold text-yellow-400">{content.roi}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {content.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {content.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    +{content.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <Link
                href={content.link}
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No Content Found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filters.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">🚀</span>
            View All Revolutionary Content
          </Link>
        </div>
      </div>
    </div>
  );
}