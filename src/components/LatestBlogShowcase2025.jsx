import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  User, 
  Tag, 
  Calendar,
  TrendingUp,
  BookOpen,
  Sparkles,
  Brain,
  Globe,
  Zap,
  Cpu,
  Shield,
  Rocket
} from 'lucide-react';
const LatestBlogShowcase2025 = () => {
  const [activePost, setActivePost] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const latestPosts = [
    {
      id: 44,
      title: "Metaverse Business Revolution: The New Digital Economy",
      excerpt: "How businesses are leveraging metaverse technologies to create immersive customer experiences and new revenue streams.",
      author: "Dr. Alex Chen",
      authorRole: "Metaverse Strategy Director",
      publishDate: "2025-01-17",
      readTime: "11 min read",
      category: "Metaverse Technology",
      tags: ["Metaverse", "Digital Economy", "Virtual Commerce", "Immersive Tech"],
      featured: true,
      imageUrl: "/images/blog/metaverse-business-revolution-2025.jpg",
      slug: "metaverse-business-revolution-new-digital-economy",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 45,
      title: "Autonomous AI Agents: The Future of Work",
      excerpt: "Revolutionary AI agents that can manage entire departments, make strategic decisions, and drive business innovation autonomously.",
      author: "Dr. Maria Rodriguez",
      authorRole: "AI Autonomy Research Lead",
      publishDate: "2025-01-18",
      readTime: "13 min read",
      category: "AI & Machine Learning",
      tags: ["Autonomous AI", "Workplace Innovation", "Strategic Planning", "Productivity"],
      featured: true,
      imageUrl: "/images/blog/autonomous-ai-agents-future-work.jpg",
      slug: "autonomous-ai-agents-future-work",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 47,
      title: "Edge Computing Revolution: Computing at the Speed of Thought",
      excerpt: "How edge computing is bringing AI and processing power to the very edge of networks for instant, real-time responses.",
      author: "Dr. Elena Martinez",
      authorRole: "Edge Computing Specialist",
      publishDate: "2025-01-20",
      readTime: "9 min read",
      category: "Edge Computing",
      tags: ["Edge Computing", "Real-time Processing", "Low Latency", "IoT"],
      featured: true,
      imageUrl: "/images/blog/edge-computing-revolution-2025.jpg",
      slug: "edge-computing-revolution-computing-speed-thought",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 48,
      title: "Digital Twin Technology: Mirror Worlds for Business",
      excerpt: "How digital twins are creating perfect virtual replicas of physical systems for optimization and prediction.",
      author: "Dr. Robert Kim",
      authorRole: "Digital Twin Architect",
      publishDate: "2025-01-21",
      readTime: "12 min read",
      category: "Digital Twin Technology",
      tags: ["Digital Twins", "Simulation", "Optimization", "Predictive Analytics"],
      featured: true,
      imageUrl: "/images/blog/digital-twin-technology-mirror-worlds.jpg",
      slug: "digital-twin-technology-mirror-worlds-business",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 50,
      title: "Augmented Reality in Business: The Future of Customer Experience",
      excerpt: "How AR is transforming customer interactions, training, and business operations across industries.",
      author: "Dr. Michael Chen",
      authorRole: "AR Business Solutions Lead",
      publishDate: "2025-01-23",
      readTime: "10 min read",
      category: "Augmented Reality",
      tags: ["Augmented Reality", "Customer Experience", "Training", "Business Operations"],
      featured: true,
      imageUrl: "/images/blog/augmented-reality-business-future.jpg",
      slug: "augmented-reality-business-future-customer-experience",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-600 to-blue-600"
    }
  ];
  const categories = [
    { name: "All", count: latestPosts.length },
    { name: "Metaverse Technology", count: latestPosts.filter(p => p.category === "Metaverse Technology").length },
    { name: "AI & Machine Learning", count: latestPosts.filter(p => p.category === "AI & Machine Learning").length },
    { name: "Edge Computing", count: latestPosts.filter(p => p.category === "Edge Computing").length },
    { name: "Digital Twin Technology", count: latestPosts.filter(p => p.category === "Digital Twin Technology").length },
    { name: "Augmented Reality", count: latestPosts.filter(p => p.category === "Augmented Reality").length }
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(latestPosts);
    } else {
      setFilteredPosts(latestPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePost((prev) => (prev + 1) % filteredPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredPosts]);
  const currentPost = filteredPosts[activePost] || filteredPosts[0];
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
              Latest Insights
            </span>
            <BookOpen className="w-6 h-6 text-blue-500" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest insights on revolutionary technologies that are shaping the future
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {currentPost && (
                <motion.div
                  key={currentPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${currentPost.color} p-8 rounded-2xl text-white shadow-2xl`}>
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          {currentPost.icon}
                        </motion.div>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                            <span className="text-yellow-300 font-semibold text-sm">FEATURED</span>
                          </div>
                          <h3 className="text-2xl font-bold">{currentPost.title}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm opacity-75">
                          <Clock className="w-4 h-4" />
                          <span>{currentPost.readTime}</span>
                        </div>
                        <div className="text-sm opacity-75">{currentPost.publishDate}</div>
                      </div>
                    </div>
                    {/* Post Content */}
                    <p className="text-lg mb-6 opacity-90">
                      {currentPost.excerpt}
                    </p>
                    {/* Author Info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">{currentPost.author}</div>
                        <div className="text-sm opacity-75">{currentPost.authorRole}</div>
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Side Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Articles</h3>
            {filteredPosts.slice(0, 4).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  activePost === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActivePost(index)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${post.color} text-white`}>
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "New Articles", value: "7", icon: <BookOpen className="w-6 h-6" /> },
            { label: "Categories", value: "6", icon: <Tag className="w-6 h-6" /> },
            { label: "Total Views", value: "50K+", icon: <TrendingUp className="w-6 h-6" /> },
            { label: "Expert Authors", value: "12", icon: <User className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

};

export default LatestBlogShowcase2025;
