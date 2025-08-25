import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  MapPinIcon,
  GlobeAltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'events', name: 'Events' },
    { id: 'forums', name: 'Forums' },
    { id: 'groups', name: 'Groups' },
    { id: 'resources', name: 'Resources' }
  ];

  const communityStats = [
    { label: 'Active Members', value: '2,500+', icon: UsersIcon },
    { label: 'Events This Year', value: '45+', icon: CalendarIcon },
    { label: 'Discussion Topics', value: '1,200+', icon: ChatBubbleLeftRightIcon },
    { label: 'Countries', value: '28+', icon: GlobeAltIcon }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Autonomous Systems Workshop',
      date: '2025-02-15',
      time: '10:00 AM - 2:00 PM EST',
      location: 'Virtual + Middletown, DE',
      type: 'Workshop',
      description: 'Hands-on workshop on building and deploying AI autonomous business systems.',
      attendees: 45,
      category: 'AI & ML'
    },
    {
      id: 2,
      title: 'Quantum Computing Meetup',
      date: '2025-02-20',
      time: '6:00 PM - 8:00 PM EST',
      location: 'Middletown, DE',
      type: 'Meetup',
      description: 'Network with quantum computing enthusiasts and learn about latest developments.',
      attendees: 32,
      category: 'Quantum Technology'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      date: '2025-02-25',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual',
      type: 'Webinar',
      description: 'Learn about the latest cybersecurity threats and defense strategies.',
      attendees: 78,
      category: 'Security'
    },
    {
      id: 4,
      title: 'Startup Pitch Night',
      date: '2025-03-01',
      time: '7:00 PM - 9:00 PM EST',
      location: 'Middletown, DE',
      type: 'Networking',
      description: 'Connect with entrepreneurs and investors in the tech space.',
      attendees: 65,
      category: 'Business'
    }
  ];

  const communityGroups = [
    {
      id: 1,
      name: 'AI & Machine Learning',
      members: 450,
      description: 'Discuss AI trends, share projects, and collaborate on ML solutions.',
      category: 'Technology',
      isActive: true
    },
    {
      id: 2,
      name: 'Quantum Computing Enthusiasts',
      members: 180,
      description: 'Explore quantum computing applications and research opportunities.',
      category: 'Research',
      isActive: true
    },
    {
      id: 3,
      name: 'Cybersecurity Professionals',
      members: 320,
      description: 'Share security insights, discuss threats, and best practices.',
      category: 'Security',
      isActive: true
    },
    {
      id: 4,
      name: 'Startup Founders',
      members: 95,
      description: 'Connect with fellow entrepreneurs and share startup experiences.',
      category: 'Business',
      isActive: false
    },
    {
      id: 5,
      name: 'Cloud & DevOps Engineers',
      members: 280,
      description: 'Discuss cloud architecture, DevOps practices, and infrastructure.',
      category: 'Technology',
      isActive: true
    },
    {
      id: 6,
      name: 'Data Science Community',
      members: 210,
      description: 'Share data insights, discuss analytics, and collaborate on projects.',
      category: 'Research',
      isActive: true
    }
  ];

  const forumTopics = [
    {
      id: 1,
      title: 'Best practices for AI model deployment in production',
      author: 'Sarah Chen',
      replies: 23,
      views: 156,
      category: 'AI & ML',
      lastActivity: '2 hours ago',
      isSticky: true
    },
    {
      id: 2,
      title: 'Quantum advantage in financial modeling - real examples?',
      author: 'Mike Rodriguez',
      replies: 18,
      views: 89,
      category: 'Quantum',
      lastActivity: '1 day ago',
      isSticky: false
    },
    {
      id: 3,
      title: 'SOC2 compliance automation tools comparison',
      author: 'Lisa Thompson',
      replies: 31,
      views: 203,
      category: 'Security',
      lastActivity: '3 days ago',
      isSticky: false
    },
    {
      id: 4,
      title: '5G enterprise deployment challenges and solutions',
      author: 'James Wilson',
      replies: 15,
      views: 67,
      category: 'Technology',
      lastActivity: '5 days ago',
      isSticky: false
    }
  ];

  const resources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and participation rules.',
      icon: HeartIcon,
      href: '#'
    },
    {
      title: 'Knowledge Base',
      description: 'Access our shared knowledge repository and documentation.',
      icon: AcademicCapIcon,
      href: '#'
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals for guidance.',
      icon: UserGroupIcon,
      href: '#'
    },
    {
      title: 'Innovation Hub',
      description: 'Submit and collaborate on innovative project ideas.',
      icon: LightBulbIcon,
      href: '#'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect, collaborate, and innovate with fellow technology professionals, researchers, and enthusiasts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Community Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-12"
          >
            {/* Welcome Section */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Welcome to Our Community
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                The Zion Tech Community is a vibrant ecosystem of technology professionals, researchers, entrepreneurs, and enthusiasts. 
                We're united by our passion for innovation and our commitment to advancing technology for the betterment of society.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What We Do</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Share knowledge and best practices</li>
                    <li>• Collaborate on innovative projects</li>
                    <li>• Network with industry professionals</li>
                    <li>• Learn from experts and peers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Get Involved</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Join community groups</li>
                    <li>• Attend events and meetups</li>
                    <li>• Participate in discussions</li>
                    <li>• Share your expertise</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Quick Actions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200"
                  >
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {resource.description}
                    </p>
                    <a
                      href={resource.href}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Upcoming Events
            </h2>
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                          {event.type}
                        </span>
                        <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{event.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{event.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <UsersIcon className="h-4 w-4" />
                          <span>{event.attendees} attending</span>
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                      <span>Register</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Forums Tab */}
        {activeTab === 'forums' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Community Discussions
            </h2>
            <div className="grid gap-4">
              {forumTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {topic.isSticky && (
                          <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs">
                            Sticky
                          </span>
                        )}
                        <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">
                          {topic.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {topic.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>By {topic.author}</span>
                        <span>{topic.replies} replies</span>
                        <span>{topic.views} views</span>
                        <span>{topic.lastActivity}</span>
                      </div>
                    </div>
                    <button className="ml-4 inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                      <span>Join Discussion</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Groups Tab */}
        {activeTab === 'groups' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Community Groups
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">
                      {group.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      group.isActive 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-gray-600/20 text-gray-400'
                    }`}>
                      {group.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {group.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {group.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {group.members} members
                    </span>
                    <button className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                      <span>Join Group</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
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
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Community Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 border border-white/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Learning & Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AcademicCapIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Online Courses</h4>
                      <p className="text-gray-300 text-sm">Access to exclusive courses on AI, quantum computing, and cybersecurity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UserGroupIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Mentorship Program</h4>
                      <p className="text-gray-300 text-sm">Connect with experienced professionals for career guidance.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <LightBulbIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Innovation Challenges</h4>
                      <p className="text-gray-300 text-sm">Participate in hackathons and innovation competitions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Networking & Collaboration
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Regular Meetups</h4>
                      <p className="text-gray-300 text-sm">Monthly in-person and virtual networking events.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Discussion Forums</h4>
                      <p className="text-gray-300 text-sm">Active forums for technical discussions and Q&A.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GlobeAltIcon className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Global Network</h4>
                      <p className="text-gray-300 text-sm">Connect with professionals from around the world.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Community;