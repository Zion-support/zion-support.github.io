'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, MessageCircle, Calendar, Award, Globe, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: 'Developer Forums',
      description: 'Connect with fellow developers, share knowledge, and get help from the community.',
      benefits: ['Technical discussions', 'Code sharing', 'Peer support', 'Expert guidance']
    },
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      description: 'Get instant help from our support team and community members in real-time.',
      benefits: ['24/7 availability', 'Quick responses', 'Expert assistance', 'Community help']
    },
    {
      icon: Calendar,
      title: 'Events & Webinars',
      description: 'Join our regular events, webinars, and workshops to learn and network.',
      benefits: ['Monthly webinars', 'Tech talks', 'Hands-on workshops', 'Networking events']
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Earn badges and recognition for your contributions to the community.',
      benefits: ['Achievement badges', 'Contributor recognition', 'Leaderboards', 'Special privileges']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 150
    },
    {
      title: 'Cloud Architecture Best Practices',
      date: '2024-02-20',
      time: '3:00 PM EST',
      type: 'Webinar',
      attendees: 200
    },
    {
      title: 'Cybersecurity Trends 2024',
      date: '2024-02-25',
      time: '1:00 PM EST',
      type: 'Tech Talk',
      attendees: 180
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '10,000+' },
    { label: 'Monthly Discussions', value: '2,500+' },
    { label: 'Solved Issues', value: '15,000+' },
    { label: 'Countries', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, get support, and participate in events and discussions." />
        <meta name="keywords" content="developer community, tech forums, support, events, webinars, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Join Our
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of developers, get expert support, and be part of the future of technology. 
            Join our vibrant community today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Join Community
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Events
            </button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to connect, learn, and grow with our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming events and webinars to learn and network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date} at {event.time}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with thousands of developers, get expert support, and be part of the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Join Now - It's Free
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;