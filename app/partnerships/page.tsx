import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, Handshake, Award, TrendingUp, Globe, Shield } from 'lucide-react';

const PartnershipsPage: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver cutting-edge solutions.',
      icon: '🔧',
      benefits: [
        'Access to latest technologies',
        'Joint product development',
        'Technical support and training',
        'Co-marketing opportunities'
      ],
      requirements: [
        'Proven technology expertise',
        'Strong market presence',
        'Compatible business values',
        'Commitment to innovation'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and customer base.',
      icon: '🤝',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing support and materials',
        'Sales training and certification',
        'Dedicated partner portal'
      ],
      requirements: [
        'Established sales network',
        'Industry expertise',
        'Customer service excellence',
        'Growth commitment'
      ]
    },
    {
      title: 'Integration Partners',
      description: 'Partnerships focused on seamless integration with existing business systems and workflows.',
      icon: '🔗',
      benefits: [
        'Pre-built integrations',
        'Technical documentation',
        'API access and support',
        'Joint customer success'
      ],
      requirements: [
        'Technical integration capabilities',
        'API development expertise',
        'Customer support infrastructure',
        'Quality assurance processes'
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Partnerships with consulting firms to provide comprehensive AI and technology consulting services.',
      icon: '💼',
      benefits: [
        'Joint service delivery',
        'Knowledge sharing',
        'Referral opportunities',
        'Training and certification'
      ],
      requirements: [
        'Consulting expertise',
        'Industry knowledge',
        'Client relationships',
        'Service delivery excellence'
      ]
    }
  ];

  const successStories = [
    {
      partner: 'TechCorp Solutions',
      type: 'Technology Partner',
      result: '300% increase in AI adoption',
      description: 'Joint development of AI-powered analytics platform resulted in significant market expansion.'
    },
    {
      partner: 'DataFlow Systems',
      type: 'Integration Partner',
      result: '50+ successful integrations',
      description: 'Seamless integration with major CRM and ERP systems across multiple industries.'
    },
    {
      partner: 'CloudFirst Consulting',
      type: 'Consulting Partner',
      result: '$2M+ in joint revenue',
      description: 'Collaborative consulting services helped 100+ enterprises adopt AI technologies.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, channel, integration, and consulting partnership opportunities." />
        <meta name="keywords" content="partnerships, technology partners, channel partners, integration partners, consulting partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of partners and unlock new opportunities for growth, innovation, and success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Active Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">$10M+</div>
                <div className="text-gray-300">Partner Revenue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Joint Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Partner Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Partnership Types
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <Star className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 text-purple-500 mr-2" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                    Apply for Partnership
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Partner Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{story.partner}</h3>
                    <p className="text-sm text-gray-500">{story.type}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">{story.result}</div>
                    <p className="text-gray-600 text-sm">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Partner With Zion Tech Group?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300">Access to international markets and customers worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                <p className="text-gray-300">5+ years of successful AI implementations and partnerships</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">Dedicated partner success team and technical support</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mutual Growth</h3>
                <p className="text-gray-300">Shared success through collaborative partnerships</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@ziontechgroup.com?subject=Partnership Inquiry"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Contact Partnerships Team
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnershipsPage;