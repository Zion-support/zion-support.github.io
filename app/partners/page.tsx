'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier consulting partner for AWS cloud infrastructure',
      category: 'Cloud Infrastructure'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML services',
      category: 'AI & Machine Learning'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Technology partner for enterprise AI and quantum computing',
      category: 'Enterprise AI'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified implementation partner for CRM and automation solutions',
      category: 'CRM & Automation'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise software implementation partner',
      category: 'Database & Enterprise'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Certified expertise and training',
    'Priority support and resources',
    'Joint go-to-market opportunities',
    'Technical enablement programs',
    'Co-marketing and co-selling'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our strategic technology partnerships with leading cloud providers, AI companies, and enterprise software vendors." />
        <meta name="keywords" content="technology partners, cloud partnerships, AI partnerships, enterprise software, strategic alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships for enhanced solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with leading technology companies to deliver comprehensive solutions and ensure our clients have access to the best tools and platforms.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl opacity-50">🏢</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Partnership Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology partners and unlock new opportunities for growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
                >
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </a>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-600 transition-all duration-200 border border-slate-600"
                >
                  <ExternalLink className="w-5 h-5" />
                  Contact Partners Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;