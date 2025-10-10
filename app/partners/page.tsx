'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

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
      description: 'Advanced AI and machine learning platform with global reach',
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
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical support and training',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic',
      description: 'Deep integration and co-innovation',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {
      name: 'Preferred',
      description: 'Enhanced support and collaboration',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      icon: Handshake
    },
    {
      name: 'Certified',
      description: 'Verified expertise and capabilities',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      icon: CheckCircle
    }
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions that drive innovation and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const tierInfo = getTierInfo(partner.tier);
              return (
                <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <tierInfo.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400 font-medium">{partner.tier}</span>
                    </div>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300">What you get when you partner with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <Handshake className="w-5 h-5" />
                Partner With Us
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="w-5 h-5" />
                View Partnership Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;