
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Globe,
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  BookOpen,
  Eye,
  Heart,
  Share2,
  Mail
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: Globe, count: 45 },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield, count: 8 },
    { id: 'cloud', label: 'Cloud Computing', icon: Cloud, count: 10 },
    { id: 'digital-transformation', label: 'Digital Transformation', icon: Rocket, count: 7 },
    { id: 'emerging-tech', label: 'Emerging Tech', icon: Zap, count: 5 },
    { id: 'company', label: 'Company Updates', icon: Award, count: 3 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 and Beyond',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what organizations need to prepare for in the coming years.',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['AI', 'Enterprise', 'Future Tech', 'Machine Learning'],
      featured: true,
      views: 2847,
      likes: 156,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Zero Trust Security: Why Traditional Security Models Are Obsolete',
      excerpt: 'Explore the paradigm shift in cybersecurity and how Zero Trust architecture is becoming the new standard for enterprise security.',
      author: 'Michael Rodriguez',
      authorRole: 'Cybersecurity Expert',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Network Security'],
      featured: true,
      views: 1923,
      likes: 89,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Building for Scale and Resilience',
      excerpt: 'Learn the principles of cloud-native design and how it enables organizations to build more scalable and resilient applications.',
      author: 'Jennifer Park',
      authorRole: 'Cloud Solutions Architect',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'Architecture', 'Scalability', 'Microservices'],
      featured: true,
      views: 1654,
      likes: 72,
      image: '/api/placeholder/600/400'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand what\'s truly achievable today.',
      author: 'Dr. Alex Thompson',
      authorRole: 'Quantum Computing Researcher',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'emerging-tech',
      tags: ['Quantum Computing', 'Emerging Tech', 'Research', 'Computing'],
      views: 1247,
      likes: 65,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformations and the key factors that contributed to their success.',
      author: 'Lisa Chang',
      authorRole: 'Digital Strategy Consultant',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'digital-transformation',
      tags: ['Digital Transformation', 'Case Studies', 'Strategy', 'Success Stories'],
      views: 987,
      likes: 43,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'How edge computing is revolutionizing data processing and enabling real-time applications across industries.',
      author: 'David Kim',
      authorRole: 'Edge Computing Specialist',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'emerging-tech',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Data'],
      views: 756,
      likes: 38,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'DevOps Best Practices: Accelerating Software Delivery',
      excerpt: 'Essential DevOps practices that help teams deliver software faster while maintaining quality and reliability.',
      author: 'Rachel Green',
      authorRole: 'DevOps Engineer',
      authorAvatar: '/api/placeholder/40/40',
      publishDate: '2025-01-01',
      readTime: '8 min read',
      category: 'digital-transformation',
      tags: ['DevOps', 'Software Delivery', 'CI/CD', 'Automation'],
      views: 654,
      likes: 29,
      image: '/api/placeholder/400/250'
    }
  ];

<<<<<<< HEAD
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
=======
  const allPosts = [...featuredPosts, ...recentPosts];
  const filteredPosts = activeCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  const searchFilteredPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-zion-cyan/20 rounded-2xl mb-6"
          >
            <BookOpen className="w-10 h-10 text-zion-cyan" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Zion Tech Blog
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Insights, trends, and expert perspectives on the latest in technology, 
            AI, cybersecurity, and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/60" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-zion-slate-dark'
                      : 'bg-zion-slate/30 text-zion-cyan/80 hover:bg-zion-slate/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Articles</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Deep insights and expert analysis on the most important topics in technology today.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <div className="text-zion-cyan/60 text-center">
                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                    <span className="text-zion-cyan/60 text-xs">•</span>
                    <span className="text-zion-cyan/60 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-cyan/80 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-zion-cyan" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-zion-cyan/60 text-xs">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right text-xs text-zion-cyan/60">
                      <p>{formatDate(post.publishDate)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-zion-cyan/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                    <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest Articles</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Stay up-to-date with our latest insights and industry analysis.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {searchFilteredPosts.slice(3).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-square bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <div className="text-zion-cyan/60 text-center">
                      <BookOpen className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Article</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                      <span className="text-zion-cyan/60 text-xs">•</span>
                      <span className="text-zion-cyan/60 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-cyan/80 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-zion-cyan" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">{post.author}</p>
                          <p className="text-zion-cyan/60 text-xs">{formatDate(post.publishDate)}</p>
                        </div>
                      </div>
                      <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-zion-cyan" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-zion-cyan/80 text-lg mb-6 max-w-2xl mx-auto">
              Get the latest technology insights, industry trends, and expert analysis 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl text-white placeholder-zion-cyan/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-zion-cyan/60 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Popular Topics</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Explore our most-read content categories and discover insights that matter to you.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 text-center cursor-pointer group"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{category.label}</h3>
                <p className="text-zion-cyan/60 text-sm mb-4">{category.count} articles</p>
                
                <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto">
                  Browse
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
