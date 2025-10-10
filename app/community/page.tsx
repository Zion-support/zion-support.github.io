'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members',},
    { icon: MessageCircle, value: '50+', label: 'Discussions Daily',},
    { icon: Calendar, value: '12', label: 'Events Monthly',},
    { icon: Star, value: '4.9', label: 'Average Rating',}
  ];
  const events = [
    {
      title: 'AI Development Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn advanced AI development techniques and best practices',
    },
    {
      title: 'Cloud Infrastructure Meetup',
      date: '2024-02-20',
      time: '6:00 PM EST',
      type: 'Meetup',
      attendees: 75,
      description: 'Discuss cloud architecture and deployment strategies',
    },
    {
      title: 'SaaS Business Growth Panel',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'Panel',
      attendees: 200,
      description: 'Expert panel on scaling SaaS businesses',
    }
  ];
  const forums = [
    {
      name: 'AI Services',
      description: 'Discuss AI development, machine learning, and automation',
      posts: 1250,
      members: 1800,
    },
    {
      name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200,
    },
    {
      name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900,
    },
    {
      name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
      members: 3000,
    }
  ];
  const benefits = [
    {
      icon: Users,
      title: 'Network with Peers',
      description: 'Connect with like-minded developers and entrepreneurs',
    },
    {
      icon: MessageCircle,
      title: 'Expert Support',
      description: 'Get help from our team of experts and community members',
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Access to workshops, webinars, and networking events'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Showcase your projects and get community recognition',
    }
  ]

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts. Learn, share, and grow together." />
        <meta name="keywords" content="community, developers, tech community, networking, events, forums, AI community" />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <div className="flex items-center justify-center mb-6"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4"></div>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced"></h1>
                Community
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
              Connect, learn, and grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <a
                href="#join"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Join Community
              </a>
              <a
                href="#events"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Events
              </a>
              <a
                href="#forums"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Browse Forums
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"></div>
            {communityStats.map((stat, index) => (
              <div key={index} className="cyber-card-enhanced p-6 text-center"></div>
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2"></div>{stat.value}</div>
                <div className="text-gray-300"></div>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-8"></div>
            <div className="flex flex-wrap justify-center gap-4"></div>
              {[
                { id: 'overview', name: 'Overview',},
                { id: 'events', name: 'Events',},
                { id: 'forums', name: 'Forums',},
                { id: 'benefits', name: 'Benefits',}
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =></button> setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700',
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12"></div>
              <div className="cyber-card-enhanced p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2>Welcome to Our Community</h2>
                <p className="text-gray-300 mb-6 leading-relaxed"></p>
                  Our community is a place where developers, entrepreneurs, and tech enthusiasts come together 
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're 
                  just starting out or you're a seasoned professional, you'll find value in our diverse and 
                  welcoming community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-3"></h3>What You'll Find</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Technical discussions and problem-solving
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Project showcases and feedback
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Career advice and networking
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Industry insights and trends
                      </li>
                    </ul>
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-3"></h3>Community Guidelines</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-8"></div>
              <div className="cyber-card-enhanced p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2>Upcoming Events</h2>
                <div className="space-y-6"></div>
                  {events.map((event, index) => (
                    <div key={index} className="bg-slate-800 rounded-lg p-6"></div>
                      <div className="flex items-start justify-between mb-4"></div>
                        <div className="flex-1"></div>
                          <h3 className="text-xl font-semibold text-white mb-2"></h3>{event.title}</h3>
                          <p className="text-gray-300 mb-3"></p>{event.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.time}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {event.attendees} attendees
                            </span>
                          </div>
                        </div>
                        <div className="ml-6"></div>
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="space-y-8"></div>
              <div className="cyber-card-enhanced p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2>Community Forums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  {forums.map((forum, index) => (
                    <div key={index} className="bg-slate-800 rounded-lg p-6"></div>
                      <h3 className="text-lg font-semibold text-white mb-2"></h3>{forum.name}</h3>
                      <p className="text-gray-300 mb-4"></p>{forum.description}</p>
                      <div className="flex items-center justify-between mb-4"></div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {forum.posts} posts
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {forum.members} members
                          </span>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
                      >
                        Visit Forum
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-8"></div>
              <div className="cyber-card-enhanced p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2>Community Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4"></div>
                      <div className="flex-shrink-0"></div>
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div></div>
                        <h3 className="text-lg font-semibold text-white mb-2"></h3>{benefit.title}</h3>
                        <p className="text-gray-300"></p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center"></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2>Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join thousands of developers and entrepreneurs who are already part of our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Join Now
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mt-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center"></h2>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              <div className="flex items-center space-x-3"></div>
                <Mail className="w-6 h-6 text-cyan-400" />
                <div></div>
                  <div className="text-white font-semibold"></div>Email</div>
                  <a href="mailto:community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    community@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div>
                <Phone className="w-6 h-6 text-cyan-400" />
                <div></div>
                  <div className="text-white font-semibold"></div>Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3"></div>
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div></div>
                  <div className="text-white font-semibold"></div>Address</div>
                  <div className="text-gray-300"></div>364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;