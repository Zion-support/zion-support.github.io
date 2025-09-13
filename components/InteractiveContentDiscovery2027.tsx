import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Brain,
  Cpu,
  Zap,
  Target,
  Users,
  Award
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  featured: boolean;
  trending: boolean;
  icon: React.ComponentType<any>;
  metrics: {
    views: string;
    rating: number;
    downloads: string;
  };
  tags: string[];
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2027-breakthrough-guide',
    title: 'AI 2027 Breakthrough Implementation Guide',
    description: 'Complete guide to implementing AI 2027 breakthrough solutions in your organization',
    category: 'AI Solutions',
    type: 'Guide',
    featured: true,
    trending: true,
    icon: Brain,
    metrics: {
      views: '25.3K',
      rating: 4.9,
      downloads: '8.7K'
    },
    tags: ['AI 2027', 'Implementation', 'Breakthrough', 'Guide'],
    publishDate: '2025-01-15'
  },
  {
    id: 'neural-synthesis-whitepaper',
    title: 'Neural Synthesis Technology Whitepaper',
    description: 'Deep dive into neural synthesis technology and its revolutionary capabilities',
    category: 'Technology',
    type: 'Whitepaper',
    featured: true,
    trending: true,
    icon: Cpu,
    metrics: {
      views: '18.7K',
      rating: 4.8,
      downloads: '12.4K'
    },
    tags: ['Neural Synthesis', 'Technology', 'Whitepaper', 'AI'],
    publishDate: '2025-01-12'
  },
  {
    id: 'quantum-ai-case-studies',
    title: 'Quantum AI Success Stories & Case Studies',
    description: 'Real-world examples of quantum AI implementations and their transformative results',
    category: 'Case Studies',
    type: 'Case Study',
    featured: true,
    trending: false,
    icon: Award,
    metrics: {
      views: '31.2K',
      rating: 4.9,
      downloads: '15.8K'
    },
    tags: ['Case Studies', 'Success Stories', 'Quantum AI', 'ROI'],
    publishDate: '2025-01-10'
  },
  {
    id: 'ai-2027-roi-calculator',
    title: 'AI 2027 ROI Calculator Tool',
    description: 'Interactive tool to calculate potential ROI from AI 2027 implementations',
    category: 'Tools',
    type: 'Tool',
    featured: false,
    trending: true,
    icon: TrendingUp,
    metrics: {
      views: '42.1K',
      rating: 4.7,
      downloads: '28.9K'
    },
    tags: ['ROI Calculator', 'Tool', 'AI 2027', 'Business'],
    publishDate: '2025-01-08'
  },
  {
    id: 'neural-optimization-best-practices',
    title: 'Neural Network Optimization Best Practices',
    description: 'Expert recommendations for optimizing neural network performance and efficiency',
    category: 'Best Practices',
    type: 'Guide',
    featured: false,
    trending: false,
    icon: Target,
    metrics: {
      views: '14.6K',
      rating: 4.6,
      downloads: '7.3K'
    },
    tags: ['Optimization', 'Best Practices', 'Neural Networks', 'Performance'],
    publishDate: '2025-01-05'
  },
  {
    id: 'quantum-security-implementation',
    title: 'Quantum Security Implementation Guide',
    description: 'Step-by-step guide to implementing quantum security solutions',
    category: 'Security',
    type: 'Guide',
    featured: false,
    trending: true,
    icon: Zap,
    metrics: {
      views: '22.8K',
      rating: 4.8,
      downloads: '11.2K'
    },
    tags: ['Security', 'Quantum', 'Implementation', 'Guide'],
    publishDate: '2025-01-03'
  },
  {
    id: 'ai-transformation-framework',
    title: 'AI Transformation Framework 2027',
    description: 'Comprehensive framework for transforming your organization with AI 2027 technologies',
    category: 'Framework',
    type: 'Framework',
    featured: true,
    trending: false,
    icon: Users,
    metrics: {
      views: '19.4K',
      rating: 4.9,
      downloads: '13.7K'
    },
    tags: ['Transformation', 'Framework', 'AI 2027', 'Organization'],
    publishDate: '2025-01-01'
  },
  {
    id: 'quantum-computing-primer',
    title: 'Quantum Computing Primer for Business Leaders',
    description: 'Essential guide to understanding quantum computing for business applications',
    category: 'Education',
    type: 'Primer',
    featured: false,
    trending: false,
    icon: Brain,
    metrics: {
      views: '16.9K',
      rating: 4.5,
      downloads: '9.1K'
    },
    tags: ['Education', 'Quantum Computing', 'Business', 'Primer'],
    publishDate: '2024-12-28'
  }
];

const InteractiveContentDiscovery2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', ...Array.from(new Set(contentItems.map(item => item.category)))];
  const types = ['All', ...Array.from(new Set(contentItems.map(item => item.type)))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('content-discovery-2027');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending === a.trending ? 0 : b.trending ? 1 : -1;
      case 'featured':
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
      case 'rating':
        return b.metrics.rating - a.metrics.rating;
      case 'views':
        return parseInt(b.metrics.views.replace('K', '')) - parseInt(a.metrics.views.replace('K', ''));
      default:
        return 0;
    }
  });

  return (
    <section 
      id="content-discovery-2027"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Sparkles className="w-6 h-6 mr-3" />
            Interactive Content Discovery 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover AI 2027 Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI 2027 resources, guides, and tools designed to accelerate your transformation
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, guides, tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-white font-semibold mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-white font-semibold mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                {types.map(type => (
                  <option key={type} value={type} className="bg-gray-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-white font-semibold mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                <option value="trending" className="bg-gray-800">Trending</option>
                <option value="featured" className="bg-gray-800">Featured</option>
                <option value="rating" className="bg-gray-800">Rating</option>
                <option value="views" className="bg-gray-800">Views</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-center">
                <div className="text-white font-semibold">{sortedContent.length}</div>
                <div className="text-gray-400 text-sm">Results</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                  {/* Header with badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex space-x-2">
                      {item.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Trending
                        </span>
                      )}
                    </div>
                    <item.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow text-sm">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="text-blue-400 font-bold">{item.metrics.views}</div>
                      <div className="text-gray-400">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{item.metrics.rating}</div>
                      <div className="text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{item.metrics.downloads}</div>
                      <div className="text-gray-400">Downloads</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/content/${item.id}`}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-600 group-hover:translate-y-[-2px]"
                  >
                    Explore Content
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our content library is constantly expanding. Contact us to request specific resources or schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-600"
              >
                Request Content
              </Link>
              <Link
                to="/resources"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2027;