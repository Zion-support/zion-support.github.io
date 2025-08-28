import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Network,
  Eye,
  Heart,
  MessageCircle,
  Filter,
  Grid,
  List
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 45 },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 12 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 15 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 10 },
    { id: 'emerging', name: 'Emerging Tech', icon: Zap, count: 8 },
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 6 },
    { id: 'business', name: 'Business Insights', icon: TrendingUp, count: 14 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence in 2024',
      excerpt: 'Discover how artificial intelligence is revolutionizing business intelligence and decision-making processes across industries.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business Intelligence', 'Machine Learning'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive analysis of quantum computing\'s current state and its practical applications in business.',
      author: 'AI Research Team',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: 2156,
      likes: 134,
      comments: 18
    },
    {
      id: 3,
      title: 'Zero Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Learn why zero trust architecture is becoming essential for modern enterprise security and how to implement it.',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'security',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: 1892,
      likes: 98,
      comments: 15
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Micro SaaS: The Future of Niche Software Solutions',
      excerpt: 'Exploring the rise of micro SaaS platforms and how they\'re changing the software industry landscape.',
      author: 'Product Team',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'business',
      tags: ['Micro SaaS', 'Software', 'Business Model'],
      image: '/api/placeholder/400/250',
      views: 1247,
      likes: 67,
      comments: 12
    },
    {
      id: 5,
      title: 'Edge Computing and IoT: Powering the Smart City Revolution',
      excerpt: 'How edge computing and IoT technologies are transforming urban infrastructure and creating smarter cities.',
      author: 'IoT Team',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'iot',
      tags: ['IoT', 'Edge Computing', 'Smart Cities'],
      image: '/api/placeholder/400/250',
      views: 987,
      likes: 45,
      comments: 8
    },
    {
      id: 6,
      title: 'Cloud FinOps: Optimizing Cloud Costs in 2024',
      excerpt: 'Best practices for implementing FinOps to control and optimize cloud spending in enterprise environments.',
      author: 'Cloud Team',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud', 'FinOps', 'Cost Optimization'],
      image: '/api/placeholder/400/250',
      views: 1156,
      likes: 78,
      comments: 14
    },
    {
      id: 7,
      title: 'AI in Healthcare: Transforming Patient Care and Diagnosis',
      excerpt: 'Real-world applications of AI in healthcare and how it\'s improving patient outcomes and medical processes.',
      author: 'Healthcare AI Team',
      date: '2023-12-28',
      readTime: '11 min read',
      category: 'ai',
      tags: ['AI', 'Healthcare', 'Medical Technology'],
      image: '/api/placeholder/400/250',
      views: 2034,
      likes: 123,
      comments: 19
    },
    {
      id: 8,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Exploring practical blockchain applications in supply chain, finance, and enterprise operations.',
      author: 'Blockchain Team',
      date: '2023-12-25',
      readTime: '8 min read',
      category: 'emerging',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain'],
      image: '/api/placeholder/400/250',
      views: 876,
      likes: 56,
      comments: 11
    },
    {
      id: 9,
      title: 'DevOps Culture: Building High-Performance Engineering Teams',
      excerpt: 'How to foster a successful DevOps culture and improve team collaboration and delivery speed.',
      author: 'DevOps Team',
      date: '2023-12-22',
      readTime: '9 min read',
      category: 'cloud',
      tags: ['DevOps', 'Culture', 'Engineering'],
      image: '/api/placeholder/400/250',
      views: 1345,
      likes: 89,
      comments: 16
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' ||
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group's expert team."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Insights, analysis, and expert perspectives on the latest developments in AI, quantum computing, 
              cybersecurity, and emerging technologies that are shaping the future of business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and insightful articles on cutting-edge technology trends and innovations.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-300">Featured Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                      {getCategoryName(post.category)}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300">
                Stay updated with our newest insights and analysis
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2"
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-700/50 text-gray-400 hover:bg-slate-600/50'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-700/50 text-gray-400 hover:bg-slate-600/50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredPosts.slice(3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'list' ? (
                    <>
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-12 h-12 text-cyan-400" />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            {getCategoryName(post.category)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-cyan-400" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                            {getCategoryName(post.category)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
