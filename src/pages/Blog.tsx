import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share2,
  Bookmark,
  TrendingUp,
  Lightbulb,
  Code,
  Brain,
  Shield,
  Cloud,
  Globe,
  Zap,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', name: 'Artificial Intelligence', icon: <Brain className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4" /> },
    { id: 'development', name: 'Software Development', icon: <Code className="w-4 h-4" /> },
    { id: 'innovation', name: 'Innovation', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'trends', name: 'Industry Trends', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Business Automation in 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and creating autonomous operations that drive efficiency and innovation.",
      content: "Artificial intelligence has evolved from a futuristic concept to a practical business tool that's transforming how organizations operate. In 2024, we're seeing AI-powered automation reach new heights, with systems that can handle complex decision-making processes, predict market trends, and optimize operations in real-time...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      authorAvatar: "/avatars/sarah-chen.jpg",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Automation", "Business Process", "Innovation"],
      featured: true,
      views: 15420,
      image: "/blog/ai-automation-2024.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Threats in the Age of Quantum Computing",
      excerpt: "As quantum computing advances, new security challenges emerge. Learn about the threats and solutions for the quantum era.",
      content: "Quantum computing represents both an opportunity and a threat to cybersecurity. While it promises to solve complex problems that are currently impossible for classical computers, it also threatens to break many of our current encryption methods...",
      author: "Michael Rodriguez",
      authorRole: "Cybersecurity Expert",
      authorAvatar: "/avatars/michael-rodriguez.jpg",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      tags: ["Cybersecurity", "Quantum Computing", "Encryption", "Threats"],
      featured: false,
      views: 8920,
      image: "/blog/quantum-cybersecurity.jpg"
    },
    {
      id: 3,
      title: "Building Scalable Microservices with Modern DevOps Practices",
      excerpt: "Learn the best practices for designing and deploying microservices that scale with your business needs.",
      content: "Microservices architecture has become the standard for building scalable applications. However, implementing it successfully requires careful planning and modern DevOps practices...",
      author: "Alex Thompson",
      authorRole: "DevOps Engineer",
      authorAvatar: "/avatars/alex-thompson.jpg",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      tags: ["Microservices", "DevOps", "Scalability", "Architecture"],
      featured: false,
      views: 6750,
      image: "/blog/microservices-devops.jpg"
    },
    {
      id: 4,
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Explore how edge computing is transforming IoT deployments and enabling real-time processing at the network edge.",
      content: "Edge computing is revolutionizing the Internet of Things by bringing computation closer to data sources. This shift enables faster response times, reduced bandwidth usage, and improved privacy...",
      author: "Dr. Emily Watson",
      authorRole: "IoT Specialist",
      authorAvatar: "/avatars/emily-watson.jpg",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "innovation",
      tags: ["IoT", "Edge Computing", "Real-time", "Innovation"],
      featured: false,
      views: 5430,
      image: "/blog/edge-computing-iot.jpg"
    },
    {
      id: 5,
      title: "Sustainable Technology: Green Computing for a Better Future",
      excerpt: "Discover how technology companies are embracing sustainability and reducing their environmental impact.",
      content: "As climate change becomes an increasingly urgent issue, technology companies are taking responsibility for their environmental impact. Green computing practices are not just good for the planet—they're also good for business...",
      author: "Lisa Park",
      authorRole: "Sustainability Director",
      authorAvatar: "/avatars/lisa-park.jpg",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "trends",
      tags: ["Sustainability", "Green Computing", "Climate Change", "Innovation"],
      featured: false,
      views: 4320,
      image: "/blog/sustainable-technology.jpg"
    },
    {
      id: 6,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "See how machine learning algorithms are improving diagnosis accuracy and patient outcomes in healthcare.",
      content: "Healthcare is one of the most promising applications of machine learning. From diagnostic imaging to drug discovery, ML algorithms are helping medical professionals make better decisions...",
      author: "Dr. James Wilson",
      authorRole: "Healthcare AI Researcher",
      authorAvatar: "/avatars/james-wilson.jpg",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "ai",
      tags: ["Machine Learning", "Healthcare", "AI", "Medical Technology"],
      featured: false,
      views: 3890,
      image: "/blog/ml-healthcare.jpg"
    },
    {
      id: 7,
      title: "Zero-Trust Security: The New Standard for Enterprise Protection",
      excerpt: "Learn about the zero-trust security model and why it's becoming essential for modern enterprise security.",
      content: "Traditional security models assume that everything inside a network is trustworthy. Zero-trust security flips this assumption on its head, treating every access attempt as potentially malicious...",
      author: "Rachel Green",
      authorRole: "Security Architect",
      authorAvatar: "/avatars/rachel-green.jpg",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "cybersecurity",
      tags: ["Zero-Trust", "Security", "Enterprise", "Network Security"],
      featured: false,
      views: 3210,
      image: "/blog/zero-trust-security.jpg"
    },
    {
      id: 8,
      title: "The Future of Work: Remote Collaboration Tools and Trends",
      excerpt: "Explore the latest tools and practices that are shaping the future of remote work and collaboration.",
      content: "The pandemic accelerated the adoption of remote work, but the trend was already well underway. As we move forward, new tools and practices are emerging that make remote collaboration more effective than ever...",
      author: "David Kim",
      authorRole: "Product Manager",
      authorAvatar: "/avatars/david-kim.jpg",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "trends",
      tags: ["Remote Work", "Collaboration", "Productivity", "Future of Work"],
      featured: false,
      views: 2980,
      image: "/blog/remote-work-future.jpg"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zion Tech Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights, trends, and innovations from the forefront of technology. 
              Stay ahead with expert analysis and cutting-edge developments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Code className="w-4 h-4" />
                <span>Tech Insights</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Brain className="w-4 h-4" />
                <span>AI & Innovation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>Industry Trends</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Article
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our latest insights and most popular content
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {categories.find(c => c.id === featuredPost.category)?.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {featuredPost.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">Featured Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our collection of insights, tutorials, and industry analysis
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Code className="w-6 h-6" />
                      </div>
                      <p className="text-xs opacity-80">Blog Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest technology trends, AI insights, and industry updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;