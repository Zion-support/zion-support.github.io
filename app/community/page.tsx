'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Star, Globe, Heart, Zap } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: 'Developer Community',
      description: 'Connect with fellow developers, share knowledge, and collaborate on projects'
    },
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in technical discussions and get help from the community'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Join our regular events, webinars, and local meetups'
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements'
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
      type: 'Panel Discussion',
      attendees: 120
    }
  ];

  const communityStats = [
    { icon: Users, value: '10,000+', label: 'Active Members' },
    { icon: MessageCircle, value: '50,000+', label: 'Discussions' },
    { icon: Calendar, value: '100+', label: 'Events Hosted' },
    { icon: Globe, value: '50+', label: 'Countries' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group | Developer Community</title>
        <meta name="description" content="Join our vibrant developer community. Connect, learn, and grow with fellow tech professionals." />
        <meta name="keywords" content="developer community, tech community, AI community, programming, networking" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Developer Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our vibrant community of developers, engineers, and tech enthusiasts. 
              Connect, learn, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Join Community
                <Users className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Community Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover all the ways you can engage with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming events and stay updated with the latest trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with like-minded professionals and take your skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
              Join Now
              <Heart className="w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;