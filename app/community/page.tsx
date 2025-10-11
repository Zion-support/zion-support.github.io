'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Star, TrendingUp, Calendar, ExternalLink, Github, Twitter, Linkedin, Slack } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { number: '2,500+', label: 'Active Members' },
    { number: '150+', label: 'Discussions Daily' },
    { number: '50+', label: 'Countries' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const upcomingEvents = [
    {
      id: 'ai-workshop',
      title: 'AI Workshop: Building Chatbots',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Workshop',
      attendees: 45,
      description: 'Learn how to build intelligent chatbots using our AI platform.'
    },
    {
      id: 'tech-talk',
      title: 'Tech Talk: Quantum Computing',
      date: '2024-02-20',
      time: '3:00 PM EST',
      type: 'Tech Talk',
      attendees: 32,
      description: 'Exploring the future of quantum computing in AI applications.'
    },
    {
      id: 'hackathon',
      title: 'AI Hackathon 2024',
      date: '2024-03-01',
      time: '9:00 AM EST',
      type: 'Hackathon',
      attendees: 120,
      description: '48-hour hackathon to build innovative AI solutions.'
    }
  ];

  const communityChannels = [
    {
      name: 'Discord',
      description: 'Real-time chat and voice discussions',
      members: '1,200+',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      url: 'https://discord.gg/ziontechgroup'
    },
    {
      name: 'GitHub',
      description: 'Open source projects and code sharing',
      members: '800+',
      icon: Github,
      color: 'from-gray-500 to-gray-700',
      url: 'https://github.com/ziontechgroup'
    },
    {
      name: 'Slack',
      description: 'Professional networking and support',
      members: '500+',
      icon: Slack,
      color: 'from-green-500 to-emerald-600',
      url: 'https://ziontechgroup.slack.com'
    },
    {
      name: 'Twitter',
      description: 'Latest updates and announcements',
      members: '2,000+',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      url: 'https://twitter.com/ziontechgroup'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking and job opportunities',
      members: '1,500+',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      url: 'https://linkedin.com/company/ziontechgroup'
    }
  ];

  const recentDiscussions = [
    {
      id: 'discussion-1',
      title: 'Best practices for AI model deployment',
      author: 'Sarah Chen',
      replies: 12,
      views: 89,
      lastActivity: '2 hours ago',
      category: 'AI Development'
    },
    {
      id: 'discussion-2',
      title: 'Cloud infrastructure scaling strategies',
      author: 'Mike Rodriguez',
      replies: 8,
      views: 56,
      lastActivity: '4 hours ago',
      category: 'Infrastructure'
    },
    {
      id: 'discussion-3',
      title: 'Security considerations for API design',
      author: 'Emma Thompson',
      replies: 15,
      views: 124,
      lastActivity: '6 hours ago',
      category: 'Security'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group | Developer Community</title>
        <meta name="description" content="Join our vibrant community of developers, AI enthusiasts, and IT professionals. Connect, learn, and collaborate." />
        <meta name="keywords" content="community, developers, AI, IT, networking, collaboration, forums" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Connect with developers, AI enthusiasts, and IT professionals from around the world. 
              Share knowledge, collaborate on projects, and grow together.
            </p>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Community Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {channel.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{channel.members} members</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                    <div className="flex items-center text-cyan-400 text-sm font-medium">
                      Join Now
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{event.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-sm font-medium">{event.date}</div>
                      <div className="text-gray-400 text-sm">{event.time}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees} attending
                    </div>
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors text-sm font-medium">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Discussions</h2>
            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.lastActivity}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                          {discussion.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {discussion.replies}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {discussion.views}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="/community/discussions"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                View All Discussions
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Join?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Become part of our growing community and start connecting with like-minded professionals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CommunityPage;