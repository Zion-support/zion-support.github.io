
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'business', name: 'Business & Strategy' },
    { id: 'technology', name: 'Emerging Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Autonomous Business Systems in 2025',
      excerpt: 'Explore how AI autonomous business systems are revolutionizing enterprise operations and what to expect in the coming year.',
      content: 'Artificial Intelligence has evolved from simple automation to complex autonomous systems that can make business decisions, optimize processes, and drive innovation without human intervention. In 2025, we\'re seeing a paradigm shift where AI systems are not just tools but active participants in business strategy and execution...',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['AI', 'Autonomous Systems', 'Business Intelligence', '2025 Trends'],
      image: '/images/blog/ai-autonomous-business-2025.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Neural Networks: Breaking the Classical Computing Barrier',
      excerpt: 'Discover how quantum neural networks are solving problems that classical computers cannot handle.',
      content: 'Quantum computing represents the next frontier in computational power. When combined with neural networks, it creates a paradigm that can process information in ways that classical computers simply cannot match. Our research team has been working on quantum neural network architectures that leverage quantum superposition and entanglement...',
      category: 'quantum',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      tags: ['Quantum Computing', 'Neural Networks', 'Research', 'Innovation'],
      image: '/images/blog/quantum-neural-networks.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'SOC2 Compliance Automation: Streamlining Security Audits',
      excerpt: 'Learn how automated SOC2 compliance can reduce audit time and improve security posture.',
      content: 'Security compliance is a critical concern for any organization handling sensitive data. SOC2 compliance, in particular, requires rigorous controls and regular audits that can be time-consuming and resource-intensive. Our automated SOC2 compliance platform streamlines this process...',
      category: 'cybersecurity',
      author: 'Lisa Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      tags: ['SOC2', 'Compliance', 'Automation', 'Security'],
      image: '/images/blog/soc2-compliance-automation.jpg',
      featured: false
    },
    {
      id: 4,
      title: '5G Enterprise Solutions: Transforming Business Connectivity',
      excerpt: 'How 5G technology is enabling new business models and operational efficiencies.',
      content: 'The rollout of 5G networks is not just about faster internet speeds—it\'s about enabling entirely new business models and operational paradigms. Enterprise 5G solutions are creating opportunities for real-time data processing, IoT integration, and edge computing that were previously impossible...',
      category: 'technology',
      author: 'James Wilson',
      date: '2025-01-08',
      readTime: '7 min read',
      tags: ['5G', 'Enterprise', 'IoT', 'Edge Computing'],
      image: '/images/blog/5g-enterprise-solutions.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered IT Asset Management: Beyond Traditional Approaches',
      excerpt: 'Revolutionizing IT asset management with intelligent automation and predictive analytics.',
      content: 'Traditional IT asset management relies heavily on manual processes and reactive approaches. AI-powered solutions are changing this landscape by providing predictive analytics, automated discovery, and intelligent optimization. Our platform uses machine learning algorithms to...',
      category: 'ai',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '9 min read',
      tags: ['IT Management', 'AI', 'Asset Management', 'Automation'],
      image: '/images/blog/ai-it-asset-management.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Micro-SaaS: Democratizing Enterprise Software',
      excerpt: 'How micro-SaaS solutions are making enterprise-grade software accessible to businesses of all sizes.',
      content: 'The software-as-a-service landscape is evolving rapidly, with a new category of solutions emerging: micro-SaaS. These focused, specialized applications are democratizing enterprise software by providing powerful functionality at accessible price points...',
      category: 'business',
      author: 'Maria Garcia',
      date: '2025-01-03',
      readTime: '5 min read',
      tags: ['SaaS', 'Enterprise', 'Software', 'Innovation'],
      image: '/images/blog/micro-saas-rise.jpg',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'all' || post.category === activeCategory
  ).filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on AI, quantum computing, cybersecurity, and emerging technologies.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, and insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white/10 border border-white/20 rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <TagIcon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                      <span className="text-purple-400 font-medium">Featured Post</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                      {categories.find(c => c.id === featuredPost.category)?.name}
                    </span>
                    <span className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                      <span>Read More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-200"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <TagIcon className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    <span className="text-purple-400 text-sm">Blog Post</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="flex items-center space-x-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <UserIcon className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <button className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <span className="text-sm">Read More</span>
                      <ArrowRightIcon className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest articles, research updates, and technology insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;

