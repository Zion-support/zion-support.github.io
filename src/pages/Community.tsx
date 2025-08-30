import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  Star, 
  TrendingUp, 
  BookOpen, 
  Video, 
  Globe, 
  Building, 
  Rocket, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Heart, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  MessageSquare, 
  ExternalLink,
  ArrowRight,
  Search,
  Filter,
  MapPin,
  Clock,
  UserPlus,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');

  const communityStats = [
    { label: 'Active Members', value: '12,847', icon: Users, color: 'from-cyan-500 to-blue-600' },
    { label: 'Forum Posts', value: '45,932', icon: MessageCircle, color: 'from-purple-500 to-pink-600' },
    { label: 'Events Hosted', value: '156', icon: Calendar, color: 'from-indigo-500 to-purple-600' },
    { label: 'Knowledge Articles', value: '2,847', icon: BookOpen, color: 'from-emerald-500 to-teal-600' }
  ];

  const forumCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Discuss AI trends, share ML models, and get help with AI implementation',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      topics: 1247,
      posts: 8923,
      members: 3456
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD pipelines, and DevOps best practices',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      topics: 892,
      posts: 6541,
      members: 2891
    },
    {
      name: 'Cybersecurity',
      description: 'Security threats, best practices, and incident response strategies',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      topics: 567,
      posts: 4231,
      members: 1987
    },
    {
      name: 'Edge Computing & IoT',
      description: 'Edge computing, IoT devices, and real-time data processing',
      icon: Zap,
      color: 'from-teal-500 to-green-600',
      topics: 423,
      posts: 2987,
      members: 1456
    },
    {
      name: 'Quantum Computing',
      description: 'Quantum algorithms, quantum supremacy, and future applications',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-600',
      topics: 234,
      posts: 1876,
      members: 892
    },
    {
      name: 'Healthcare Technology',
      description: 'AI in medicine, digital health, and healthcare innovation',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      topics: 345,
      posts: 2654,
      members: 1234
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI in Enterprise: 2025 Trends & Predictions',
      type: 'Webinar',
      date: '2025-01-20',
      time: '14:00 EST',
      duration: '90 min',
      attendees: 1247,
      featured: true,
      speakers: ['Dr. Sarah Chen', 'Mark Johnson'],
      description: 'Join industry experts as they discuss the latest AI trends and how they\'ll impact enterprise operations in 2025.'
    },
    {
      id: 2,
      title: 'Cybersecurity Roundtable: Zero Trust Implementation',
      type: 'Workshop',
      date: '2025-01-25',
      time: '10:00 EST',
      duration: '3 hours',
      attendees: 456,
      featured: false,
      speakers: ['Alex Rodriguez', 'Lisa Chen'],
      description: 'Hands-on workshop covering zero trust architecture implementation and best practices.'
    },
    {
      id: 3,
      title: 'Quantum Computing Meetup',
      type: 'Meetup',
      date: '2025-02-01',
      time: '18:00 EST',
      duration: '2 hours',
      attendees: 234,
      featured: false,
      speakers: ['Dr. Michael Brown'],
      description: 'Local meetup for quantum computing enthusiasts and professionals.'
    }
  ];

  const topContributors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Researcher',
      avatar: '/api/placeholder/60/60',
      points: 15420,
      posts: 234,
      solutions: 89,
      badge: 'Expert',
      badgeColor: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Mark Johnson',
      role: 'DevOps Engineer',
      avatar: '/api/placeholder/60/60',
      points: 12890,
      posts: 187,
      solutions: 67,
      badge: 'Guru',
      badgeColor: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Security Specialist',
      avatar: '/api/placeholder/60/60',
      points: 11230,
      posts: 156,
      solutions: 54,
      badge: 'Master',
      badgeColor: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Lisa Chen',
      role: 'Cloud Architect',
      avatar: '/api/placeholder/60/60',
      points: 9870,
      posts: 134,
      solutions: 43,
      badge: 'Pro',
      badgeColor: 'from-cyan-500 to-blue-600'
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for implementing AI in healthcare',
      author: 'Dr. Sarah Chen',
      category: 'Healthcare Technology',
      replies: 23,
      views: 456,
      lastActivity: '2 hours ago',
      tags: ['AI', 'Healthcare', 'Best Practices']
    },
    {
      id: 2,
      title: 'Zero Trust Architecture: Implementation challenges',
      author: 'Alex Rodriguez',
      category: 'Cybersecurity',
      replies: 18,
      views: 342,
      lastActivity: '4 hours ago',
      tags: ['Zero Trust', 'Security', 'Architecture']
    },
    {
      id: 3,
      title: 'Edge computing for real-time analytics',
      author: 'Mark Johnson',
      category: 'Edge Computing & IoT',
      replies: 31,
      views: 567,
      lastActivity: '6 hours ago',
      tags: ['Edge Computing', 'Analytics', 'IoT']
    }
  ];

  const tabs = [
    { id: 'forums', label: 'Forums', icon: MessageCircle },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'contributors', label: 'Top Contributors', icon: Award },
    { id: 'discussions', label: 'Recent Discussions', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals, share knowledge, attend events, and collaborate on innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with technology professionals, share knowledge, attend exclusive events, 
              and collaborate on cutting-edge solutions that shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Join Community
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Explore Forums
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                  Community Forums
                </h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search forums..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forumCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm">
                      {category.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                      <span>{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                      <span>{category.members} members</span>
                    </div>
                    <button className="w-full py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                      Join Discussion
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                  Upcoming Events
                </h2>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Host Event
                </button>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-slate-800/50 rounded-2xl p-6 border ${
                      event.featured ? 'border-cyan-400/50' : 'border-slate-700/50'
                    } hover:border-cyan-400/50 transition-all duration-300`}
                  >
                    {event.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full mb-4">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Event
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time} ({event.duration})
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees} attending
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                          Register Now
                        </button>
                        <button className="w-full py-3 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                          Add to Calendar
                        </button>
                        <button className="w-full py-3 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                          Share Event
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Top Contributors Tab */}
          {activeTab === 'contributors' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                  Top Contributors
                </h2>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  View Leaderboard
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topContributors.map((contributor, index) => (
                  <motion.div
                    key={contributor.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{contributor.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{contributor.role}</p>
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${contributor.badgeColor} text-white text-xs rounded-full mb-4`}>
                      <Award className="w-3 h-3 mr-1" />
                      {contributor.badge}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Points:</span>
                        <span className="text-white font-semibold">{contributor.points.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Posts:</span>
                        <span className="text-white font-semibold">{contributor.posts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Solutions:</span>
                        <span className="text-white font-semibold">{contributor.solutions}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                      View Profile
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Recent Discussions Tab */}
          {activeTab === 'discussions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                  Recent Discussions
                </h2>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Discussion
                </button>
              </div>

              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                          {discussion.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                          <span>By {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.category}</span>
                          <span>•</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="text-center">
                          <div className="text-white font-semibold">{discussion.replies}</div>
                          <div>Replies</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold">{discussion.views}</div>
                          <div>Views</div>
                        </div>
                        <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Connect with like-minded professionals, share your expertise, and stay ahead of the latest technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Create Account
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}