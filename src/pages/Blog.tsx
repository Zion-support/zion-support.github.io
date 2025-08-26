
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud Computing', count: 5 },
    { id: 'quantum', name: 'Quantum Technology', count: 4 },
    { id: 'business', name: 'Business & Strategy', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "ai",
      readTime: "8 min read",
      image: "/images/blog/ai-enterprise-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Zero-Trust Security: Building Unbreachable Digital Fortresses",
      excerpt: "Learn about the latest zero-trust security strategies and how they're revolutionizing cybersecurity.",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      category: "cybersecurity",
      readTime: "6 min read",
      image: "/images/blog/zero-trust-security.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Computing Breakthroughs: What's Next for Business?",
      excerpt: "Explore the latest developments in quantum computing and their potential business applications.",
      author: "Dr. Elena Petrov",
      date: "2024-01-10",
      category: "quantum",
      readTime: "10 min read",
      image: "/images/blog/quantum-breakthroughs.jpg",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Essential strategies for successful cloud migration with minimal disruption to your business.",
      author: "Alex Thompson",
      date: "2024-01-08",
      category: "cloud",
      readTime: "7 min read",
      image: "/images/blog/cloud-migration-guide.jpg"
    },
    {
      id: 5,
      title: "Digital Transformation: Lessons from Industry Leaders",
      excerpt: "Key insights from successful digital transformation initiatives across various industries.",
      author: "Priya Patel",
      date: "2024-01-05",
      category: "business",
      readTime: "5 min read",
      image: "/images/blog/digital-transformation.jpg"
    },
    {
      id: 6,
      title: "AI-Powered Threat Detection: The Next Generation of Security",
      excerpt: "How machine learning is revolutionizing cybersecurity threat detection and response.",
      author: "Marcus Rodriguez",
      date: "2024-01-03",
      category: "cybersecurity",
      readTime: "9 min read",
      image: "/images/blog/ai-threat-detection.jpg"
    },
    {
      id: 7,
      title: "Edge Computing: Bringing Intelligence Closer to Data",
      excerpt: "Understanding edge computing and its role in the future of distributed computing.",
      author: "Alex Thompson",
      date: "2024-01-01",
      category: "cloud",
      readTime: "6 min read",
      image: "/images/blog/edge-computing.jpg"
    },
    {
      id: 8,
      title: "The Rise of Autonomous Business Operations",
      excerpt: "How AI automation is transforming business processes and operational efficiency.",
      author: "Dr. Sarah Chen",
      date: "2023-12-28",
      category: "ai",
      readTime: "8 min read",
      image: "/images/blog/autonomous-operations.jpg"
    },
    {
      id: 9,
      title: "Blockchain in Enterprise: Beyond Cryptocurrency",
      excerpt: "Real-world applications of blockchain technology in enterprise environments.",
      author: "David Park",
      date: "2023-12-25",
      category: "business",
      readTime: "7 min read",
      image: "/images/blog/blockchain-enterprise.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Insights &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on AI, cybersecurity, quantum computing, 
              and the latest technology trends shaping the future of business.
            </p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, insights, and trends..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-12 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-cyan/20 hover:text-zion-cyan border border-zion-cyan/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most popular and insightful articles on cutting-edge technology and business innovation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredPosts.map((post) => (
              <motion.article 
                key={post.id}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-zion-slate-light text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-zion-cyan" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-zion-slate-light text-xs">{post.date}</p>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay updated with our latest articles, research findings, and industry analysis.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Image Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-zion-slate-light text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-zion-cyan" />
                      </div>
                      <p className="text-white text-xs font-medium">{post.author}</p>
                    </div>
                    
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, 
              industry trends, and expert analysis delivered to your inbox.
            </p>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
