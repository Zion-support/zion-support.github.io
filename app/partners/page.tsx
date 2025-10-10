'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions for enterprise clients',
      category: 'AI & ML'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and hybrid cloud services',
      category: 'Enterprise AI'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM integration and customer experience solutions',
      category: 'CRM & CX'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise application development',
      category: 'Database & Enterprise'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market strategies',
    'Technical training and certification',
    'Co-marketing opportunities',
    'Priority support and resources',
    'Innovation collaboration'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, technology partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with leading technology companies to deliver the best solutions for our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Partners</h2>
              <p className="text-xl text-gray-300">Trusted by industry leaders worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {partner.category}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and grow your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Apply to Partner
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;