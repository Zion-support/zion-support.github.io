'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

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
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration solutions',
      category: 'AI Hardware'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation platform integration',
      category: 'Business Software'
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
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
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

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Become Our Partner</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our ecosystem and help shape the future of AI and IT solutions. Let's grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;