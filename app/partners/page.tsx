'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap, TrendingUp } from 'lucide-react';

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
      logo: '/api/placeholder/200/100',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and machine learning platform partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation solutions partner',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration partner',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'certified'
    }
  ];

  const partnerTiers = {
    strategic: {
      label: 'Strategic Partner',
      color: 'from-cyan-400 to-blue-500',
      icon: Award
    },
    preferred: {
      label: 'Preferred Partner',
      color: 'from-purple-400 to-pink-500',
      icon: Handshake
    },
    certified: {
      label: 'Certified Partner',
      color: 'from-green-400 to-emerald-500',
      icon: CheckCircle
    }
  };

  const benefits = [
    {
      icon: Building2,
      title: 'Strategic Alliances',
      description: 'Deep partnerships with industry leaders to deliver comprehensive solutions'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to specialized expertise and resources from our partner ecosystem'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Collaborative innovation to bring cutting-edge solutions to market faster'
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Expanded market reach through our global partner network'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, strategic alliances, technology partnerships, cloud providers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver comprehensive AI and IT solutions that drive business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Strategic Partners
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Industry Recognition
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                Global Network
              </span>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Partner With Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Partner Network
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => {
                const tierInfo = partnerTiers[partner.tier];
                const TierIcon = tierInfo.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 object-contain"
                      />
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tierInfo.color} text-white`}>
                        <TierIcon className="w-3 h-3 mr-1" />
                        {tierInfo.label}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-slate-700 px-3 py-1 rounded-full">
                        {partner.category}
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Partnership Tiers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {Object.entries(partnerTiers).map(([tier, info]) => {
                const TierIcon = info.icon;
                return (
                  <div key={tier} className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <TierIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{info.label}</h3>
                    <ul className="text-left space-y-2 text-gray-400">
                      {tier === 'strategic' && (
                        <>
                          <li>• Joint go-to-market strategies</li>
                          <li>• Co-development opportunities</li>
                          <li>• Priority support and resources</li>
                          <li>• Executive relationship management</li>
                        </>
                      )}
                      {tier === 'preferred' && (
                        <>
                          <li>• Preferred pricing and terms</li>
                          <li>• Marketing collaboration</li>
                          <li>• Technical support</li>
                          <li>• Training and certification</li>
                        </>
                      )}
                      {tier === 'certified' && (
                        <>
                          <li>• Certified solution provider</li>
                          <li>• Technical validation</li>
                          <li>• Partner portal access</li>
                          <li>• Basic support</li>
                        </>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Learn More
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;