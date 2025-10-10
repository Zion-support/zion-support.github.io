'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, ExternalLink, Star } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for cloud solutions and AI services',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure and machine learning solutions',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and data analytics platform integration',
      category: 'AI'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions and consulting services',
      category: 'Enterprise'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Enhanced service capabilities',
    'Global reach and support',
    'Cost-effective solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Flexible partnership models',
    'Proven track record of success'
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Strategic partnerships with leading technology companies. Discover how we work with industry leaders to deliver exceptional solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies to deliver exceptional solutions.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Strategic Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to bring you the best technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of working with our strategic partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our network of strategic partners and grow your business with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
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