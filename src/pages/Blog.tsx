import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  BookOpen,
  Rocket,
  ShoppingCart,
  BarChart3
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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoriesList = [
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
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the cutting-edge AI technologies that are reshaping enterprise operations and discover what lies ahead in the rapidly evolving landscape of artificial intelligence.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      views: '2.4k',
      likes: '156',
      featured: true,
      tags: ['AI', 'Enterprise', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of Quantum Computing: Preparing for the Future',
      excerpt: 'As quantum computing advances, traditional encryption methods face unprecedented challenges. Learn how organizations can prepare for the quantum threat landscape.',
      author: 'Michael Rodriguez',
      date: '2024-12-12',
      category: 'Cybersecurity',
      readTime: '12 min read',
      views: '1.8k',
      likes: '89',
      featured: false,
      tags: ['Cybersecurity', 'Quantum Computing', 'Encryption']
    },
    {
      id: 3,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world case studies showcasing successful digital transformation initiatives and the key strategies that drove their success.',
      author: 'Lisa Thompson',
      date: '2024-12-10',
      category: 'Digital Transformation',
      readTime: '10 min read',
      views: '1.5k',
      likes: '72',
      featured: false,
      tags: ['Digital Transformation', 'Case Studies', 'Success Stories']
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Infrastructure: Best Practices for Growth',
      excerpt: 'Essential strategies and best practices for designing cloud infrastructure that can scale with your business growth and evolving needs.',
      author: 'David Kim',
      date: '2024-12-08',
      category: 'Cloud Computing',
      readTime: '15 min read',
      views: '1.2k',
      likes: '64',
      featured: false,
      tags: ['Cloud Computing', 'Infrastructure', 'Scalability']
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Understanding how edge computing is revolutionizing data processing and enabling real-time decision making in IoT and mobile applications.',
      author: 'Alex Johnson',
      date: '2024-12-05',
      category: 'Edge Computing',
      readTime: '9 min read',
      views: '980',
      likes: '45',
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Real-time Processing']
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green Computing for a Better Future',
      excerpt: 'Exploring how technology companies can reduce their environmental impact through sustainable computing practices and green IT initiatives.',
      author: 'Emma Wilson',
      date: '2024-12-03',
      category: 'Sustainability',
      readTime: '7 min read',
      views: '750',
      likes: '38',
      featured: false,
      tags: ['Sustainability', 'Green Computing', 'Environmental Impact']
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Digital Transformation',
    'Cloud Computing',
    'Edge Computing',
    'Sustainability'
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.name === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.name === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {' '}Articles
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Deep dive into technology trends, industry insights, and expert perspectives 
              on the future of digital transformation and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categoriesList.map((category) => (
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
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50"
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
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-16 h-16 text-blue-400" />
                    </div>
                    <p className="text-gray-300">Featured Article</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.name === selectedCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover insights, trends, and expert analysis from our technology experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore trending topics and discover content that matters to you.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-gray-300 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, articles, 
              and technology updates directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contribute to Our Blog
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have insights to share? We welcome guest contributions from industry experts 
              and thought leaders in technology and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Submit Article
              </a>
              <a
                href="/careers"
                className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;