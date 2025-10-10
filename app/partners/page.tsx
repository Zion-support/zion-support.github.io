'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ExternalLink, 
  Star, 
  Users, 
  Shield, 
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning platform integration',
      category: 'AI & ML',
      tier: 'Gold',
      benefits: ['GCP credits', 'AI/ML tools', 'Technical training']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing research',
      category: 'Enterprise AI',
      tier: 'Gold',
      benefits: ['IBM Cloud credits', 'Quantum computing access', 'Research collaboration']
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and customer experience solutions',
      category: 'CRM & Sales',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'Integration support', 'Co-selling opportunities']
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      tier: 'Silver',
      benefits: ['Oracle Cloud credits', 'Technical support', 'Training programs']
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'AI hardware and GPU computing solutions',
      category: 'AI Hardware',
      tier: 'Silver',
      benefits: ['GPU access', 'AI development tools', 'Technical resources']
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'High-performance computing and AI optimization',
      category: 'Hardware & Performance',
      tier: 'Silver',
      benefits: ['Hardware discounts', 'Performance optimization', 'Technical support']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Co-marketing and joint go-to-market opportunities',
    'Technical support and training programs',
    'Credits and discounts on partner services',
    'Early access to new features and products',
    'Joint solution development and innovation',
    'Global reach and market expansion',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with major technology leaders',
      color: 'purple',
      requirements: 'Enterprise-level partnership with significant mutual investment',
      benefits: [
        'Maximum credits and discounts',
        'Dedicated technical teams',
        'Co-innovation projects',
        'Global marketing support',
        'Executive relationship management'
      ]
    },
    {
      name: 'Gold',
      description: 'Established partnerships with leading technology providers',
      color: 'yellow',
      requirements: 'Proven track record and significant business volume',
      benefits: [
        'Substantial credits and discounts',
        'Priority technical support',
        'Joint marketing opportunities',
        'Training and certification programs',
        'Regular business reviews'
      ]
    },
    {
      name: 'Silver',
      description: 'Growing partnerships with innovative technology companies',
      color: 'gray',
      requirements: 'Active partnership with mutual business value',
      benefits: [
        'Credits and discounts',
        'Technical support',
        'Marketing resources',
        'Training opportunities',
        'Partner portal access'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and how we work together to deliver innovative solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise partnerships" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with leading technology companies to deliver innovative solutions and create value for our clients worldwide.
            </p>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${tier.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Star className={`w-8 h-8 text-${tier.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <p className="text-sm text-gray-400">{tier.requirements}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group text-center">
                  <div className="mb-4">
                    <div className="w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        partner.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                        partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {partner.tier}
                      </span>
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Partnership Benefits
            </h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our ecosystem of technology partners and help us deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center"
                >
                  Apply for Partnership
                </Link>
                <Link
                  to="/partners/benefits"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Learn More
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