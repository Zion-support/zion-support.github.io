'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud & AI'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Technology partner for GPU-accelerated AI computing',
      category: 'Hardware & AI'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Partner for CRM and business automation solutions',
      category: 'Business Software'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Partner for IT service management and workflow automation',
      category: 'IT Management'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and tools',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features and updates',
    'Dedicated partner success manager'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, Microsoft Azure, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Strategic Partnerships
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We partner with leading technology companies to deliver cutting-edge solutions 
                and provide our clients with access to the best tools and platforms in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-3xl font-bold text-cyan-400">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {partner.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                    {partner.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Partnership Benefits
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our strategic partnerships provide significant advantages for our clients and partners alike
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 text-center border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Partnering with Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network of technology partners and help us deliver innovative solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                partners@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;