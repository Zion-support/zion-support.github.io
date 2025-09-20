import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { 
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain
} from "lucide-react";

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
  icon: any;
  count: number;
  color: string;
}

const categories: Category[] = [
  { name: 'AI & Machine Learning', icon: Brain, count: 24, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cloud & DevOps', icon: Cloud, count: 18, color: 'from-green-500 to-emerald-500' },
  { name: 'Cybersecurity', icon: Shield, count: 15, color: 'from-red-500 to-pink-500' },
  { name: 'Business Intelligence', icon: TrendingUp, count: 12, color: 'from-purple-500 to-indigo-500' },
  { name: 'Micro SaaS', icon: Code, count: 9, color: 'from-orange-500 to-yellow-500' },
  { name: 'Industry Insights', icon: TrendingUp, count: 21, color: 'from-teal-500 to-cyan-500' },
  { name: 'Case Studies', icon: Lightbulb, count: 16, color: 'from-pink-500 to-rose-500' },
  { name: 'Technology Trends', icon: Code, count: 19, color: 'from-indigo-500 to-purple-500' }
];

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI Autonomous Research: The Future of Knowledge Discovery',
    excerpt: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
    content: 'Full article content here...',
    author: 'Dr. Emily Watson',
    authorAvatar: '/avatars/emily-watson.jpg',
    publishDate: '2025-01-20',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Research', 'Autonomous AI', 'Knowledge Discovery', 'Business Intelligence'],
    image: '/blog/ai-autonomous-research.jpg',
    featured: true,
    views: 18250,
    likes: 945
  },
  {
    id: '2',
    title: 'Revolutionizing Supply Chains with AI-Powered Optimization',
    excerpt: 'Learn how AI Supply Chain Optimization is helping businesses predict demand, optimize inventory, and reduce costs with unprecedented accuracy.',
    content: 'Full article content here...',
    author: 'Marcus Rodriguez',
    authorAvatar: '/avatars/marcus-rodriguez.jpg',
    publishDate: '2025-01-18',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Supply Chain', 'Inventory Optimization', 'Demand Forecasting', 'Cost Reduction'],
    image: '/blog/ai-supply-chain-optimization.jpg',
    featured: true,
    views: 16580,
    likes: 823
  },
  {
    id: '3',
    title: 'AI Content Marketing Suite: The Complete Guide to Automated Content Creation',
    excerpt: 'Explore how AI is revolutionizing content marketing with automated creation, optimization, and distribution for maximum engagement and ROI.',
    content: 'Full article content here...',
    author: 'Lisa Thompson',
    authorAvatar: '/avatars/lisa-thompson.jpg',
    publishDate: '2025-01-16',
    readTime: '11 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Content', 'Content Marketing', 'Automation', 'ROI Optimization'],
    image: '/blog/ai-content-marketing-suite.jpg',
    featured: true,
    views: 14230,
    likes: 756
  },
  {
    id: '4',
    title: 'The Future of AI-Powered Business Intelligence in 2025',
    excerpt: 'Discover how artificial intelligence is revolutionizing business intelligence and what trends to expect in the coming year.',
    content: 'Full article content here...',
    author: 'Dr. Sarah Chen',
    authorAvatar: '/avatars/sarah-chen.jpg',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business Intelligence', '2025 Trends', 'Machine Learning'],
    image: '/blog/ai-business-intelligence-2025.jpg',
    featured: false,
    views: 15420,
    likes: 892
  },
  {
    id: '5',
    title: 'Implementing Zero Trust Security Architecture: A Complete Guide',
    excerpt: 'Learn the essential steps to implement a zero trust security model that protects your organization from modern cyber threats.',
    content: 'Full article content here...',
    author: 'David Kim',
    authorAvatar: '/avatars/david-kim.jpg',
    publishDate: '2025-01-12',
    readTime: '12 min read',
    category: 'Cybersecurity',
    tags: ['Zero Trust', 'Cybersecurity', 'Network Security', 'Best Practices'],
    image: '/blog/zero-trust-security-guide.jpg',
    featured: false,
    views: 12850,
    likes: 756
  },
  {
    id: '6',
    title: 'Building Scalable Microservices with Kubernetes and Docker',
    excerpt: 'A comprehensive guide to designing and deploying microservices architecture using modern containerization technologies.',
    content: 'Full article content here...',
    author: 'Marcus Rodriguez',
    authorAvatar: '/avatars/marcus-rodriguez.jpg',
    publishDate: '2025-01-10',
    readTime: '15 min read',
    category: 'Cloud & DevOps',
    tags: ['Microservices', 'Kubernetes', 'Docker', 'DevOps'],
    image: '/blog/microservices-kubernetes-docker.jpg',
    featured: false,
    views: 9870,
    likes: 543
  },
  {
    id: '7',
    title: 'How AI is Transforming Customer Experience Analytics',
    excerpt: 'Explore the latest AI technologies that are revolutionizing how businesses understand and improve customer experiences.',
    content: 'Full article content here...',
    author: 'Dr. Emily Watson',
    authorAvatar: '/avatars/emily-watson.jpg',
    publishDate: '2025-01-08',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Customer Experience', 'Analytics', 'Machine Learning'],
    image: '/blog/ai-customer-experience-analytics.jpg',
    featured: false,
    views: 11230,
    likes: 678
  },
  {
    id: '8',
    title: 'The Rise of Micro SaaS: Building Profitable Niche Applications',
    excerpt: 'Discover how entrepreneurs are building successful micro SaaS businesses by solving specific problems in niche markets.',
    content: 'Full article content here...',
    author: 'Lisa Thompson',
    authorAvatar: '/avatars/lisa-thompson.jpg',
    publishDate: '2025-01-05',
    readTime: '11 min read',
    category: 'Micro SaaS',
    tags: ['Micro SaaS', 'Entrepreneurship', 'Niche Markets', 'Business Strategy'],
    image: '/blog/micro-saas-niche-applications.jpg',
    featured: false,
    views: 8760,
    likes: 432
  },
  {
    id: '9',
    title: 'Cloud FinOps: Optimizing Cloud Costs in Enterprise Environments',
    excerpt: 'Learn proven strategies for managing and optimizing cloud costs across large-scale enterprise deployments.',
    content: 'Full article content here...',
    author: 'James Wilson',
    authorAvatar: '/avatars/james-wilson.jpg',
    publishDate: '2025-01-03',
    readTime: '13 min read',
    category: 'Cloud & DevOps',
    tags: ['FinOps', 'Cloud Cost Optimization', 'Enterprise', 'AWS', 'Azure'],
    image: '/blog/cloud-finops-enterprise.jpg',
    featured: false,
    views: 7650,
    likes: 398
  },
  {
    id: '10',
    title: 'AI Ethics in Business: Balancing Innovation with Responsibility',
    excerpt: 'An in-depth look at the ethical considerations businesses must address when implementing AI solutions.',
    content: 'Full article content here...',
    author: 'Dr. Emily Watson',
    authorAvatar: '/avatars/emily-watson.jpg',
    publishDate: '2024-12-30',
    readTime: '14 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Ethics', 'Responsible AI', 'Business Ethics', 'Machine Learning'],
    image: '/blog/ai-ethics-business.jpg',
    featured: false,
    views: 13450,
    likes: 789
  },
  {
    id: '11',
    title: 'Building a Successful Data Governance Strategy for AI Projects',
    excerpt: 'Essential guidelines for implementing effective data governance in AI and machine learning initiatives.',
    content: 'Full article content here...',
    author: 'Dr. Sarah Chen',
    authorAvatar: '/avatars/sarah-chen.jpg',
    publishDate: '2024-12-28',
    readTime: '16 min read',
    category: 'Business Intelligence',
    tags: ['Data Governance', 'AI', 'Data Management', 'Compliance'],
    image: '/blog/data-governance-ai-projects.jpg',
    featured: false,
    views: 9870,
    likes: 567
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : TrendingUp;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group's expert team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the latest trends, insights, and innovations in AI, technology, and business transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Dive deep into specific areas of technology and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`p-4 rounded-xl transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              <TrendingUp className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">All Posts</span>
            </button>
            
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs text-gray-400 block mt-1">{category.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our most popular and impactful content
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => {
                const IconComponent = getCategoryIcon(post.category);
                const categoryColor = getCategoryColor(post.category);
                
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-white/50" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>{post.views.toLocaleString()}</span>
                          <span>•</span>
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-gray-300 text-sm">{post.author}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-300">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-gray-300'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-1">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-gray-300'
                }`}
              >
                <div className="w-4 h-4 flex flex-col space-y-1">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </motion.div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              const categoryColor = getCategoryColor(post.category);
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    <>
                      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-16 h-16 text-white/50" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(post.publishDate)}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>{post.views.toLocaleString()}</span>
                            <span>•</span>
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-gray-300 text-sm">{post.author}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-white/50" />
                        </div>
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(post.publishDate)}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                            <span>{post.views.toLocaleString()} views</span>
                            <span>{post.likes} likes</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-gray-300 text-sm">{post.author}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or browse different categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}