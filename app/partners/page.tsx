'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions with Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise AI solutions',
      category: 'Quantum & AI',
      website: 'https://ibm.com',
      tier: 'Gold'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise database and cloud infrastructure solutions',
      category: 'Database & Cloud',
      website: 'https://oracle.com',
      tier: 'Silver'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'Silver'
    },
    {
      name: 'Snowflake',
      logo: '/api/placeholder/200/100',
      description: 'Cloud data platform and analytics solutions',
      category: 'Data & Analytics',
      website: 'https://snowflake.com',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market strategies and co-selling opportunities',
    'Technical support and training programs',
    'Early access to new features and capabilities',
    'Collaborative research and development projects',
    'Shared customer success stories and case studies',
    'Integrated solutions and seamless interoperability',
    'Global reach and local market expertise',
    'Compliance and security certifications',
    'Dedicated partner success managers'
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'text-cyan-400';
      case 'Gold': return 'text-yellow-400';
      case 'Silver': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, and IBM. Together, we deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft Azure, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Strategic Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver the most advanced and reliable technology solutions to our clients.
            </p>
          </div>

          {/* Partners Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-24 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                    <div className={`text-sm font-medium mb-2 ${getTierColor(partner.tier)}`}>
                      {partner.tier} Partner
                    </div>
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {partner.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="cyber-card hologram-card p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center neon-text">Partnership Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card hologram-card p-8 text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Strategic Partners</div>
              </div>
              <div className="cyber-card hologram-card p-8 text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="cyber-card hologram-card p-8 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </section>

          {/* Become a Partner CTA */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Become Our Partner</h3>
              <p className="text-gray-300 mb-6">
                Join our network of technology partners and help us deliver innovative solutions to clients worldwide. 
                Let's grow together and create exceptional value for our customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
