'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Award, 
  Star, 
  TrendingUp,
  Globe,
  Code,
  Book,
  Video,
  ExternalLink,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members' },
    { icon: MessageSquare, value: '50,000+', label: 'Discussions' },
    { icon: Code, value: '1,000+', label: 'Code Examples' },
    { icon: Award, value: '100+', label: 'Contributors' }
  ];

  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      type: 'Conference',
      description: 'Join us for the biggest AI conference of the year featuring industry leaders and cutting-edge innovations.',
      attendees: '500+',
      location: 'Virtual & In-Person'
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'February 28, 2024',
      type: 'Workshop',
      description: 'Hands-on workshop on quantum computing applications and implementation strategies.',
      attendees: '100+',
      location: 'Online'
    },
    {
      title: 'Developer Meetup',
      date: 'February 20, 2024',
      type: 'Meetup',
      description: 'Monthly developer meetup focusing on micro SaaS development and best practices.',
      attendees: '50+',
      location: 'New York'
    }
  ];

  const resources = [
    {
      title: 'API Documentation',
      description: 'Complete API reference for all our services',
      icon: Code,
      link: '/docs',
      type: 'Documentation'
    },
    {
      title: 'Code Examples',
      description: 'Sample implementations and code snippets',
      icon: Book,
      link: '/examples',
      type: 'Code'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and tutorials',
      icon: Video,
      link: '/tutorials',
      type: 'Video'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      icon: MessageSquare,
      link: '/forum',
      type: 'Community'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Globe },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'resources', name: 'Resources', icon: Book },
    { id: 'discussions', name: 'Discussions', icon: MessageSquare }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group | Developer Community & Resources</title>
        <meta name="description" content="Join the Zion Tech Group community of developers, AI enthusiasts, and technology professionals. Access resources, events, and discussions." />
        <meta name="keywords" content="community, developers, AI community, technology professionals, events, resources, discussions" />
        <meta property="og:title" content="Community - Zion Tech Group" />
        <meta property="og:description" content="Join our vibrant developer community" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Connect, Learn, and Innovate Together
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our vibrant community of developers, AI enthusiasts, and technology professionals. 
              Share knowledge, collaborate on projects, and stay updated with the latest innovations.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tabs */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>
          </section>

          {/* Tab Content */}
          <section className="mb-16">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                        <span className="text-cyan-400 text-sm">{resource.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{resource.description}</p>
                    
                    <Link
                      to={resource.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Access Resource
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees}
                          </div>
                          <div className="flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                        <span className="text-cyan-400 text-sm">{resource.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{resource.description}</p>
                    
                    <Link
                      to={resource.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Access Resource
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'discussions' && (
              <div className="text-center py-16">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Community Discussions</h3>
                <p className="text-gray-300 mb-6">
                  Join our community forum to connect with other developers and share knowledge.
                </p>
                <Link
                  to="/forum"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Visit Forum
                </Link>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect with like-minded professionals, share your projects, and stay updated 
                with the latest developments in AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Join Now
                </Link>
                <a
                  href="mailto:community@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Community Team
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
