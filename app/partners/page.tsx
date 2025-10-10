'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Users, Handshake, Award, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Cloud infrastructure and AI solutions',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud computing and machine learning',
      category: 'Cloud Partner'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and data analytics platform',
      category: 'AI Partner'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise Partner'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
      category: 'CRM Partner'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Database Partner'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customers through our partner network'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards across all partnerships'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and solutions through collaborative innovation'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support teams and technical expertise from all partners'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate our AI and IT solutions with leading technology platforms',
      features: ['API Integration', 'SDK Access', 'Technical Support', 'Co-marketing']
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions through your existing channels',
      features: ['Reseller Program', 'Training & Certification', 'Marketing Support', 'Revenue Sharing']
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term partnerships for joint product development and market expansion',
      features: ['Joint Development', 'Market Expansion', 'Exclusive Territories', 'Custom Solutions']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions. Technology, channel, and strategic partnerships available." />
        <meta name="keywords" content="partners, partnerships, reseller, channel partner, technology partner, strategic partner" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Partner Ecosystem
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join our growing network of partners and unlock new opportunities in AI and IT solutions. 
                Together, we can deliver exceptional value to customers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Partner Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Current Partners */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-gray-300">Trusted by leading technology companies worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{partner.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-2">{partner.description}</p>
                <span className="inline-block w-full text-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-gray-300">Why partner with Zion Tech Group?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-gray-300">Choose the partnership model that fits your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth. 
              Let's build the future of AI and IT together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Start Partnership Application
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;