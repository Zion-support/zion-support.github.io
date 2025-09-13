import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Tag, Calendar } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  trending: boolean;
  rating: number;
  tags: string[];
  link: string;
  publishDate: string;
  author: string;
  featured: boolean;
}

const EnhancedContentDiscovery2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'automation', name: 'Automation' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'case-studies', name: 'Case Studies' }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending' },
    { id: 'latest', name: 'Latest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' }
  ];

  useEffect(() => {
    const mockContent: ContentItem[] = [
      {
        id: '1',
        title: 'Neural Networks: The Future of AI Processing',
        description: 'Explore how neural networks are revolutionizing AI with 99.97% accuracy rates and real-world applications across industries.',
        category: 'ai',
        readTime: '8 min',
        trending: true,
        rating: 4.9,
        tags: ['AI', 'Neural Networks', 'Machine Learning', 'Deep Learning'],
        link: '/neural-networks-future',
        publishDate: '2025-01-15',
        author: 'Dr. Sarah Chen',
        featured: true
      },
      {
        id: '2',
        title: 'Quantum Computing Breakthrough 2025',
        description: 'Discover the latest quantum computing advances that promise 50,000x faster processing capabilities and practical applications.',
        category: 'quantum',
        readTime: '12 min',
        trending: true,
        rating: 4.8,
        tags: ['Quantum', 'Computing', 'Breakthrough', 'Technology'],
        link: '/quantum-computing-2025',
        publishDate: '2025-01-14',
        author: 'Prof. Michael Rodriguez',
        featured: true
      },
      {
        id: '3',
        title: 'Autonomous Business Systems Implementation Guide',
        description: 'Learn how to implement self-managing systems that operate with zero downtime and maximum efficiency in your organization.',
        category: 'automation',
        readTime: '15 min',
        trending: false,
        rating: 4.7,
        tags: ['Automation', 'Business Systems', 'AI', 'Implementation'],
        link: '/autonomous-business-systems',
        publishDate: '2025-01-13',
        author: 'Alex Thompson',
        featured: false
      },
      {
        id: '4',
        title: 'Blockchain Integration Best Practices',
        description: 'Comprehensive guide to integrating blockchain technology for secure, transparent, and decentralized operations.',
        category: 'blockchain',
        readTime: '10 min',
        trending: false,
        rating: 4.6,
        tags: ['Blockchain', 'Security', 'Integration', 'Decentralization'],
        link: '/blockchain-integration-guide',
        publishDate: '2025-01-12',
        author: 'Emma Wilson',
        featured: false
      },
      {
        id: '5',
        title: 'Predictive Analytics Mastery Course',
        description: 'Master predictive analytics with advanced forecasting techniques, machine learning models, and real-world case studies.',
        category: 'analytics',
        readTime: '20 min',
        trending: true,
        rating: 4.9,
        tags: ['Analytics', 'Predictive', 'Data Science', 'Machine Learning'],
        link: '/predictive-analytics-mastery',
        publishDate: '2025-01-11',
        author: 'Dr. James Park',
        featured: true
      },
      {
        id: '6',
        title: 'AI Implementation Tutorial Series',
        description: 'Step-by-step tutorials for implementing AI solutions in your organization with practical examples and code samples.',
        category: 'tutorials',
        readTime: '25 min',
        trending: false,
        rating: 4.8,
        tags: ['Tutorial', 'AI Implementation', 'Guide', 'Programming'],
        link: '/ai-implementation-tutorials',
        publishDate: '2025-01-10',
        author: 'Lisa Chen',
        featured: false
      },
      {
        id: '7',
        title: 'Fortune 500 AI Transformation Case Study',
        description: 'How a Fortune 500 company achieved 300% efficiency improvement using our Neural-Synthetic Intelligence platform.',
        category: 'case-studies',
        readTime: '18 min',
        trending: true,
        rating: 4.9,
        tags: ['Case Study', 'Fortune 500', 'Transformation', 'Success Story'],
        link: '/fortune-500-case-study',
        publishDate: '2025-01-09',
        author: 'Mark Johnson',
        featured: true
      },
      {
        id: '8',
        title: 'Edge Computing Networks Architecture',
        description: 'Comprehensive guide to building distributed computing infrastructure that brings processing power closer to data sources.',
        category: 'analytics',
        readTime: '14 min',
        trending: false,
        rating: 4.5,
        tags: ['Edge Computing', 'Infrastructure', 'Architecture', 'Distributed Systems'],
        link: '/edge-computing-architecture',
        publishDate: '2025-01-08',
        author: 'Rachel Green',
        featured: false
      }
    ];

    setContent(mockContent);
  }, []);

  const filteredAndSortedContent = content
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'popular':
          return b.rating - a.rating;
        case 'rating':
          return b.rating - a.rating;
        case 'trending':
        default:
          return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      }
    });

  const featuredContent = content.filter(item => item.featured);
  const trendingContent = content.filter(item => item.trending);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Enhanced Content Discovery 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest insights, tutorials, and case studies from the world of cutting-edge technology. Find exactly what you need with our intelligent content discovery system.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tutorials, case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-2 focus:outline-none focus:border-blue-400"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg text-white px-3 py-2 focus:outline-none focus:border-blue-400"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id} className="bg-slate-800">
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Featured Content</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{item.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={item.link}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center text-sm font-semibold"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedContent.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.category === 'ai' ? 'bg-blue-500/20 text-blue-300' :
                  item.category === 'quantum' ? 'bg-purple-500/20 text-purple-300' :
                  item.category === 'automation' ? 'bg-green-500/20 text-green-300' :
                  item.category === 'blockchain' ? 'bg-yellow-500/20 text-yellow-300' :
                  item.category === 'analytics' ? 'bg-pink-500/20 text-pink-300' :
                  item.category === 'tutorials' ? 'bg-indigo-500/20 text-indigo-300' :
                  item.category === 'case-studies' ? 'bg-red-500/20 text-red-300' :
                  'bg-gray-500/20 text-gray-300'
                }`}>
                  {categories.find(c => c.id === item.category)?.name || item.category}
                </span>
                {item.trending && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Trending
                  </span>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(item.publishDate).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readTime}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400 mr-4">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{item.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">by {item.author}</span>
                </div>
                <a 
                  href={item.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm font-semibold"
                >
                  Read
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No content found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('trending');
              }}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get the latest articles, tutorials, and case studies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscovery2025;