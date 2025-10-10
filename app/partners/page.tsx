'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap } from 'lucide-react';

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
      description: 'Preferred partner for AWS cloud infrastructure and machine learning services',
      category: 'Cloud & AI',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partnership for quantum computing and enterprise AI solutions',
      category: 'Quantum & AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Preferred partner for GPU computing and AI acceleration',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Certified partner for Intel processors and edge computing solutions',
      category: 'Hardware & Edge',
      website: 'https://intel.com',
      tier: 'certified'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Strategic partnership for CRM integration and business automation',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Preferred partner for database solutions and enterprise software',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and resources',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Priority support and dedicated account management',
    'Co-marketing and co-selling opportunities',
    'Early access to new products and features',
    'Collaborative research and development projects',
    'Global reach and local expertise'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with joint innovation and go-to-market initiatives',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred status with enhanced support and co-marketing opportunities',
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      name: 'Certified Partners',
      description: 'Certified expertise with training and technical support programs',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    }
  ];

  const categories = ['All', ...Array.from(new Set(partners.map(partner => partner.category)))];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth and innovation with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of industry leaders and innovators. Together, we're building the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{tier.name}</h3>
                  <p className="text-gray-300 text-center">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{partner.category}</p>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        partner.tier === 'strategic' ? 'bg-yellow-400/20 text-yellow-400' :
                        partner.tier === 'preferred' ? 'bg-blue-400/20 text-blue-400' :
                        'bg-green-400/20 text-green-400'
                      }`}>
                        {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                      </span>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Apply for Partnership
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;