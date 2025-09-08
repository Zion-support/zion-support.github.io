import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Filter, Calendar, User, Tag, ArrowRight, ExternalLink,
  BookOpen, MessageCircle, Share2, Bookmark, Heart, Eye, Clock,
  TrendingUp, Star, Zap, Brain, Shield, Cloud, Database,
  Globe, Building, Rocket, Users, Target, Heart as HeartIcon
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogCategories = [
    { id: 'all', name: 'All Categories', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 6 },
    { id: 'security', name: 'Cybersecurity', count: 5 },
    { id: 'data', name: 'Data & Analytics', count: 4 },
    { id: 'industry', name: 'Industry Insights', count: 2 }
  ];

  const popularTags = [
    { id: 'all', name: 'All Tags', count: 25 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', count: 12 },
    { id: 'machine-learning', name: 'Machine Learning', count: 10 },
    { id: 'cloud-computing', name: 'Cloud Computing', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 7 },
    { id: 'data-science', name: 'Data Science', count: 6 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 5 },
    { id: 'iot', name: 'Internet of Things', count: 4 },
    { id: 'blockchain', name: 'Blockchain', count: 3 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Discover the key artificial intelligence trends that will shape enterprise technology in 2024 and beyond, from generative AI to autonomous systems.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['artificial-intelligence', 'enterprise', 'trends'],
      featured: true,
      views: 15420,
      likes: 892,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Building a Modern Cybersecurity Framework',
      excerpt: 'Learn how to implement a zero-trust security model that protects your organization from evolving cyber threats in today\'s digital landscape.',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'security',
      tags: ['cybersecurity', 'zero-trust', 'security-framework'],
      featured: true,
      views: 12850,
      likes: 756,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture: Best Practices for Scalable Applications',
      excerpt: 'Explore the principles and best practices for building cloud-native applications that scale efficiently and deliver exceptional user experiences.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['cloud-computing', 'architecture', 'scalability'],
      featured: true,
      views: 11200,
      likes: 634,
      image: '/api/placeholder/600/400'
    }
  ];

  const regularArticles = [
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'How AI and machine learning are revolutionizing healthcare delivery, from diagnosis to treatment planning and patient monitoring.',
      author: 'Dr. Emily Watson',
      authorRole: 'AI Research Lead',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'ai',
      tags: ['machine-learning', 'healthcare', 'patient-care'],
      featured: false,
      views: 9870,
      likes: 445,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Data Governance in the Age of AI: Best Practices and Compliance',
      excerpt: 'Essential strategies for managing data governance, privacy, and compliance when implementing AI solutions in regulated industries.',
      author: 'Lisa Thompson',
      authorRole: 'VP of Engineering',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      category: 'data',
      tags: ['data-governance', 'compliance', 'privacy'],
      featured: false,
      views: 8560,
      likes: 398,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing AI Closer to Your Data',
      excerpt: 'Understanding edge computing and how it enables real-time AI processing for IoT devices and distributed applications.',
      author: 'James Wilson',
      authorRole: 'VP of Product',
      publishDate: '2024-01-03',
      readTime: '5 min read',
      category: 'cloud',
      tags: ['edge-computing', 'iot', 'real-time-ai'],
      featured: false,
      views: 7430,
      likes: 321,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'The Rise of Quantum Computing: Implications for Cybersecurity',
      excerpt: 'Exploring how quantum computing will impact current encryption methods and what organizations need to prepare for.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-28',
      readTime: '9 min read',
      category: 'security',
      tags: ['quantum-computing', 'cryptography', 'future-tech'],
      featured: false,
      views: 6890,
      likes: 287,
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Building a Data-Driven Culture: From Strategy to Implementation',
      excerpt: 'Practical steps for transforming your organization into a data-driven enterprise that makes better decisions through analytics.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2023-12-25',
      readTime: '8 min read',
      category: 'data',
      tags: ['data-culture', 'analytics', 'decision-making'],
      featured: false,
      views: 6120,
      likes: 234,
      image: '/api/placeholder/400/250'
    },
    {
      id: 9,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'How to implement DevOps automation to accelerate software delivery, improve quality, and reduce operational overhead.',
      author: 'Lisa Thompson',
      authorRole: 'VP of Engineering',
      publishDate: '2023-12-22',
      readTime: '6 min read',
      category: 'cloud',
      tags: ['devops', 'automation', 'ci-cd'],
      featured: false,
      views: 5780,
      likes: 198,
      image: '/api/placeholder/400/250'
    },
    {
      id: 10,
      title: 'AI Ethics in Business: Balancing Innovation with Responsibility',
      excerpt: 'The importance of ethical AI development and how organizations can ensure responsible AI deployment.',
      author: 'Dr. Emily Watson',
      authorRole: 'AI Research Lead',
      publishDate: '2023-12-20',
      readTime: '7 min read',
      category: 'ai',
      tags: ['ai-ethics', 'responsible-ai', 'business-ethics'],
      featured: false,
      views: 5340,
      likes: 176,
      image: '/api/placeholder/400/250'
    },
    {
      id: 11,
      title: 'Financial Services Technology: Digital Transformation Trends',
      excerpt: 'Key technology trends reshaping the financial services industry, from blockchain to AI-powered risk management.',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      publishDate: '2023-12-18',
      readTime: '8 min read',
      category: 'industry',
      tags: ['fintech', 'digital-transformation', 'financial-services'],
      featured: false,
      views: 4890,
      likes: 145,
      image: '/api/placeholder/400/250'
    },
    {
      id: 12,
      title: 'Manufacturing 4.0: The Future of Smart Manufacturing',
      excerpt: 'How Industry 4.0 technologies are revolutionizing manufacturing through IoT, AI, and advanced automation.',
      author: 'James Wilson',
      authorRole: 'VP of Product',
      publishDate: '2023-12-15',
      readTime: '9 min read',
      category: 'industry',
      tags: ['manufacturing', 'industry-4-0', 'smart-factory'],
      featured: false,
      views: 4230,
      likes: 123,
      image: '/api/placeholder/400/250'
    }
  ];

  const allArticles = [...featuredArticles, ...regularArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || article.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'bg-purple-100 text-purple-800',
      cloud: 'bg-blue-100 text-blue-800',
      security: 'bg-red-100 text-red-800',
      data: 'bg-green-100 text-green-800',
      industry: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      ai: Brain,
      cloud: Cloud,
      security: Shield,
      data: Database,
      industry: Building
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in AI, cloud computing, cybersecurity, and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#featured"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Featured Articles
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {blogCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {popularTags.map((tag) => (
                    <option key={tag.id} value={tag.id} className="bg-slate-800 text-white">
                      {tag.name} ({tag.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center text-gray-400">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-blue-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {blogCategories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {popularTags.find(t => t.id === tag)?.name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {article.likes}
                        </span>
                      </div>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.filter(article => !article.featured).map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {blogCategories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {article.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {popularTags.find(t => t.id === tag)?.name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {article.likes}
                        </span>
                      </div>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Stay Updated</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Get the latest insights, articles, and updates delivered directly to your inbox. Never miss out on important technology trends and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Learn More?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore our comprehensive resources, case studies, and expert insights to accelerate your technology journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/documentation"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Case Studies
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}