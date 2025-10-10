'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Globe, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Developer Community',
      description: 'Connect with fellow developers, share knowledge, and collaborate on projects.',
      benefits: ['Technical discussions', 'Code sharing', 'Mentorship programs', 'Project collaboration']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations about technology, AI, and innovation.',
      benefits: ['Topic-based discussions', 'Expert Q&A', 'Best practices sharing', 'Industry insights']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Events & Meetups',
      description: 'Join our regular events, webinars, and local meetups to network and learn.',
      benefits: ['Monthly webinars', 'Local meetups', 'Conference participation', 'Workshop sessions']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements in the community.',
      benefits: ['Contributor badges', 'Achievement rewards', 'Leaderboard rankings', 'Special privileges']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Connect with professionals from around the world and expand your network.',
      benefits: ['International connections', 'Cultural exchange', 'Global opportunities', 'Diverse perspectives']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Support & Help',
      description: 'Get help when you need it and support others in their journey.',
      benefits: ['Peer support', 'Expert guidance', 'Resource sharing', 'Problem solving']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      type: 'Conference',
      description: 'Join industry leaders for insights on the latest AI trends and innovations.'
    },
    {
      title: 'Cloud Migration Workshop',
      date: 'March 22, 2024',
      type: 'Workshop',
      description: 'Hands-on workshop on cloud migration strategies and best practices.'
    },
    {
      title: 'Developer Meetup - NYC',
      date: 'March 28, 2024',
      type: 'Meetup',
      description: 'Local developer meetup with networking and technical discussions.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Members' },
    { number: '500+', label: 'Projects Shared' },
    { number: '50+', label: 'Events Hosted' },
    { number: '95%', label: 'Member Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, share knowledge, and collaborate on innovative projects." />
        <meta name="keywords" content="tech community, developer network, AI community, technology discussions, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
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
            Connect with like-minded professionals, share knowledge, and collaborate on innovative projects. 
            Be part of a thriving community that's shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Join Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to connect, learn, and grow with our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
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
              Don't miss out on our exciting community events and workshops
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{event.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with thousands of professionals and start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;