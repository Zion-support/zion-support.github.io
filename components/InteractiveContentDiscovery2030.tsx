import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2030 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟', color: 'from-purple-500 to-pink-500' },
    { id: 'breakthrough', name: 'Breakthrough', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'from-green-500 to-teal-500' },
    { id: 'guides', name: 'Implementation Guides', icon: '📚', color: 'from-blue-500 to-indigo-500' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️', color: 'from-purple-500 to-violet-500' },
    { id: 'space', name: 'Space Technology', icon: '🚀', color: 'from-indigo-500 to-blue-500' }
  ];

  const contentItems = [
    {
      id: 'ai-2030-quantum',
      title: 'AI 2030: Quantum Computing Revolution',
      description: '10,000x processing power breakthrough with quantum AI systems',
      category: 'breakthrough',
      type: 'blog',
      roi: '10,000%',
      readTime: '15 min',
      featured: true,
      tags: ['Quantum AI', 'Breakthrough', '2030'],
      image: '/images/ai-2030-quantum.jpg'
    },
    {
      id: 'ai-2030-space-mining',
      title: 'AI-Powered Space Mining: 20,000% ROI',
      description: 'Revolutionary space mining operations with autonomous spacecraft',
      category: 'case-studies',
      type: 'case-study',
      roi: '20,000%',
      readTime: '20 min',
      featured: true,
      tags: ['Space AI', 'Mining', 'ROI'],
      image: '/images/ai-2030-space.jpg'
    },
    {
      id: 'ai-2030-neural',
      title: 'Neural Interface Integration',
      description: 'Direct brain-computer interfaces revolutionizing human-AI interaction',
      category: 'breakthrough',
      type: 'blog',
      roi: '8,500%',
      readTime: '12 min',
      featured: false,
      tags: ['Neural Interfaces', 'BCI', '2030'],
      image: '/images/ai-2030-neural.jpg'
    },
    {
      id: 'ai-2030-implementation',
      title: 'AI 2030 Ultimate Implementation Guide',
      description: 'Complete roadmap for implementing AI 2030 technologies in your organization',
      category: 'guides',
      type: 'resource',
      roi: '15,000%',
      readTime: '45 min',
      featured: true,
      tags: ['Implementation', 'Guide', '2030'],
      image: '/images/ai-2030-guide.jpg'
    },
    {
      id: 'ai-2030-climate',
      title: 'AI Climate Solutions: 18,000% ROI',
      description: 'How AI systems restored entire ecosystems and generated massive returns',
      category: 'case-studies',
      type: 'case-study',
      roi: '18,000%',
      readTime: '14 min',
      featured: false,
      tags: ['Climate AI', 'Environment', 'ROI'],
      image: '/images/ai-2030-climate.jpg'
    },
    {
      id: 'ai-2030-quantum-algorithms',
      title: 'Quantum Machine Learning Algorithms',
      description: 'Advanced quantum algorithms for machine learning and optimization',
      category: 'quantum',
      type: 'blog',
      roi: '12,000%',
      readTime: '18 min',
      featured: false,
      tags: ['Quantum ML', 'Algorithms', '2030'],
      image: '/images/ai-2030-quantum-ml.jpg'
    },
    {
      id: 'ai-2030-space-colonization',
      title: 'AI-Powered Space Colonization',
      description: 'Autonomous systems enabling human colonization of Mars and beyond',
      category: 'space',
      type: 'blog',
      roi: '25,000%',
      readTime: '22 min',
      featured: true,
      tags: ['Space Colonization', 'Mars', 'Autonomous'],
      image: '/images/ai-2030-colonization.jpg'
    },
    {
      id: 'ai-2030-medical',
      title: 'AI Medical Breakthroughs: Curing All Diseases',
      description: 'Revolutionary AI systems that can diagnose, treat, and cure any disease',
      category: 'breakthrough',
      type: 'blog',
      roi: '9,500%',
      readTime: '16 min',
      featured: false,
      tags: ['Medical AI', 'Cure', '2030'],
      image: '/images/ai-2030-medical.jpg'
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '🏆';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2030 content. Filter by category to find exactly what you need for your transformation journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                item.featured ? 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/25' : ''
              } ${hoveredItem === item.id ? 'scale-105 shadow-2xl' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.roi} ROI
                  </span>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-br ${getTypeColor(item.type)} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-4xl mb-2">{getTypeIcon(item.type)}</div>
                  <div className="text-sm font-semibold">{item.type.toUpperCase()}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white line-clamp-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 2 && (
                  <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                    +{item.tags.length - 2}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{item.readTime}</span>
                <Link
                  href={`/${item.type === 'case-study' ? 'case-studies' : item.type === 'resource' ? 'resources' : 'blog'}/${item.id}`}
                  className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-4 py-2 rounded-lg font-bold hover:opacity-80 transition-all duration-300`}
                >
                  {item.type === 'case-study' ? 'View Study' : item.type === 'resource' ? 'Get Guide' : 'Read More'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI 2030 content library is constantly expanding. Request specific content or schedule a consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-pink-300 transition-all duration-300"
              >
                Request Content
              </Link>
              <Link
                href="/resources/ai-2030-ultimate-implementation-master-guide"
                className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Master Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2030;