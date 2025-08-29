import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter, 
  BookOpen, 
  TrendingUp, 
  Lightbulb, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  Building, 
  Globe, 
  Target, 
  Star,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { id: 'business', name: 'Business & Strategy', icon: Building, color: 'from-orange-500 to-red-500' },
    { id: 'innovation', name: 'Innovation & Trends', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  ];

  const blogPosts = [
    {
      id: 'ai-business-intelligence-2024',
      title: 'The Future of AI Business Intelligence: Trends to Watch in 2024',
      excerpt: 'Discover how AI is revolutionizing business intelligence and what trends will shape the industry in 2024 and beyond.',
      content: 'AI business intelligence is transforming how organizations make decisions, analyze data, and gain competitive advantages...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business Intelligence', 'Data Analytics', '2024 Trends'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 15420,
      likes: 892
    },
    {
      id: 'cloud-migration-best-practices',
      title: 'Cloud Migration Best Practices: A Comprehensive Guide',
      excerpt: 'Learn the essential strategies and best practices for successful cloud migration projects.',
      content: 'Cloud migration can be complex, but with the right approach, organizations can achieve significant benefits...',
      author: 'Cloud Solutions Team',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'cloud',
      tags: ['Cloud Migration', 'DevOps', 'Best Practices', 'Infrastructure'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 12850,
      likes: 756
    },
    {
      id: 'cybersecurity-threats-2024',
      title: 'Top Cybersecurity Threats to Watch in 2024',
      excerpt: 'Stay ahead of emerging cybersecurity threats with our comprehensive analysis of the security landscape.',
      content: 'As technology evolves, so do the threats that organizations face. Understanding these risks is crucial...',
      author: 'Security Team',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'security',
      tags: ['Cybersecurity', 'Threat Intelligence', 'Security Trends', '2024'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 9870,
      likes: 634
    },
    {
      id: 'digital-transformation-success',
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformation and the key lessons learned.',
      content: 'Digital transformation is not just about technology—it\'s about people, processes, and culture...',
      author: 'Digital Strategy Team',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'business',
      tags: ['Digital Transformation', 'Success Stories', 'Change Management', 'Strategy'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 11230,
      likes: 678
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing: The Next Frontier in Technology',
      excerpt: 'Explore the potential of quantum computing and how it will revolutionize various industries.',
      content: 'Quantum computing represents a paradigm shift in computational power and capabilities...',
      author: 'Research Team',
      date: '2024-01-03',
      readTime: '14 min read',
      category: 'innovation',
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Future Tech'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 8760,
      likes: 445
    },
    {
      id: 'ai-ethics-business',
      title: 'AI Ethics in Business: Balancing Innovation with Responsibility',
      excerpt: 'How organizations can implement AI responsibly while maintaining competitive advantages.',
      content: 'As AI becomes more prevalent in business, ethical considerations become increasingly important...',
      author: 'AI Ethics Team',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'ai',
      tags: ['AI Ethics', 'Responsible AI', 'Business Ethics', 'AI Governance'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 7650,
      likes: 523
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      selectedCategory === 'all' || post.category === selectedCategory
    )
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'popular') {
        return b.views - a.views;
      } else if (sortBy === 'likes') {
        return b.likes - a.likes;
      }
      return 0;
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
    <>
      <SEO 
        title="Blog & Insights | Zion Tech Group" 
        description="Stay updated with the latest insights, trends, and thought leadership content from Zion Tech Group. Explore AI, cloud computing, cybersecurity, and digital transformation topics." 
        keywords="blog, insights, AI trends, cloud computing, cybersecurity, digital transformation, technology blog" 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Blog & Insights
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Stay ahead of the curve with expert insights, industry trends, and thought leadership 
                content from our technology experts. Discover the latest in AI, cloud computing, 
                cybersecurity, and digital transformation.
              </p>
              
              {/* Search and Filter Bar */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="likes">Most Liked</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-slate-600" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === post.category)?.color} text-white`}>
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="text-slate-400 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Navigation */}
        <section className="py-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-slate-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-slate-600" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === post.category)?.color} text-white`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-300 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes.toLocaleString()}
                          </span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with Our Latest Insights
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Get the latest technology insights, industry trends, and expert analysis 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-slate-400 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
