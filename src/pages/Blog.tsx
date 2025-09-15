import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import { SEO } from '../components/SEO';

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
  { name: 'Business Intelligence', icon: BarChart3, count: 12, color: 'from-purple-500 to-indigo-500' },
  { name: 'Micro SaaS', icon: ShoppingCart, count: 9, color: 'from-orange-500 to-yellow-500' },
  { name: 'Industry Insights', icon: TrendingUp, count: 21, color: 'from-teal-500 to-cyan-500' },
  { name: 'Case Studies', icon: BookOpen, count: 16, color: 'from-pink-500 to-rose-500' },
  { name: 'Technology Trends', icon: Rocket, count: 19, color: 'from-indigo-500 to-purple-500' }
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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

  const categories = [
    { id: 'all', name: 'All Posts', icon: TrendingUp },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Trends', '2024'],
      image: '/blog/ai-business-trends-2024.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn the essential strategies for creating robust, scalable cloud infrastructure that grows with your business.',
      category: 'cloud',
      author: 'DevOps Team',
      date: '2024-01-12',
      readTime: '7 min read',
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Scalability'],
      image: '/blog/cloud-infrastructure-best-practices.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Explore how AI is both creating new security challenges and providing innovative solutions to protect your business.',
      category: 'security',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Solutions'],
      image: '/blog/ai-cybersecurity-threats.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS: The Future of Business Software',
      excerpt: 'How small, focused software solutions are revolutionizing the way businesses operate and scale.',
      category: 'innovation',
      author: 'Product Team',
      date: '2024-01-08',
      readTime: '4 min read',
      tags: ['Micro SaaS', 'Business Software', 'Innovation'],
      image: '/blog/micro-saas-future.jpg'
    },
    {
      id: 5,
      title: 'Quantum Computing: What Businesses Need to Know',
      excerpt: 'A practical guide to understanding quantum computing and its potential impact on business operations.',
      category: 'innovation',
      author: 'Research Team',
      date: '2024-01-05',
      readTime: '8 min read',
      tags: ['Quantum Computing', 'Technology', 'Business Impact'],
      image: '/blog/quantum-computing-business.jpg'
    },
    {
      id: 6,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Practical tips and tools for automating your development and deployment processes.',
      category: 'development',
      author: 'DevOps Team',
      date: '2024-01-03',
      readTime: '6 min read',
      tags: ['DevOps', 'Automation', 'CI/CD', 'Development'],
      image: '/blog/devops-automation-pipeline.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group."
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
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on AI, technology, and business innovation. 
              Stay ahead of the curve with our latest articles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-white border-cyan-400'
                      : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-400/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="text-gray-400 text-sm">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📖</div>
                      <div className="text-sm">Blog Post Image</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                      {/* Post Image */}
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-xl border-b border-slate-600/50 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-3xl mb-2">📄</div>
                          <div className="text-sm">Post Image</div>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded">
                            {post.category.toUpperCase()}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and business innovation 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
