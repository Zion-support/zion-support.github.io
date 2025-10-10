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
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud provider for scalable infrastructure solutions',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform partnership',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and business automation solutions',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing collaboration',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth'
    },
    {
      icon: TrendingUp,
      title: 'Co-Marketing',
      description: 'Joint marketing initiatives and go-to-market strategies'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Validated and certified integrations with partner platforms'
    },
    {
      icon: Users,
      title: 'Joint Support',
      description: 'Collaborative customer support and technical assistance'
    }
  ];

  const tiers = {
    strategic: {
      label: 'Strategic Partner',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
      borderColor: 'border-yellow-400/50'
    },
    preferred: {
      label: 'Preferred Partner',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/50'
    },
    certified: {
      label: 'Certified Partner',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      borderColor: 'border-green-400/50'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with us." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, cloud partners, AI partners" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of technology through strategic alliances with industry leaders and innovative partners.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const tierInfo = tiers[partner.tier];
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${tierInfo.borderColor}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.bgColor} ${tierInfo.color}`}>
                      {tierInfo.label}
                    </div>
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
                  
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-gray-400 text-center">
                      <div className="text-2xl mb-2">🏢</div>
                      <div className="text-sm">{partner.name}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  <div className="text-xs text-cyan-400 font-medium">{partner.category}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/50">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3>
              </div>
              <p className="text-gray-300 mb-6">Our highest tier of partnership with exclusive benefits and co-innovation opportunities.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Joint go-to-market strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Co-innovation projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Priority support and resources
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Executive relationship management
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/50">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3>
              </div>
              <p className="text-gray-300 mb-6">Strong partnership with dedicated support and joint marketing opportunities.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Marketing collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Technical integration support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Training and certification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Dedicated partner manager
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-green-400/50">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3>
              </div>
              <p className="text-gray-300 mb-6">Validated partnership with proven capabilities and solution integration.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Solution certification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Technical support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Partner portal access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Co-marketing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Become Our Partner
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth. 
              Let's build the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Partners Team
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;