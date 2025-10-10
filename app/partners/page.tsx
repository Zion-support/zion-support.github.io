'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver cutting-edge solutions.',
      benefits: [
        'Access to latest technologies',
        'Joint go-to-market strategies',
        'Technical support and training',
        'Co-marketing opportunities'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Channel Partners',
      description: 'Reseller and referral partnerships to expand our market reach and provide local support.',
      benefits: [
        'Competitive commission rates',
        'Marketing support and materials',
        'Sales training and certification',
        'Dedicated partner portal'
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Integration Partners',
      description: 'Partners who help integrate our solutions with existing business systems and workflows.',
      benefits: [
        'API access and documentation',
        'Technical integration support',
        'Custom development resources',
        'Joint customer success programs'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      type: 'Technology Partner',
      description: 'Advanced cloud infrastructure and machine learning services'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      type: 'Technology Partner',
      description: 'AI and data analytics platform integration'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      type: 'Integration Partner',
      description: 'CRM integration and customer success solutions'
    },
    {
      name: 'HubSpot',
      logo: '/images/partners/hubspot.png',
      type: 'Channel Partner',
      description: 'Marketing automation and lead generation tools'
    },
    {
      name: 'Slack',
      logo: '/images/partners/slack.png',
      type: 'Integration Partner',
      description: 'Workplace communication and collaboration tools'
    }
  ];

  const partnerBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      title: 'Revenue Growth',
      description: 'Increase your revenue with our competitive partner program and joint sales opportunities.'
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: 'Certification Program',
      description: 'Get certified on our solutions and become a trusted advisor to your customers.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-400" />,
      title: 'Dedicated Support',
      description: 'Access to our partner success team for technical support and business guidance.'
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-cyan-400" />,
      title: 'Marketing Support',
      description: 'Co-marketing opportunities, lead sharing, and access to marketing materials.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program</title>
        <meta name="description" content="Join our partner program and grow your business with AI and IT solutions. Technology, channel, and integration partnerships available." />
        <meta name="keywords" content="partners, partner program, technology partners, channel partners, integration partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Partner
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Program
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our growing network of partners and help businesses transform with AI and IT solutions. 
            Together, we can achieve more.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{partner.type}</p>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of joining our partner ecosystem and growing your business with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partner Requirements</h2>
            <p className="text-xl text-gray-300">
              What we look for in our partners to ensure mutual success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Technology Partners</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Proven track record in technology solutions
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Complementary product portfolio
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Strong technical expertise
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Commitment to joint innovation
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Channel Partners</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Established customer base
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Sales and marketing capabilities
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Technical support resources
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Geographic market presence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Become a Partner?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner program and start growing your business with AI and IT solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Apply to Partner Program</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Download Partner Kit</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;