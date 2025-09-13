import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  ExternalLink,
  Play,
  Download,
  Share2,
  Bookmark,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Sparkles
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  views: number;
  rating: number;
  featured: boolean;
  trending: boolean;
  tags: string[];
  image: string;
  type: 'article' | 'video' | 'guide' | 'case-study' | 'whitepaper';
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025: The Neural Synthesis Revolution - Complete Implementation Guide',
    description: 'Comprehensive guide to implementing advanced neural synthesis systems with 99.9% accuracy and 10,000x processing speed improvements.',
    category: 'AI Implementation',
    readTime: '45 min',
    publishDate: '2025-01-15',
    views: 125000,
    rating: 4.9,
    featured: true,
    trending: true,
    tags: ['AI 2025', 'Neural Networks', 'Implementation', 'ROI'],
    image: '/api/placeholder/400/250',
    type: 'guide'
  },
  {
    id: '2',
    title: 'Quantum Computing Breakthroughs 2025-2030: Error-Corrected Systems',
    description: 'Deep dive into the latest quantum computing innovations that are revolutionizing cryptography, optimization, and machine learning.',
    category: 'Quantum Computing',
    readTime: '32 min',
    publishDate: '2025-01-14',
    views: 89000,
    rating: 4.8,
    featured: true,
    trending: true,
    tags: ['Quantum Computing', 'Cryptography', 'Optimization', 'Breakthrough'],
    image: '/api/placeholder/400/250',
    type: 'whitepaper'
  },
  {
    id: '3',
    title: 'Autonomous Business Systems: 2,500% ROI Case Study',
    description: 'Real-world implementation of autonomous AI systems that achieved unprecedented ROI and operational efficiency improvements.',
    category: 'Case Study',
    readTime: '28 min',
    publishDate: '2025-01-13',
    views: 156000,
    rating: 4.9,
    featured: true,
    trending: false,
    tags: ['ROI', 'Automation', 'Business Systems', 'Success Story'],
    image: '/api/placeholder/400/250',
    type: 'case-study'
  },
  {
    id: '4',
    title: 'Future Technology Predictions 2025-2030: The Ultimate Roadmap',
    description: 'Expert predictions and analysis of emerging technologies that will shape the next decade of innovation and business transformation.',
    category: 'Future Tech',
    readTime: '38 min',
    publishDate: '2025-01-12',
    views: 203000,
    rating: 4.7,
    featured: false,
    trending: true,
    tags: ['Predictions', 'Future Tech', 'Innovation', 'Roadmap'],
    image: '/api/placeholder/400/250',
    type: 'article'
  },
  {
    id: '5',
    title: 'Neural Interface Solutions: The Next Frontier in Human-AI Interaction',
    description: 'Exploring cutting-edge neural interface technologies that enable seamless communication between humans and AI systems.',
    category: 'Neural Interfaces',
    readTime: '41 min',
    publishDate: '2025-01-11',
    views: 78000,
    rating: 4.8,
    featured: false,
    trending: false,
    tags: ['Neural Interfaces', 'Human-AI', 'Interaction', 'Technology'],
    image: '/api/placeholder/400/250',
    type: 'video'
  },
  {
    id: '6',
    title: 'Space Technology Solutions: AI-Powered Space Exploration',
    description: 'Revolutionary AI applications in space technology, from autonomous spacecraft to intelligent mission planning systems.',
    category: 'Space Tech',
    readTime: '35 min',
    publishDate: '2025-01-10',
    views: 92000,
    rating: 4.6,
    featured: false,
    trending: true,
    tags: ['Space Technology', 'AI Applications', 'Exploration', 'Innovation'],
    image: '/api/placeholder/400/250',
    type: 'article'
  }
];

const AI2025_2030UltimateBreakthroughContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('trending');

  const categories = ['All', 'AI Implementation', 'Quantum Computing', 'Case Study', 'Future Tech', 'Neural Interfaces', 'Space Tech'];

  const filteredContent = contentItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  ).sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'guide':
        return <Bookmark className="w-4 h-4" />;
      case 'case-study':
        return <TrendingUp className="w-4 h-4" />;
      case 'whitepaper':
        return <Download className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Implementation':
        return <Brain className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Cpu className="w-5 h-5" />;
      case 'Case Study':
        return <TrendingUp className="w-5 h-5" />;
      case 'Future Tech':
        return <Sparkles className="w-5 h-5" />;
      case 'Neural Interfaces':
        return <Zap className="w-5 h-5" />;
      case 'Space Tech':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Breakthrough Content
            <span className="block text-blue-600">2025-2030</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most comprehensive collection of AI breakthroughs, quantum computing innovations, 
            and revolutionary technology content that will transform your business.
          </p>
        </div>

        {/* Filters and sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="trending">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  {item.trending && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Trending
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {getTypeIcon(item.type)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-blue-600">
                    {getCategoryIcon(item.category)}
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{item.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/content/${item.id}`}
                    className="group/link flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Access our complete library of breakthrough content and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2025-2030-ultimate-content-revolution"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Custom Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentShowcase;