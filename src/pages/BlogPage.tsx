import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Clock, 
  Eye, 
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'innovation', name: 'Innovation', icon: Zap, color: 'from-zion-yellow to-zion-orange' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-zion-purple to-zion-pink' },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, color: 'from-zion-green to-zion-blue' }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Blockchain', 'IoT', 'Quantum Computing',
    'Data Analytics', 'Digital Transformation', 'Innovation', 'Space Tech', 'Healthcare', 'Finance', 'Manufacturing'
  ];

  const blogPosts = [
    {
      id: 'ai-future-business',
      title: 'The Future of AI in Business: 2025 and Beyond',
      excerpt: 'Explore how artificial intelligence is reshaping business operations, from automated decision-making to predictive analytics that drive competitive advantage.',
      content: 'Artificial intelligence has evolved from a futuristic concept to a practical business tool that\'s transforming industries worldwide. In 2025, we\'re seeing AI applications that go beyond simple automation to provide deep insights and strategic value...',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO, Zion Tech Group',
      authorAvatar: '/team/sarah-chen.jpg',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Innovation'],
      publishDate: '2025-01-15',
      readTime: '8 min read',
      views: 12450,
      likes: 892,
      featured: true,
      image: '/blog/ai-future-business.jpg'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Computing and the Future of Cybersecurity',
      excerpt: 'As quantum computers become more powerful, traditional encryption methods face unprecedented challenges. Discover how we\'re preparing for the quantum era.',
      content: 'The quantum revolution is not just about faster computing—it\'s about fundamentally changing how we approach security. Current encryption standards like RSA and ECC rely on the difficulty of factoring large numbers...',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Cybersecurity',
      authorAvatar: '/team/marcus-rodriguez.jpg',
      category: 'cybersecurity',
      tags: ['Quantum Computing', 'Cybersecurity', 'Encryption', 'Future Tech'],
      publishDate: '2025-01-12',
      readTime: '12 min read',
      views: 9876,
      likes: 654,
      featured: true,
      image: '/blog/quantum-cybersecurity.jpg'
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Revolutionizing Supply Chain Management',
      excerpt: 'How blockchain technology is creating transparent, efficient, and secure supply chains across global industries.',
      content: 'Supply chain management has long been plagued by opacity, inefficiency, and fraud. Blockchain technology offers a revolutionary solution by providing an immutable, transparent ledger that all parties can trust...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Research',
      authorAvatar: '/team/emily-watson.jpg',
      category: 'innovation',
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Innovation'],
      publishDate: '2025-01-10',
      readTime: '10 min read',
      views: 7654,
      likes: 432,
      featured: false,
      image: '/blog/blockchain-supply-chain.jpg'
    },
    {
      id: 'space-data-analytics',
      title: 'Space Data Analytics: Insights from Above',
      excerpt: 'How satellite data and space technology are providing unprecedented insights into Earth\'s systems and human activities.',
      content: 'Space technology has evolved far beyond exploration and communication. Today, satellites are collecting vast amounts of data about our planet, from climate patterns to urban development...',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorAvatar: '/team/kleber-santos.jpg',
      category: 'space',
      tags: ['Space Technology', 'Data Analytics', 'Satellites', 'Earth Observation'],
      publishDate: '2025-01-08',
      readTime: '15 min read',
      views: 5432,
      likes: 321,
      featured: false,
      image: '/blog/space-data-analytics.jpg'
    },
    {
      id: 'cloud-native-architecture',
      title: 'Building Cloud-Native Applications for Scale',
      excerpt: 'Best practices for designing and implementing cloud-native applications that can handle massive scale and rapid growth.',
      content: 'Cloud-native architecture represents a fundamental shift in how we build and deploy applications. Instead of monolithic applications designed for traditional infrastructure...',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO, Zion Tech Group',
      authorAvatar: '/team/sarah-chen.jpg',
      category: 'cloud',
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Scalability'],
      publishDate: '2025-01-05',
      readTime: '14 min read',
      views: 4321,
      likes: 298,
      featured: false,
      image: '/blog/cloud-native-architecture.jpg'
    },
    {
      id: 'iot-healthcare-revolution',
      title: 'IoT Revolutionizing Healthcare: Patient Care 2.0',
      excerpt: 'How Internet of Things devices are transforming patient monitoring, diagnosis, and treatment in modern healthcare.',
      content: 'The healthcare industry is experiencing a digital transformation powered by IoT devices. From wearable health monitors to smart hospital equipment...',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Cybersecurity',
      authorAvatar: '/team/marcus-rodriguez.jpg',
      category: 'innovation',
      tags: ['IoT', 'Healthcare', 'Patient Care', 'Digital Health'],
      publishDate: '2025-01-03',
      readTime: '11 min read',
      views: 3456,
      likes: 234,
      featured: false,
      image: '/blog/iot-healthcare-revolution.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Insights &{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Stay ahead of the curve with expert insights, industry analysis, and cutting-edge 
              technology trends from our team of specialists.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, insights, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Browse by Category</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tag Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                All Tags
              </button>
              {tags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology trends
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                      <p className="text-cyan-400 text-sm">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-cyan-400 font-medium capitalize">{post.category}</span>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{post.author}</p>
                          <p className="text-gray-400 text-sm">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-20 bg-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredPosts.length} articles found matching your criteria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <p className="text-cyan-400 text-sm">Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-cyan-400 font-medium capitalize">{post.category}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all articles
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTag('all');
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the latest insights, industry trends, and technology updates delivered 
              directly to your inbox. Never miss an important development.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;