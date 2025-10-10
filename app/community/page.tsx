'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users,
  MessageSquare,
  Star,
  ThumbsUp,
  Share2,
  Plus,
  Search,
  Filter,
  Calendar,
  Award,
  TrendingUp,
  BookOpen,
  Video,
  Code,
  Lightbulb,
  Heart,
  Reply,
  Flag
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for AI workflow automation',
      author: 'Sarah Chen',
      authorAvatar: '👩‍💼',
      category: 'AI Automation',
      replies: 24,
      likes: 18,
      time: '2 hours ago',
      isPinned: true,
      tags: ['workflow', 'automation', 'best-practices']
    },
    {
      id: 2,
      title: 'Integrating AI customer support with existing CRM',
      author: 'Mike Rodriguez',
      authorAvatar: '👨‍💻',
      category: 'Customer Support',
      replies: 15,
      likes: 12,
      time: '4 hours ago',
      isPinned: false,
      tags: ['crm', 'integration', 'customer-support']
    },
    {
      id: 3,
      title: 'AI content generation tips and tricks',
      author: 'Emily Watson',
      authorAvatar: '👩‍🎨',
      category: 'Content Creation',
      replies: 31,
      likes: 25,
      time: '6 hours ago',
      isPinned: false,
      tags: ['content', 'generation', 'tips']
    },
    {
      id: 4,
      title: 'Quantum computing applications in healthcare AI',
      author: 'Dr. James Liu',
      authorAvatar: '👨‍⚕️',
      category: 'Healthcare AI',
      replies: 8,
      likes: 15,
      time: '1 day ago',
      isPinned: false,
      tags: ['quantum', 'healthcare', 'research']
    }
  ];

  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM EST',
      type: 'Conference',
      attendees: 250,
      description: 'Join industry leaders for a day of AI innovation and networking'
    },
    {
      title: 'Weekly AI Office Hours',
      date: 'Every Friday',
      time: '2:00 PM - 3:00 PM EST',
      type: 'Office Hours',
      attendees: 50,
      description: 'Get help with your AI implementation questions'
    },
    {
      title: 'AI Hackathon: Climate Solutions',
      date: 'April 20-22, 2024',
      time: '48 hours',
      type: 'Hackathon',
      attendees: 100,
      description: 'Build AI solutions for climate change challenges'
    }
  ];

  const resources = [
    {
      title: 'AI Implementation Guide',
      type: 'Documentation',
      icon: BookOpen,
      downloads: 1250,
      description: 'Complete guide to implementing AI solutions in your organization'
    },
    {
      title: 'API Integration Tutorial',
      type: 'Video',
      icon: Video,
      views: 3200,
      description: 'Step-by-step tutorial for integrating our AI APIs'
    },
    {
      title: 'Code Examples Repository',
      type: 'Code',
      icon: Code,
      stars: 450,
      description: 'Open source code examples and templates'
    }
  ];

  const stats = [
    { label: 'Community Members', value: '2,500+', icon: Users },
    { label: 'Discussions', value: '1,200+', icon: MessageSquare },
    { label: 'Resources', value: '350+', icon: BookOpen },
    { label: 'Events', value: '50+', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Connect, learn, and grow with AI professionals and enthusiasts worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Join Community
              <Users className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Browse Discussions
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="flex flex-wrap justify-center mb-8"></div>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'discussions'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Discussions
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'resources'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Resources
            </button>
          </div>

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-6"></div>
              <div className="flex justify-between items-center mb-6"></div>
                <h2 className="text-2xl font-bold text-white">Latest Discussions</h2>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  New Discussion
                </button>
              </div>

              {discussions.map((discussion) => (
                <div key={discussion.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-start space-x-4"></div>
                    <div className="text-2xl">{discussion.authorAvatar}</div>
                    <div className="flex-1"></div>
                      <div className="flex items-center space-x-2 mb-2">
                        {discussion.isPinned && (</div>
                          <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">
                            PINNED
                          </span>
                        )}
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded">
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3"></div>
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.time}</span>
                      </div>
                      <div className="flex items-center space-x-6"></div>
                        <div className="flex items-center space-x-1"></div>
                          <MessageSquare className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <ThumbsUp className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{discussion.likes}</span>
                        </div>
                        <div className="flex space-x-1">
                          {discussion.tags.map((tag, index) => (</div>
                            <span key={index} className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
              {events.map((event, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-start justify-between"></div>
                    <div className="flex-1"></div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
                        <div className="flex items-center space-x-1"></div>
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">
                          {event.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-6"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (</div>
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                    <div className="flex items-center mb-4"></div>
                      <resource.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between"></div>
                      <span className="text-sm text-gray-400">
                        {resource.downloads ? `${resource.downloads} downloads` :
                         resource.views ? `${resource.views} views` :
                         `${resource.stars} stars`}
                      </span>
                      <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                        View Resource
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;