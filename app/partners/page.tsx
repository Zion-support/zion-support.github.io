'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Star } from 'lucide-react';

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
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Enhanced service capabilities',
    'Reduced implementation costs',
    'Faster time to market',
    'Comprehensive support',
    'Scalable solutions'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver superior AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Oracle, Salesforce, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions that drive business success.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-3xl font-bold text-white">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-4">
                    {partner.description}
                  </p>
                  
                  <button className="w-full py-2 px-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why our strategic partnerships matter for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{benefit}</h3>
                  </div>
                  <p className="text-gray-300">
                    Leverage our partnerships to access the latest technologies and deliver superior solutions to your clients.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Partner With Us
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Partnership Program
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;