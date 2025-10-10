'use client';
import React from 'react';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: [
        'Access to latest Azure services',
        'Joint go-to-market initiatives',
        'Technical training and certification',
        'Co-marketing opportunities'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier consulting partner for AWS cloud infrastructure',
      category: 'Cloud Infrastructure',
      benefits: [
        'Advanced AWS certifications',
        'Direct access to AWS solutions architects',
        'Preferred pricing and support',
        'Joint customer success programs'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'AI & Machine Learning',
      benefits: [
        'Google Cloud AI/ML expertise',
        'Joint customer implementations',
        'Technical training programs',
        'Co-innovation projects'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      category: 'CRM & Automation',
      benefits: [
        'Salesforce certified consultants',
        'Custom app development',
        'Integration services',
        'Training and support'
      ]
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Partner for enterprise AI and Watson solutions',
      category: 'Enterprise AI',
      benefits: [
        'IBM Watson AI capabilities',
        'Enterprise security solutions',
        'Industry-specific expertise',
        'Global delivery capabilities'
      ]
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Partner for database and enterprise applications',
      category: 'Database & Applications',
      benefits: [
        'Oracle database expertise',
        'Cloud migration services',
        'Enterprise application integration',
        'Performance optimization'
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      icon: Award,
      benefits: [
        'Access to cutting-edge technologies',
        'Joint product development',
        'Technical support and training',
        'Co-marketing opportunities'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Collaborative partnerships for integrated solutions',
      icon: Handshake,
      benefits: [
        'Complementary service offerings',
        'Joint customer implementations',
        'Shared expertise and resources',
        'Expanded market reach'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Distribution and reseller partnerships',
      icon: TrendingUp,
      benefits: [
        'Reseller programs and incentives',
        'Sales and marketing support',
        'Technical training and certification',
        'Lead generation and referrals'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships with industry leaders to deliver comprehensive solutions and drive innovation.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🏢</div>
                    <p className="text-sm font-semibold">{partner.name} Logo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-3">{partner.category}</p>
                <p className="text-gray-400 mb-6">{partner.description}</p>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our strategic partnerships provide mutual benefits, enabling us to deliver comprehensive solutions 
                while expanding market reach and driving innovation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-400">Access to our experienced professionals and technical expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Market Growth</h3>
                    <p className="text-gray-400">Joint go-to-market strategies and expanded customer reach</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Certified Solutions</h3>
                    <p className="text-gray-400">Certified implementations and best practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Partnership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Access to cutting-edge technologies and platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Joint marketing and sales support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Technical training and certification programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Co-innovation and product development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Preferred pricing and support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Global delivery capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in Partnering With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partners@ziontechgroup.com"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;