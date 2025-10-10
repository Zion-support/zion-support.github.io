'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Technology',
      tier: 'Platinum',
      benefits: [
        'Joint go-to-market initiatives',
        'Technical co-development',
        'Shared customer success programs',
        'Exclusive access to beta features'
      ]
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier partner for cloud infrastructure and machine learning',
      category: 'Cloud',
      tier: 'Platinum',
      benefits: [
        'Advanced technical support',
        'Co-marketing opportunities',
        'Joint solution development',
        'Priority access to new services'
      ]
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for AI/ML solutions and data analytics',
      category: 'AI/ML',
      tier: 'Gold',
      benefits: [
        'Technical training programs',
        'Marketing support',
        'Solution certification',
        'Customer referral programs'
      ]
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Partner for quantum computing and enterprise solutions',
      category: 'Quantum',
      tier: 'Gold',
      benefits: [
        'Quantum computing access',
        'Enterprise solution integration',
        'Technical workshops',
        'Joint research initiatives'
      ]
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Priority access to new features',
    'Dedicated partner success manager'
  ];

  const tiers = [
    {
      name: 'Platinum',
      description: 'Strategic partners with deep integration',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      name: 'Gold',
      description: 'Key partners with strong collaboration',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      name: 'Silver',
      description: 'Valued partners with growing relationship',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities with Zion Tech Group. Strategic partnerships for mutual growth and innovation." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Partner Ecosystem
              </span>
              <br />
              <span className="text-white">Grow Together</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our network of strategic partners and unlock new opportunities for growth, innovation, and mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer different partnership levels to match your business needs and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Award className={`h-8 w-8 ${tier.color}`} />
                </div>
                <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Training programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Marketing support</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                  <span className={`px-3 py-1 ${partner.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' : 'bg-yellow-500/20 text-yellow-400'} text-sm rounded-full`}>
                    {partner.tier}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{partner.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;