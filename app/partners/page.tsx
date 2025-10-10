'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle, Star, Building2, Users, Award } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: string;
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud & AI',
      website: 'https://aws.amazon.com',
      tier: 'strategic',
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and data analytics cloud platform',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic',
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Quantum computing and enterprise AI solutions',
      category: 'Enterprise',
      website: 'https://ibm.com',
      tier: 'premier',
    },
    {
      id: '5',
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing and AI acceleration technologies',
      category: 'Hardware',
      website: 'https://nvidia.com',
      tier: 'premier',
    },
    {
      id: '6',
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Advanced processor technologies and AI optimization',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'premier',
    }
  ];

  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];

  const filteredPartners = partners.filter(partner => 
    selectedCategory === 'all' || partner.category === selectedCategory
  );

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Early access to new features',
    'Dedicated partner success managers'
  ];

  const partnershipTypes = [
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic relationships with industry leaders',
      icon: Star,
      color: 'from-yellow-400 to-orange-400'
    },
    {
      title: 'Technology Partners',
      description: 'Integration and technical collaboration partners',
      icon: Building2,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships',
      icon: Users,
      color: 'from-purple-400 to-pink-400'
    }
  ];

  const stats = [
    { label: 'Partners', value: '50+', icon: Building2 },
    { label: 'Countries', value: '25+', icon: Users },
    { label: 'Years', value: '5+', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, channel partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building the future of technology through strategic alliances with industry leaders and innovative partners.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-full mb-4`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Partners</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'strategic' 
                        ? 'bg-yellow-400/20 text-yellow-400' 
                        : 'bg-blue-400/20 text-blue-400'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm">{partner.category}</span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No partners found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-gray-300 mb-6">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2 mx-auto">
                Partner With Us
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
