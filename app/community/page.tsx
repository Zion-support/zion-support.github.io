import React from 'react';
import { Helmet } from "react-helmet-async";
import { Users, MessageCircle, Award, Calendar, ArrowRight, Star, Clock, Globe } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Community',
      description: 'Connect with industry experts, developers, and professionals from around the world.',
      stats: '10,000+ Members'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Discussion Forums',
      description: 'Engage in meaningful discussions about AI, technology, and best practices.',
      stats: '50+ Active Discussions'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Knowledge Sharing',
      description: 'Share your expertise and learn from others in our collaborative environment.',
      stats: '500+ Articles Shared'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Events & Webinars',
      description: 'Join our regular events, webinars, and workshops to stay updated.',
      stats: '20+ Events Monthly'
    }
  ];

  const recentDiscussions = [
    {
      title: 'Best Practices for AI Model Deployment',
      author: 'Sarah Chen',
      replies: 24,
      views: 156,
      lastActivity: '2 hours ago',
      category: 'AI Services'
    },
    {
      title: '5G Network Optimization Tips',
      author: 'Michael Rodriguez',
      replies: 18,
      views: 89,
      lastActivity: '4 hours ago',
      category: '5G Solutions'
    },
    {
      title: 'Micro SAAS Integration Challenges',
      author: 'Emily Johnson',
      replies: 31,
      views: 203,
      lastActivity: '6 hours ago',
      category: 'Micro SAAS'
    },
    {
      title: 'Cloud Security Best Practices',
      author: 'David Kim',
      replies: 15,
      views: 127,
      lastActivity: '8 hours ago',
      category: 'IT Services'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Implementation Workshop',
      date: '2024-02-15',
      time: '2:00 PM EST',
      type: 'Webinar',
      attendees: 150
    },
    {
      title: '5G Technology Deep Dive',
      date: '2024-02-20',
      time: '3:00 PM EST',
      type: 'Live Session',
      attendees: 89
    },
    {
      title: 'Community Q&A Session',
      date: '2024-02-25',
      time: '1:00 PM EST',
      type: 'Office Hours',
      attendees: 45
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Community Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Represented', icon: <Globe className="w-6 h-6" /> },
    { number: '500+', label: 'Discussions Monthly', icon: <MessageCircle className="w-6 h-6" /> },
    { number: '95%', label: 'Member Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group | Connect & Learn</title>
        <meta name="description" content="Join our vibrant community of AI experts, developers, and technology professionals. Share knowledge, get support, and collaborate on innovative solutions." />
        <meta name="keywords" content="community, forum, discussion, AI community, tech community, developer community, knowledge sharing" />
        <meta property="og:title" content="Community - Zion Tech Group" />
        <meta property="og:description" content="Connect with our global community of technology professionals" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Connect with thousands of AI experts, developers, and technology professionals. Share knowledge, get support, and collaborate on innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#join"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Join Community
                </a>
                <a
                  href="#discussions"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Browse Discussions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Join Our Community?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be part of a vibrant ecosystem where innovation meets collaboration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-6">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="text-cyan-400 font-semibold">{feature.stats}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section id="discussions" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Recent Discussions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the conversation and share your expertise
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {recentDiscussions.map((discussion, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.replies} replies</span>
                        <span>•</span>
                        <span>{discussion.views} views</span>
                        <span>•</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {discussion.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't miss out on our community events and learning opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees} attending
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold mt-4"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section id="join" className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with like-minded professionals, share your knowledge, and learn from the best in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Join Now
                </a>
                <a
                  href="/support"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityPage;