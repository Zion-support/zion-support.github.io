'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Users, Globe, Star, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', count: 12 },
    { id: 'technology', name: 'Technology', count: 5 },
    { id: 'enterprise', name: 'Enterprise', count: 4 },
    { id: 'startup', name: 'Startups', count: 3 }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      category: 'technology',
      logo: 'https://via.placeholder.com/120x60/0078d4/ffffff?text=Microsoft',
      description: 'Strategic cloud and AI partnership',
      benefits: ['Azure integration', 'AI model access', 'Enterprise support'],
      tier: 'platinum'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      category: 'technology',
      logo: 'https://via.placeholder.com/120x60/ff9900/ffffff?text=AWS',
      description: 'Cloud infrastructure and AI services',
      benefits: ['AWS credits', 'Technical support', 'Co-marketing'],
      tier: 'platinum'
    },
    {
      id: 3,
      name: 'Google Cloud',
      category: 'technology',
      logo: 'https://via.placeholder.com/120x60/4285f4/ffffff?text=Google',
      description: 'Machine learning and data analytics',
      benefits: ['ML platform access', 'Training resources', 'Joint solutions'],
      tier: 'gold'
    },
    {
      id: 4,
      name: 'IBM',
      category: 'enterprise',
      logo: 'https://via.placeholder.com/120x60/052fad/ffffff?text=IBM',
      description: 'Enterprise AI and quantum computing',
      benefits: ['Watson integration', 'Quantum access', 'Enterprise consulting'],
      tier: 'gold'
    },
    {
      id: 5,
      name: 'Salesforce',
      category: 'enterprise',
      logo: 'https://via.placeholder.com/120x60/00a1e0/ffffff?text=Salesforce',
      description: 'CRM and business automation',
      benefits: ['Salesforce integration', 'Custom solutions', 'Training programs'],
      tier: 'silver'
    },
    {
      id: 6,
      name: 'TechStart Inc.',
      category: 'startup',
      logo: 'https://via.placeholder.com/120x60/6366f1/ffffff?text=TechStart',
      description: 'Innovative startup solutions',
      benefits: ['Startup credits', 'Mentorship', 'Co-development'],
      tier: 'silver'
    }
  ];

  const filteredPartners = partners.filter(partner => 
    selectedCategory === 'all' || partner.category === selectedCategory
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'from-yellow-500 to-yellow-600';
      case 'gold': return 'from-yellow-400 to-yellow-500';
      case 'silver': return 'from-gray-400 to-gray-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Meet our strategic partners and learn about partnership opportunities with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Our Partners
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We work with industry leaders and innovative companies to deliver 
                  cutting-edge AI and IT solutions that drive real business value.
                </p>
              </div>

              {/* Partnership Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                  <Handshake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Strategic Partners</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
                  <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-300">Years Partnership</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-pink-500/20">
                  <Globe className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-300">Countries</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
                  <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    {/* Partner Logo and Tier */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)} text-white`}>
                        {partner.tier.toUpperCase()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {partner.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium py-2 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Partnership Benefits */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Partnership Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Strategic Alliance</h3>
                    <p className="text-gray-300">
                      Build long-term partnerships that drive mutual growth and innovation.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Co-Marketing</h3>
                    <p className="text-gray-300">
                      Joint marketing initiatives and co-branded solutions to reach new markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
                    <p className="text-gray-300">
                      Dedicated technical support and training for your team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Become a Partner CTA */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Become a Partner
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join our partner ecosystem and unlock new opportunities for growth, 
                  innovation, and mutual success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply for Partnership
                  </a>
                  <a
                    href="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PartnersPage;