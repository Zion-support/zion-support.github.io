'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

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
      description: 'Preferred partner for AWS cloud infrastructure and services',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform solutions',
      category: 'Cloud & Analytics',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partnership for enterprise AI and blockchain solutions',
      category: 'AI & Blockchain',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Preferred partner for database and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared vision and goals',
      color: 'from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-blue-500/10'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track record and expertise',
      color: 'from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-400/50',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-teal-500/10'
    },
    {
      name: 'Certified Partners',
      description: 'Certified partners with specialized skills and certifications',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority customer support',
    'Exclusive product previews'
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation in AI, cloud computing, and enterprise technology.
            </p>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships are structured to provide mutual value and drive innovation across different levels of collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technology companies to deliver comprehensive solutions to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">{partner.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          partner.tier === 'strategic' ? 'bg-purple-500/20 text-purple-400' :
                          partner.tier === 'preferred' ? 'bg-cyan-500/20 text-cyan-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {partner.tier}
                        </span>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships provide mutual value and drive innovation across the technology ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Technology Access</h3>
                <p className="text-gray-300">Access to cutting-edge technologies and platforms from our partners</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Joint Solutions</h3>
                <p className="text-gray-300">Collaborative development of innovative solutions for our clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-gray-300">Dedicated support and expertise from partner technical teams</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? Let's explore how we can work together to deliver innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <TrendingUp className="w-5 h-5" />
                  View Partnership Program
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;