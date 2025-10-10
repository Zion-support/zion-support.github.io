'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Building, Handshake, Award, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Cloud & AI',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      tier: 'Platinum',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Computing',
      description: 'Premier AWS partner for cloud infrastructure and machine learning',
      tier: 'Gold',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI & Analytics',
      description: 'Google Cloud partner specializing in AI and data analytics',
      tier: 'Gold',
      benefits: ['GCP credits', 'AI/ML tools', 'Technical training']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise AI',
      description: 'IBM partner for enterprise AI solutions and Watson services',
      tier: 'Silver',
      benefits: ['Watson access', 'Enterprise support', 'Solution development']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      category: 'AI Hardware',
      description: 'NVIDIA partner for GPU-accelerated AI and deep learning',
      tier: 'Silver',
      benefits: ['GPU access', 'CUDA training', 'Hardware discounts']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM & AI',
      description: 'Salesforce partner for CRM integration and AI-powered solutions',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'API access', 'Integration support']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and lead sharing',
    'Priority support and escalation',
    'Early access to new features',
    'Custom solution development',
    'Global reach and expansion'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnership with maximum benefits',
      icon: Star,
      color: 'from-yellow-400 to-orange-500',
      features: ['Unlimited credits', 'Dedicated support', 'Co-development', 'Global marketing']
    },
    {
      name: 'Gold',
      description: 'Premium partnership with extensive benefits',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      features: ['High credit limits', 'Priority support', 'Joint solutions', 'Regional marketing']
    },
    {
      name: 'Silver',
      description: 'Standard partnership with core benefits',
      icon: Shield,
      color: 'from-gray-400 to-gray-500',
      features: ['Standard credits', 'Regular support', 'Solution access', 'Local marketing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partnerships" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Strategic
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Partnerships
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders to deliver cutting-edge solutions and 
            create mutual value through strategic partnerships.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technology companies to provide comprehensive solutions to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-300' :
                    partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{partner.category}</p>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                
                <div className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                
                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock exclusive benefits and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Handshake className="mr-2 h-5 w-5" />
                Apply for Partnership
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;