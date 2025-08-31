import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Calendar, Award, Star, 
  Search, Filter, ArrowRight, ExternalLink, Download,
  CheckCircle, Video, FileText, Globe, Building, 
  Brain, Shield, Cloud, Rocket, Zap, TrendingUp,
  Heart, Share2, Bookmark, ThumbsUp, MessageSquare,
  UserPlus, Users2, Lightbulb, Target, Eye
} from 'lucide-react';

export default function Community() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const communityCategories = [
    { id: 'all', name: 'All Topics', icon: Users, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'data', name: 'Data & Analytics', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { id: 'business', name: 'Business & Strategy', icon: Building, color: 'from-yellow-500 to-orange-500' }
  ];

  const filterOptions = [
    { id: 'all', name: 'All Posts', icon: MessageCircle },
    { id: 'discussions', name: 'Discussions', icon: MessageSquare },
    { id: 'questions', name: 'Questions', icon: Lightbulb },
    { id: 'showcase', name: 'Showcase', icon: Star },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'resources', name: 'Resources', icon: FileText }
  ];

  const communityStats = [
    { label: 'Active Members', value: '12,847', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { label: 'Total Posts', value: '45,392', icon: MessageCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Events This Month', value: '23', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { label: 'Knowledge Articles', value: '1,247', icon: FileText, color: 'from-yellow-500 to-orange-500' }
  ];

  const featuredDiscussions = [
    {
      id: 1,
      title: 'Best Practices for AI Model Deployment in Production',
      author: 'Dr. Emily Watson',
      authorRole: 'AI Expert',
      category: 'ai-ml',
      replies: 47,
      views: 1234,
      likes: 89,
      tags: ['AI', 'Deployment', 'Production', 'Best Practices'],
      featured: true,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      title: 'Zero Trust Architecture Implementation Guide',
      author: 'David Kim',
      authorRole: 'Security Specialist',
      category: 'security',
      replies: 32,
      views: 987,
      likes: 67,
      tags: ['Security', 'Zero Trust', 'Architecture', 'Implementation'],
      featured: true,
      lastActivity: '4 hours ago'
    },
    {
      id: 3,
      title: 'Cloud Cost Optimization Strategies for Enterprise',
      author: 'Michael Rodriguez',
      authorRole: 'Cloud Architect',
      category: 'cloud',
      replies: 28,
      views: 756,
      likes: 54,
      tags: ['Cloud', 'Cost Optimization', 'Enterprise', 'FinOps'],
      featured: false,
      lastActivity: '6 hours ago'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI in Healthcare: Opportunities and Challenges',
      date: '2024-02-15',
      time: '14:00 UTC',
      type: 'Webinar',
      speaker: 'Dr. Sarah Chen',
      attendees: 156,
      category: 'ai-ml',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Threat Intelligence Workshop',
      date: '2024-02-20',
      time: '15:00 UTC',
      type: 'Workshop',
      speaker: 'David Kim',
      attendees: 89,
      category: 'security',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Native Development Meetup',
      date: '2024-02-25',
      time: '16:00 UTC',
      type: 'Meetup',
      speaker: 'Michael Rodriguez',
      attendees: 234,
      category: 'cloud',
      featured: false
    },
    {
      id: 4,
      title: 'Data Science Career Panel',
      date: '2024-03-01',
      time: '17:00 UTC',
      type: 'Panel',
      speaker: 'Dr. Emily Watson',
      attendees: 312,
      category: 'data',
      featured: false
    }
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and best practices',
      type: 'Documentation',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      downloads: 1247
    },
    {
      title: 'Getting Started Guide',
      description: 'New to the community? Start here with our comprehensive guide',
      type: 'Guide',
      icon: FileText, // Changed from BookOpen to FileText for consistency
      color: 'from-green-500 to-emerald-500',
      downloads: 2341
    },
    {
      title: 'Event Calendar',
      description: 'Stay updated with upcoming community events and activities',
      type: 'Calendar',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      downloads: 892
    },
    {
      title: 'Knowledge Base',
      description: 'Access our curated collection of community knowledge',
      type: 'Database',
      icon: FileText, // Changed from Database to FileText for consistency
      color: 'from-yellow-500 to-orange-500',
      downloads: 1567
    }
  ];

  const topContributors = [
    {
      name: 'Dr. Emily Watson',
      role: 'AI Research Lead',
      contributions: 247,
      reputation: 98.5,
      badges: ['Expert', 'Mentor', 'Innovator'],
      avatar: '/avatars/emily-watson.jpg'
    },
    {
      name: 'David Kim',
      role: 'Security Architect',
      contributions: 189,
      reputation: 96.2,
      badges: ['Expert', 'Security', 'Community Leader'],
      avatar: '/avatars/david-kim.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Solutions Architect',
      contributions: 156,
      reputation: 94.8,
      badges: ['Expert', 'Cloud', 'Mentor'],
      avatar: '/avatars/michael-rodriguez.jpg'
    },
    {
      name: 'Lisa Thompson',
      role: 'Data Scientist',
      contributions: 134,
      reputation: 93.1,
      badges: ['Expert', 'Data', 'Innovator'],
      avatar: '/avatars/lisa-thompson.jpg'
    }
  ];

  const filteredDiscussions = featuredDiscussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    const matchesFilter = selectedFilter === 'all' || selectedFilter === 'discussions';
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesFilter && matchesSearch;
  });

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesFilter = selectedFilter === 'all' || selectedFilter === 'events';
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const cat = communityCategories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with experts, share knowledge, and collaborate with professionals in AI, cloud computing, cybersecurity, and digital transformation
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Users className="w-5 h-5" />
              <span>12,847+ Members</span>
              <span>•</span>
              <MessageCircle className="w-5 h-5" />
              <span>45,392+ Posts</span>
              <span>•</span>
              <Calendar className="w-5 h-5" />
              <span>23 Events This Month</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search community discussions, events, or members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {communityCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Discussions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Join the conversation on trending topics and expert insights
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {discussion.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(discussion.category)} text-white rounded-full text-xs`}>
                          {communityCategories.find(c => c.id === discussion.category)?.name}
                        </span>
                        <span className="text-sm text-gray-400">{discussion.lastActivity}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {discussion.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {discussion.author}
                        </span>
                        <span className="text-blue-400">{discussion.authorRole}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {discussion.views} views
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {discussion.likes} likes
                      </span>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Join our virtual and in-person events to learn and network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {event.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white rounded-full text-xs`}>
                          {communityCategories.find(c => c.id === event.category)?.name}
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(event.date)} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.speaker}
                        </div>
                        <div className="flex items-center">
                          <Users2 className="w-4 h-4 mr-2" />
                          {event.attendees} attendees
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      Register Now
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Community Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Access helpful resources to get the most out of our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.downloads} downloads</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Top Contributors</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Meet our community leaders and most active contributors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">{contributor.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{contributor.role}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Contributions:</span>
                    <span className="text-white">{contributor.contributions}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Reputation:</span>
                    <span className="text-green-400">{contributor.reputation}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 justify-center">
                  {contributor.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with experts, share your knowledge, and grow your professional network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <UserPlus className="w-5 h-5 mr-2" />
                Join Community
              </button>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
