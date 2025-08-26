import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Calendar, MapPin, Search, Filter, TrendingUp, Star, Heart, Share2, Bookmark, UserPlus, Users2, Globe, Video, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'virtual' | 'in-person' | 'hybrid';
  attendees: number;
  maxAttendees: number;
  category: string;
  organizer: string;
  image: string;
}
interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  topicCount: number;
  postCount: number;
}
interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  tags: string[];
  isPinned: boolean;
  isSolved: boolean;
}
const Community: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const forumCategories: ForumCategory[] = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'General topics and community chat',
      icon: Users,
      color: 'bg-blue-500',
      topicCount: 156,
      postCount: 1247
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'AI discussions and ML projects',
      icon: TrendingUp,
      color: 'bg-purple-500',
      topicCount: 89,
      postCount: 756
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security discussions and best practices',
      icon: Star,
      color: 'bg-red-500',
      topicCount: 67,
      postCount: 523
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps',
      icon: Globe,
      color: 'bg-green-500',
      topicCount: 94,
      postCount: 689
    },
    {
      id: 'career',
      name: 'Career & Jobs',
      description: 'Career advice and job opportunities',
      icon: UserPlus,
      color: 'bg-orange-500',
      topicCount: 78,
      postCount: 445
    },
    {
      id: 'projects',
      name: 'Projects & Showcase',
      description: 'Share your projects and get feedback',
      icon: Zap,
      color: 'bg-indigo-500',
      topicCount: 112,
      postCount: 892
    }
  ];
  const communityEvents: CommunityEvent[] = [
    {
      id: 'ai-summit-2024',
      title: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and researchers for a comprehensive look at the future of AI',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Virtual Event',
      type: 'virtual',
      attendees: 1247,
      maxAttendees: 2000,
      category: 'AI & ML',
      organizer: 'Zion Tech Group',
      image: '/images/ai-summit.jpg'
    },
    {
      id: 'cyber-workshop',
      title: 'Cybersecurity Workshop Series',
      description: 'Hands-on cybersecurity training and threat analysis',
      date: 'March 22, 2024',
      time: '2:00 PM - 6:00 PM EST',
      location: 'New York, NY',
      type: 'in-person',
      attendees: 89,
      maxAttendees: 100,
      category: 'Cybersecurity',
      organizer: 'Security Team',
      image: '/images/cyber-workshop.jpg'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Best Practices',
      description: 'Learn from experts about successful cloud migration strategies',
      date: 'March 29, 2024',
      time: '1:00 PM - 4:00 PM EST',
      location: 'Virtual Event',
      type: 'virtual',
      attendees: 456,
      maxAttendees: 500,
      category: 'Cloud & DevOps',
      organizer: 'Cloud Solutions Team',
      image: '/images/cloud-migration.jpg'
    },
    {
      id: 'networking-mixer',
      title: 'Tech Networking Mixer',
      description: 'Connect with fellow tech professionals in a relaxed setting',
      date: 'April 5, 2024',
      time: '6:00 PM - 9:00 PM EST',
      location: 'San Francisco, CA',
      type: 'in-person',
      attendees: 67,
      maxAttendees: 150,
      category: 'Networking',
      organizer: 'Community Team',
      image: '/images/networking-mixer.jpg'
    }
  ];
  const forumTopics: ForumTopic[] = [
    {
      id: 'ml-model-deployment',
      title: 'Best practices for ML model deployment in production?',
      content: 'I\'m looking for advice on deploying machine learning models to production environments...',
      author: 'Sarah Chen',
      authorAvatar: '/avatars/sarah.jpg',
      category: 'ai-ml',
      replies: 23,
      views: 156,
      lastActivity: '2 hours ago',
      tags: ['machine-learning', 'deployment', 'production'],
      isPinned: true,
      isSolved: false
    },
    {
      id: 'security-audit-tools',
      title: 'Recommended security audit tools for small businesses?',
      content: 'I\'m helping a small business set up their security infrastructure...',
      author: 'Mike Johnson',
      authorAvatar: '/avatars/mike.jpg',
      category: 'cybersecurity',
      replies: 15,
      views: 89,
      lastActivity: '5 hours ago',
      tags: ['security', 'audit', 'small-business'],
      isPinned: false,
      isSolved: true
    },
    {
      id: 'kubernetes-cluster',
      title: 'Setting up a Kubernetes cluster on AWS EKS',
      content: 'I\'m planning to set up a Kubernetes cluster on AWS EKS and need guidance...',
      author: 'Emily Watson',
      authorAvatar: '/avatars/emily.jpg',
      category: 'cloud-devops',
      replies: 31,
      views: 234,
      lastActivity: '1 day ago',
      tags: ['kubernetes', 'aws', 'eks', 'devops'],
      isPinned: false,
      isSolved: false
    }
  ];
  const filteredEvents = communityEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedEventType === 'all' || event.type === selectedEventType;
    return matchesSearch && matchesType;
  });
  const filteredTopics = forumTopics.filter(topic => {
    if (selectedCategory !== 'all' && topic.category !== selectedCategory) return false;
    
    if (searchTerm) {
      return topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             topic.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
             topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    return true;
  });
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'virtual': return 'bg-blue-100 text-blue-800';
      case 'in-person': return 'bg-green-100 text-green-800';
      case 'hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'virtual': return Video;
      case 'in-person': return MapPin;
      case 'hybrid': return Globe;
      default: return Calendar;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Zion Tech Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow tech professionals, share knowledge, and grow together in our vibrant community.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search community content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">
                <UserPlus className="w-4 h-4 mr-2 inline" />
                Join Community
              </button>
              <button className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4 mr-2 inline" />
                Start Discussion
              </button>
            </div>
          </div>
        </motion.div>
        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <Users className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">12,847</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <MessageSquare className="w-8 h-8 text-zion-purple mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">8,234</div>
              <div className="text-gray-600">Discussions</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <Calendar className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Events This Year</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="virtual">Virtual</option>
                <option value="in-person">In-Person</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => {
                const EventTypeIcon = getEventTypeIcon(event.type);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{event.category}</div>
                          <div className="text-xs text-gray-400">{event.organizer}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="space-y-2 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <EventTypeIcon className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{event.attendees}/{event.maxAttendees} attendees</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm">
                          Learn More
                        </button>
                        <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-sm">
                          Register
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or event type filter.
              </p>
            </div>
          )}
        </motion.div>
        {/* Forum Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Forum Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`text-left p-6 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{category.topicCount} topics</span>
                  <span>{category.postCount} posts</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
        {/* Recent Discussions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Recent Discussions' : `${forumCategories.find(cat => cat.id === selectedCategory)?.name} Discussions`}
            </h2>
            <span className="text-gray-500">{filteredTopics.length} topics found</span>
          </div>
          {filteredTopics.length > 0 ? (
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-zion-cyan rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {topic.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        {topic.isPinned && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Pinned
                          </span>
                        )}
                        {topic.isSolved && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Solved
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          forumCategories.find(cat => cat.id === topic.category)?.color.replace('bg-', 'bg-').replace('-500', '-100') + ' text-' + 
                          forumCategories.find(cat => cat.id === topic.category)?.color.replace('bg-', '').replace('-500', '-800')
                        }`}>
                          {forumCategories.find(cat => cat.id === topic.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-gray-600 mb-3">{topic.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {topic.author}</span>
                          <span>{topic.lastActivity}</span>
                          <span>{topic.replies} replies</span>
                          <span>{topic.views} views</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Bookmark className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No discussions found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.div>
        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Connect, learn, and grow with thousands of tech professionals worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Active Discussions</h3>
                <p className="text-sm text-zion-cyan-light">
                  Engage in meaningful conversations
                </p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Regular Events</h3>
                <p className="text-sm text-zion-cyan-light">
                  Attend workshops and meetups
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Networking</h3>
                <p className="text-sm text-zion-cyan-light">
                  Connect with industry leaders
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className="px-6 py-3 bg-white text-zion-cyan rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/docs"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <FileText className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Technical guides and resources</p>
            </Link>
            <Link
              to="/webinars"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Video className="w-8 h-8 text-zion-purple mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Webinars</h3>
              <p className="text-sm text-gray-600">Educational content and sessions</p>
            </Link>
            <Link
              to="/training"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Bookmark className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-sm text-gray-600">Professional development courses</p>
            </Link>
            <Link
              to="/help"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Users2 className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-sm text-gray-600">Get help and assistance</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Community;
