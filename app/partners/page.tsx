'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: [
        'Azure cloud infrastructure',
        'AI and machine learning tools',
        'Enterprise security solutions',
        '24/7 technical support'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      description: 'Premier AWS partner delivering scalable cloud solutions',
      category: 'Cloud Infrastructure',
      benefits: [
        'AWS cloud services',
        'Scalable infrastructure',
        'Cost optimization',
        'Migration services'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      description: 'Google Cloud partner specializing in data analytics and AI',
      category: 'Data & AI',
      benefits: [
        'Google Cloud Platform',
        'BigQuery analytics',
        'AI/ML services',
        'Data migration'
      ]
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      description: 'IBM partner for enterprise AI and cognitive solutions',
      category: 'Enterprise AI',
      benefits: [
        'Watson AI platform',
        'Enterprise integration',
        'Cognitive services',
        'Consulting services'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      description: 'Salesforce partner for CRM and customer experience solutions',
      category: 'CRM & CX',
      benefits: [
        'Salesforce platform',
        'Custom development',
        'Integration services',
        'Training and support'
      ]
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      description: 'Oracle partner for database and enterprise applications',
      category: 'Database & ERP',
      benefits: [
        'Oracle database solutions',
        'ERP implementation',
        'Cloud migration',
        'Performance optimization'
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
        'Market expansion opportunities'
      ]
    },
    {
      icon: Award,
      title: 'Technology Partnerships',
      description: 'Technical integrations and certifications with leading technology providers',
      benefits: [
        'Certified expertise',
        'Early access to new features',
        'Technical training and support',
        'Best practice sharing'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partnerships',
      description: 'Reseller and referral partnerships to expand our market reach',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing support',
        'Sales enablement tools',
        'Partner training programs'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Innovation Partnerships',
      description: 'Collaborative R&D partnerships to drive innovation and new solutions',
      benefits: [
        'Joint research projects',
        'Innovation labs',
        'Technology incubation',
        'Patent sharing agreements'
      ]
    }
  ];
  const partnerBenefits = [
    'Access to cutting-edge technology and tools',
    'Joint marketing and sales opportunities',
    'Technical training and certification programs',
    'Dedicated partner support and resources',
    'Co-marketing and lead generation support',
    'Early access to new products and features',
    'Revenue sharing and incentive programs',
    'Partner portal with exclusive resources'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem. Explore partnership opportunities with Zion Tech Group and leverage our AI and IT solutions to grow your business." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, strategic alliances" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver 
            comprehensive AI and IT solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2 text-left">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl text-white font-bold">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="bg-slate-700 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {partnerBenefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {partnerBenefits.slice(4).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Become a Partner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth. 
              Let's work together to deliver exceptional value to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Apply to Become a Partner
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PartnersPage;
