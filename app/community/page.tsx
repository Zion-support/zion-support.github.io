'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Star, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with industry experts, developers, and technology enthusiasts.',
      benefits: ['Expert insights', 'Peer networking', 'Knowledge sharing', 'Mentorship opportunities']
    },
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in meaningful discussions about technology trends and best practices.',
      benefits: ['Technical discussions', 'Q&A sessions', 'Best practices', 'Problem solving']
    },
    {
      icon: Calendar,
      title: 'Events & Webinars',
      description: 'Join our regular events, webinars, and workshops to stay updated.',
      benefits: ['Live webinars', 'Workshops', 'Networking events', 'Expert talks']
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements in the community.',
      benefits: ['Achievement badges', 'Leaderboards', 'Certificates', 'Special privileges']
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Members' },
    { number: '500+', label: 'Expert Contributors' },
    { number: '1,000+', label: 'Monthly Discussions' },
    { number: '50+', label: 'Events per Month' }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of technology experts, developers, and innovators." />
        <meta name="keywords" content="tech community, developers, experts, networking, technology discussions" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with like-minded professionals, share knowledge, and grow together in our vibrant technology community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes our community special and how you can benefit from being part of it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with experts, share your knowledge, and grow your network in our vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Community
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Events
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CommunityPage;