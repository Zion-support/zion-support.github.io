import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, Star, TrendingUp, Eye, BookOpen, Download, Play, Zap, ArrowRight, X } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'video' | 'webinar';
  category: string;
  readTime?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  featured: boolean;
  trending: boolean;
  icon: string;
  views?: number;
  rating?: number;
}

interface InteractiveContentDiscoveryProps {
  className?: string;
}

const InteractiveContentDiscovery: React.FC<InteractiveContentDiscoveryProps> = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
      description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '25 min read',
      difficulty: 'intermediate',
      tags: ['AI', 'Innovation', 'Technology', 'Future'],
      featured: true,
      trending: true,
      icon: '🚀',
      views: 2300,
      rating: 4.9
    },
    {
      id: '2',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI',
      description: 'Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance. Complete guide to green AI practices.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
      category: 'Sustainability',
      readTime: '20 min read',
      difficulty: 'intermediate',
      tags: ['Sustainability', 'Green Tech', 'Environment', 'AI'],
      featured: true,
      trending: true,
      icon: '🌱',
      views: 1800,
      rating: 4.8
    },
    {
      id: '3',
      title: '$200M Manufacturing Success: Autonomous AI Systems Case Study',
      description: 'Discover how a Fortune 500 manufacturing company achieved $200M in savings through autonomous AI systems. Complete implementation details and lessons learned.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: '18 min read',
      difficulty: 'advanced',
      tags: ['Case Study', 'Manufacturing', 'ROI', 'AI Success'],
      featured: true,
      trending: true,
      icon: '💰',
      views: 3200,
      rating: 4.9
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
      description: 'Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Implementation',
      readTime: '200+ pages',
      difficulty: 'beginner',
      tags: ['Guide', 'Implementation', 'Templates', 'Free Download'],
      featured: true,
      trending: true,
      icon: '📚',
      views: 15200,
      rating: 4.9
    },
    {
      id: '5',
      title: 'AI Robotics & Automation 2025: The Future of Intelligent Machines',
      description: 'Explore the latest breakthroughs in AI-powered robotics and automation. From autonomous manufacturing to service robots, discover how intelligent machines are transforming industries.',
      href: '/blog/ai-robotics-automation-2025',
      type: 'blog',
      category: 'Robotics',
      readTime: '22 min read',
      difficulty: 'intermediate',
      tags: ['Robotics', 'Automation', 'AI', 'Future'],
      featured: false,
      trending: true,
      icon: '🤖',
      views: 1500,
      rating: 4.7
    },
    {
      id: '6',
      title: 'AI Cybersecurity Threats 2025: Complete Defense Strategy',
      description: 'Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.',
      href: '/blog/ai-2025-cybersecurity-threats',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '22 min read',
      difficulty: 'advanced',
      tags: ['Cybersecurity', 'AI Security', 'Threats', 'Defense'],
      featured: false,
      trending: true,
      icon: '🛡️',
      views: 2100,
      rating: 4.8
    }
  ];

  const categories = ['all', 'AI Innovations', 'Sustainability', 'Manufacturing', 'Implementation', 'Robotics', 'Cybersecurity'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const types = ['all', 'blog', 'case-study', 'resource', 'video', 'webinar'];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending ? 1 : -1;
      case 'featured':
        return b.featured ? 1 : -1;
      case 'views':
        return (b.views || 0) - (a.views || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <TrendingUp className="w-4 h-4" />;
      case 'resource':
        return <Download className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'webinar':
        return <Zap className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">🔍 Discover Amazing Content</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles, case studies, and resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="trending">Trending</option>
                  <option value="featured">Featured</option>
                  <option value="views">Most Viewed</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredContent.length} Content Items Found
          </h3>
          <div className="text-sm text-gray-500">
            Showing {Math.min(6, filteredContent.length)} of {filteredContent.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedContent.slice(0, 6).map((item) => {
            const isHovered = hoveredItem === item.id;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`
                  bg-white border border-gray-200 rounded-xl p-6 
                  hover:shadow-lg transition-all duration-300 
                  hover:border-blue-300 hover:-translate-y-1
                  ${isHovered ? 'ring-2 ring-blue-100' : ''}
                `}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        {getTypeIcon(item.type)}
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.views && (
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </span>
                      )}
                      {item.rating && (
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {item.rating}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        {filteredContent.length > 6 && (
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Content
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;