import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Atom,
  Rocket,
  Code,
  TrendingUp,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Building2,
  Network,
  Briefcase,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Cpu,
  Database,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Handshake,
  ChevronDown,
  ChevronUp,
  Tag,
  ExternalLink
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('latest');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 7 }
  ];

  const sortOptions = [
    { id: 'latest', name: 'Latest', icon: Calendar },
    { id: 'popular', name: 'Most Popular', icon: TrendingUp },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'featured', name: 'Featured', icon: Star }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore the transformative trends that will shape AI adoption in enterprise organizations this year, from autonomous operations to quantum-enhanced machine learning.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate, and 2025 promises to be a watershed year for enterprise AI adoption...',
      author: {
        name: 'Dr. Sarah Chen',
        title: 'Chief AI Officer',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-15',
      readTime: '8 min read',
      views: 15420,
      likes: 342,
      category: 'ai-ml',
      tags: ['AI', 'Enterprise', '2025', 'Predictions', 'Machine Learning'],
      featured: true,
      image: '/api/placeholder/400/250',
      slug: 'future-ai-enterprise-2025'
    },
    {
      id: '2',
      title: 'Quantum Computing: Breaking Through Classical Limits',
      excerpt: 'Discover how quantum computing is solving previously intractable problems and what this means for industries from finance to pharmaceuticals.',
      content: 'Quantum computing represents one of the most significant technological breakthroughs of our time...',
      author: {
        name: 'Dr. James Wilson',
        title: 'Quantum Research Lead',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-12',
      readTime: '12 min read',
      views: 8920,
      likes: 156,
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Research'],
      featured: true,
      image: '/api/placeholder/400/250',
      slug: 'quantum-computing-breaking-limits'
    },
    {
      id: '3',
      title: 'AI-Powered Cybersecurity: The New Defense Paradigm',
      excerpt: 'Learn how artificial intelligence is transforming cybersecurity from reactive to proactive, enabling real-time threat detection and automated response.',
      content: 'As cyber threats become more sophisticated and frequent, traditional security approaches are no longer sufficient...',
      author: {
        name: 'Lisa Thompson',
        title: 'Security Architect',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-10',
      readTime: '10 min read',
      views: 12340,
      likes: 289,
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security'],
      featured: false,
      image: '/api/placeholder/400/250',
      slug: 'ai-powered-cybersecurity-defense'
    },
    {
      id: '4',
      title: 'Cloud-Native Architecture: Building for Scale and Resilience',
      excerpt: 'Explore the principles of cloud-native design and how they enable organizations to build scalable, resilient applications for the modern digital landscape.',
      content: 'Cloud-native architecture represents a fundamental shift in how we design, build, and deploy applications...',
      author: {
        name: 'David Kim',
        title: 'Cloud Solutions Architect',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-08',
      readTime: '15 min read',
      views: 7650,
      likes: 134,
      category: 'cloud',
      tags: ['Cloud', 'Architecture', 'Scalability', 'DevOps'],
      featured: false,
      image: '/api/placeholder/400/250',
      slug: 'cloud-native-architecture-scale-resilience'
    },
    {
      id: '5',
      title: 'Machine Learning in Financial Services: Risk and Opportunity',
      excerpt: 'Examine how machine learning is transforming financial services, from algorithmic trading to risk assessment and fraud detection.',
      content: 'The financial services industry is undergoing a digital transformation driven by machine learning and artificial intelligence...',
      author: {
        name: 'Dr. Robert Johnson',
        title: 'AI Solutions Director',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-05',
      readTime: '11 min read',
      views: 9870,
      likes: 201,
      category: 'ai-ml',
      tags: ['Machine Learning', 'Finance', 'Risk Management', 'AI'],
      featured: false,
      image: '/api/placeholder/400/250',
      slug: 'machine-learning-financial-services'
    },
    {
      id: '6',
      title: 'The Rise of Edge Computing: Processing at the Source',
      excerpt: 'Discover how edge computing is revolutionizing data processing by bringing computation closer to data sources, enabling real-time insights and reduced latency.',
      content: 'Edge computing represents a paradigm shift in how we process and analyze data...',
      author: {
        name: 'Emily Davis',
        title: 'Edge Computing Specialist',
        avatar: '/api/placeholder/60/60'
      },
      publishDate: '2025-01-03',
      readTime: '9 min read',
      views: 6540,
      likes: 98,
      category: 'cloud',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Infrastructure'],
      featured: false,
      image: '/api/placeholder/400/250',
      slug: 'rise-edge-computing-processing-source'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false;
    if (searchQuery) {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
             post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (selectedSort) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Insights & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Thought Leadership</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on AI, quantum computing, 
                cybersecurity, and the latest technology trends shaping our future.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Articles</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title, content, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-xl text-gray-300">Don't miss these must-read insights</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <article className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400">Article Image</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          Featured
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span>{formatNumber(post.views)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />
                            <span>{formatNumber(post.likes)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{post.author.name}</p>
                            <p className="text-xs text-gray-400">{post.author.title}</p>
                          </div>
                        </div>
                        
                        <a
                          href={`/blog/${post.slug}`}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-300">Explore our complete collection of insights and analysis</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <article className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Article Image</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="space-y-2 mb-4 text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3" />
                        <span>{formatNumber(post.views)} views</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-cyan-400" />
                        </div>
                        <span className="text-xs text-gray-400">{post.author.name}</span>
                      </div>
                      
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No articles match your current filters. Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights delivered to your inbox. 
              Join thousands of technology leaders staying ahead of the curve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </a>
              <a
                href="mailto:blog@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Blog Team
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">blog@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;