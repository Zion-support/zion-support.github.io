import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  SparklesIcon,
  TrendingUpIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedDate: string;
  featured: boolean;
  href: string;
  trending: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-automation-2025',
    title: 'AI Automation Revolution 2025',
    description: 'Comprehensive guide to implementing AI automation across enterprise operations with real-world case studies and ROI analysis.',
    category: 'Automation',
    tags: ['AI'Automation'Enterprise'ROI'],
    readTime: '12 min read',
    publishedDate: '2025-01-15',
    featured: true,
    href: '/ai-2025-automation-revolution',
    trending: true
  },
  {
    id: 'neural-architectures-2025',
    title: 'Advanced Neural Architectures',
    description: 'Deep dive into cutting-edge neural network architectures including transformersGANsand reinforcement learning models.',
    category: 'AI Research',
    tags: ['Neural Networks'Deep Learning'AI Research'Algorithms'],
    readTime: '15 min read',
    publishedDate: '2025-01-12',
    featured: true,
    href: '/neural-architectures-2025',
    trending: true
  },
  {
    id: 'quantum-ai-breakthrough',
    title: 'Quantum AI Breakthrough',
    description: 'Exploring the intersection of quantum computing and artificial intelligence for unprecedented computational capabilities.',
    category: 'Quantum Computing',
    tags: ['Quantum Computing'AI'Breakthrough'Future Tech'],
    readTime: '18 min read',
    publishedDate: '2025-01-10',
    featured: true,
    href: '/quantum-ai-breakthrough-2025',
    trending: false
  },
  {
    id: 'business-intelligence-2025',
    title: 'AI-Powered Business Intelligence',
    description: 'Transform your business intelligence with AI-driven analyticspredictive modelingand automated insights generation.',
    category: 'Business Intelligence',
    tags: ['Business Intelligence'Analytics'Predictive Modeling'Data Science'],
    readTime: '10 min read',
    publishedDate: '2025-01-08',
    featured: false,
    href: '/ai-business-intelligence-2025',
    trending: true
  },
  {
    id: 'cloud-ai-infrastructure',
    title: 'Cloud AI Infrastructure',
    description: 'Build scalable AI infrastructure on the cloud with best practicesoptimization strategiesand cost management.',
    category: 'Infrastructure',
    tags: ['Cloud Computing'Infrastructure'Scalability'DevOps'],
    readTime: '14 min read',
    publishedDate: '2025-01-05',
    featured: false,
    href: '/cloud-ai-infrastructure-2025',
    trending: false
  },
  {
    id: 'ai-security-best-practices',
    title: 'AI Security Best Practices',
    description: 'Essential security measures for AI systemsprotecting against adversarial attacks and ensuring data privacy.',
    category: 'Security',
    tags: ['Security'AI Safety'Privacy'Best Practices'],
    readTime: '8 min read',
    publishedDate: '2025-01-03',
    featured: false,
    href: '/ai-security-best-practices-2025',
    trending: false
  }
];

const categories = ['All'Automation'AI Research'Quantum Computing'Business Intelligence'Infrastructure'Security'];

const InteractiveContentDiscovery2025: React.FC = () => {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [filteredContentsetFilteredContent] = useState(contentItems);
  const [isSearchingsetIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      // Filter by category
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }300);

    return () => clearTimeout(timer);
  }[searchTermselectedCategory]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              AI Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use our intelligent discovery tool to find the most relevant AI insights
            case studiesand implementation guides for your specific needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for AI topicstechnologiesor use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
                {isSearching && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <SparklesIcon className="w-4 h-4 mr-2 text-purple-500" />
              {filteredContent.filter(item => item.featured).length} Featured
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUpIcon className="w-4 h-4 mr-2 text-green-500" />
              {filteredContent.filter(item => item.trending).length} Trending
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <TagIcon className="w-4 h-4 mr-2 text-blue-500" />
              {filteredContent.length} Results
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Header with badges */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {item.category}
                  </span>
                  <div className="flex gap-2">
                    {item.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <SparklesIcon className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    {item.trending && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <TrendingUpIcon className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div>{new Date(item.publishedDate).toLocaleDateString()}</div>
                </div>
              </div>

              {/* Footer with CTA */}
              <div className="px-6 pb-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105"
                >
                  Read Article
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or category filter to find relevant content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our AI experts can help you find the perfect solution for your specific needs. 
              Get personalized recommendations and implementation guidance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Personalized Help
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;