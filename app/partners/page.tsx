'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Star, Users, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning capabilities with Google Cloud Platform',
      category: 'AI & ML',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing partnerships',
      category: 'Enterprise AI',
      tier: 'Gold'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU acceleration and AI computing solutions',
      category: 'Hardware & AI',
      tier: 'Silver'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and AI-powered customer solutions',
      category: 'CRM & AI',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Revenue sharing opportunities',
    'Certification and training programs'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with major technology leaders',
      color: 'from-purple-500 to-pink-500',
      requirements: ['$10M+ annual revenue', 'Strategic alignment', 'Global presence']
    },
    {
      name: 'Gold',
      description: 'Key partnerships with industry leaders',
      color: 'from-yellow-500 to-orange-500',
      requirements: ['$5M+ annual revenue', 'Strong market presence', 'Technical expertise']
    },
    {
      name: 'Silver',
      description: 'Growing partnerships with emerging leaders',
      color: 'from-gray-400 to-gray-600',
      requirements: ['$1M+ annual revenue', 'Market potential', 'Innovation focus']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, strategic alliances, technology partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Logo</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      partner.tier === 'Platinum' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-center">{partner.description}</p>
                  
                  <div className="text-center">
                    <span className="text-cyan-400 text-sm font-semibold">{partner.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{tier.name}</h3>
                  <p className="text-gray-300 mb-6 text-center">{tier.description}</p>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    {tier.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-cyan-100 mb-6">
                Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Become a Partner
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
