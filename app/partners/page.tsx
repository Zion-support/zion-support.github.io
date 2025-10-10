'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, ArrowRight } from 'lucide-react';

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
      description: 'Enterprise AI and hybrid cloud solutions with Watson platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Enterprise resource planning and business intelligence',
      category: 'ERP & BI',
      website: 'https://sap.com',
      tier: 'certified'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions',
    'Co-marketing and co-selling',
    'Product integration support',
    'Priority customer support'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with joint product development',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      count: 3
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred status with enhanced support and co-marketing',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      count: 2
    },
    {
      name: 'Certified Partners',
      description: 'Certified expertise with validated solutions and training',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      count: 3
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'border-yellow-400/50 bg-yellow-500/10';
      case 'preferred':
        return 'border-blue-400/50 bg-blue-500/10';
      case 'certified':
        return 'border-green-400/50 bg-green-500/10';
      default:
        return 'border-gray-400/50 bg-gray-500/10';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic';
      case 'preferred':
        return 'Preferred';
      case 'certified':
        return 'Certified';
      default:
        return 'Partner';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, strategic alliances, technology partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation across all sectors.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-cyan-400">
              <div className="flex items-center">
                <Handshake className="w-5 h-5 mr-2" />
                <span>Strategic Alliances</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Certified Partners</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our partnership program is designed to create mutual value and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => {
                const IconComponent = tier.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-cyan-400 font-semibold">{tier.count} Partners</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Partner Network</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Working with industry leaders to deliver exceptional solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group ${getTierColor(partner.tier)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      partner.tier === 'strategic' ? 'bg-yellow-500/20 text-yellow-300' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {getTierBadge(partner.tier)}
                    </span>
                    {partner.website && (
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>

                  <div className="aspect-w-16 aspect-h-9 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  
                  <div className="text-xs text-cyan-400 font-medium">{partner.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-white font-semibold">Partnership Advantage</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-gray-300 mb-8">
              Join our partner network and unlock new opportunities for growth, innovation, and mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Partner With Us
              </Link>
              <Link
                to="/consultation"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
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