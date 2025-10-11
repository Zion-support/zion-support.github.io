'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageSquare, Calendar, Award, Star, Heart, Share2, ExternalLink, ArrowRight, Globe, Code, Book, Zap, Shield, Brain, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members' },
    { icon: MessageSquare, value: '12,000+', label: 'Discussions' },
    { icon: Calendar, value: '50+', label: 'Events This Year' },
    { icon: Award, value: '200+', label: 'Contributors' }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Getting Started with AI-Powered Analytics',
      author: 'Sarah Chen',
      authorRole: 'CTO',
      avatar: '/images/community/sarah-chen.jpg',
      category: 'AI Services',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      excerpt: 'A comprehensive guide to implementing AI analytics in your business...'
    },
    {
      id: 2,
      title: 'Best Practices for Cloud Migration',
      author: 'Michael Rodriguez',
      authorRole: 'Solutions Architect',
      avatar: '/images/community/michael-rodriguez.jpg',
      category: 'Cloud Services',
      likes: 18,
      comments: 12,
      timeAgo: '4 hours ago',
      excerpt: 'Learn from our experience helping 100+ companies migrate to the cloud...'
    },
    {
      id: 3,
      title: 'Micro SaaS Development Tips',
      author: 'Emily Johnson',
      authorRole: 'Lead Developer',
      avatar: '/images/community/emily-johnson.jpg',
      category: 'Development',
      likes: 31,
      comments: 15,
      timeAgo: '6 hours ago',
      excerpt: 'Essential tips for building and scaling micro SaaS applications...'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Virtual Event',
      description: 'Join industry leaders for a day of AI innovation and networking.',
      attendees: 150,
      type: 'Conference'
    },
    {
      id: 2,
      title: 'Cloud Migration Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      description: 'Hands-on workshop for planning and executing cloud migrations.',
      attendees: 75,
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Developer Meetup',
      date: 'March 29, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'San Francisco, CA',
      description: 'Monthly meetup for developers to share knowledge and network.',
      attendees: 45,
      type: 'Meetup'
    }
  ];

  const resources = [
    {
      title: 'Developer Documentation',
      description: 'Comprehensive guides and API references',
      icon: Code,
      link: '/docs',
      category: 'Documentation'
    },
    {
      title: 'Learning Center',
      description: 'Tutorials, courses, and educational content',
      icon: Book,
      link: '/tutorials',
      category: 'Education'
    },
    {
      title: 'Open Source Projects',
      description: 'Contribute to our open source initiatives',
      icon: Globe,
      link: '/open-source',
      category: 'Open Source'
    },
    {
      title: 'Community Guidelines',
      description: 'Rules and best practices for community participation',
      icon: Shield,
      link: '/guidelines',
      category: 'Guidelines'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Users },
    { id: 'discussions', name: 'Discussions', icon: MessageSquare },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'resources', name: 'Resources', icon: Book }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group | Developer Community & Resources</title>
        <meta name="description" content="Join the Zion Tech Group community of developers, AI enthusiasts, and technology professionals. Access resources, participate in discussions, and attend events." />
        <meta name="keywords" content="community, developers, AI community, technology professionals, discussions, events, resources" />
        <meta property="og:title" content="Community - Zion Tech Group" />
        <meta property="og:description" content="Join our developer community and access resources" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-cyan-400">Community</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Connect with developers, AI enthusiasts, and technology professionals. Share knowledge, collaborate on projects, and grow together.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
                  Join Community
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg">
                  View Guidelines
                </button>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {activeTab === 'overview' && (
                <div className="space-y-12">
                  {/* Recent Discussions */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Recent Discussions</h2>
                    <div className="space-y-6">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                                <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs">
                                  {post.category}
                                </span>
                              </div>
                              <p className="text-gray-300 mb-4">{post.excerpt}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>{post.author} • {post.authorRole}</span>
                                  <span>{post.timeAgo}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1">
                                    <Heart className="w-4 h-4" />
                                    <span>{post.likes}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{post.comments}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'discussions' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Community Discussions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['AI & Machine Learning', 'Cloud Services', 'Development', 'Security', 'DevOps', 'Data Science'].map((category, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                        <h3 className="text-lg font-semibold text-white mb-3">{category}</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Join discussions about {category.toLowerCase()} and share your knowledge.
                        </p>
                        <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                          View Discussions →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                              <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs">
                                {event.type}
                              </span>
                            </div>
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{event.attendees} attending</span>
                              </div>
                            </div>
                          </div>
                          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Register
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Community Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.link}
                        className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <resource.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 text-sm font-medium">{resource.category}</span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-cyan-400">Join?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Become part of our growing community of technology professionals and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg">
                  Join Now
                </button>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CommunityPage;