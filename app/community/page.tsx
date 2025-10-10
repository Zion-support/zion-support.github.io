'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Users, MessageCircle, Calendar } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join our vibrant community of developers, entrepreneurs, and tech enthusiasts'
    },
    {
      icon: MessageCircle,
      title: 'Knowledge Sharing',
      description: 'Share knowledge, ask questions, and learn from industry experts'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Participate in regular events, webinars, and networking opportunities'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals worldwide and expand your network'
    }
  ];

  const benefits = [
    'Access to exclusive content and resources',
    'Networking opportunities with industry leaders',
    'Early access to new features and products',
    'Collaborative project opportunities',
    'Mentorship programs',
    'Career development support',
    'Technical discussions and problem-solving',
    'Community-driven innovation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, entrepreneurs, and tech enthusiasts worldwide." />
        <meta name="keywords" content="community, developers, tech enthusiasts, networking, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with like-minded professionals, share knowledge, and grow together 
            in our vibrant tech community.
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
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Experience the power of our community for your professional growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Community Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Become part of our growing community and start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Join Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;