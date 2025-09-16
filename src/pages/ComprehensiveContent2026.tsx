import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Zap, Globe, Shield, Brain, Search, Filter } from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts, getBlogCategories, searchBlogPosts } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const ComprehensiveContent2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'services'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const allPosts = getFeaturedBlogPosts();
  const allServices = COMPREHENSIVE_SERVICES;
  const categories = getBlogCategories();

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & machine learning':
      case 'revolutionary ai':
        return Brain;
      case 'quantum computing':
      case 'quantum technology':
        return Zap;
      case 'sustainable technology':
      case 'green technology':
        return Globe;
      case 'cybersecurity':
        return Shield;
      default:
        return TrendingUp;
    }
  };

  const formatPrice = (price: number, currency: string) => {
    if (price >= 1000000) {
      return `${currency}${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `${currency}${(price / 1000).toFixed(0)}K`;
    }
    return `${currency}${price}`;
  };

  const filterContent = () => {
    let content = [];
    
    if (activeTab === 'all' || activeTab === 'blog') {
      let posts = allPosts;
      if (searchQuery) {
        posts = searchBlogPosts(searchQuery);
      }
      if (selectedCategory !== 'All') {
        posts = posts.filter(post => post.category === selectedCategory);
      }
      content = [...content, ...posts.map(post => ({ ...post, type: 'blog' }))];
    }
    
    if (activeTab === 'all' || activeTab === 'services') {
      let services = allServices;
      if (searchQuery) {
        services = services.filter(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
      if (selectedCategory !== 'All') {
        services = services.filter(service => service.category === selectedCategory);
      }
      content = [...content, ...services.map(service => ({ ...service, type: 'service' }))];
    }

    // Sort content
    if (sortBy === 'newest') {
      content.sort((a, b) => {
        if (a.type === 'blog' && b.type === 'blog') {
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        }
        return 0;
      });
    } else if (sortBy === 'price-low') {
      content = content.filter(item => item.type === 'service');
      content.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      content = content.filter(item => item.type === 'service');
      content.sort((a, b) => b.price - a.price);
    }

    return content;
  };

  const filteredContent = filterContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Content 2026
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Explore our complete collection of cutting-edge blog posts, revolutionary services, and breakthrough technologies that are shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-80 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                All Content
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === 'blog'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === 'services'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.category);
            
            if (item.type === 'blog') {
              return (
                <motion.div
                  key={`blog-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <CategoryIcon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-700">{item.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white/90 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{item.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">Featured</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={`service-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <CategoryIcon className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-gray-700">{item.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">
                          {formatPrice(item.price, item.currency)}
                        </div>
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                          <Star className="w-4 h-4 text-yellow-300 fill-current" />
                          <span className="text-sm text-white font-semibold">{item.reviews.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{item.deliveryTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">AI Score: {item.aiScore}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {item.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            }
          })}
        </motion.div>

        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveContent2026;