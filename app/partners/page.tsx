'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Globe, Shield, Zap, Users } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🔗',
      description: 'Strategic cloud and AI partnership',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '🔗',
      description: 'Cloud infrastructure solutions',
      category: 'Cloud Services'
    },
    {
      name: 'Google Cloud',
      logo: '🔗',
      description: 'Advanced analytics and ML',
      category: 'Data & Analytics'
    },
    {
      name: 'IBM',
      logo: '🔗',
      description: 'Enterprise AI solutions',
      category: 'Enterprise AI'
    },
    {
      name: 'Salesforce',
      logo: '🔗',
      description: 'CRM and automation platform',
      category: 'CRM & Automation'
    },
    {
      name: 'Oracle',
      logo: '🔗',
      description: 'Database and enterprise software',
      category: 'Database & Software'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling support',
    'Dedicated partner success manager',
    'Priority technical support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities with Zion Tech Group. Strategic partnerships for mutual growth and success." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Strategic
            </span>
            <br />
            <span className="text-white">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join our partner ecosystem and unlock new opportunities for growth, innovation, and mutual success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#become-partner"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry leaders to deliver the best solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partner Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner program and unlock exclusive benefits and opportunities.
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
      <section id="become-partner" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner ecosystem and start growing your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;