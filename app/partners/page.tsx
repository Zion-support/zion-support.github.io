'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ExternalLink, Star, Users, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform',
      category: 'AI & ML',
      tier: 'Gold',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing partnerships',
      category: 'Enterprise AI',
      tier: 'Gold',
      website: 'https://ibm.com'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU acceleration and AI computing solutions',
      category: 'Hardware & AI',
      tier: 'Silver',
      website: 'https://nvidia.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and AI-powered customer solutions',
      category: 'CRM & AI',
      tier: 'Silver',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise cloud services',
      category: 'Database & Cloud',
      tier: 'Silver',
      website: 'https://oracle.com'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'AI hardware optimization and edge computing solutions',
      category: 'Hardware',
      tier: 'Bronze',
      website: 'https://intel.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market strategies and co-selling opportunities',
    'Technical training and certification programs',
    'Priority support and dedicated resources',
    'Early access to new features and beta programs',
    'Collaborative R&D and innovation projects',
    'Global reach through partner networks',
    'Custom integration and development support'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'from-cyan-400 to-blue-500',
      requirements: 'Strategic partnership with significant joint investments',
      benefits: ['Dedicated account team', 'Co-marketing opportunities', 'Custom solutions development']
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-orange-500',
      requirements: 'Established partnership with regular collaboration',
      benefits: ['Priority support', 'Training programs', 'Joint marketing']
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      requirements: 'Technology integration and mutual referrals',
      benefits: ['Technical support', 'Documentation access', 'Partner portal']
    },
    {
      name: 'Bronze',
      color: 'from-amber-600 to-amber-800',
      requirements: 'Basic partnership with technology alignment',
      benefits: ['Basic support', 'Resource library', 'Newsletter updates']
    }
  ];

  const getTierColor = (tier: string) => {
    const tierInfo = partnershipTiers.find(t => t.name === tier);
    return tierInfo ? tierInfo.color : 'from-gray-400 to-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities for growth and innovation." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions, partner program" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions. 
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span>50+ Strategic Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Innovation Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Partners</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="relative mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-24 h-12 object-contain mx-auto filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)} text-white`}>
                      {partner.tier}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{partner.category}</p>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{tier.name}</h3>
                  <p className="text-sm text-gray-300 mb-4 text-center">{tier.requirements}</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Become Our Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Become a Partner
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link
                  to="/consultation"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;