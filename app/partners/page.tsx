'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  featured: boolean;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      website: 'https://microsoft.com',
      featured: true
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      featured: true
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platforms',
      category: 'AI/ML',
      website: 'https://cloud.google.com',
      featured: true
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise',
      website: 'https://ibm.com',
      featured: false
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'CRM',
      website: 'https://salesforce.com',
      featured: false
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise solutions',
      category: 'Database',
      website: 'https://oracle.com',
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Cloud', 'AI/ML', 'Enterprise', 'CRM', 'Database'];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and other industry leaders to deliver cutting-edge solutions." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Partners
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We collaborate with industry leaders to deliver cutting-edge AI and IT solutions 
                that drive innovation and business success.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 ${
                    partner.featured ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                      {partner.featured && (
                        <span className="text-yellow-400">
                          <Award className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver comprehensive solutions 
                that combine the best of multiple technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategic Alliances</h3>
                <p className="text-gray-300">
                  We maintain strong relationships with industry leaders to ensure 
                  access to the latest technologies and best practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300">
                  Our partnerships focus on cutting-edge solutions that drive 
                  innovation and provide competitive advantages.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-gray-300">
                  Access to certified experts and specialized training programs 
                  to ensure successful implementation and adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Interested in partnering with us? Let's explore how we can work together 
              to deliver exceptional value to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-lg"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Partner With Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;