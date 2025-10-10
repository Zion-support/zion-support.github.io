'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Users, MessageCircle, Calendar, Award } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const events = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      description: 'Join industry leaders for discussions on the latest AI trends and innovations.',
      type: 'Conference'
    },
    {
      title: 'Tech Meetup: Cloud Computing',
      date: 'March 22, 2024',
      description: 'Learn about the latest developments in cloud computing and infrastructure.',
      type: 'Meetup'
    },
    {
      title: 'Developer Workshop: API Design',
      date: 'March 29, 2024',
      description: 'Hands-on workshop on designing and implementing RESTful APIs.',
      type: 'Workshop'
    }
  ];

  const benefits = [
    'Connect with industry professionals',
    'Access to exclusive events and workshops',
    'Share knowledge and best practices',
    'Collaborate on innovative projects',
    'Stay updated with latest trends',
    'Build your professional network'
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with professionals, attend events, and collaborate on innovative projects." />
        <meta name="keywords" content="community, tech events, networking, professional development, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join a vibrant community of tech professionals, innovators, and thought leaders. 
              Connect, learn, and grow together in the world of technology.
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

        {/* Events Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us for exciting events, workshops, and networking opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 text-sm font-semibold">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{event.date}</span>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Community Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of being part of our community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
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
              Connect with like-minded professionals and be part of the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Join Now
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CommunityPage;