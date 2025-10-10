'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Cloud and AI solutions partner',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure partner',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platforms',
      category: 'AI/ML'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Quantum computing and enterprise solutions',
      category: 'Quantum'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing and AI acceleration',
      category: 'Hardware'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation solutions',
      category: 'Software'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Enhanced product capabilities',
    'Global market reach',
    'Technical expertise sharing',
    'Joint innovation projects',
    'Comprehensive support ecosystem'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, technology partnerships, strategic alliances, Microsoft, AWS, Google Cloud, IBM, NVIDIA" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions that drive innovation and growth.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strategic alliances with leading technology companies to deliver exceptional solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{partner.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{partner.name}</h3>
                  <p className="text-cyan-400 mb-3 text-center">{partner.category}</p>
                  <p className="text-gray-300 text-sm text-center">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How our strategic partnerships benefit our clients and partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300 text-sm">
                      Leveraging our partnerships to deliver enhanced value and capabilities to our clients.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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