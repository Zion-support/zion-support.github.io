'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, Star, Users, Zap } from 'lucide-react';

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
      description: 'Advanced AI and machine learning platform solutions',
      category: 'AI & ML',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation platform integration',
      category: 'Business Automation',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features and updates',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with major technology leaders',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with industry leaders',
      icon: CheckCircle,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Silver',
      description: 'Collaborative partnerships with specialized providers',
      icon: Users,
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We work with industry leaders to deliver cutting-edge solutions and drive innovation across all sectors
            </p>
          </div>

          {/* Partnership Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-center">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-300' :
                      partner.tier === 'Gold' ? 'bg-yellow-400/20 text-yellow-300' :
                      'bg-gray-400/20 text-gray-300'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {partner.category}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology partners and unlock new opportunities for growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Partner With Us
              </Link>
              <Link
                to="/consultation"
                className="border border-white/30 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;