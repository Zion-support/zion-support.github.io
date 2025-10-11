'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, Code, BookOpen, Video } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Virtual Event',
      type: 'conference',
      description: 'Join industry leaders for a day of AI innovation, networking, and learning.',
      attendees: 500
    },
    {
      id: 2,
      title: 'Developer Workshop: Building AI Apps',
      date: '2024-02-20',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Online Workshop',
      type: 'workshop',
      description: 'Hands-on workshop for developers to build AI-powered applications.',
      attendees: 50
    },
    {
      id: 3,
      title: 'Monthly Community Meetup',
      date: '2024-02-25',
      time: '6:00 PM - 8:00 PM EST',
      location: 'New York Office',
      type: 'meetup',
      description: 'Monthly community gathering for networking and knowledge sharing.',
      attendees: 25
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Sample code and implementation examples',
      link: '/tutorials'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/tutorials'
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      link: '/support'
    }
  ];

  const stats = [
    { label: 'Community Members', value: '10,000+' },
    { label: 'Active Developers', value: '2,500+' },
    { label: 'Events Hosted', value: '50+' },
    { label: 'Countries', value: '25+' }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of developers, AI enthusiasts, and IT professionals. Connect, learn, and grow together." />
        <meta name="keywords" content="community, developers, AI community, IT professionals, networking, events, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Community
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our vibrant community of developers, AI enthusiasts, and IT professionals. 
                  Connect, learn, and grow together.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'events'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'resources'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  Resources
                </button>
                <button
                  onClick={() => setActiveTab('networking')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'networking'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  Networking
                </button>
              </div>

              {/* Events Tab */}
              {activeTab === 'events' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-white mb-8">Upcoming Events</h2>
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-300 mb-4">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            event.type === 'conference' 
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : event.type === 'workshop'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {event.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Community Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => {
                      const Icon = resource.icon;
                      return (
                        <a
                          key={index}
                          href={resource.link}
                          className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-300 text-sm">{resource.description}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Networking Tab */}
              {activeTab === 'networking' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Networking Opportunities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Developer Meetups</h3>
                      <p className="text-gray-300 mb-6">
                        Join our monthly developer meetups to network with peers, share knowledge, 
                        and collaborate on projects.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Monthly meetups in major cities</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Virtual networking sessions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Project collaboration opportunities</span>
                        </li>
                      </ul>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Join Meetup Group →
                      </button>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Mentorship Program</h3>
                      <p className="text-gray-300 mb-6">
                        Connect with experienced professionals for guidance, career advice, 
                        and technical mentorship.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">1-on-1 mentorship matching</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Career development guidance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Technical skill development</span>
                        </li>
                      </ul>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Apply for Mentorship →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Join Community CTA */}
              <div className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Join Our Community
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect with like-minded professionals, learn from experts, and contribute 
                  to the future of AI and IT innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Join Now
                  </a>
                  <a
                    href="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CommunityPage;