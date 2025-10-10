'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Star, Shield, Zap } from 'lucide-react';

interface Partner {
  id: number;
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
      id: 1,
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Services',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Certified AI and machine learning partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      id: 4,
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Strategic quantum computing partner',
      category: 'Quantum Computing',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      id: 5,
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'Preferred CRM and automation partner',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      id: 6,
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Certified database and enterprise solutions partner',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return <Star className="w-5 h-5 text-yellow-400" />;
      case 'preferred':
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 'certified':
        return <Zap className="w-5 h-5 text-green-400" />;
      default:
        return null;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'preferred':
        return 'bg-blue-500/20 text-blue-400';
      case 'certified':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies and how they enhance our AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, strategic alliances" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry-leading technology companies to deliver 
              comprehensive AI and IT solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTierIcon(partner.tier)}
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getTierColor(partner.tier)}`}>
                      {partner.tier.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <p className="text-cyan-400 text-sm font-semibold mb-4">{partner.category}</p>
                
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in partnering with us? We're always looking for innovative 
              companies to collaborate with and expand our solution offerings.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;