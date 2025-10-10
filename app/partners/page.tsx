'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Users, Globe, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      category: 'Technology Partner',
      description: 'Cloud solutions and AI services',
      benefits: [
        'Azure cloud platform expertise',
        'Microsoft 365 integration',
        'AI and machine learning tools',
        'Enterprise security solutions'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      category: 'Cloud Partner',
      description: 'Scalable cloud infrastructure',
      benefits: [
        'AWS certified solutions',
        'Serverless architecture',
        'Data analytics services',
        'Global infrastructure'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      category: 'AI Partner',
      description: 'Advanced AI and analytics',
      benefits: [
        'Google AI platform',
        'BigQuery analytics',
        'TensorFlow integration',
        'Machine learning APIs'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      category: 'CRM Partner',
      description: 'Customer relationship management',
      benefits: [
        'Salesforce platform expertise',
        'Custom app development',
        'Integration services',
        'Sales automation'
      ]
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      category: 'Database Partner',
      description: 'Enterprise database solutions',
      benefits: [
        'Oracle database solutions',
        'ERP implementation',
        'Cloud migration',
        'Performance optimization'
      ]
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      category: 'AI Partner',
      description: 'Watson AI platform',
      benefits: [
        'IBM Watson AI',
        'Cognitive computing',
        'Data science tools',
        'Enterprise AI solutions'
      ]
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations with industry leaders to deliver comprehensive solutions',
      benefits: [
        'Joint go-to-market strategies',
        'Co-developed solutions',
        'Shared resources and expertise',
        'Mutual customer referrals'
      ]
    },
    {
      icon: Users,
      title: 'Technology Alliances',
      description: 'Technical partnerships to integrate and enhance our service offerings',
      benefits: [
        'API integrations',
        'Technical certifications',
        'Joint training programs',
        'Co-marketing opportunities'
      ]
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships to expand our reach and capabilities',
      benefits: [
        'Global market access',
        'Local expertise and support',
        'Cultural adaptation',
        'Regulatory compliance'
      ]
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Official certifications and accreditations from leading technology providers',
      benefits: [
        'Official certifications',
        'Priority support',
        'Early access to features',
        'Training and resources'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver comprehensive AI and IT solutions to our clients." />
        <meta name="keywords" content="partners, partnerships, technology alliances, Microsoft, AWS, Google Cloud, Salesforce, Oracle, IBM" />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry-leading technology companies to deliver comprehensive 
              solutions that drive business success and innovation.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:scale-105 transition-transform duration-300 group">
                  <div className="text-center mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-6">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Years of experience in AI and IT solutions with a track record of successful implementations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                <p className="text-gray-300">
                  Dedicated partnership managers and technical support teams to ensure success.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-300">
                  Access to our global network of clients and partners across multiple industries.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join our network of trusted partners and help us deliver innovative solutions 
              to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Become a Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;