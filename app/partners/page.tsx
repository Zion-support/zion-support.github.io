'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
}
  ];

  const benefits = [
'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Early access to new features',
    'Dedicated partner success manager'

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
<section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Partners
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We work with industry leaders to deliver cutting-edge technology solutions. 
                Our strategic partnerships enable us to provide the best tools and services to our clients.
              </p>

            </div>
          </div>
        </section>

{/* Partners Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Collaborating with the world's leading technology companies to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-800">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-cyan-400 mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships bring together the best of both worlds: cutting-edge technology and proven expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
<div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Global reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Enterprise focus</span>

                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply to Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to deliver exceptional 
              value to our mutual customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Partnership Discussion
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;