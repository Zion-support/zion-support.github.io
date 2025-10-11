<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];
=======
<<<<<<< HEAD
'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart}}from 'lucide-react';
>>>>>>> origin/main

const CommunityPage: React.FC = () => {,
  const [activeTab, setActiveTab] = useState('overview');

=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react'
const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
>>>>>>> origin/main
  const communityStats = [
<<<<<<< HEAD
    { icon: Users, value: '5,000+', label: 'Active Members' ,},
    {icon: MessageCircle, value: '50+', label: 'Discussions Daily' ,},
    {icon: Calendar, value: '12', label: 'Events Monthly' ,},
    {icon: Star, value: '4.9', label: 'Average Rating' ,}];
=======
    { icon: Users, value: '5,000+', label: 'Active Members' },
    { icon: MessageCircle, value: '50+', label: 'Discussions Daily' },
    { icon: Calendar, value: '12', label: 'Events Monthly' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
>>>>>>> origin/main
  const events = [
    {title: 'AI Development Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150,
      description: 'Learn advanced AI development techniques and best practices',},
    {title: 'Cloud Infrastructure Meetup',
      date: '2024-02-20',
      time: '6:00 PM EST',
      type: 'Meetup',
      attendees: 75,
      description: 'Discuss cloud architecture and deployment strategies',},
    {title: 'SaaS Business Growth Panel',
      date: '2024-02-25',
      time: '3:00 PM EST',
      type: 'Panel',
      attendees: 200,
<<<<<<< HEAD
      description: 'Expert panel on scaling SaaS businesses',}];
=======
      description: 'Expert panel on scaling SaaS businesses'
    }
  ]
>>>>>>> origin/main
  const forums = [
    {name: 'AI Services',
      description: 'Discuss AI development, machine learning, and automation',
      posts: 1250,
      members: 1800;,},
    {name: 'IT Services',
      description: 'Cloud infrastructure, DevOps, and system administration',
      posts: 980,
      members: 1200;,},
    {name: 'Micro SaaS',
      description: 'Building and scaling micro SaaS applications',
      posts: 750,
      members: 900;,},
    {name: 'General Discussion',
      description: 'General tech discussions and community updates',
      posts: 2100,
<<<<<<< HEAD
      members: 3000;,}];
=======
      members: 3000
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
>>>>>>> origin/main
  const benefits = [
    {icon: Users,
      title: 'Network with Peers',
      description: 'Connect with like-minded developers and entrepreneurs',},
    {icon: MessageCircle,
      title: 'Expert Support',
      description: 'Get help from our team of experts and community members',},
    {icon: Calendar,
      title: 'Exclusive Events',
      description: 'Access to workshops, webinars, and networking events'},
    {icon: Award,
      title: 'Recognition',
<<<<<<< HEAD
      description: 'Showcase your projects and get community recognition',}]

  return(<>)
      <Helmet />
=======
      description: 'Showcase your projects and get community recognition'
    }
  ]

  return (
    <>
      <Helmet>
<<<<<<< HEAD
>>>>>>> origin/main
        <title>Community - Zion Tech Group</title>
=======
        </Helmet><title>Community - Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts. Learn, share, and grow together." />
        <meta name="keywords" content="community, developers, tech community, networking, events, forums, AI community" />
        <link rel="canonical" href="https: //ziontechgroup.com/community" />,
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
=======
        </div><div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          </div><div className="text-center mb-16">
            </div><div className="flex items-center justify-center mb-6">
              </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                </div><Users className="w-8 h-8 text-white" />
>>>>>>> origin/main
              </div>
              <h1 className="text-4xl md: text-5xl font-bold text-white neon-text-enhanced">,</h1>
                Community;
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Join our vibrant community of developers, entrepreneurs, and tech enthusiasts.</p>
              Connect, learn, and grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
              <a;
=======
              </div><$2 />
>>>>>>> origin/main
                href="#join"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Community;
              </a>
<<<<<<< HEAD
              <a;
=======
              <$2 />
>>>>>>> origin/main
                href="#events"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                View Events;
              </a>
<<<<<<< HEAD
              <a;
=======
              <$2 />
>>>>>>> origin/main
                href="#forums"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
              >
                Browse Forums;
              </a>
            </div>
          </div>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
          {/* Stats */} <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-16">,</div>
            {communityStats.map((stat, index) => (
<<<<<<< HEAD
              <div key={index}className="cyber-card-enhanced p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
=======
              </div><div key={index} className="cyber-card-enhanced p-6 text-center">
                </div><stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
>>>>>>> origin/main
>>>>>>> origin/main
              </div>
            ))}
          </div>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
=======
<<<<<<< HEAD
          {/* Tabs */} <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">{[</div>
                { id: 'overview', name: 'Overview' ,},
                {id: 'events', name: 'Events' ,},
                {id: 'forums', name: 'Forums' ,},
                {id: 'benefits', name: 'Benefits' ,}].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
