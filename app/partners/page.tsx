'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Award, Shield, Zap } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  benefits: string[];
  featured: boolean;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI solutions.',
      category: 'Technology',
      benefits: [
        'Access to Azure AI services',
        'Co-marketing opportunities',
        'Technical support and training',
        'Joint product development'
      ],
      featured: true
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI/ML services partnership.',
      category: 'Cloud Services',
      benefits: [
        'AWS credits and discounts',
        'Technical architecture support',
        'Marketplace listing',
        'Training and certification'
      ],
      featured: true
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform integration.',
      category: 'AI/ML',
      benefits: [
        'Google Cloud AI tools',
        'TensorFlow integration',
        'Data analytics solutions',
        'Joint go-to-market'
      ],
      featured: false
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing collaboration.',
      category: 'Enterprise AI',
      benefits: [
        'Watson AI platform access',
        'Quantum computing research',
        'Enterprise security solutions',
        'Industry expertise sharing'
      ],
      featured: false
    }
  ];

  const categories = Array.from(new Set(partners.map(partner => partner.category)));

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Strategic partnerships with leading technology companies" />
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We work with industry leaders to deliver cutting-edge AI and IT solutions to our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className={`bg-gray-800/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                    partner.featured ? 'border-2 border-cyan-400' : 'border border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <div className="text-white text-2xl">🏢</div>
                    </div>
                    {partner.featured && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
                    {partner.category}
                  </span>
                  
                  <p className="text-gray-300 mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300">Access to our worldwide client base and market presence.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Collaborate on cutting-edge AI and technology solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Work with our experienced AI and IT professionals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of successful implementations and client satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of technology partners and unlock new opportunities for growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;