import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Zap
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.',
      content: 'Full content here...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Trends', '2024'],
      readTime: 8,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive look at quantum computing capabilities and their practical applications in business.',
      content: 'Full content here...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'Technology', 'Innovation'],
      readTime: 12,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How AI is both creating new security challenges and providing innovative solutions.',
      content: 'Full content here...',
      author: 'Alex Thompson',
      date: '2024-01-10',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threats', 'Solutions'],
      readTime: 10,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '4',
      title: 'Cloud-Native Architecture: Best Practices for 2024',
      excerpt: 'Essential strategies for building scalable, resilient cloud applications.',
      content: 'Full content here...',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'Architecture', 'Best Practices'],
      readTime: 15,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '5',
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'How edge computing is revolutionizing data processing and IoT applications.',
      content: 'Full content here...',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'IoT', 'Data Processing', 'Innovation'],
      readTime: 9,
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '6',
      title: 'Sustainable Technology: Green IT Solutions for Modern Businesses',
      excerpt: 'Eco-friendly technology approaches that reduce environmental impact while improving efficiency.',
      content: 'Full content here...',
      author: 'Emma Wilson',
      date: '2024-01-03',
      category: 'Sustainability',
      tags: ['Green IT', 'Sustainability', 'Efficiency', 'Environment'],
      readTime: 11,
      image: '/api/placeholder/600/400',
      featured: false
    }
  ]);

  const categories = [
    'all',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud & DevOps',
    'Edge Computing',
    'Sustainability',
    'Digital Transformation',
    'IoT & Smart Cities',
    'Blockchain & Web3'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Zion Tech Group
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Blog & Insights
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and emerging technologies
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Featured Articles
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/30">
                      {post.category.includes('AI') && <Brain />}
                      {post.category.includes('Cloud') && <Cloud />}
                      {post.category.includes('Security') && <Shield />}
                      {post.category.includes('Quantum') && <Zap />}
                      {post.category.includes('Edge') && <Rocket />}
                      {post.category.includes('Sustainability') && <TrendingUp />}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Latest Articles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                  <div className="text-4xl text-slate-600">
                    {post.category.includes('AI') && <Brain />}
                    {post.category.includes('Cloud') && <Cloud />}
                    {post.category.includes('Security') && <Shield />}
                    {post.category.includes('Quantum') && <Zap />}
                    {post.category.includes('Edge') && <Rocket />}
                    {post.category.includes('Sustainability') && <TrendingUp />}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-2xl p-8 border border-slate-600/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Insights
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
