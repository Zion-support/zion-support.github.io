'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Star, Award } from 'lucide-react';

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
      description: 'Advanced AI and data analytics solutions',
      category: 'AI & Analytics',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions and quantum computing',
      category: 'Enterprise Solutions',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise applications',
      category: 'Database',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority customer support',
    'Early access to new features',
    'Certified implementation services',
    '24/7 technical assistance'
  ];

  const certifications = [
    {
      name: 'Microsoft Azure Certified',
      level: 'Expert',
      year: '2024'
    },
    {
      name: 'AWS Advanced Consulting Partner',
      level: 'Advanced',
      year: '2024'
    },
    {
      name: 'Google Cloud Premier Partner',
      level: 'Premier',
      year: '2024'
    },
    {
      name: 'IBM Business Partner',
      level: 'Advanced',
      year: '2024'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'text-gray-300 bg-gradient-to-r from-gray-400 to-gray-600';
      case 'Gold':
        return 'text-yellow-600 bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'Silver':
        return 'text-gray-500 bg-gradient-to-r from-gray-300 to-gray-500';
      default:
        return 'text-gray-300 bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, technology partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We partner with industry leaders to deliver cutting-edge solutions and ensure our clients have access to the best technology platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTierColor(partner.tier)}`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                      {partner.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Certifications</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We maintain the highest level of certifications with our technology partners to ensure expert-level service delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-1">{cert.level}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Benefits</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become Our Partner
              </h2>
              <p className="text-gray-300 mb-8">
                Join our network of technology partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Partner With Us
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                  <Star className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;