'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, CheckCircle, Users, Globe, Award, Phone, Mail } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and enterprise software',
      category: 'Cloud & Enterprise',
      tier: 'Gold',
      benefits: [
        'Azure credits and discounts',
        'Co-marketing opportunities',
        'Technical support and training',
        'Access to beta programs'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      description: 'Premier partner for AWS cloud infrastructure and AI services',
      category: 'Cloud & AI',
      tier: 'Gold',
      benefits: [
        'AWS credits and discounts',
        'Technical certification programs',
        'Joint go-to-market initiatives',
        'Dedicated partner support'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and machine learning solutions',
      category: 'Cloud & ML',
      tier: 'Silver',
      benefits: [
        'GCP credits and discounts',
        'ML and AI training programs',
        'Co-development opportunities',
        'Marketing support'
      ]
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      description: 'Certified partner for CRM and business automation solutions',
      category: 'CRM & Automation',
      tier: 'Silver',
      benefits: [
        'Salesforce certification programs',
        'Co-selling opportunities',
        'Technical resources and support',
        'Partner community access'
      ]
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      description: 'Partner for IBM Watson AI and enterprise solutions',
      category: 'AI & Enterprise',
      tier: 'Bronze',
      benefits: [
        'Watson AI platform access',
        'Technical training programs',
        'Joint solution development',
        'Marketing collaboration'
      ]
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      description: 'Partner for Oracle cloud infrastructure and database solutions',
      category: 'Database & Cloud',
      tier: 'Bronze',
      benefits: [
        'Oracle cloud credits',
        'Database training programs',
        'Technical support',
        'Co-marketing opportunities'
      ]
    }
  ];

  const partnershipTiers = [
    {
      name: 'Gold',
      description: 'Our highest tier of partnership with maximum benefits and support',
      requirements: [
        'Minimum $1M annual revenue',
        'Certified technical expertise',
        'Joint go-to-market strategy',
        'Regular business reviews'
      ],
      benefits: [
        'Maximum discounts and credits',
        'Dedicated partner manager',
        'Co-marketing and co-selling',
        'Early access to new features',
        'Technical training and certification',
        'Priority support'
      ]
    },
    {
      name: 'Silver',
      description: 'Mid-tier partnership with significant benefits and growth opportunities',
      requirements: [
        'Minimum $500K annual revenue',
        'Technical certifications',
        'Active partnership engagement',
        'Quarterly business reviews'
      ],
      benefits: [
        'Substantial discounts and credits',
        'Partner success manager',
        'Marketing support',
        'Technical resources',
        'Training programs',
        'Partner events'
      ]
    },
    {
      name: 'Bronze',
      description: 'Entry-level partnership with basic benefits and growth potential',
      requirements: [
        'Minimum $100K annual revenue',
        'Basic technical knowledge',
        'Partnership agreement',
        'Annual business review'
      ],
      benefits: [
        'Standard discounts',
        'Partner portal access',
        'Basic training resources',
        'Marketing materials',
        'Community support',
        'Growth opportunities'
      ]
    }
  ];

  const successStories = [
    {
      partner: 'TechCorp',
      solution: 'AI-Powered Customer Service',
      result: '75% reduction in response time and 60% cost savings',
      quote: 'Zion Tech Group\'s partnership has been instrumental in our digital transformation success.'
    },
    {
      partner: 'FinanceFlow',
      solution: 'Cloud Infrastructure Migration',
      result: '99.9% uptime and 40% cost reduction',
      quote: 'Their expertise and partnership approach made our cloud migration seamless and successful.'
    },
    {
      partner: 'RetailMax',
      solution: 'Data Analytics Platform',
      result: '25% increase in sales and real-time insights',
      quote: 'The partnership with Zion Tech Group has transformed our data capabilities and business performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program</title>
        <meta name="description" content="Join our partner program and grow your business with Zion Tech Group. Access exclusive benefits, training, and co-marketing opportunities." />
        <meta name="keywords" content="partners, partner program, business partnerships, technology partners, reseller program" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Partner <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Program</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our partner ecosystem and grow your business with exclusive benefits, 
            training, and co-marketing opportunities.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300">Trusted by leading technology companies worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Globe className="w-4 h-4" />
                      </div>
                      <p className="text-xs">Logo</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {partner.tier}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="text-cyan-400 text-sm font-medium mb-4">{partner.category}</div>
                <ul className="space-y-2">
                  {partner.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
            <p className="text-xl text-gray-300">Choose the partnership level that fits your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                tier.name === 'Gold' ? 'ring-2 ring-yellow-400 scale-105' : ''
              }`}>
                {tier.name === 'Gold' && (
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-300">See how our partners have grown with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{story.partner}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{story.solution}</p>
                <p className="text-gray-300 mb-4">{story.result}</p>
                <blockquote className="text-gray-300 italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our partner program and start growing your business with exclusive benefits and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;