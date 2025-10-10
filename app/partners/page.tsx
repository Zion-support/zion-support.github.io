'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure and AI services partner',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and cognitive computing solutions',
      category: 'AI & Analytics',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Cloud data platform and analytics solutions',
      category: 'Data Analytics',
      website: 'https://snowflake.com',
      tier: 'certified'
    },
    {
      name: 'Databricks',
      logo: '/images/partners/databricks.png',
      description: 'Unified analytics platform for big data and AI',
      category: 'Data & AI',
      website: 'https://databricks.com',
      tier: 'certified'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing and AI acceleration solutions',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'certified'
    }
  ];

  const partnerTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared vision and deep integration',
      icon: Award,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track record and preferred status',
      icon: Handshake,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      icon: CheckCircle,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint go-to-market strategies and co-selling opportunities',
    'Technical training and certification programs',
    'Dedicated partner support and resources',
    'Marketing and co-marketing opportunities',
    'Early access to new products and features',
    'Joint innovation and R&D initiatives',
    'Global partner ecosystem and networking'
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'from-cyan-400 to-blue-500';
      case 'preferred':
        return 'from-purple-400 to-pink-500';
      case 'certified':
        return 'from-green-400 to-emerald-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getTierName = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic Partner';
      case 'preferred':
        return 'Preferred Partner';
      case 'certified':
        return 'Certified Partner';
      default:
        return 'Partner';
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Ecosystem</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, partner program" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Partner
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our network of strategic partners and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Tiers
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer different partnership levels to meet your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">
                        {partner.name.charAt(0)}
                      </div>
                    </div>
                    <span className={`bg-gradient-to-r ${getTierColor(partner.tier)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {getTierName(partner.tier)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400">
                      {partner.category}
                    </span>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unlock exclusive benefits and opportunities as our partner
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Become a Partner
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Apply to Partner Program
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PartnersPage;