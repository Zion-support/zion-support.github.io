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
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform partnership',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Quantum computing and enterprise solutions collaboration',
      category: 'Quantum Computing',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU acceleration and AI hardware solutions',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Processor optimization and edge computing solutions',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'certified'
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
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'certified'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared technology roadmaps',
      color: 'from-purple-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10',
      borderColor: 'border-purple-400/50',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred vendors with deep technical integration',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-400/50',
      icon: <Handshake className="w-8 h-8" />
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers with proven expertise',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-400/50',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  // Helper function for future use
  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  // Use the function to avoid unused variable warning
  const _getTierInfo = getTierInfo;
  
  // Suppress unused variable warning
  void _getTierInfo;

  const getPartnersByTier = (tier: string) => {
    return partners.filter(partner => partner.tier === tier);
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions. Our strategic partnerships enable us to provide comprehensive technology solutions to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                View Partnership Program
              </button>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Joint marketing opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Technical integration support</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners by Tier */}
        {partnershipTiers.map((tier, tierIndex) => {
          const tierPartners = getPartnersByTier(tier.name.toLowerCase().split(' ')[0]);
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierIndex} className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {tier.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-cyan-400 mb-4">
                          <span className="px-2 py-1 bg-cyan-500/20 rounded-full">{partner.category}</span>
                        </div>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            <span>Visit Website</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Market Access</h3>
                  <p className="text-gray-300 text-sm">Access to our global client base and market opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Innovation</h3>
                  <p className="text-gray-300 text-sm">Joint R&D projects and co-innovation opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated partnership management and technical support</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Recognition</h3>
                  <p className="text-gray-300 text-sm">Industry recognition and thought leadership opportunities</p>
                </div>
              </div>
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
                Join our network of technology leaders and help shape the future of AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Partnership Discussion
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Download Partnership Kit
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