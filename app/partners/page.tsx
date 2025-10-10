'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Handshake, Globe, Award, Users, Zap, Shield, Target, Star } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Cloud',
      description: 'Cloud infrastructure and AI services',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud',
      description: 'Cloud computing and machine learning',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'Cloud',
      description: 'AI and data analytics platform',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'AI',
      description: 'Watson AI and enterprise solutions',
      tier: 'Gold'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      category: 'AI',
      description: 'GPU computing and AI acceleration',
      tier: 'Silver'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM',
      description: 'Customer relationship management',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      category: 'Database',
      description: 'Database and enterprise applications',
      tier: 'Silver'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      category: 'ERP',
      description: 'Enterprise resource planning',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  const partnerTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partners with deep integration',
      benefits: ['Priority support', 'Custom solutions', 'Joint R&D', 'Executive sponsorship'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      description: 'Key partners with strong collaboration',
      benefits: ['Enhanced support', 'Co-marketing', 'Training programs', 'Dedicated resources'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Silver',
      description: 'Valued partners with mutual growth',
      benefits: ['Standard support', 'Marketing materials', 'Basic training', 'Partner portal access'],
      color: 'from-gray-300 to-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities with Zion Tech Group. Strategic partnerships for mutual growth and success." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of industry leaders and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${partnerTiers.find(tier => tier.name === partner.tier)?.color} text-white`}>
                    {partner.tier}
                  </span>
                  <span className="text-gray-400 text-xs">{partner.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Partner Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business needs and growth objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tier.name}</h3>
                <p className="text-gray-300 text-center mb-6">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and success. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;