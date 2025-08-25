<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  TrendingUp, 
  BookOpen,
  Video,
  Globe,
  Heart,
  Share2,
  ThumbsUp,
  Eye,
  Clock,
  MapPin,
  Tag,
  Cloud
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-zion-purple to-zion-cyan' },
    { id: 'ai', name: 'AI & Machine Learning', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Award, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-500 to-blue-500' },
    { id: 'general', name: 'General Discussion', icon: Users, color: 'from-gray-500 to-gray-700' }
  ];

  const forumTopics = [
    {
      id: 1,
      title: 'Best practices for implementing AI in enterprise environments',
      author: 'Sarah Chen',
      category: 'ai',
      replies: 24,
      views: 156,
      likes: 18,
      lastActivity: '2 hours ago',
      tags: ['AI', 'Enterprise', 'Best Practices']
    },
    {
      id: 2,
      title: 'Quantum computing applications in financial modeling',
      author: 'Dr. Michael Rodriguez',
      category: 'quantum',
      replies: 31,
      views: 203,
      likes: 25,
      lastActivity: '5 hours ago',
      tags: ['Quantum', 'Finance', 'Modeling']
    },
    {
      id: 3,
      title: 'Zero-trust security architecture implementation guide',
      author: 'Alex Thompson',
      category: 'cybersecurity',
      replies: 19,
      views: 128,
      likes: 22,
      lastActivity: '1 day ago',
      tags: ['Security', 'Zero-Trust', 'Architecture']
    },
    {
      id: 4,
      title: 'Kubernetes deployment strategies for microservices',
      author: 'Maria Garcia',
      category: 'cloud',
      replies: 42,
      views: 287,
      likes: 35,
      lastActivity: '3 days ago',
      tags: ['Kubernetes', 'Microservices', 'DevOps']
    },
    {
      id: 5,
      title: 'Building autonomous business systems with AI',
      author: 'David Kim',
      category: 'ai',
      replies: 28,
      views: 189,
      likes: 21,
      lastActivity: '4 days ago',
      tags: ['AI', 'Autonomous', 'Business Systems']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      date: 'December 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: 250,
      category: 'ai'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: 75,
      category: 'quantum'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices Meetup',
      date: 'January 10, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      attendees: 45,
      category: 'cybersecurity'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'AI Implementation Guide',
      type: 'Guide',
      author: 'Zion Tech Team',
      downloads: 1247,
      rating: 4.8,
      category: 'ai'
    },
    {
      id: 2,
      title: 'Quantum Algorithms for Beginners',
      type: 'Tutorial',
      author: 'Dr. Elena Petrova',
      downloads: 892,
      rating: 4.9,
      category: 'quantum'
    },
    {
      id: 3,
      title: 'Enterprise Security Framework',
      type: 'Framework',
      author: 'Security Team',
      downloads: 1563,
      rating: 4.7,
      category: 'cybersecurity'
    }
  ];

  const filteredTopics = forumTopics.filter(topic => 
    selectedCategory === 'all' || topic.category === selectedCategory
  );
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Connect with fellow innovators, share knowledge, and stay ahead of the curve 
              in AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('forums')}
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
              >
                Join Discussion
              </button>
              <Link
                to="/events"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'forums', name: 'Forums', icon: MessageCircle },
              { id: 'events', name: 'Events', icon: Calendar },
              { id: 'resources', name: 'Resources', icon: BookOpen }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white shadow-lg'
                      : 'bg-zion-slate/20 text-zion-slate-light hover:bg-zion-slate/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map(category => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white'
                            : 'bg-zion-slate/20 text-zion-slate-light hover:bg-zion-slate/30'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Forum Topics */}
              <div className="space-y-4">
                {filteredTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-slate/20 rounded-xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === topic.category)?.color} text-white text-xs rounded-full font-medium`}>
                            {categories.find(c => c.id === topic.category)?.name}
                          </span>
                          <span className="text-zion-slate-light text-sm">by {topic.author}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 hover:text-zion-cyan transition-colors cursor-pointer">
                          {topic.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topic.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded border border-zion-cyan/30"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex lg:flex-col gap-4 lg:gap-2 text-sm">
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <MessageCircle className="w-4 h-4" />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Eye className="w-4 h-4" />
                          <span>{topic.views}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{topic.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Start New Discussion */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105">
                  Start New Discussion
                </button>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-slate/20 rounded-xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === event.category)?.color} text-white text-xs rounded-full font-medium`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>
                    <div className="space-y-3 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-zion-cyan" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-zion-cyan" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    <button className="w-full mt-6 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white py-3 rounded-lg font-medium transition-all duration-300">
                      Register Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-slate/20 rounded-xl p-6 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categories.find(c => c.id === resource.category)?.color} text-white text-xs rounded-full font-medium`}>
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">by {resource.author}</p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-zion-slate-light">{resource.downloads} downloads</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white">{resource.rating}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white py-3 rounded-lg font-medium transition-all duration-300">
                      Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of professionals who are already part of our growing community. 
              Share knowledge, learn from experts, and build meaningful connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105">
                Join Community
              </button>
              <Link
                to="/contact"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
