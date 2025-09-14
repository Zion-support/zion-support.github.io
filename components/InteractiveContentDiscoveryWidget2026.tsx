import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  featured: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-2026-breakthrough',
    title: 'AI 2025-2026 Ultimate Breakthrough',
    description: 'Revolutionary AI technologies that will reshape industries and transform business operations.',
    category: 'AI Breakthrough',
    url: '/ai-2025-2026-ultimate-breakthrough',
    featured: true,
    tags: ['AI'Breakthrough'2025'2026'Neural Networks']
  },
  {
    id: 'quantum-ai-2026',
    title: 'Quantum AI 2026 Breakthrough',
    description: 'Harness quantum computing power to unlock exponential AI capabilities and solve complex problems.',
    category: 'Quantum AI',
    url: '/quantum-ai-2026-breakthrough',
    featured: true,
    tags: ['Quantum'AI'Computing'2026'Revolution']
  },
  {
    id: 'neural-architectures-2026',
    title: 'Advanced Neural Architectures 2026',
    description: 'Next-generation neural networks with self-optimizing capabilities and multi-modal learning.',
    category: 'Neural Networks',
    url: '/advanced-neural-architectures-2026',
    featured: true,
    tags: ['Neural'Architecture'2026'Learning'AI']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Solutions',
    description: 'Intelligent automation solutions that streamline operations and boost productivity.',
    category: 'Automation',
    url: '/services/ai-automation',
    featured: false,
    tags: ['Automation'AI'Productivity'Solutions']
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalablesecure cloud solutions designed to support your business growth.',
    category: 'Cloud',
    url: '/services/cloud-infrastructure',
    featured: false,
    tags: ['Cloud'Infrastructure'Scalable'Security']
  },
  {
    id: 'micro-saas',
    title: 'Micro SaaS Solutions',
    description: 'Custom micro SaaS applications that solve specific business challenges.',
    category: 'SaaS',
    url: '/services/micro-saas',
    featured: false,
    tags: ['SaaS'Micro'Custom'Solutions']
  }
];

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
  const [searchTermsetSearchTerm] = useState<string>('');
  const [filteredContentsetFilteredContent] = useState<ContentItem[]>(contentItems);
  const [isVisiblesetIsVisible] = useState(false);

  const categories = ['All'AI Breakthrough'Quantum AI'Neural Networks'Automation'Cloud'SaaS'];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }[selectedCategorysearchTerm]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  if (!isVisible) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI breakthroughsquantum computing solutionsand cutting-edge technology innovations.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((itemindex) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                {item.featured && (
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                    ⭐ Featured
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Explore Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Solutions
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}