=======
          {/* Tabs */}
          <div className="mb-8">
            </div><div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'events', name: 'Events' },
                { id: 'forums', name: 'Forums' },
                { id: 'benefits', name: 'Benefits' }
              ].map((tab) => (
                </div><$2 />
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
>>>>>>> origin/main
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700',}`}
                >
                  {tab.name} </button>
              ))}
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Overview Tab */}{activeTab === 'overview' && (
=======
          {/* Overview Tab */},
    {activeTab === 'overview' && (
>>>>>>> origin/main
            <div className="space-y-12">
              <div className="cyber-card-enhanced p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Welcome to Our Community</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">Our community is a place where developers, entrepreneurs, and tech enthusiasts come together;</p>
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're;
                  just starting out or you're a seasoned professional, you'll find value in our diverse and;
                  welcoming community.
                </p>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">What You'll Find</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Technical discussions and problem-solving;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Project showcases and feedback;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Career advice and networking;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Industry insights and trends;
=======
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              </div><div className="cyber-card-enhanced p-8">
                </div><h2 className="text-2xl font-bold text-white mb-6">Welcome to Our Community</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our community is a place where developers, entrepreneurs, and tech enthusiasts come together 
                  to share knowledge, collaborate on projects, and support each other's growth. Whether you're 
                  just starting out or you're a seasoned professional, you'll find value in our diverse and 
                  welcoming community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  </div><div>
                    </div><h3 className="text-lg font-semibold text-white mb-3">What You'll Find</h3>
                    <ul className="space-y-2">
                      </ul><li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Technical discussions and problem-solving
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Project showcases and feedback
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Career advice and networking
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Industry insights and trends
>>>>>>> origin/main
                      </li>
                    </ul>
                  </div>
                  <div>
                    </div><h3 className="text-lg font-semibold text-white mb-3">Community Guidelines</h3>
                    <ul className="space-y-2">
<<<<<<< HEAD
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive;
=======
                      </ul><li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow
                      </li>
                      <li className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive
>>>>>>> origin/main
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
          )}

          {/* Events Tab */}{activeTab === 'events' && (
=======
          )},
    {/* Events Tab */},
    {activeTab === 'events' && (
>>>>>>> origin/main
            <div className="space-y-8">
              <div className="cyber-card-enhanced p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
                <div className="space-y-6">{events.map((event, index) => (</div>
                    <div key={index}className="bg-slate-800 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-300 mb-3">{event.description</p>}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date} </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.time} </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {event.attendees}attendees;
=======
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-8">
              </div><div className="cyber-card-enhanced p-8">
                </div><h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {events.map((event, index) => (
                    </div><div key={index} className="bg-slate-800 rounded-lg p-6">
                      </div><div className="flex items-start justify-between mb-4">
                        </div><div className="flex-1">
                          </div><h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-300 mb-3">{event.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            </div><span className="flex items-center">
                              </span><Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center">
                              </span><Clock className="w-4 h-4 mr-1" />
                              {event.time}
                            </span>
                            <span className="flex items-center">
                              </span><Users className="w-4 h-4 mr-1" />
                              {event.attendees} attendees
>>>>>>> origin/main
                            </span>
                          </div>
                        </div>
                        <div className="ml-6">
<<<<<<< HEAD
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
=======
                          </div><span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <$2 />
>>>>>>> origin/main
                        href="#"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center",
                      >
<<<<<<< HEAD
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2" />
=======
                        Register Now
                        </a><ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> origin/main
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
=======
          )},
    {/* Forums Tab */},
    {activeTab === 'forums' && (
>>>>>>> origin/main
            <div className="space-y-8">
              <div className="cyber-card-enhanced p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Community Forums</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
                  {forums.map((forum, index) => (
                    <div key={index}className="bg-slate-800 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{forum.name}</h3>
                      <p className="text-gray-300 mb-4">{forum.description</p>}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {forum.posts}posts;
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {forum.members}members;
                          </span>
                        </div>
                      </div>
                      <a;
=======
          )}

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="space-y-8">
              </div><div className="cyber-card-enhanced p-8">
                </div><h2 className="text-2xl font-bold text-white mb-6">Community Forums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {forums.map((forum, index) => (
                    </div><div key={index} className="bg-slate-800 rounded-lg p-6">
                      </div><h3 className="text-lg font-semibold text-white mb-2">{forum.name}</h3>
                      <p className="text-gray-300 mb-4">{forum.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        </div><div className="flex items-center space-x-4 text-sm text-gray-400">
                          </div><span className="flex items-center">
                            </span><MessageCircle className="w-4 h-4 mr-1" />
                            {forum.posts} posts
                          </span>
                          <span className="flex items-center">
                            </span><Users className="w-4 h-4 mr-1" />
                            {forum.members} members
                          </span>
                        </div>
                      </div>
                      <$2 />
>>>>>>> origin/main
                        href="#"
                        className="text-cyan-400 hover: text-cyan-300 font-semibold flex items-center",
                      >
<<<<<<< HEAD
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1" />
=======
                        Visit Forum
                        </a><ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> origin/main
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
=======
          )},
    {/* Benefits Tab */},
    {activeTab === 'benefits' && (
>>>>>>> origin/main
            <div className="space-y-8">
              <div className="cyber-card-enhanced p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Community Benefits</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
                  {benefits.map((benefit, index) => (
                    <div key={index}className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description</p>}</p>
=======
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-8">
              </div><div className="cyber-card-enhanced p-8">
                </div><h2 className="text-2xl font-bold text-white mb-6">Community Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    </div><div key={index} className="flex items-start space-x-4">
                      </div><div className="flex-shrink-0">
                        </div><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          </div><benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        </div><h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
>>>>>>> origin/main
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
=======
          )},
    {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
>>>>>>> origin/main
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of developers and entrepreneurs who are already part of our vibrant community.</p>
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a;
=======
          )}

          {/* Join Community CTA */}
          <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
            </div><h2 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and entrepreneurs who are already part of our vibrant community. 
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              </div><$2 />
>>>>>>> origin/main
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Now;
              </a>
<<<<<<< HEAD
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Learn More;
=======
              < href="/contact"$2 />
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" /></a>
                Learn More
>>>>>>> origin/main
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">,
                    community@ziontechgroup.com;
=======
          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mt-8">
            </div><h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              </div><div className="flex items-center space-x-3">
                </div><Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  </div><div className="text-white font-semibold">Email</div>
                  <a href="mailto:community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    community@ziontechgroup.com
>>>>>>> origin/main
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                </div><Phone className="w-6 h-6 text-cyan-400" />
                <div>
<<<<<<< HEAD
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300">,
                    +1 (302) 464-0950;
=======
                  </div><div className="text-white font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    +1 (302) 464-0950
>>>>>>> origin/main
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                </div><MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  </div><div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommunityPage
        <title>Community | Zion Tech Group
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts." />
        <meta name="keywords" content="community, developers, tech community, networking, Zion Tech Group" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Community
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our community provides opportunities for networking, learning, and collaboration.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
              <p className="text-gray-300">{feature.description}
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Join Our Community?
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join?
          <p className="text-xl text-purple-100 mb-8">
            Become part of our growing community and start connecting with like-minded professionals.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Join Community
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More
  )
}
export default CommunityPage</div></div></div></div></div></div></div></div></div></div></span></button></p></p></p></p></h1></h2></h2></h3>
>>>>>>> origin/main
