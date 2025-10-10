'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Award, Users, Globe, Shield, Zap } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning capabilities with Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and Watson platform integration',
      category: 'AI & ML',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      id: '5',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      id: '6',
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database solutions and enterprise software integration',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const categories = ['all', 'Cloud & AI', 'Cloud Computing', 'AI & ML', 'CRM & Sales', 'Database & Enterprise'];
  const tiers = ['all', 'strategic', 'preferred', 'certified'];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;
  });

  const tierColors = {
    strategic: 'bg-gradient-to-r from-purple-500 to-blue-500',
    preferred: 'bg-gradient-to-r from-green-500 to-teal-500',
    certified: 'bg-gradient-to-r from-orange-500 to-red-500'
  };

  const tierLabels = {
    strategic: 'Strategic Partner',
    preferred: 'Preferred Partner',
    certified: 'Certified Partner'
  };

  const stats = [
    { label: 'Partners', value: '50+', icon: Users },
    { label: 'Countries', value: '25+', icon: Globe },
    { label: 'Certifications', value: '100+', icon: Award },
    { label: 'Years Experience', value: '10+', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We collaborate with industry leaders to deliver the best AI and IT solutions for our clients
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Tiers</option>
                {tiers.slice(1).map(tier => (
                  <option key={tier} value={tier}>{tierLabels[tier as keyof typeof tierLabels]}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Strategic Partners
              </h2>
              <p className="text-xl text-gray-600">
                Working together to deliver exceptional solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 object-contain"
                      />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${tierColors[partner.tier]}`}>
                        {tierLabels[partner.tier]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No partners found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Why our partnerships matter for your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Solutions</h3>
                <p className="text-gray-600">
                  Access to cutting-edge technologies and platforms from industry leaders
                </p>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability & Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security and reliability backed by our partners
                </p>
              </div>

              <div className="text-center p-8 bg-purple-50 rounded-lg">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Worldwide support and deployment capabilities through our partner network
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our partner network and help us deliver innovative AI and IT solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;