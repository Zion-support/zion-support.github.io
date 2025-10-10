'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Globe, Shield, Zap, Users, Award, Building, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PartnersPage: React.FC = () => {
  const [selectedPartnerType, setSelectedPartnerType] = useState('all');

  const partnerTypes = [
    { id: 'all', name: 'All Partners', icon: Users },
    { id: 'technology', name: 'Technology', icon: Zap },
    { id: 'consulting', name: 'Consulting', icon: Building },
    { id: 'reseller', name: 'Reseller', icon: Handshake }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      type: 'technology',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic technology partner for Azure cloud solutions and AI services',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support'],
      tier: 'Platinum'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      type: 'technology',
      logo: '/images/partners/aws.png',
      description: 'Premier AWS partner providing cloud infrastructure and AI solutions',
      benefits: ['AWS credits', 'Training programs', 'Joint go-to-market'],
      tier: 'Platinum'
    },
    {
      id: 3,
      name: 'Google Cloud',
      type: 'technology',
      logo: '/images/partners/google-cloud.png',
      description: 'Google Cloud partner specializing in AI and machine learning solutions',
      benefits: ['GCP credits', 'AI/ML expertise', 'Co-development projects'],
      tier: 'Gold'
    },
    {
      id: 4,
      name: 'Deloitte',
      type: 'consulting',
      logo: '/images/partners/deloitte.png',
      description: 'Strategic consulting partner for enterprise digital transformation',
      benefits: ['Joint solutions', 'Market expansion', 'Client referrals'],
      tier: 'Gold'
    },
    {
      id: 5,
      name: 'Accenture',
      type: 'consulting',
      logo: '/images/partners/accenture.png',
      description: 'Global consulting partner for AI strategy and implementation',
      benefits: ['Co-innovation labs', 'Global reach', 'Industry expertise'],
      tier: 'Silver'
    },
    {
      id: 6,
      name: 'TechCorp Solutions',
      type: 'reseller',
      logo: '/images/partners/techcorp.png',
      description: 'Regional reseller partner for AI and cloud solutions',
      benefits: ['Reseller margins', 'Marketing support', 'Training programs'],
      tier: 'Silver'
    }
  ];

  const filteredPartners = selectedPartnerType === 'all' 
    ? partners 
    : partners.filter(partner => partner.type === selectedPartnerType);

  const partnershipBenefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of partners and clients'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest AI and cloud technologies'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support from our technical experts'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partners with deep integration',
      benefits: ['Highest margins', 'Co-marketing', 'Joint R&D', 'Priority support'],
      color: 'from-purple-500 to-blue-600'
    },
    {
      name: 'Gold',
      description: 'Key partners with significant collaboration',
      benefits: ['High margins', 'Marketing support', 'Training', 'Dedicated support'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Silver',
      description: 'Regional partners with local expertise',
      benefits: ['Good margins', 'Basic marketing', 'Training', 'Standard support'],
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with AI and technology solutions. Explore partnership opportunities and benefits."
        keywords="partners, partnership, reseller, technology partners, business partners, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join our growing ecosystem of technology partners and resellers. Together, we deliver innovative AI solutions to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Benefits
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner program and unlock new opportunities for growth and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-lg mx-auto mb-6 flex items-center justify-center`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{tier.name}</h3>
                <p className="text-gray-300 text-center mb-6">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {partnerTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedPartnerType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPartnerType === type.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our trusted partners who help us deliver exceptional solutions to clients worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    partner.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-300' :
                    partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {partner.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and start growing your business with AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Apply for Partnership
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;