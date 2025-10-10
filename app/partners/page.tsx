'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      category: 'Cloud Platform',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      benefits: [
        'Azure credits and discounts',
        'Co-marketing opportunities',
        'Technical support and training',
        'Early access to new features'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      category: 'Cloud Infrastructure',
      description: 'Premier consulting partner for AWS cloud solutions',
      benefits: [
        'AWS certification programs',
        'Technical resources and tools',
        'Joint customer engagements',
        'Revenue sharing opportunities'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      category: 'AI & Analytics',
      description: 'Partner for Google Cloud AI and machine learning solutions',
      benefits: [
        'Google Cloud credits',
        'AI/ML training programs',
        'Co-development opportunities',
        'Market development funds'
      ]
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      category: 'AI Hardware',
      description: 'Technology partner for GPU-accelerated AI solutions',
      benefits: [
        'Hardware discounts',
        'Technical training',
        'Joint solution development',
        'Marketing support'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      category: 'CRM & Automation',
      description: 'Certified partner for Salesforce implementation and customization',
      benefits: [
        'Salesforce certifications',
        'Implementation resources',
        'Customer referrals',
        'Revenue sharing'
      ]
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      category: 'Enterprise Solutions',
      description: 'Business partner for IBM Watson and enterprise AI solutions',
      benefits: [
        'IBM training programs',
        'Technical support',
        'Co-marketing activities',
        'Solution development'
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      icon: '🔧'
    },
    {
      title: 'Solution Partners',
      description: 'Collaborative partnerships for integrated solutions',
      icon: '🤝'
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships',
      icon: '📈'
    },
    {
      title: 'Integration Partners',
      description: 'Partners for seamless system integrations',
      icon: '🔗'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, solution partners, channel partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Partners</h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              We work with industry leaders to deliver comprehensive solutions and drive innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-32 h-16 object-contain mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                    <p className="text-gray-300 mt-4">{partner.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Partnership Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Become a Partner
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Partner Resources
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