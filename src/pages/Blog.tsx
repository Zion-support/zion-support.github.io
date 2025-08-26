
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Clock, Tag, ArrowRight, 
  Filter, TrendingUp, BookOpen, Zap 
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'quantum', name: 'Quantum Technology', count: 3 },
    { id: 'business', name: 'Business & Strategy', count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Trends to Watch in 2025',
      excerpt: 'Discover the most exciting AI developments and trends that will shape the technology landscape in 2025 and beyond.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Trends', '2025'],
      image: '/blog/ai-trends-2025.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype',
      excerpt: 'A comprehensive guide to understanding quantum computing, its current state, and practical applications for businesses.',
      author: 'Dr. James Kim',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/blog/quantum-computing-guide.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions to protect businesses.',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Security', 'Threats'],
      image: '/blog/ai-cybersecurity.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Step-by-Step Guide',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud with minimal disruption and maximum benefits.',
      author: 'Lisa Thompson',
      date: '2025-01-08',
      readTime: '15 min read',
      category: 'cloud',
      tags: ['Cloud', 'Migration', 'DevOps', 'Strategy'],
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation: Why It\'s More Than Just Technology',
      excerpt: 'Understanding the human and organizational aspects of successful digital transformation initiatives.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'business',
      tags: ['Digital Transformation', 'Strategy', 'Change Management'],
      image: '/blog/digital-transformation.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge AI: Computing at the Source',
      excerpt: 'Explore how edge AI is revolutionizing industries by bringing intelligence closer to where data is generated.',
      author: 'Dr. James Kim',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'ai',
      tags: ['Edge AI', 'IoT', 'Machine Learning', 'Innovation'],
      image: '/blog/edge-ai.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'DevOps Best Practices for 2025',
      excerpt: 'Updated DevOps practices and tools that will help your team deliver software faster and more reliably.',
      author: 'Lisa Thompson',
      date: '2025-01-01',
      readTime: '13 min read',
      category: 'cloud',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Best Practices'],
      image: '/blog/devops-2025.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'AI Ethics: Building Responsible Technology',
      excerpt: 'The importance of ethical AI development and how to implement responsible AI practices in your organization.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-28',
      readTime: '10 min read',
      category: 'ai',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Trust'],
      image: '/blog/ai-ethics.jpg',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'bg-blue-100 text-blue-800',
      cloud: 'bg-green-100 text-green-800',
      cybersecurity: 'bg-red-100 text-red-800',
      quantum: 'bg-purple-100 text-purple-800',
      business: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Zion Tech Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Insights, trends, and expert perspectives on the latest in technology, 
            AI, and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Post</h2>
              <p className="text-lg text-gray-600">Our latest insights and most popular content</p>
            </motion.div>
            
            {filteredPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-white" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest technology insights, industry trends, and expert analysis.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Post Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest technology trends, AI insights, and industry updates 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
