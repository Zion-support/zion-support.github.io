'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, MessageCircle, Calendar, Award, Globe, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Expert Network',
      description: 'Connect with industry experts and thought leaders in AI and technology.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'Knowledge Sharing',
      description: 'Share insights, best practices, and learn from the community.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'Events & Workshops',
      description: 'Attend virtual and in-person events, workshops, and conferences.'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements.'
    }
  ];

  const benefits = [
    'Access to exclusive content and resources',
    'Networking opportunities with industry leaders',
    'Early access to new features and products',
    'Participation in beta testing programs',
    'Mentorship and career guidance',
    'Collaboration on open-source projects',
    'Professional development opportunities',
    'Community-driven support and assistance'
  ];

  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15-17, 2024',
      type: 'Virtual Conference',
      description: 'Join us for the biggest AI conference of the year featuring industry leaders and cutting-edge research.'
    },
    {
      title: 'Cloud Computing Workshop',
      date: 'February 28, 2024',
      type: 'Workshop',
      description: 'Hands-on workshop on cloud migration and optimization strategies.'
    },
    {
      title: 'Cybersecurity Roundtable',
      date: 'February 20, 2024',
      type: 'Roundtable',
      description: 'Expert discussion on the latest cybersecurity threats and defense strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology professionals. Connect, learn, and grow with Zion Tech Group." />
        <meta name="keywords" content="community, technology professionals, networking, events, Zion Tech Group" />
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
            Connect with like-minded professionals, share knowledge, and grow together in our vibrant technology community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes our community special and how you can benefit from joining.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming events and connect with the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-purple-400 text-sm font-medium">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{event.date}</p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of being part of our technology community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <p className="text-gray-300 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with thousands of technology professionals and start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
              <Heart className="mr-2 w-5 h-5" />
              Join Community
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;