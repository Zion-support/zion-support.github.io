import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool' | 'webinar';
  roi?: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export default function AI2025ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Discover the revolutionary AI 2025 breakthrough technologies delivering 2,500-5,000% ROI.',
      category: 'breakthrough',
      type: 'blog',
      roi: '5,000%',
      tags: ['AI 2025', 'Breakthrough', 'Quantum Computing', 'ROI'],
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: '2',
      title: 'Global Transformation Success Story',
      description: 'How a Fortune 500 company achieved 10,000% ROI through AI 2025 technologies.',
      category: 'case-studies',
      type: 'case-study',
      roi: '10,000%',
      tags: ['Case Study', 'Fortune 500', 'Transformation', 'Success'],
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: true
    },
    {
      id: '3',
      title: 'Ultimate Implementation Toolkit',
      description: 'Complete guide with step-by-step instructions, ROI calculator, and expert support.',
      category: 'resources',
      type: 'resource',
      tags: ['Implementation', 'Toolkit', 'Guide', 'ROI Calculator'],
      link: '/resources/ai-2025-ultimate-implementation-toolkit',
      featured: true
    },
    {
      id: '4',
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum-powered AI processing with 10,000x faster computation.',
      category: 'technologies',
      type: 'blog',
      roi: '3,500%',
      tags: ['Quantum Computing', 'AI Processing', 'Performance'],
      link: '/quantum-computing-solutions'
    },
    {
      id: '5',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interface enabling seamless human-AI collaboration.',
      category: 'technologies',
      type: 'blog',
      roi: '2,800%',
      tags: ['Neural Interface', 'Brain-Computer', 'Collaboration'],
      link: '/neural-interface-solutions'
    },
    {
      id: '6',
      title: 'Autonomous Operations Guide',
      description: 'Self-optimizing business systems with 99.9% accuracy and minimal human intervention.',
      category: 'automation',
      type: 'resource',
      roi: '2,500%',
      tags: ['Autonomous', 'Automation', 'Self-Optimizing'],
      link: '/automation-solutions'
    },
    {
      id: '7',
      title: 'AI 2025 ROI Calculator',
      description: 'Interactive tool to calculate your potential ROI based on industry and implementation scope.',
      category: 'tools',
      type: 'tool',
      tags: ['ROI Calculator', 'Interactive', 'Projections'],
      link: '/tools/ai-2025-roi-calculator'
    },
    {
      id: '8',
      title: 'Revolutionary Breakthroughs Webinar',
      description: 'Live webinar series covering the latest AI 2025 breakthrough technologies and implementations.',
      category: 'webinars',
      type: 'webinar',
      tags: ['Webinar', 'Live', 'Breakthroughs', 'Education'],
      link: '/webinars/ai-2025-revolutionary-breakthroughs'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'technologies', name: 'Technologies', count: contentItems.filter(item => item.category === 'technologies').length },
    { id: 'resources', name: 'Resources', count: contentItems.filter(item => item.category === 'resources').length },
    { id: 'tools', name: 'Tools', count: contentItems.filter(item => item.category === 'tools').length },
    { id: 'webinars', name: 'Webinars', count: contentItems.filter(item => item.category === 'webinars').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length }
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      if (searchQuery) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      setFilteredContent(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'tool': return '🛠️';
      case 'webinar': return '🎥';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      case 'tool': return 'from-orange-500 to-red-500';
      case 'webinar': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8 rounded-2xl border border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            AI 2025 Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2025 breakthrough content, case studies, and implementation resources
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  item.featured 
                    ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                    : 'border-gray-600/50 hover:border-gray-500/70'
                }`}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    FEATURED
                  </div>
                )}

                {/* Type Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center text-2xl`}>
                    {getTypeIcon(item.type)}
                  </div>
                  {item.roi && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1">
                      <div className="text-green-400 font-bold text-sm">{item.roi} ROI</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-400 group-hover:text-yellow-400 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 rounded-xl p-6 text-center border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400 mb-2">{contentItems.length}</div>
            <div className="text-gray-300">Total Content Items</div>
          </div>
          <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 rounded-xl p-6 text-center border border-green-500/30">
            <div className="text-3xl font-bold text-green-400 mb-2">{contentItems.filter(item => item.featured).length}</div>
            <div className="text-gray-300">Featured Content</div>
          </div>
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl p-6 text-center border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-300">Content Categories</div>
          </div>
          <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 rounded-xl p-6 text-center border border-orange-500/30">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}