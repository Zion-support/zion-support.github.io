import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  BarChart3,
  ShoppingCart,
  BookOpen,
  Rocket,
  Clock,
  Eye
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

interface Category {
  name: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const categories: Category[] = [
    { name: 'all', icon: BookOpen, count: 25, color: 'from-blue-500 to-cyan-500' },
    { name: 'ai-technology', icon: Brain, count: 8, color: 'from-purple-500 to-pink-500' },
    { name: 'quantum-computing', icon: Code, count: 5, color: 'from-indigo-500 to-purple-500' },
    { name: 'cybersecurity', icon: Shield, count: 6, color: 'from-red-500 to-orange-500' },
    { name: 'cloud-computing', icon: Cloud, count: 4, color: 'from-green-500 to-emerald-500' },
    { name: 'data-analytics', icon: BarChart3, count: 3, color: 'from-yellow-500 to-orange-500' },
    { name: 'e-commerce', icon: ShoppingCart, count: 2, color: 'from-pink-500 to-rose-500' },
    { name: 'innovation', icon: Rocket, count: 4, color: 'from-cyan-500 to-blue-500' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI-Powered Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Chen',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2024-12-15',
      readTime: '8 min read',
      category: 'ai-technology',
      tags: ['AI', 'Business Operations', 'Automation', 'Innovation'],
      image: '/images/blog/ai-business-operations.jpg',
      featured: true,
      views: 15420,
      likes: 892
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive look at what quantum computing can actually deliver today and what to expect in the coming years.',
      content: 'Full article content here...',
      author: 'Marcus Rodriguez',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2024-12-12',
      readTime: '12 min read',
      category: 'quantum-computing',
      tags: ['Quantum Computing', 'Technology', 'Research', 'Future Tech'],
      image: '/images/blog/quantum-computing.jpg',
      featured: true,
      views: 12850,
      likes: 756
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI: New Threats and Defenses',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions to protect against them.',
      content: 'Full article content here...',
      author: 'Dr. Emily Watson',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2024-12-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      image: '/images/blog/ai-cybersecurity.jpg',
      featured: false,
      views: 9870,
      likes: 543
    },
    {
      id: '4',
      title: 'Building Scalable Cloud Infrastructure for AI Workloads',
      excerpt: 'Best practices for designing and implementing cloud infrastructure that can handle the demands of modern AI applications.',
      content: 'Full article content here...',
      author: 'Marcus Rodriguez',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2024-12-08',
      readTime: '15 min read',
      category: 'cloud-computing',
      tags: ['Cloud Computing', 'AI', 'Infrastructure', 'Scalability'],
      image: '/images/blog/cloud-ai-infrastructure.jpg',
      featured: false,
      views: 7650,
      likes: 432
    },
    {
      id: '5',
      title: 'Data-Driven Decision Making: From Analytics to Action',
      excerpt: 'How businesses can transform raw data into actionable insights that drive strategic decisions and competitive advantage.',
      content: 'Full article content here...',
      author: 'Kleber Santos',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2024-12-05',
      readTime: '7 min read',
      category: 'data-analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making', 'Strategy'],
      image: '/images/blog/data-driven-decisions.jpg',
      featured: false,
      views: 6540,
      likes: 398
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO 
        title="Blog - Zion Tech Group | AI, Technology & Innovation Insights"
        description="Stay updated with the latest insights on AI technology, quantum computing, cybersecurity, and digital transformation from Zion Tech Group experts."
        keywords="AI blog, technology insights, quantum computing, cybersecurity, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Insights, trends, and expert perspectives on the future of technology
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="likes">Most Liked</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-xl text-slate-300">Must-read insights from our experts</p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-slate-600" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                        {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-slate-300">{post.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-slate-300">Stay updated with our latest insights and analysis</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-slate-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-400 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <span className="text-xs">•</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-slate-300">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <Eye className="w-3 h-3" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-slate-300 mb-8">
                Get the latest insights on AI, technology, and innovation delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}