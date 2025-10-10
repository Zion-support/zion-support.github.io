'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Technology Partner',
      benefits: ['Azure integration', 'AI platform access', 'Joint solutions']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud computing and machine learning',
      category: 'Cloud Partner',
      benefits: ['AWS services', 'ML tools', 'Global infrastructure']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google.png',
      description: 'AI and data analytics platform',
      category: 'AI Partner',
      benefits: ['TensorFlow', 'BigQuery', 'AI/ML services']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise Partner',
      benefits: ['Watson AI', 'Quantum computing', 'Enterprise solutions']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU computing and AI acceleration',
      category: 'Hardware Partner',
      benefits: ['GPU acceleration', 'CUDA platform', 'AI training']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Business Partner',
      benefits: ['CRM integration', 'Automation tools', 'Customer insights']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and resources'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and continuous innovation'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support from industry experts'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partners in AI and IT solutions" />
        <meta name="keywords" content="partners, strategic alliances, technology partners, AI partners" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Our strategic partners in AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We work with industry leaders to deliver the best AI and IT solutions to our clients.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Partners</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-gray-400">Joint Projects</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
              <p className="text-gray-300">Leading technology companies we work with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{partner.category}</p>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-gray-300">We offer unique advantages to our partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-gray-300 mb-8">
                Join our network of strategic partners and help us deliver innovative AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Partnership Benefits
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