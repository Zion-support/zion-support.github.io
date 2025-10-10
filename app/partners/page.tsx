'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Award, Handshake } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      category: 'Cloud Partner',
      description: 'AWS Advanced Consulting Partner providing cloud infrastructure solutions',
      benefits: ['AWS credits', 'Training programs', 'Joint go-to-market'],
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      category: 'AI Partner',
      description: 'Google Cloud AI/ML solutions and machine learning platform integration',
      benefits: ['GCP credits', 'AI/ML tools', 'Research collaboration'],
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      category: 'Enterprise Partner',
      description: 'IBM Watson AI and enterprise software solutions partnership',
      benefits: ['Watson AI access', 'Enterprise support', 'Solution integration'],
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      category: 'CRM Partner',
      description: 'Salesforce ecosystem integration and custom development solutions',
      benefits: ['Salesforce credits', 'AppExchange listing', 'Customer referrals'],
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      category: 'Database Partner',
      description: 'Oracle database and cloud infrastructure solutions',
      benefits: ['Oracle credits', 'Technical training', 'Certification programs'],
      tier: 'Silver'
    }
  ];

  const partnerPrograms = [
    {
      icon: Star,
      title: 'Platinum Partnership',
      description: 'Our highest tier partnership with exclusive benefits and co-innovation opportunities',
      benefits: [
        'Dedicated account management',
        'Priority technical support',
        'Co-marketing and lead sharing',
        'Custom solution development',
        'Executive relationship management'
      ],
      requirements: [
        'Minimum $1M annual revenue',
        'Certified technical expertise',
        'Proven track record',
        'Strategic alignment'
      ]
    },
    {
      icon: Award,
      title: 'Gold Partnership',
      description: 'Strategic partnership with significant benefits and growth opportunities',
      benefits: [
        'Enhanced technical support',
        'Marketing support',
        'Training and certification',
        'Joint solution development',
        'Referral programs'
      ],
      requirements: [
        'Minimum $500K annual revenue',
        'Technical certifications',
        'Customer success stories',
        'Market presence'
      ]
    },
    {
      icon: Handshake,
      title: 'Silver Partnership',
      description: 'Entry-level partnership with essential benefits and growth potential',
      benefits: [
        'Basic technical support',
        'Partner portal access',
        'Training materials',
        'Marketing resources',
        'Referral incentives'
      ],
      requirements: [
        'Minimum $100K annual revenue',
        'Basic technical knowledge',
        'Customer references',
        'Partnership commitment'
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of clients and partners'
    },
    {
      icon: Users,
      title: 'Technical Support',
      description: 'Dedicated support team and technical resources'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Training and certification opportunities for your team'
    },
    {
      icon: Star,
      title: 'Co-Marketing',
      description: 'Joint marketing initiatives and lead sharing programs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Explore partnership opportunities and benefits." />
        <meta name="keywords" content="technology partners, strategic partnerships, partner program, business partnerships, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology partners and grow your business with innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Partner Program
              </button>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Technology Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl font-bold">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{partner.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Programs */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerPrograms.map((program, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Partner Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to deliver exceptional value to our mutual customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;