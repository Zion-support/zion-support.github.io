import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Award, 
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Brain,
  Shield,
  Cpu,
  Star,
  ArrowRight,
  Search,
  Filter,
  Heart,
  Share2,
  Clock,
  MapPin,
  UserPlus,
  CheckCircle,
  Zap,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server
} from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const communityStats = [
    { label: 'Total Members', value: '12,500+', icon: Users, color: 'text-blue-400' },
    { label: 'Active Discussions', value: '2,300+', icon: MessageCircle, color: 'text-green-400' },
    { label: 'Events This Year', value: '45+', icon: Calendar, color: 'text-purple-400' },
    { label: 'Knowledge Articles', value: '1,800+', icon: BookOpen, color: 'text-orange-400' },
    { label: 'Expert Contributors', value: '850+', icon: Award, color: 'text-yellow-400' },
    { label: 'Growth Rate', value: '23%', icon: TrendingUp, color: 'text-red-400' }
  ];

  const communityGroups = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Discuss the latest developments in artificial intelligence and machine learning.',
      members: 3200,
      topics: 450,
      icon: Brain,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      category: 'technology',
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Privacy',
      description: 'Share insights on security best practices, threats, and compliance.',
      members: 2100,
      topics: 320,
      icon: Shield,
      color: 'bg-gradient-to-br from-red-500 to-orange-500',
      category: 'security',
      featured: true
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD, and operational excellence discussions.',
      members: 2800,
      topics: 380,
      icon: Cloud,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      category: 'infrastructure',
      featured: false
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3',
      description: 'Explore decentralized technologies and their applications.',
      members: 1500,
      topics: 220,
      icon: Network,
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      category: 'emerging-tech',
      featured: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Advanced discussions on quantum algorithms and applications.',
      members: 800,
      topics: 95,
      icon: Cpu,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      category: 'research',
      featured: false
    },
    {
      id: 'startup-entrepreneurs',
      name: 'Startup & Entrepreneurs',
      description: 'Connect with fellow entrepreneurs and share startup experiences.',
      members: 1800,
      topics: 280,
      icon: Rocket,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      category: 'business',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Ethics & Governance Workshop',
      description: 'Interactive workshop on responsible AI development and governance frameworks.',
      date: '2025-03-15',
      time: '02:00 PM - 05:00 PM',
      location: 'Virtual Event',
      attendees: 150,
      type: 'workshop',
      category: 'ai-ml',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Threat Intelligence Meetup',
      description: 'Network with security professionals and discuss emerging threats.',
      date: '2025-03-22',
      time: '06:00 PM - 08:00 PM',
      location: 'San Francisco, CA',
      attendees: 80,
      type: 'meetup',
      category: 'cybersecurity',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Native Development Summit',
      description: 'Learn about modern cloud-native development practices and tools.',
      date: '2025-04-05',
      time: '09:00 AM - 06:00 PM',
      location: 'Austin, TX',
      attendees: 300,
      type: 'conference',
      category: 'cloud-devops',
      featured: true
    },
    {
      id: 4,
      title: 'Blockchain Developer Hackathon',
      description: '24-hour hackathon focused on building innovative blockchain solutions.',
      date: '2025-04-12',
      time: '09:00 AM - 09:00 AM (Next Day)',
      location: 'New York, NY',
      attendees: 120,
      type: 'hackathon',
      category: 'blockchain-web3',
      featured: false
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for implementing AI in production environments',
      author: 'Sarah Chen',
      authorRole: 'AI Engineer',
      replies: 24,
      views: 156,
      category: 'ai-ml',
      tags: ['AI', 'Production', 'Best Practices'],
      lastActivity: '2 hours ago',
      featured: true
    },
    {
      id: 2,
      title: 'Zero-trust security architecture implementation guide',
      author: 'Mike Rodriguez',
      authorRole: 'Security Architect',
      replies: 18,
      views: 89,
      category: 'cybersecurity',
      tags: ['Security', 'Zero-Trust', 'Architecture'],
      lastActivity: '5 hours ago',
      featured: false
    },
    {
      id: 3,
      title: 'Kubernetes cluster optimization strategies',
      author: 'Lisa Thompson',
      authorRole: 'DevOps Engineer',
      replies: 31,
      views: 203,
      category: 'cloud-devops',
      tags: ['Kubernetes', 'Optimization', 'DevOps'],
      lastActivity: '1 day ago',
      featured: false
    },
    {
      id: 4,
      title: 'DeFi protocol security considerations',
      author: 'David Kim',
      authorRole: 'Blockchain Developer',
      replies: 15,
      views: 67,
      category: 'blockchain-web3',
      tags: ['DeFi', 'Security', 'Blockchain'],
      lastActivity: '2 days ago',
      featured: false
    }
  ];

  const knowledgeResources = [
    {
      id: 1,
      title: 'AI Model Deployment Guide',
      description: 'Comprehensive guide to deploying AI models in production environments.',
      author: 'Zion Tech Group',
      category: 'ai-ml',
      type: 'guide',
      downloads: 1200,
      rating: 4.8,
      tags: ['AI', 'Deployment', 'Production']
    },
    {
      id: 2,
      title: 'Cybersecurity Compliance Checklist',
      description: 'Essential checklist for maintaining cybersecurity compliance.',
      author: 'Security Team',
      category: 'cybersecurity',
      type: 'checklist',
      downloads: 890,
      rating: 4.7,
      tags: ['Security', 'Compliance', 'Checklist']
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide for successful cloud migration.',
      author: 'Cloud Team',
      category: 'cloud-devops',
      type: 'guide',
      downloads: 750,
      rating: 4.6,
      tags: ['Cloud', 'Migration', 'Best Practices']
    }
  ];

  const filteredGroups = communityGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const group = communityGroups.find(g => g.id === categoryId);
    return group ? group.icon : Users;
  };

  const getCategoryName = (categoryId: string) => {
    const group = communityGroups.find(g => g.id === categoryId);
    return group ? group.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Zion Tech Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of technology professionals, researchers, entrepreneurs, and enthusiasts. 
              Connect, learn, and grow together in our vibrant community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'groups'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Community Groups
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'discussions'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Discussions
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'resources'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Welcome to Our Community
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                  The Zion Tech Community is a vibrant ecosystem of technology professionals, researchers, 
                  entrepreneurs, and enthusiasts. Join us to connect, collaborate, and stay ahead of the curve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    Join Community
                  </button>
                  <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Join Groups</h3>
                <p className="text-gray-300 mb-4">
                  Connect with like-minded professionals in specialized community groups.
                </p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Explore Groups
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <Calendar className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Attend Events</h3>
                <p className="text-gray-300 mb-4">
                  Participate in workshops, meetups, and conferences.
                </p>
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  View Events
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Start Discussions</h3>
                <p className="text-gray-300 mb-4">
                  Share your knowledge and ask questions in our forums.
                </p>
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Join Discussion
                </button>
              </div>
            </div>

            {/* Featured Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Groups */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Featured Groups</h3>
                <div className="space-y-4">
                  {communityGroups.filter(g => g.featured).map((group) => (
                    <div key={group.id} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center`}>
                        <group.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{group.name}</h4>
                        <p className="text-gray-300 text-sm">{group.members} members</p>
                      </div>
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors duration-200">
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.filter(e => e.featured).slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 bg-white/5 rounded-lg">
                      <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{formatDate(event.date)}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{event.attendees} attendees</span>
                        <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded transition-colors duration-200">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Groups Tab */}
        {activeTab === 'groups' && (
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search community groups..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all" className="bg-gray-800 text-white">All Categories</option>
                    <option value="technology" className="bg-gray-800 text-white">Technology</option>
                    <option value="security" className="bg-gray-800 text-white">Security</option>
                    <option value="infrastructure" className="bg-gray-800 text-white">Infrastructure</option>
                    <option value="emerging-tech" className="bg-gray-800 text-white">Emerging Tech</option>
                    <option value="research" className="bg-gray-800 text-white">Research</option>
                    <option value="business" className="bg-gray-800 text-white">Business</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-transform duration-200 hover:scale-105 ${
                    group.featured ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  <div className={`h-32 ${group.color} flex items-center justify-center`}>
                    <group.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    {group.featured && (
                      <span className="inline-block bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold mb-3">
                        Featured Group
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3">{group.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{group.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {group.members.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {group.topics}
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                      Join Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-transform duration-200 hover:scale-105 ${
                    event.featured ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    {event.featured && (
                      <span className="inline-block bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold mb-3">
                        Featured Event
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {recentDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${
                  discussion.featured ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {discussion.featured && (
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                      <span className="text-sm text-gray-400">
                        {getCategoryName(discussion.category)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{discussion.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span>By {discussion.author}</span>
                      <span>{discussion.authorRole}</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                      <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {discussion.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            {knowledgeResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm text-gray-400">{resource.type}</span>
                      <span className="text-sm text-gray-400">{resource.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-3">{resource.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span>By {resource.author}</span>
                      <span>{resource.downloads} downloads</span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {resource.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with thousands of technology professionals, share your expertise, 
              and stay updated with the latest industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Join Now
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}