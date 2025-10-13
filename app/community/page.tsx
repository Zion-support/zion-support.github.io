};
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import { Users, MessageCircle, Calendar, Star, ArrowRight, ExternalLink, Mail, Phone, MapPin, Clock, CheckCircle, Award, TrendingUp, Heart } from 'lucide-react'
const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const communityStats = [
    { icon: Users, value: '5,000+', label: 'Active Members' ,},
    {icon: MessageCircle, value: '50+', label: 'Discussions Daily' ,},
    {icon: Calendar, value: '12', label: 'Events Monthly' ,},
    {icon: Star, value: '4.9', label: 'Average Rating' ,}];
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
      description: 'Expert panel on scaling SaaS businesses',}];
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
      members: 3000;,}];
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
      description: 'Showcase your projects and get community recognition',}]

  return (
    <>
  <Helmet />
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts. Learn, share, and grow together." />
        <meta name="keywords" content="community, developers, tech community, networking, events, forums, AI community" />
        <link rel="canonical" href="https: //ziontechgroup.com/community" />,
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md: text-5xl font-bold text-white neon-text-enhanced">,</h1>
                Community;
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Join our vibrant community of developers, entrepreneurs, and tech enthusiasts.</p>
              Connect, learn, and grow together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a;
                href="#join"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Join Community;
              </a>
              <a;
                href="#events"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                View Events;
              </a>
              <a;
                href="#forums"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
              >
                Browse Forums;
              </a>
            </div>
          </div>

          {/* Stats */} <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-16">,</div>
            {communityStats.map((stat, index) => (
              <div key={index}className="cyber-card-enhanced p-6 text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
              </div>
            ))}
          </div>

export default PagePage;
          {/* Tabs */} <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">{[</div>
                { id: 'overview', name: 'Overview' ,},
                {id: 'events', name: 'Events' ,},
                {id: 'forums', name: 'Forums' ,},
                {id: 'benefits', name: 'Benefits' ,}].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
          {/* Overview Tab */}{activeTab === 'overview' && (
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
          )}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe } from "lucide-react";
export default function Community() {
  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join industry leaders as we explore the latest trends in artificial intelligence and machine learning.",
      attendees: 500
    },
    {
      title: "Tech Talk: Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "2:00 PM - 3:00 PM",
      location: "Online Webinar",
      description: "Learn about the latest cloud security strategies and how to protect your digital assets.",
      attendees: 150
    },
    {
      title: "Developer Workshop: React & TypeScript",
      date: "March 29, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Office",
      description: "Hands-on workshop covering advanced React patterns and TypeScript best practices.",
      attendees: 25
    }
  ];

          {/* Events Tab */}{activeTab === 'events' && (
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2" />
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Learn More;
          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">,
                    community@ziontechgroup.com;
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300">,
                    +1 (302) 464-0950;

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our upcoming events and workshops to learn, network, and grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Community Initiatives</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get involved in our community programs and make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                  <p className="text-gray-300 mb-4">{initiative.description}</p>
                  <div className="text-cyan-400 font-semibold">{initiative.participants}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with thousands of professionals, attend exclusive events, and be part of something bigger.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
  );
}
