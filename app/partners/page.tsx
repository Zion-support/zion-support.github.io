'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      logo: '🏢',
      benefits: ['Azure integration', 'AI model deployment', 'Enterprise support']
    },
    {
      name: 'Google Cloud',
      category: 'Cloud Partner',
      description: 'Advanced cloud infrastructure and machine learning platforms',
      logo: '☁️',
      benefits: ['GCP services', 'ML/AI tools', 'Global infrastructure']
    },
    {
      name: 'AWS',
      category: 'Cloud Partner',
      description: 'Comprehensive cloud services and AI/ML solutions',
      logo: '🚀',
      benefits: ['AWS services', 'SageMaker integration', 'Global reach']
    },
    {
      name: 'NVIDIA',
      category: 'AI Hardware Partner',
      description: 'High-performance computing and AI acceleration',
      logo: '🎮',
      benefits: ['GPU solutions', 'AI acceleration', 'Research collaboration']
    },
    {
      name: 'IBM',
      category: 'Enterprise Partner',
      description: 'Enterprise AI solutions and consulting services',
      logo: '💼',
      benefits: ['Watson AI', 'Enterprise solutions', 'Industry expertise']
    },
    {
      name: 'Salesforce',
      category: 'CRM Partner',
      description: 'Customer relationship management and AI-powered automation',
      logo: '📊',
      benefits: ['CRM integration', 'AI automation', 'Customer insights']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Early access to new features',
    'Dedicated partner success manager',
    'Certification programs',
    'Revenue sharing opportunities'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, AI partners, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We work with leading technology companies to deliver the best solutions to our clients and create new opportunities for growth.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by industry leaders and technology innovators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-4">
                      {partner.category}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-center">{partner.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-2 px-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partner Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and help us deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Apply to Partner
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                  Download Partner Kit
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