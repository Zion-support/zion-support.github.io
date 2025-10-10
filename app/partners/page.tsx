'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Building, Users, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions',
    'Co-marketing and co-selling',
    'Product integration support',
    'Priority customer support'
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with maximum benefits',
      features: ['Dedicated support team', 'Joint product development', 'Revenue sharing', 'Co-marketing campaigns']
    },
    {
      name: 'Gold',
      description: 'Premium partnerships with significant benefits',
      features: ['Priority support', 'Training programs', 'Marketing support', 'Technical resources']
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with core benefits',
      features: ['Basic support', 'Documentation access', 'Partner portal', 'Certification programs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, business partnerships" />
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm opacity-80">{partner.name}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {partner.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the partnership level that best fits your business needs and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  tier.name === 'Platinum' 
                    ? 'border-yellow-400/50 scale-105' 
                    : 'border-white/10 hover:border-cyan-400/30'
                }`}
              >
                {tier.name === 'Platinum' && (
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.name === 'Platinum'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {tier.name === 'Platinum' ? 'Contact Sales' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our ecosystem and help shape the future of AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn More
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;