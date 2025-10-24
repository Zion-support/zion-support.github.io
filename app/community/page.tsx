'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      title: 'AI & Machine Learning Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Learn the latest AI and ML techniques from industry experts.',
      attendees: 150,
      type: 'Workshop'
    },
    {
      title: 'Cloud Architecture Best Practices',
      date: '2024-02-20',
      time: '2:00 PM - 5:00 PM',
      location: 'New York Office',
      description: 'Deep dive into cloud architecture patterns and best practices.',
      attendees: 75,
      type: 'Seminar'
    },
    {
      title: 'Blockchain Development Meetup',
      date: '2024-02-25',
      time: '6:00 PM - 8:00 PM',
      location: 'San Francisco Office',
      description: 'Network with blockchain developers and discuss latest trends.',
      attendees: 120,
      type: 'Meetup'
    }
  ];

  const members = [
    {
      name: 'Sarah Johnson',
      role: 'AI Engineer',
      company: 'TechCorp',
      avatar: 'SJ',
      joined: '2023-01-15',
      contributions: 45
    },
    {
      name: 'Michael Chen',
      role: 'Cloud Architect',
      company: 'CloudTech',
      avatar: 'MC',
      joined: '2023-03-22',
      contributions: 32
    },
    {
      name: 'Emily Rodriguez',
      role: 'Blockchain Developer',
      company: 'CryptoLabs',
      avatar: 'ER',
      joined: '2023-05-10',
      contributions: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, attend events, and share knowledge." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our vibrant community of developers, engineers, and tech enthusiasts. 
              Connect, learn, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2,500+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'events' ? 'bg-white text-gray-900' : 'text-white hover:text-gray-300'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'members' ? 'bg-white text-gray-900' : 'text-white hover:text-gray-300'
                }`}
              >
                Members
              </button>
            </div>
          </div>

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-gray-400 text-sm">{member.role} at {member.company}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>Joined: {member.joined}</div>
                    <div>Contributions: {member.contributions}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Connect with like-minded professionals and grow your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Join Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;