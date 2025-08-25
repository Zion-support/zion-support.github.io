
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
  BookOpen,
  Brain,
  Shield,
  Cpu,
  Network,
  TrendingUp
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 8 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Network, count: 7 }
  ];

  const tags = [
    { id: 'all', name: 'All Tags', count: 45 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', count: 18 },
    { id: 'machine-learning', name: 'Machine Learning', count: 15 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 8 },
    { id: 'cloud-computing', name: 'Cloud Computing', count: 10 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 9 },
    { id: 'enterprise-solutions', name: 'Enterprise Solutions', count: 11 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Autonomous Systems in Enterprise",
      excerpt: "Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of enterprise technology.",
      content: "Artificial Intelligence has evolved far beyond simple automation. Today's AI systems are capable of autonomous decision-making, continuous learning, and complex problem-solving that was once the exclusive domain of human experts. In this comprehensive guide, we explore how autonomous AI systems are transforming enterprise operations across industries...",
      author: "Dr. Sarah Chen",
      authorAvatar: "/avatars/sarah-chen.jpg",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai-ml",
      tags: ["artificial-intelligence", "autonomous-systems", "enterprise-solutions"],
      featured: true,
      image: "/blog/ai-autonomous-systems.jpg"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Through Classical Limitations",
      excerpt: "Explore the revolutionary potential of quantum computing and how it's solving problems that classical computers cannot handle.",
      content: "Quantum computing represents a paradigm shift in computational power. By leveraging the principles of quantum mechanics, quantum computers can process information in ways that classical computers simply cannot match. This breakthrough technology is opening new possibilities in cryptography, drug discovery, optimization problems, and more...",
      author: "Dr. Michael Rodriguez",
      authorAvatar: "/avatars/michael-rodriguez.jpg",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "quantum",
      tags: ["quantum-computing", "technology", "innovation"],
      featured: true,
      image: "/blog/quantum-computing.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Defenses",
      excerpt: "Learn about the evolving cybersecurity landscape and how AI is both a threat and a solution in protecting digital assets.",
      content: "As AI technology advances, so do the capabilities of cyber attackers. However, AI is also becoming our most powerful weapon in the fight against cyber threats. This article examines the dual nature of AI in cybersecurity, exploring both the risks and opportunities it presents...",
      author: "Alex Thompson",
      authorAvatar: "/avatars/alex-thompson.jpg",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "cybersecurity",
      tags: ["cybersecurity", "artificial-intelligence", "threat-detection"],
      featured: false,
      image: "/blog/ai-cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Building Scalable IT Infrastructure for Modern Enterprises",
      excerpt: "Discover the key principles and technologies for creating robust, scalable IT infrastructure that grows with your business.",
      content: "Modern enterprises require IT infrastructure that can scale seamlessly with business growth while maintaining performance and reliability. This comprehensive guide covers the essential components of scalable infrastructure, from cloud-native architectures to microservices and containerization...",
      author: "Jennifer Lee",
      authorAvatar: "/avatars/jennifer-lee.jpg",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "infrastructure",
      tags: ["it-infrastructure", "cloud-computing", "scalability"],
      featured: false,
      image: "/blog/it-infrastructure.jpg"
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "See how machine learning algorithms are revolutionizing healthcare delivery and improving patient outcomes worldwide.",
      content: "Healthcare is experiencing a technological renaissance thanks to machine learning. From diagnostic imaging to drug discovery, ML algorithms are helping medical professionals make better decisions and provide more personalized care. This article explores the current state and future potential of ML in healthcare...",
      author: "Dr. Emily Watson",
      authorAvatar: "/avatars/emily-watson.jpg",
      publishDate: "2025-01-05",
      readTime: "11 min read",
      category: "ai-ml",
      tags: ["machine-learning", "healthcare", "medical-technology"],
      featured: false,
      image: "/blog/ml-healthcare.jpg"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Processing Data Where It Matters",
      excerpt: "Understand how edge computing is changing the way we process and analyze data in real-time applications.",
      content: "Edge computing is revolutionizing how we handle data by bringing computation closer to where data is generated. This approach reduces latency, improves performance, and enables real-time processing for applications like autonomous vehicles, IoT devices, and smart cities...",
      author: "David Kim",
      authorAvatar: "/avatars/david-kim.jpg",
      publishDate: "2025-01-03",
      readTime: "9 min read",
      category: "infrastructure",
      tags: ["edge-computing", "iot", "real-time-processing"],
      featured: false,
      image: "/blog/edge-computing.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Insights & Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Zion Tech Group Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay ahead of the curve with insights on AI, quantum technology, cybersecurity, and the future of enterprise technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, insights, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedTag === tag.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {tag.name}
                  <span className="ml-1 text-xs opacity-75">({tag.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-gray-300">Must-read insights from our experts</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{post.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">
              {filteredPosts.length > 0 
                ? `Showing ${filteredPosts.length} articles` 
                : 'No articles found matching your criteria'
              }
            </p>
          </div>
          
          {regularPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
          
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum technology, and enterprise solutions delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

