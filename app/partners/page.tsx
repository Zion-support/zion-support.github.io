'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, ExternalLink, Award, Handshake, TrendingUp } from 'lucide-react';
=======
import { Award, ExternalLink, CheckCircle, Users, Handshake, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9171

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global infrastructure',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation platform',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const partnerTiers = [
    {
      tier: 'strategic',
      title: 'Strategic Partners',
      description: 'Deep integration and joint go-to-market initiatives',
      color: 'from-purple-500 to-blue-500'
    },
    {
      tier: 'preferred',
      title: 'Preferred Partners',
      description: 'Strong collaboration and preferred vendor status',
      color: 'from-blue-500 to-green-500'
    },
    {
      tier: 'certified',
      title: 'Certified Partners',
      description: 'Certified expertise and proven track record',
      color: 'from-green-500 to-yellow-500'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expanded Expertise',
      description: 'Access to specialized knowledge and resources from industry leaders'
    },
    {
      icon: Handshake,
      title: 'Joint Solutions',
      description: 'Collaborative development of integrated solutions for complex challenges'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Early access to cutting-edge technologies and emerging trends'
    }
  ];

  const getTierColor = (tier: string) => {
    const tierConfig = partnerTiers.find(t => t.tier === tier);
    return tierConfig?.color || 'from-gray-500 to-gray-600';
  };

  const getTierTitle = (tier: string) => {
    const tierConfig = partnerTiers.find(t => t.tier === tier);
    return tierConfig?.title || 'Partner';
  };

  return (
    <>
      <Helmet>
        <title>Technology Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies to deliver comprehensive AI and IT solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud providers, AI platforms, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We work with leading technology companies to deliver comprehensive AI and IT solutions that drive innovation and business success.
            </p>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Partner Tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tier.title}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Partners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{partner.name.charAt(0)}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)} text-white`}>
                      {getTierTitle(partner.tier)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-3">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{partner.category}</span>
                    {partner.website && (
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Benefits of Our Partnerships
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Technology Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of technology partners and help us deliver innovative solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply to Become a Partner
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;