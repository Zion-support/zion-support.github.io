import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Zap,
  Brain,
  Shield,
  Database,
  Globe,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogCategories = [
    { id: 'all', label: 'All Posts', icon: FileText, count: 0 },
    { id: 'ai', label: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Database, count: 8 },
    { id: 'security', label: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'emerging', label: 'Emerging Tech', icon: Zap, count: 4 },
    { id: 'industry', label: 'Industry Insights', icon: Globe, count: 10 },
    { id: 'strategy', label: 'Digital Strategy', icon: TrendingUp, count: 7 }
  ];

  const popularTags = [
    { id: 'all', label: 'All Tags', count: 0 },
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', count: 15 },
    { id: 'machine-learning', label: 'Machine Learning', count: 12 },
    { id: 'cloud-computing', label: 'Cloud Computing', count: 10 },
    { id: 'cybersecurity', label: 'Cybersecurity', count: 8 },
    { id: 'digital-transformation', label: 'Digital Transformation', count: 9 },
    { id: 'data-analytics', label: 'Data Analytics', count: 7 },
    { id: 'blockchain', label: 'Blockchain', count: 5 },
    { id: 'iot', label: 'Internet of Things', count: 6 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans.',
      content: 'Artificial intelligence is rapidly transforming the healthcare industry, offering unprecedented opportunities to improve patient outcomes and operational efficiency. This comprehensive guide explores the latest AI applications in healthcare, including diagnostic imaging, drug discovery, and patient monitoring systems.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['artificial-intelligence', 'healthcare', 'machine-learning'],
      featured: true,
      image: '🏥',
      views: 15420,
      likes: 342
    },
    {
      id: 2,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Learn about the zero-trust security model and how it\'s becoming the gold standard for protecting modern enterprise networks.',
      content: 'In today\'s interconnected digital landscape, traditional perimeter-based security models are no longer sufficient. Zero-trust security represents a paradigm shift that assumes no user or device can be trusted by default, requiring continuous verification and strict access controls.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'security',
      tags: ['cybersecurity', 'zero-trust', 'enterprise-security'],
      featured: true,
      image: '🔒',
      views: 12850,
      likes: 298
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      excerpt: 'Explore the principles of cloud-native architecture and how to design applications that scale seamlessly in modern cloud environments.',
      content: 'Cloud-native architecture represents a fundamental shift in how we design, develop, and deploy applications. By embracing microservices, containers, and DevOps practices, organizations can build applications that are inherently scalable, resilient, and maintainable.',
      author: 'Jennifer Kim',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['cloud-computing', 'microservices', 'devops'],
      featured: false,
      image: '☁️',
      views: 9870,
      likes: 156
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Understand how edge computing is revolutionizing data processing and enabling real-time applications across industries.',
      content: 'Edge computing is transforming how we process and analyze data by bringing computation closer to the data source. This approach reduces latency, improves performance, and enables new use cases in IoT, autonomous vehicles, and smart cities.',
      author: 'Dr. Robert Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'emerging',
      tags: ['edge-computing', 'iot', 'real-time-analytics'],
      featured: false,
      image: '🌐',
      views: 7560,
      likes: 134
    },
    {
      id: 5,
      title: 'Data-Driven Decision Making: Leveraging Analytics for Business Growth',
      excerpt: 'Learn how organizations can harness the power of data analytics to make informed decisions and drive sustainable growth.',
      content: 'In today\'s competitive business landscape, data-driven decision making is no longer optional—it\'s essential for survival and growth. Organizations that effectively leverage analytics gain valuable insights into customer behavior, market trends, and operational efficiency.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'strategy',
      tags: ['data-analytics', 'business-intelligence', 'decision-making'],
      featured: false,
      image: '📊',
      views: 6230,
      likes: 98
    },
    {
      id: 6,
      title: 'Machine Learning in Financial Services: Risk Assessment and Fraud Detection',
      excerpt: 'Explore how machine learning algorithms are revolutionizing risk assessment and fraud detection in the financial services industry.',
      content: 'The financial services industry is undergoing a digital transformation powered by machine learning and artificial intelligence. These technologies are enabling more accurate risk assessment, sophisticated fraud detection, and personalized financial services.',
      author: 'David Park',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'ai',
      tags: ['machine-learning', 'financial-services', 'risk-assessment'],
      featured: false,
      image: '💰',
      views: 5420,
      likes: 87
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    (selectedTag === 'all' || post.tags.includes(selectedTag)) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Update category counts
  blogCategories.forEach(category => {
    if (category.id === 'all') {
      category.count = blogPosts.length;
    } else {
      category.count = blogPosts.filter(post => post.category === category.id).length;
    }
  });

  // Update tag counts
  popularTags.forEach(tag => {
    if (tag.id === 'all') {
      tag.count = blogPosts.length;
    } else {
      tag.count = blogPosts.filter(post => post.tags.includes(tag.id)).length;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
            and emerging technologies. Discover strategies to drive innovation and growth.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </motion.div>

      {/* Categories and Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {popularTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tag.label}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {tag.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        post.category === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                        post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                        post.category === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                        post.category === 'emerging' ? 'bg-orange-500/20 text-orange-400' :
                        post.category === 'industry' ? 'bg-green-500/20 text-green-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {post.category.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                        FEATURED
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()} views
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* All Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Articles</h2>
          
          {filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                        {post.image}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            post.category === 'ai' ? 'bg-purple-500/20 text-purple-400' :
                            post.category === 'security' ? 'bg-red-500/20 text-red-400' :
                            post.category === 'cloud' ? 'bg-blue-500/20 text-blue-400' :
                            post.category === 'emerging' ? 'bg-orange-500/20 text-orange-400' :
                            post.category === 'industry' ? 'bg-green-500/20 text-green-400' :
                            'bg-cyan-500/20 text-cyan-400'
                          }`}>
                            {post.category.toUpperCase()}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {post.views.toLocaleString()} views
                            </span>
                          </div>
                          
                          <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get the latest insights and trends delivered to your inbox. Never miss an important update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;