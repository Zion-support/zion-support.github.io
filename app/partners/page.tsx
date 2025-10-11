import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Award, Users, Globe, Shield, Zap } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'strategic' | 'certified' | 'preferred';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML services',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      id: 2,
      name: 'Microsoft Azure',
      logo: '/images/partners/microsoft-azure.png',
      description: 'Strategic partner for Azure cloud services and enterprise solutions',
      category: 'Cloud & Enterprise',
      website: 'https://azure.microsoft.com',
      tier: 'strategic'
    },
    {
      id: 3,
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Advanced consulting partner for AWS cloud infrastructure',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'certified'
    },
    {
      id: 4,
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Preferred partner for AI and GPU-accelerated computing solutions',
      category: 'AI & Computing',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      id: 5,
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      id: 6,
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partner for enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared vision and goals',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-600 to-blue-600'
    },
    {
      name: 'Certified Partners',
      description: 'Validated expertise and proven track record in specific technologies',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-600 to-blue-600'
    },
    {
      name: 'Preferred Partners',
      description: 'Specialized solutions and niche market expertise',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'border-purple-400 bg-purple-400/10';
      case 'certified':
        return 'border-green-400 bg-green-400/10';
      case 'preferred':
        return 'border-orange-400 bg-orange-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic Partner';
      case 'certified':
        return 'Certified Partner';
      case 'preferred':
        return 'Preferred Partner';
      default:
        return 'Partner';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Strategic partnerships with leading technology companies. Join our partner ecosystem and grow together." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation across all sectors.
          </p>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with partners at different levels to ensure the best solutions for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tier.name}</h3>
                <p className="text-gray-300">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trusted by leading technology companies worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 hover:bg-white/20 ${getTierColor(partner.tier)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-gray-600 font-bold text-sm">{partner.name.charAt(0)}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTierColor(partner.tier)}`}>
                    {getTierLabel(partner.tier)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="text-xs text-gray-400 mb-4">{partner.category}</div>
                
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to join our partner ecosystem? Let's explore how we can work together to deliver exceptional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join Our Network
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;