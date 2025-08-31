import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Search, 
  TrendingUp, 
  Star, 
  Clock,
  ThumbsUp,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Award,
  Calendar,
  MapPin,
  Globe,
  Filter,
  Plus
} from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');

  const forumCategories = [
    {
      name: "AI & Automation",
      description: "Discuss AI implementation, automation strategies, and best practices",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-500",
      topics: 156,
      posts: 892,
      lastActivity: "2 hours ago"
    },
    {
      name: "IT Infrastructure",
      description: "Share knowledge about cloud solutions, DevOps, and infrastructure management",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      topics: 89,
      posts: 445,
      lastActivity: "1 day ago"
    },
    {
      name: "Micro SaaS",
      description: "Connect with other SaaS entrepreneurs and discuss growth strategies",
      icon: Lightbulb,
      color: "from-green-500 to-teal-500",
      topics: 234,
      posts: 1203,
      lastActivity: "3 hours ago"
    },
    {
      name: "General Discussion",
      description: "General topics, networking, and community announcements",
      icon: Users,
      color: "from-orange-500 to-red-500",
      topics: 67,
      posts: 334,
      lastActivity: "5 hours ago"
    }
  ];

  const recentTopics = [
    {
      title: "Best practices for implementing AI in customer service",
      author: "Sarah Chen",
      category: "AI & Automation",
      replies: 23,
      views: 156,
      lastReply: "1 hour ago",
      isHot: true
    },
    {
      title: "Cloud migration strategy for enterprise companies",
      author: "Mike Rodriguez",
      category: "IT Infrastructure",
      replies: 18,
      views: 89,
      lastReply: "3 hours ago",
      isHot: false
    },
    {
      title: "Scaling from 0 to 1000 customers: Lessons learned",
      author: "Alex Thompson",
      category: "Micro SaaS",
      replies: 45,
      views: 234,
      lastReply: "2 hours ago",
      isHot: true
    },
    {
      title: "Upcoming community events and meetups",
      author: "Community Team",
      category: "General Discussion",
      replies: 12,
      views: 67,
      lastReply: "4 hours ago",
      isHot: false
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Implementation Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      type: "Virtual",
      attendees: 45,
      description: "Learn how to successfully implement AI solutions in your business"
    },
    {
      title: "Cloud Security Best Practices",
      date: "Dec 20, 2024",
      time: "1:00 PM EST",
      type: "Virtual",
      attendees: 32,
      description: "Essential security practices for cloud infrastructure"
    },
    {
      title: "SaaS Growth Strategies",
      date: "Dec 25, 2024",
      time: "3:00 PM EST",
      type: "Virtual",
      attendees: 28,
      description: "Proven strategies for scaling your SaaS business"
    }
  ];

  const topContributors = [
    { name: "Sarah Chen", role: "AI Expert", posts: 156, points: 2847, avatar: "SC" },
    { name: "Mike Rodriguez", role: "DevOps Engineer", posts: 134, points: 2156, avatar: "MR" },
    { name: "Alex Thompson", role: "SaaS Founder", posts: 98, points: 1892, avatar: "AT" },
    { name: "Emily Watson", role: "Cloud Architect", posts: 87, points: 1654, avatar: "EW" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Community
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Connect with fellow professionals, share knowledge, and get expert advice on AI, IT infrastructure, 
              and Micro SaaS solutions. Join thousands of members in our vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Plus className="w-5 h-5 mr-2" />
                Join Community
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                View Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Navigation */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search discussions, topics, or members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-slate-700/50 rounded-lg p-1">
              {[
                { id: 'forums', label: 'Forums', icon: MessageCircle },
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'members', label: 'Members', icon: Users },
                { id: 'resources', label: 'Resources', icon: BookOpen }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-zinc-300 hover:text-white hover:bg-slate-600/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'forums' && (
              <div className="space-y-8">
                {/* Forum Categories */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Forum Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {forumCategories.map((category, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                            <p className="text-zinc-300 text-sm mb-4">{category.description}</p>
                            <div className="flex items-center justify-between text-sm text-zinc-400">
                              <span>{category.topics} topics</span>
                              <span>{category.posts} posts</span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {category.lastActivity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Topics */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Recent Topics</h2>
                  <div className="space-y-4">
                    {recentTopics.map((topic, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500/40 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white hover:text-cyan-400 cursor-pointer transition-colors">
                                {topic.title}
                              </h3>
                              {topic.isHot && (
                                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Hot
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-zinc-400">
                              <span>by {topic.author}</span>
                              <span>in {topic.category}</span>
                              <span>{topic.replies} replies</span>
                              <span>{topic.views} views</span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {topic.lastReply}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-zinc-300 mb-4">{event.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-zinc-400">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {event.date} at {event.time}
                            </span>
                            <span className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              {event.type}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              {event.attendees} attending
                            </span>
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Top Contributors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topContributors.map((member, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {member.avatar}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                          <p className="text-zinc-400 text-sm mb-2">{member.role}</p>
                          <div className="flex items-center space-x-4 text-sm text-zinc-400">
                            <span>{member.posts} posts</span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-yellow-400" />
                              {member.points} points
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Community Guidelines</h3>
                    <p className="text-zinc-300 text-sm mb-4">Learn about our community standards and best practices for participation.</p>
                    <Link to="/help" className="text-cyan-400 hover:text-cyan-300 transition-colors">Read Guidelines →</Link>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                    <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
                    <p className="text-zinc-300 text-sm mb-4">Find answers to commonly asked questions about the community.</p>
                    <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">View FAQ →</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total Members</span>
                    <span className="text-white font-semibold">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Active Today</span>
                    <span className="text-white font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total Posts</span>
                    <span className="text-white font-semibold">45,892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Topics</span>
                    <span className="text-white font-semibold">8,456</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                    <Plus className="w-4 h-4 inline mr-2" />
                    New Topic
                  </button>
                  <button className="w-full text-left px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Start Discussion
                  </button>
                  <button className="w-full text-left px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors">
                    <HelpCircle className="w-4 h-4 inline mr-2" />
                    Ask Question
                  </button>
                </div>
              </div>

              {/* Community Rules */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Community Rules</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• Be respectful and professional</li>
                  <li>• Stay on topic and relevant</li>
                  <li>• No spam or self-promotion</li>
                  <li>• Help others and share knowledge</li>
                  <li>• Follow community guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
