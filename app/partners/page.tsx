import React from 'react';
import { ExternalLink, Check, Globe, Shield, Zap, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Cloud Platform',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      logo: '/api/placeholder/200/100',
      website: 'https://microsoft.com',
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Infrastructure',
      description: 'AWS partnership for scalable cloud computing and AI services',
      logo: '/api/placeholder/200/100',
      website: 'https://aws.amazon.com',
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'Google Cloud',
      category: 'AI & Analytics',
      description: 'Google Cloud AI and machine learning platform integration',
      logo: '/api/placeholder/200/100',
      website: 'https://cloud.google.com',
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: 'NVIDIA',
      category: 'AI Hardware',
      description: 'GPU acceleration and AI computing solutions',
      logo: '/api/placeholder/200/100',
      website: 'https://nvidia.com',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Reduced implementation costs',
    'Faster time to market',
    'Enhanced security and compliance',
    '24/7 technical support',
    'Joint go-to-market opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Partners - Zion Tech Group | Strategic Partnerships"
        description="Learn about our strategic partnerships with leading technology companies. Discover how we work together to deliver innovative solutions."
        keywords="partners, partnerships, strategic alliances, technology partners, cloud partners, AI partners"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic partnerships with leading technology companies to deliver the best solutions for our clients.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{partner.category}</p>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic partnerships provide significant advantages for our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in partnering with us? We're always looking for innovative companies to collaborate with.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Contact Us
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;