'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Handshake, CheckCircle, ArrowRight, Star, Globe, Shield, Zap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  tier?: string;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning capabilities with global infrastructure',
      category: 'Cloud & AI',
      tier: 'Strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platforms',
      category: 'Enterprise AI',
      tier: 'Preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
      tier: 'Preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Apps',
      tier: 'Certified'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Enterprise resource planning and business intelligence',
      category: 'ERP & BI',
      tier: 'Certified'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Cloud data platform and analytics solutions',
      category: 'Data & Analytics',
      tier: 'Certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Priority support and resources',
    'Innovation labs and R&D collaboration',
    'Global reach and local expertise',
    'Compliance and security standards',
    'Scalable solutions for any size business',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Deep integration and joint development',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      name: 'Preferred Partners',
      description: 'Certified solutions and priority support',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'Certified Partners',
      description: 'Authorized implementation and support',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  const stats = [
    { icon: Globe, value: '50+', label: 'Global Partners' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
    { icon: Zap, value: '24/7', label: 'Support' },
    { icon: Star, value: '4.9/5', label: 'Partner Rating' }
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships driving innovation and growth" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation across the technology landscape.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} ${tier.borderColor} border rounded-2xl p-6 text-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier || '');
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="aspect-square bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-xs font-medium">{partner.category}</span>
                      <span className={`${tierInfo.color} text-xs font-medium px-2 py-1 rounded-full ${tierInfo.bgColor}`}>
                        {partner.tier}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-gray-300 mb-6">
                Join our partner ecosystem and unlock new opportunities for growth and innovation. 
                Let's build the future of technology together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
                  Apply to Partner
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Download Partner Kit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
