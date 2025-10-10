'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp, Phone, Mail } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud services and AI solutions.',
      logo: '/images/partners/microsoft-logo.png',
      benefits: [
        'Azure cloud credits',
        'Co-marketing opportunities',
        'Technical support',
        'Joint solution development'
      ]
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'Premier AWS partner providing cloud infrastructure and AI services.',
      logo: '/images/partners/aws-logo.png',
      benefits: [
        'AWS certification',
        'Technical training',
        'Marketing support',
        'Solution architecture guidance'
      ]
    },
    {
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Google Cloud partner specializing in AI and machine learning solutions.',
      logo: '/images/partners/google-cloud-logo.png',
      benefits: [
        'Google Cloud credits',
        'AI/ML training',
        'Co-innovation labs',
        'Go-to-market support'
      ]
    },
    {
      name: 'IBM',
      category: 'Enterprise Partner',
      description: 'Enterprise solutions partnership for Watson AI and hybrid cloud.',
      logo: '/images/partners/ibm-logo.png',
      benefits: [
        'Watson AI access',
        'Enterprise support',
        'Joint development',
        'Market expansion'
      ]
    },
    {
      name: 'Salesforce',
      category: 'CRM Partner',
      description: 'Salesforce implementation and customization partner.',
      logo: '/images/partners/salesforce-logo.png',
      benefits: [
        'Salesforce certification',
        'Implementation support',
        'Custom development',
        'Training programs'
      ]
    },
    {
      name: 'ServiceNow',
      category: 'Platform Partner',
      description: 'ServiceNow platform implementation and workflow automation.',
      logo: '/images/partners/servicenow-logo.png',
      benefits: [
        'Platform expertise',
        'Workflow automation',
        'Integration services',
        'Support and training'
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      icon: Award,
      features: [
        'Access to cutting-edge technologies',
        'Co-development opportunities',
        'Technical support and training',
        'Joint go-to-market strategies'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and referral partnerships',
      icon: Users,
      features: [
        'Revenue sharing programs',
        'Sales and marketing support',
        'Technical training',
        'Lead generation assistance'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Integration and implementation partnerships',
      icon: Handshake,
      features: [
        'Solution integration',
        'Implementation services',
        'Custom development',
        'Ongoing support'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic alliances',
      icon: TrendingUp,
      features: [
        'Joint innovation projects',
        'Market expansion',
        'Resource sharing',
        'Strategic planning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Partner with Zion Tech Group. Explore partnership opportunities and join our ecosystem of technology leaders." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Join our ecosystem of technology leaders and create powerful solutions together.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Partnership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2 text-left">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {partner.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">
                  {partner.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Partner With Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">
                      We've successfully delivered 500+ projects with 99.9% client satisfaction rate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
                    <p className="text-gray-300">
                      Award-winning solutions and industry-leading expertise in AI and IT.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Highly skilled professionals with deep expertise in cutting-edge technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Collaborative Approach</h3>
                    <p className="text-gray-300">
                      We work closely with partners to create mutually beneficial solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Partnership Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$10M+</div>
                  <div className="text-gray-300">Partner Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-gray-300">Partner Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Partner Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our ecosystem of technology leaders and create powerful solutions together. 
            Let's discuss how we can work together to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partners@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Become a Partner
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;