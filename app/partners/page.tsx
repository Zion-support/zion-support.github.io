'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: 'strategic' | 'preferred' | 'certified';
  services: string[];
  benefits: string[];
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      website: 'https://microsoft.com',
      tier: 'strategic',
      services: ['Azure Cloud', 'AI Services', 'Office 365', 'Power Platform'],
      benefits: ['Co-marketing opportunities', 'Technical support', 'Joint development', 'Priority access']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure and AI/ML services partner',
      website: 'https://aws.amazon.com',
      tier: 'preferred',
      services: ['AWS Cloud', 'Machine Learning', 'IoT Solutions', 'Database Services'],
      benefits: ['Technical training', 'Co-selling programs', 'Solution architecture support', 'Marketplace listing']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud AI and data analytics',
      website: 'https://cloud.google.com',
      tier: 'certified',
      services: ['Google Cloud Platform', 'AI/ML APIs', 'BigQuery', 'Kubernetes'],
      benefits: ['Certification programs', 'Technical resources', 'Co-marketing', 'Support access']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partner for enterprise AI and quantum computing',
      website: 'https://ibm.com',
      tier: 'strategic',
      services: ['Watson AI', 'Quantum Computing', 'Enterprise Software', 'Consulting'],
      benefits: ['Joint research projects', 'Technology licensing', 'Market development', 'Executive briefings']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Preferred partner for GPU computing and AI acceleration',
      website: 'https://nvidia.com',
      tier: 'preferred',
      services: ['GPU Computing', 'AI Frameworks', 'Data Center Solutions', 'Edge Computing'],
      benefits: ['Hardware discounts', 'Technical support', 'Training programs', 'Early access to new products']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      website: 'https://salesforce.com',
      tier: 'certified',
      services: ['Salesforce CRM', 'Marketing Cloud', 'Service Cloud', 'Platform Development'],
      benefits: ['Partner certification', 'Co-selling opportunities', 'Technical resources', 'Community access']
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Strategic partner for enterprise database and cloud solutions',
      website: 'https://oracle.com',
      tier: 'strategic',
      services: ['Oracle Cloud', 'Database Solutions', 'Enterprise Applications', 'Security'],
      benefits: ['Joint go-to-market', 'Technical collaboration', 'Training programs', 'Support access']
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Preferred partner for processor and AI hardware solutions',
      website: 'https://intel.com',
      tier: 'preferred',
      services: ['Intel Processors', 'AI Hardware', 'Edge Computing', 'Data Center'],
      benefits: ['Hardware optimization', 'Technical support', 'Training resources', 'Co-marketing']
    }
  ];

  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our most important partnerships with joint development and go-to-market strategies',
      color: 'from-purple-500 to-pink-500',
      icon: Award
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Key partners with co-selling opportunities and technical collaboration',
      color: 'from-cyan-500 to-blue-500',
      icon: Handshake
    },
    certified: {
      title: 'Certified Partners',
      description: 'Certified partners with proven expertise and solution capabilities',
      color: 'from-green-500 to-teal-500',
      icon: CheckCircle
    }
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.tier]) {
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies" />
        <meta name="keywords" content="technology partners, strategic alliances, cloud partners, AI partners" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Our strategic partnerships with leading technology companies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic partnerships enable us to provide comprehensive, integrated solutions for our clients.
            </p>
          </div>
        </section>

        {/* Partner Tiers */}
        {Object.entries(partnerTiers).map(([tierKey, tierInfo]) => {
          const tierPartners = groupedPartners[tierKey] || [];
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierKey} className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <tierInfo.icon className="w-8 h-8 text-cyan-400" />
                    <h2 className="text-3xl font-bold text-white">{tierInfo.title}</h2>
                  </div>
                  <p className="text-gray-300 max-w-2xl mx-auto">{tierInfo.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={partner.name} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tierInfo.color} text-white`}>
                          {tierInfo.title}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.services.map((service, serviceIndex) => (
                            <span key={serviceIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Partnership Benefits:</h4>
                        <ul className="space-y-1">
                          {partner.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300 text-sm">Access to cutting-edge technologies and early product releases</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Expertise</h3>
                <p className="text-gray-300 text-sm">Collaborate with industry experts and thought leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                <Handshake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Co-selling</h3>
                <p className="text-gray-300 text-sm">Joint go-to-market strategies and co-selling opportunities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Recognition</h3>
                <p className="text-gray-300 text-sm">Industry recognition and certification programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-gray-300 mb-6">
                Interested in partnering with us? We're always looking for innovative companies that share our vision of transforming businesses through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/partnership-proposal.pdf"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Download Partnership Guide
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;