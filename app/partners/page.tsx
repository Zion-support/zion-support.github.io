'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      description: 'Cloud infrastructure and AI platform partnership',
      category: 'Cloud Partner',
      logo: '/api/placeholder/200/100'
    },
    {
      name: 'Amazon Web Services',
      description: 'Cloud computing and machine learning solutions',
      category: 'Cloud Partner',
      logo: '/api/placeholder/200/100'
    },
    {
      name: 'Google Cloud',
      description: 'AI and data analytics platform integration',
      category: 'AI Partner',
      logo: '/api/placeholder/200/100'
    },
    {
      name: 'IBM',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise Partner',
      logo: '/api/placeholder/200/100'
    },
    {
      name: 'Salesforce',
      description: 'CRM integration and business automation',
      category: 'Software Partner',
      logo: '/api/placeholder/200/100'
    },
    {
      name: 'Oracle',
      description: 'Database and enterprise application solutions',
      category: 'Database Partner',
      logo: '/api/placeholder/200/100'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Product integration support',
    'Priority customer support'
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Strategic Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with industry leaders to deliver comprehensive AI and IT solutions that drive business success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="h-24 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-sm font-semibold">{partner.name}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center mx-auto">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;