import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Users, MessageCircle, Calendar, MapPin, Star, Heart, Share2, BookOpen, Code, Zap, Globe, TrendingUp, Award, Users2, MessageSquare, Video, FileText } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'forums', label: 'Forums', icon: MessageCircle },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'contributors', label: 'Contributors', icon: Award }
  ];

  const communityStats = [
    { label: 'Members', value: '15,234', icon: Users, color: 'text-blue-400' },
    { label: 'Topics', value: '8,567', icon: MessageCircle, color: 'text-green-400' },
    { label: 'Events', value: '156', icon: Calendar, color: 'text-yellow-400' },
    { label: 'Resources', value: '2,341', icon: BookOpen, color: 'text-purple-400' }
  ];

  const forumCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Discuss AI algorithms, models, and applications',
      topics: 1247,
      posts: 5678,
      members: 3456,
      icon: Zap,
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      name: 'Development & Coding',
      description: 'Share code, discuss best practices, and get help',
      topics: 892,
      posts: 4234,
      members: 2890,
      icon: Code,
      color: 'bg-green-500/20 text-green-400'
    },
    {
      name: 'Business & Strategy',
      description: 'Discuss business applications and strategic implementation',
      topics: 567,
      posts: 2345,
      members: 1890,
      icon: TrendingUp,
      color: 'bg-yellow-500/20 text-yellow-400'
    },
    {
      name: 'Data & Analytics',
      description: 'Explore data science, analytics, and visualization',
      topics: 445,
      posts: 1890,
      members: 1234,
      icon: Globe,
      color: 'bg-purple-500/20 text-purple-400'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual',
      attendees: 156,
      maxAttendees: 200,
      type: 'Workshop',
      featured: true
    },
    {
      title: 'Machine Learning Meetup',
      date: '2024-02-20',
      time: '6:00 PM - 8:00 PM',
      location: 'San Francisco, CA',
      attendees: 89,
      maxAttendees: 100,
      type: 'Meetup',
      featured: false
    },
    {
      title: 'Data Science Hackathon',
      date: '2024-03-01',
      time: '9:00 AM - 6:00 PM',
      location: 'Virtual',
      attendees: 234,
      maxAttendees: 300,
      type: 'Hackathon',
      featured: true
    }
  ];

  const topContributors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      contributions: 156,
      reputation: 4.9,
      avatar: '/images/avatars/sarah-chen.jpg',
      badges: ['Expert', 'Mentor', 'Speaker']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Developer',
      contributions: 134,
      reputation: 4.8,
      avatar: '/images/avatars/michael-rodriguez.jpg',
      badges: ['Expert', 'Contributor']
    },
    {
      name: 'Emily Watson',
      role: 'Data Scientist',
      contributions: 98,
      reputation: 4.7,
      avatar: '/images/avatars/emily-watson.jpg',
      badges: ['Expert', 'Mentor']
    },
    {
      name: 'Alex Thompson',
      role: 'Full-Stack Developer',
      contributions: 87,
      reputation: 4.6,
      avatar: '/images/avatars/alex-thompson.jpg',
      badges: ['Contributor']
    }
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and best practices',
      type: 'Documentation',
      icon: FileText,
      link: '/community/guidelines'
    },
    {
      title: 'Code of Conduct',
      description: 'Our commitment to creating an inclusive environment',
      type: 'Policy',
      icon: Users2,
      link: '/community/code-of-conduct'
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals for guidance',
      type: 'Program',
      icon: Heart,
      link: '/community/mentorship'
    },
    {
      title: 'Knowledge Base',
      description: 'Access our comprehensive community knowledge base',
      type: 'Resource',
      icon: BookOpen,
      link: '/community/knowledge-base'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of developers, AI enthusiasts, and technology professionals. Connect, learn, and grow together."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with thousands of developers, AI enthusiasts, and technology professionals. 
              Share knowledge, get help, and grow your network.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Users className="w-5 h-5" />
                Join Community
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <MessageCircle className="w-5 h-5" />
                Browse Forums
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Calendar className="w-5 h-5" />
                View Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Welcome to Our Community</h2>
              <p className="text-gray-300 mb-8">
                Our community is a vibrant space where technology professionals, developers, and AI enthusiasts come together 
                to share knowledge, solve problems, and build meaningful connections.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">What You Can Do</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Ask questions and get expert answers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Share your knowledge and experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Connect with like-minded professionals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Participate in events and workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Contribute to open-source projects
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Community Values</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Inclusivity and diversity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Knowledge sharing and collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Respectful and constructive dialogue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Continuous learning and growth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Innovation and creativity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forums' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Community Forums</h2>
              <p className="text-gray-300 mb-8">
                Join discussions in our specialized forums. Ask questions, share insights, and connect with experts in your field.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {forumCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4 text-center text-sm">
                        <div>
                          <div className="text-white font-semibold">{category.topics}</div>
                          <div className="text-gray-400">Topics</div>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{category.posts}</div>
                          <div className="text-gray-400">Posts</div>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{category.members}</div>
                          <div className="text-gray-400">Members</div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Join Discussion
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
              <p className="text-gray-300 mb-8">
                Participate in our community events, workshops, and meetups. Connect with fellow members and expand your knowledge.
              </p>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={`bg-slate-800 rounded-lg p-6 ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
                    {event.featured && (
                      <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured Event
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        <span className="text-white font-semibold">{event.attendees}</span> / {event.maxAttendees} attendees
                      </div>
                      
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
              <p className="text-gray-300 mb-8">
                Access helpful resources to make the most of your community experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <Icon className="w-8 h-8 text-blue-400 mb-4" />
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          Learn More
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'contributors' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Top Contributors</h2>
              <p className="text-gray-300 mb-8">
                Meet our community leaders and top contributors who help make this community amazing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{contributor.name}</h3>
                        <p className="text-gray-400 text-sm">{contributor.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-300">
                        <span className="text-white font-semibold">{contributor.contributions}</span> contributions
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{contributor.reputation}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {contributor.badges.map((badge, badgeIndex) => (
                        <span key={badgeIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with thousands of professionals, share your knowledge, and grow your network. 
            Join us today and be part of something amazing.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              <Users className="w-5 h-5" />
              Join Community
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              <MessageCircle className="w-5 h-5" />
              Browse Forums
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;