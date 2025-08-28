import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, BookOpen, Code, Globe, Heart, Star, TrendingUp, Search, Filter, Plus } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Community() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: Globe, count: 156 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Code, count: 42 },
    { id: 'development', name: 'Development', icon: Code, count: 38 },
    { id: 'business', name: 'Business & Strategy', icon: TrendingUp, count: 29 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Heart, count: 25 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 22 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for implementing AI in healthcare',
      author: 'Dr. Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      category: 'ai',
      replies: 23,
      views: 156,
      lastActivity: '2 hours ago',
      tags: ['AI', 'Healthcare', 'Best Practices']
    },
    {
      id: 2,
      title: 'How to scale microservices architecture',
      author: 'Alex Rodriguez',
      avatar: '/avatars/alex.jpg',
      category: 'development',
      replies: 18,
      views: 89,
      lastActivity: '4 hours ago',
      tags: ['Microservices', 'Scalability', 'Architecture']
    },
    {
      id: 3,
      title: 'Cybersecurity trends for 2025',
      author: 'Maria Thompson',
      avatar: '/avatars/maria.jpg',
      category: 'cybersecurity',
      replies: 31,
      views: 203,
      lastActivity: '6 hours ago',
      tags: ['Cybersecurity', 'Trends', '2025']
    },
    {
      id: 4,
      title: 'Implementing digital twin solutions',
      author: 'James Wilson',
      avatar: '/avatars/james.jpg',
      category: 'ai',
      replies: 15,
      views: 67,
      lastActivity: '1 day ago',
      tags: ['Digital Twin', 'IoT', 'AI']
    },
    {
      id: 5,
      title: 'Cloud cost optimization strategies',
      author: 'Lisa Park',
      avatar: '/avatars/lisa.jpg',
      category: 'cloud',
      replies: 27,
      views: 134,
      lastActivity: '1 day ago',
      tags: ['Cloud', 'Cost Optimization', 'FinOps']
    }
  ];

  const featuredMembers = [
    { name: 'Dr. Sarah Chen', role: 'AI Research Lead', avatar: '/avatars/sarah.jpg', contributions: 156 },
    { name: 'Alex Rodriguez', role: 'Senior Developer', avatar: '/avatars/alex.jpg', contributions: 89 },
    { name: 'Maria Thompson', role: 'Security Expert', avatar: '/avatars/maria.jpg', contributions: 203 },
    { name: 'James Wilson', role: 'IoT Specialist', avatar: '/avatars/james.jpg', contributions: 67 }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community Forum - Zion Tech Group"
        description="Join our vibrant community of AI experts, developers, and technology professionals. Share knowledge, ask questions, and collaborate on cutting-edge solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with AI experts, developers, and technology professionals. 
              Share knowledge, ask questions, and collaborate on cutting-edge solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Start Discussion
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20">
                Browse Topics
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Featured Members</h4>
                <div className="space-y-3">
                  {featuredMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{member.name}</p>
                        <p className="text-gray-400 text-xs">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-400 text-sm font-semibold">{member.contributions}</p>
                        <p className="text-gray-400 text-xs">posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions, topics, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {discussion.author.charAt(0)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white hover:text-blue-300 transition-colors">
                          {discussion.title}
                        </h3>
                        <span className="text-sm text-gray-400">{discussion.lastActivity}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span>by {discussion.author}</span>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{discussion.views} views</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {discussion.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/20">
                Load More Discussions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
              <div className="text-gray-400">Active Discussions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">1,234</div>
              <div className="text-gray-400">Solutions Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">89</div>
              <div className="text-gray-400">Expert Contributors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
