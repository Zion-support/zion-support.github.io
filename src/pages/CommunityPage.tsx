import React from 'react';
import { Users, MessageCircle, Calendar, BookOpen, Award, TrendingUp, Globe, Building, Brain, Shield, Zap, Rocket, Star, Heart, Share2, Plus, Search, Filter, Grid, List, Clock, MapPin } from 'lucide-react';

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "12,847", icon: Users, color: "text-cyan-400" },
    { label: "Discussions", value: "45,293", icon: MessageCircle, color: "text-purple-400" },
    { label: "Events", value: "1,247", icon: Calendar, color: "text-green-400" },
    { label: "Resources", value: "8,956", icon: BookOpen, color: "text-yellow-400" }
  ];

  const featuredDiscussions = [
    {
      id: 1,
      title: "Best practices for implementing AI in enterprise environments",
      author: "Sarah Chen",
      authorRole: "AI Solutions Architect",
      company: "TechCorp Inc.",
      replies: 47,
      views: 1234,
      lastActivity: "2 hours ago",
      tags: ["AI", "Enterprise", "Best Practices"],
      featured: true,
      category: "AI & Technology"
    },
    {
      id: 2,
      title: "Quantum computing applications in cybersecurity",
      author: "Dr. Michael Rodriguez",
      authorRole: "Quantum Security Researcher",
      company: "QuantumSec Labs",
      replies: 32,
      views: 987,
      lastActivity: "5 hours ago",
      tags: ["Quantum Computing", "Cybersecurity", "Research"],
      featured: true,
      category: "Emerging Tech"
    },
    {
      id: 3,
      title: "SOC2 compliance automation strategies",
      author: "Jennifer Park",
      authorRole: "Compliance Manager",
      company: "SecureFlow Systems",
      replies: 28,
      views: 756,
      lastActivity: "1 day ago",
      tags: ["SOC2", "Compliance", "Automation"],
      featured: false,
      category: "Cybersecurity"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Healthcare: Challenges and Opportunities",
      date: "2025-02-15",
      time: "14:00 UTC",
      type: "Webinar",
      speakers: ["Dr. Emily Watson", "Prof. David Kim"],
      attendees: 234,
      category: "AI & Technology"
    },
    {
      id: 2,
      title: "Quantum Computing Workshop",
      date: "2025-02-20",
      time: "10:00 UTC",
      type: "Workshop",
      speakers: ["Dr. Sarah Johnson"],
      attendees: 89,
      category: "Emerging Tech"
    },
    {
      id: 3,
      title: "Cybersecurity Summit 2025",
      date: "2025-03-01",
      time: "09:00 UTC",
      type: "Conference",
      speakers: ["Multiple Industry Experts"],
      attendees: 567,
      category: "Cybersecurity"
    }
  ];

  const communityCategories = [
    { name: "AI & Technology", icon: Brain, count: 1250, color: "text-cyan-400" },
    { name: "Cybersecurity", icon: Shield, count: 890, color: "text-red-400" },
    { name: "Infrastructure", icon: Zap, count: 567, color: "text-blue-400" },
    { name: "Emerging Tech", icon: Rocket, count: 423, color: "text-purple-400" },
    { name: "Industry Solutions", icon: Building, count: 678, color: "text-green-400" },
    { name: "General Discussion", icon: Users, count: 234, color: "text-yellow-400" }
  ];

  const topContributors = [
    { name: "Sarah Chen", role: "AI Solutions Architect", contributions: 156, avatar: "/api/placeholder/60/60" },
    { name: "Dr. Michael Rodriguez", role: "Quantum Researcher", contributions: 134, avatar: "/api/placeholder/60/60" },
    { name: "Jennifer Park", role: "Compliance Expert", contributions: 98, avatar: "/api/placeholder/60/60" },
    { name: "Alex Thompson", role: "Cybersecurity Specialist", contributions: 87, avatar: "/api/placeholder/60/60" },
    { name: "Maria Garcia", role: "Infrastructure Engineer", contributions: 76, avatar: "/api/placeholder/60/60" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Community
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with technology professionals, share knowledge, and stay updated with the latest 
            trends in AI, cybersecurity, quantum computing, and emerging technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Join Community
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Start Discussion
            </button>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center">
              <div className={`w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search discussions, events, or members..."
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <select className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
              <option value="">All Categories</option>
              {communityCategories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Filter className="w-5 h-5 inline mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Featured Discussions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Discussions</h2>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            View All Discussions
          </button>
        </div>
        
        <div className="space-y-6">
          {featuredDiscussions.map((discussion) => (
            <div key={discussion.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    discussion.category === 'AI & Technology' ? 'bg-cyan-500/20 text-cyan-400' :
                    discussion.category === 'Emerging Tech' ? 'bg-purple-500/20 text-purple-400' :
                    discussion.category === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {discussion.category}
                  </span>
                  {discussion.featured && <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Featured</span>}
                </div>
                <span className="text-gray-400 text-sm">{discussion.lastActivity}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{discussion.title}</h3>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <span className="text-white">{discussion.author}</span>
                  <span className="text-gray-500">•</span>
                  <span>{discussion.authorRole}</span>
                  <span className="text-gray-500">•</span>
                  <span>{discussion.company}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {discussion.replies} replies
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {discussion.views} views
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {discussion.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            View All Events
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.category === 'AI & Technology' ? 'bg-cyan-500/20 text-cyan-400' :
                  event.category === 'Emerging Tech' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {event.category}
                </span>
                <span className="text-gray-400 text-sm">{event.type}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Speakers:</p>
                <div className="flex flex-wrap gap-2">
                  {event.speakers.map((speaker, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {speaker}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Categories and Top Contributors */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Categories */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Community Categories</h2>
            <div className="space-y-4">
              {communityCategories.map((category) => (
                <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-200`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{category.name}</h3>
                        <p className="text-gray-400 text-sm">{category.count} members</p>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Contributors */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Top Contributors</h2>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={contributor.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{contributor.name}</h3>
                      <p className="text-gray-400 text-sm">{contributor.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{contributor.contributions}</div>
                      <div className="text-gray-400 text-sm">contributions</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with like-minded professionals, share your expertise, and stay ahead of the curve 
            with the latest technology trends and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Join Now
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Community Guidelines</h2>
          <p className="text-gray-300 mb-8">
            We're committed to maintaining a respectful, inclusive, and professional community. 
            All members are expected to follow our community guidelines and contribute positively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Read Guidelines
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
