'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MessageCircle, Calendar, Award, Globe, Heart, Zap } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      description: 'Join industry leaders for a day of AI innovation and networking.',
      type: 'Conference'
    },
    {
      title: 'Cybersecurity Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      description: 'Learn the latest cybersecurity best practices and threat mitigation strategies.',
      type: 'Workshop'
    },
    {
      title: 'Cloud Migration Webinar',
      date: 'March 29, 2024',
      time: '11:00 AM - 12:00 PM',
      location: 'Online',
      description: 'Expert insights on successful cloud migration strategies.',
      type: 'Webinar'
    }
  ];

  const initiatives = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Developer Community',
      description: 'Connect with fellow developers, share knowledge, and collaborate on projects.',
      members: '10,000+'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Tech Forums',
      description: 'Engage in discussions about the latest technology trends and innovations.',
      members: '5,000+'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation Labs',
      description: 'Participate in hackathons and innovation challenges to showcase your skills.',
      members: '2,000+'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Join our worldwide community of technology professionals and enthusiasts.',
      members: '50,000+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology professionals, developers, and innovators. Connect, learn, and grow together." />
        <meta name="keywords" content="tech community, developer community, technology forums, innovation labs, tech events" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with like-minded professionals, share knowledge, and be part of the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Events Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Initiatives */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Community Initiatives</h2>
              <p className="text-xl text-gray-300">
                Discover the various ways you can engage with our community and contribute to the tech ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-blue-400 mb-6">
                    {initiative.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{initiative.title}</h3>
                  <p className="text-gray-300 mb-4">{initiative.description}</p>
                  <div className="text-blue-400 font-semibold">{initiative.members} Members</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-300">
                Join us for exciting events, workshops, and networking opportunities.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        <span className="text-gray-400">{event.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Community Success Stories</h2>
              <p className="text-xl text-gray-300">
                Hear from our community members about their journey and achievements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Sarah Chen</h3>
                <p className="text-gray-300 mb-4">"The community helped me land my dream job at a top tech company. The networking opportunities are incredible."</p>
                <div className="text-blue-400 font-semibold">Software Engineer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Michael Rodriguez</h3>
                <p className="text-gray-300 mb-4">"Through the community, I found my co-founder and launched a successful startup. The support is amazing."</p>
                <div className="text-blue-400 font-semibold">Startup Founder</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Emily Johnson</h3>
                <p className="text-gray-300 mb-4">"The workshops and events have been instrumental in advancing my career. I've learned so much."</p>
                <div className="text-blue-400 font-semibold">Data Scientist</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Connect with thousands of professionals, attend exclusive events, and be part of the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Join Community
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CommunityPage;