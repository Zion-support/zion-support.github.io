import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Star,
  Share2,
  Bookmark,
  ExternalLink,
  Eye,
  Heart,
  MessageCircle
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year. From automated decision-making to intelligent process optimization, AI is becoming the cornerstone of digital transformation.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      authorAvatar: "SC",
      date: "2025-01-15",
      readTime: "8 min read",
      featured: true,
      tags: ["AI", "Enterprise", "Digital Transformation", "2025 Trends"],
      views: 1247,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Quantum Computing: Preparing for the Future",
      excerpt: "As quantum computing advances, traditional encryption methods face unprecedented challenges. Learn about post-quantum cryptography and how organizations can prepare for the quantum threat landscape.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      authorAvatar: "MR",
      date: "2025-01-12",
      readTime: "6 min read",
      featured: false,
      tags: ["Cybersecurity", "Quantum Computing", "Encryption", "Future Tech"],
      views: 892,
      likes: 67,
      comments: 18
    },
    {
      id: 3,
      title: "Building Scalable IoT Solutions: Lessons from Real-World Deployments",
      excerpt: "Explore practical insights from successful IoT implementations across manufacturing, healthcare, and smart cities. Learn about common challenges and proven strategies for scaling IoT solutions.",
      category: "IoT & Edge Computing",
      author: "Lisa Thompson",
      authorAvatar: "LT",
      date: "2025-01-10",
      readTime: "10 min read",
      featured: false,
      tags: ["IoT", "Edge Computing", "Manufacturing", "Smart Cities"],
      views: 756,
      likes: 54,
      comments: 15
    },
    {
      id: 4,
      title: "Blockchain Beyond Cryptocurrency: Enterprise Applications and Use Cases",
      excerpt: "While blockchain is often associated with cryptocurrency, its enterprise applications are far more diverse. Discover how organizations are using blockchain for supply chain management, digital identity, and more.",
      category: "Blockchain",
      author: "David Kim",
      authorAvatar: "DK",
      date: "2025-01-08",
      readTime: "7 min read",
      featured: false,
      tags: ["Blockchain", "Enterprise", "Supply Chain", "Digital Identity"],
      views: 634,
      likes: 42,
      comments: 12
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Bringing Intelligence Closer to Data",
      excerpt: "Edge computing is revolutionizing how we process and analyze data. Learn about the benefits, challenges, and real-world applications of this transformative technology.",
      category: "Edge Computing",
      author: "Alex Johnson",
      authorAvatar: "AJ",
      date: "2025-01-05",
      readTime: "9 min read",
      featured: false,
      tags: ["Edge Computing", "Data Processing", "IoT", "Performance"],
      views: 578,
      likes: 38,
      comments: 9
    },
    {
      id: 6,
      title: "Digital Transformation Success Stories: How Companies Are Thriving in the Digital Age",
      excerpt: "Real-world examples of organizations that have successfully navigated digital transformation. Discover the strategies, challenges, and outcomes that shaped their journey.",
      category: "Digital Transformation",
      author: "Emma Wilson",
      authorAvatar: "EW",
      date: "2025-01-03",
      readTime: "12 min read",
      featured: false,
      tags: ["Digital Transformation", "Success Stories", "Strategy", "Innovation"],
      views: 445,
      likes: 31,
      comments: 7
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "IoT & Edge Computing", "Blockchain", "Edge Computing", "Digital Transformation"];
  const popularTags = ["AI", "Cybersecurity", "IoT", "Blockchain", "Digital Transformation", "Enterprise", "Innovation", "Technology"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Insights & Innovation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore the latest trends, insights, and thought leadership in technology and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category 
                      ? "bg-cyan-500 text-white" 
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
                <span className="text-gray-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-semibold">
                    {post.authorAvatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                    <div className="text-gray-400 text-sm">Author</div>
                  </div>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-2">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Discover insights, trends, and expert perspectives on technology and innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 text-xs font-semibold">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{post.author}</div>
                      <div className="text-gray-500 text-xs">{new Date(post.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm rounded hover:bg-cyan-500/30 transition-colors flex items-center gap-1">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-gray-300">Explore trending topics and discover content that matters to you</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {popularTags.map((tag, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                #{tag}
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
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and expert perspectives
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our services and discover how Zion Tech Group can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;