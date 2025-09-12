import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Filter, Search } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
  type: 'article' | 'case-study' | 'resource' | 'guide';
  status: 'new' | 'popular' | 'trending' | 'featured';
  publishDate: string;
  author: string;
  tags: string[];
}

interface EnhancedContentShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showFilters?: boolean;
  maxItems?: number;
}

const EnhancedContentShowcase: React.FC<EnhancedContentShowcaseProps> = ({
  title = "Latest AI Insights & Success Stories",
  subtitle = "Discover cutting-edge AI content, case studies, and implementation guides",
  className = '',
  showFilters = true,
  maxItems = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems: ContentItem[] = [
    {
      title: 'The Generative AI Revolution: How 2025 is Transforming Every Industry',
      description: 'Explore how generative AI is revolutionizing industries in 2025, from healthcare to finance, with real-world applications and future predictions.',
      href: '/blog/ai-2025-generative-ai-revolution',
      icon: '🤖',
      readTime: '12 min read',
      category: 'AI Innovation',
      isNew: true,
      isTrending: true,
      type: 'article',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['generative AI', 'industry transformation', '2025 trends']
    },
    {
      title: 'AI Automation 2025: Complete Implementation Guide for Enterprise Success',
      description: 'Master AI automation implementation with our comprehensive 2025 guide. Learn best practices, avoid common pitfalls, and achieve 300% productivity gains.',
      href: '/blog/ai-automation-2025-complete-implementation-guide',
      icon: '⚡',
      readTime: '15 min read',
      category: 'AI Automation',
      isNew: true,
      isTrending: true,
      type: 'guide',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['automation', 'enterprise', 'implementation', 'productivity']
    },
    {
      title: 'AI Transformation Success: How a Manufacturing Giant Achieved 400% ROI',
      description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
      href: '/case-studies/ai-transformation-manufacturing-giant-2025',
      icon: '🏭',
      readTime: '10 min read',
      category: 'Case Study',
      isNew: true,
      isTrending: true,
      type: 'case-study',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['manufacturing', 'ROI', 'transformation', 'Fortune 500']
    },
    {
      title: 'AI Breakthrough Innovations of 2025',
      description: 'Discover the most groundbreaking AI innovations that are reshaping industries and creating new opportunities.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      readTime: '8 min read',
      category: 'AI Innovation',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      tags: ['innovation', 'breakthrough', 'technology']
    },
    {
      title: 'Fortune 500 AI Transformation Success',
      description: 'Learn how leading Fortune 500 companies are leveraging AI to drive unprecedented growth and efficiency.',
      href: '/case-studies/ai-transformation-fortune-500-2025',
      icon: '💼',
      readTime: '12 min read',
      category: 'Case Study',
      isNew: false,
      isTrending: false,
      type: 'case-study',
      status: 'popular',
      publishDate: '2025-01-12',
      author: 'Zion Tech Group',
      tags: ['Fortune 500', 'transformation', 'success']
    },
    {
      title: 'AI Healthcare Diagnosis Breakthrough',
      description: 'See how AI is revolutionizing healthcare diagnosis and treatment with unprecedented accuracy.',
      href: '/case-studies/ai-healthcare-diagnosis-breakthrough-2026',
      icon: '🏥',
      readTime: '14 min read',
      category: 'Healthcare AI',
      isNew: false,
      isTrending: true,
      type: 'case-study',
      status: 'trending',
      publishDate: '2025-01-10',
      author: 'Zion Tech Group',
      tags: ['healthcare', 'diagnosis', 'medical AI']
    },
    {
      title: 'AI Enterprise Integration Best Practices',
      description: 'Master the art of integrating AI solutions into existing enterprise systems with proven methodologies.',
      href: '/blog/ai-enterprise-integration-best-practices-2025',
      icon: '🔗',
      readTime: '11 min read',
      category: 'Enterprise AI',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2025-01-08',
      author: 'Zion Tech Group',
      tags: ['integration', 'enterprise', 'best practices']
    },
    {
      title: 'AI Cybersecurity Threat Detection 2025',
      description: 'Learn how AI is revolutionizing cybersecurity with advanced threat detection and prevention capabilities.',
      href: '/blog/ai-cybersecurity-threat-detection-2025',
      icon: '🔒',
      readTime: '9 min read',
      category: 'Cybersecurity',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-05',
      author: 'Zion Tech Group',
      tags: ['cybersecurity', 'threat detection', 'security']
    },
    {
      title: 'AI Data Engineering 2025: Complete Guide',
      description: 'Comprehensive guide to AI-powered data engineering practices and tools for modern enterprises.',
      href: '/blog/ai-data-engineering-2025',
      icon: '📊',
      readTime: '13 min read',
      category: 'Data Engineering',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2025-01-03',
      author: 'Zion Tech Group',
      tags: ['data engineering', 'AI tools', 'data science']
    },
    {
      title: 'AI Edge Computing IoT 2025',
      description: 'Explore the convergence of AI, edge computing, and IoT technologies in modern applications.',
      href: '/blog/ai-edge-computing-iot-2025',
      icon: '🌐',
      readTime: '10 min read',
      category: 'Edge Computing',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-01',
      author: 'Zion Tech Group',
      tags: ['edge computing', 'IoT', 'distributed AI']
    },
    {
      title: 'AI Ethics Responsible Innovation 2025',
      description: 'Navigate the ethical considerations of AI implementation with responsible innovation frameworks.',
      href: '/blog/ai-ethics-responsible-innovation-2025',
      icon: '⚖️',
      readTime: '16 min read',
      category: 'AI Ethics',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2024-12-28',
      author: 'Zion Tech Group',
      tags: ['ethics', 'responsible AI', 'governance']
    },
    {
      title: 'AI Multimodal Applications 2025',
      description: 'Discover how multimodal AI applications are transforming user experiences and business processes.',
      href: '/blog/ai-multimodal-applications-2025',
      icon: '🎭',
      readTime: '7 min read',
      category: 'Multimodal AI',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2024-12-25',
      author: 'Zion Tech Group',
      tags: ['multimodal', 'applications', 'user experience']
    }
  ];

  const categories = ['all', 'AI Innovation', 'AI Automation', 'Case Study', 'Healthcare AI', 'Enterprise AI', 'Cybersecurity', 'Data Engineering', 'Edge Computing', 'AI Ethics', 'Multimodal AI'];
  const types = ['all', 'article', 'case-study', 'guide', 'resource'];

  const filteredContent = contentItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesType && matchesSearch;
    })
    .slice(0, maxItems);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Star className="w-4 h-4 text-green-500" />;
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-orange-500" />;
      case 'featured':
        return <Star className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'trending':
        return 'bg-orange-100 text-orange-800';
      case 'featured':
        return 'bg-blue-100 text-blue-800';
      case 'popular':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                {/* Image/Icon Header */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl">{item.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      <span className="ml-1 capitalize">{item.status}</span>
                    </span>
                    {item.isNew && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Star className="w-3 h-3 mr-1" />
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="text-sm text-blue-600 font-medium mb-2">{item.category}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;