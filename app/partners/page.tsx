'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      benefits: [
        'Azure cloud credits',
        'Co-marketing opportunities',
        'Technical support',
        'Joint solution development'
      ],
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      benefits: [
        'AWS credits and discounts',
        'Technical training',
        'Marketing support',
        'Solution architecture guidance'
      ],
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and machine learning platform',
      category: 'AI/ML',
      benefits: [
        'GCP credits',
        'AI/ML training',
        'Co-innovation labs',
        'Go-to-market support'
      ],
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '💼',
      description: 'CRM and business automation',
      category: 'CRM',
      benefits: [
        'Salesforce credits',
        'AppExchange listing',
        'Technical certification',
        'Joint customer success'
      ],
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '🔵',
      description: 'Enterprise AI and blockchain',
      category: 'Enterprise',
      benefits: [
        'IBM Cloud credits',
        'Watson AI integration',
        'Enterprise support',
        'Industry expertise'
      ],
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Database and enterprise applications',
      category: 'Database',
      benefits: [
        'Oracle Cloud credits',
        'Database optimization',
        'Enterprise consulting',
        'Migration support'
      ],
      tier: 'Silver'
    }
  ];

  const partnerTiers = [
    {
      name: 'Platinum',
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      description: 'Strategic partners with deep integration',
      benefits: [
        'Highest level of support',
        'Co-marketing opportunities',
        'Joint solution development',
        'Dedicated account management'
      ]
    },
    {
      name: 'Gold',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: 'Key partners with strong collaboration',
      benefits: [
        'Priority support',
        'Training and certification',
        'Marketing collaboration',
        'Technical integration support'
      ]
    },
    {
      name: 'Silver',
      icon: <Handshake className="w-8 h-8 text-gray-500" />,
      description: 'Valued partners with mutual benefits',
      benefits: [
        'Standard support',
        'Partner portal access',
        'Training resources',
        'Referral opportunities'
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Revenue Growth',
      description: 'Access to new markets and customer segments through partner channels'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Technical Innovation',
      description: 'Collaborate on cutting-edge solutions and emerging technologies'
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: 'Market Expansion',
      description: 'Leverage partner networks to reach new customers and geographies'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: 'Credibility & Trust',
      description: 'Build trust through association with established technology leaders'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Explore partnership opportunities and benefits." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Partners
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Tiers */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Partnership Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partnerTiers.map((tier, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {tier.icon}
                      <h3 className="text-xl font-bold text-white ml-3">{tier.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Partners */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Our Technology Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{partner.logo}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                          partner.tier === 'Gold' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {partner.tier}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <div className="space-y-2">
                      {partner.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Partner */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Become a Partner
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Ready to join our partner ecosystem? Let's discuss how we can work together to deliver exceptional solutions to our customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="mailto:partners@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Email Partners Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PartnersPage;
