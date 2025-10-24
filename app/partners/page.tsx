'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      logo: '/images/partners/microsoft.png',
      benefits: [
        'Access to Azure AI services',
        'Joint go-to-market initiatives',
        'Technical support and training',
        'Co-marketing opportunities'
      ]
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'Premier AWS partner delivering scalable cloud solutions',
      logo: '/images/partners/aws.png',
      benefits: [
        'AWS certified solutions',
        'Cost optimization expertise',
        'Security best practices',
        '24/7 technical support'
      ]
    },
    {
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Google Cloud AI and machine learning solutions partner',
      logo: '/images/partners/google-cloud.png',
      benefits: [
        'Google Cloud AI tools',
        'Machine learning expertise',
        'Data analytics solutions',
        'Training and certification'
      ]
    },
    {
      name: 'Salesforce',
      category: 'CRM Partner',
      description: 'Certified Salesforce implementation and customization partner',
      logo: '/images/partners/salesforce.png',
      benefits: [
        'Salesforce implementation',
        'Custom development',
        'Integration services',
        'Ongoing support'
      ]
    },
    {
      name: 'Oracle',
      category: 'Database Partner',
      description: 'Oracle database and enterprise solutions partner',
      logo: '/images/partners/oracle.png',
      benefits: [
        'Database optimization',
        'Enterprise solutions',
        'Migration services',
        'Performance tuning'
      ]
    },
    {
      name: 'IBM',
      category: 'AI & Analytics Partner',
      description: 'IBM Watson AI and analytics solutions partner',
      logo: '/images/partners/ibm.png',
      benefits: [
        'IBM Watson AI services',
        'Analytics solutions',
        'Cognitive computing',
        'Industry expertise'
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic technology alliances with leading cloud and AI providers',
      icon: TrendingUp,
      benefits: [
        'Access to cutting-edge technology',
        'Joint product development',
        'Technical support and training',
        'Co-marketing opportunities'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Integration partners for specialized industry solutions',
      icon: Handshake,
      benefits: [
        'Industry-specific expertise',
        'Custom solution development',
        'Market expansion support',
        'Referral programs'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partners for our solutions',
      icon: Users,
      benefits: [
        'Revenue sharing opportunities',
        'Marketing support',
        'Training and certification',
        'Dedicated partner portal'
      ]
    }
  ];

  const stats = [
    { label: 'Partners Worldwide', value: '50+', icon: Users },
    { label: 'Years of Partnership', value: '10+', icon: Award },
    { label: 'Joint Projects', value: '200+', icon: TrendingUp },
    { label: 'Partner Satisfaction', value: '95%', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, AI partners, strategic alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Explore our strategic partnerships with leading technology companies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge AI and IT solutions. Join our partner ecosystem and grow your business.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                  Apply to Partner Program
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Download Partner Kit
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