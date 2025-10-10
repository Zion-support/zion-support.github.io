'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Handshake, Award, Target, Phone, Mail } from 'lucide-react';

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
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning platforms',
      category: 'AI/ML'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise solutions',
      category: 'Quantum'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions',
      category: 'CRM'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise applications',
      category: 'Database'
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

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets through our partner network'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep technical knowledge'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Specialized solutions tailored to specific industries'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities. Strategic partnerships with leading technology companies for mutual growth and success." />
        <meta name="keywords" content="partnerships, strategic partners, technology partners, business partnerships, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Strategic
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Partnerships
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Technology Partners
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We work with industry-leading technology companies to deliver the best solutions to our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group text-center"
                >
                  <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <div className="text-2xl text-cyan-400/50">🏢</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{partner.description}</p>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Partner With Us?
                </h2>
                <p className="text-gray-300 mb-8">
                  Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
                  We provide comprehensive support and resources to help our partners thrive.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Partner Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Revenue Growth</h4>
                      <p className="text-gray-300 text-sm">Access to new markets and revenue streams</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Technical Support</h4>
                      <p className="text-gray-300 text-sm">Dedicated technical support and training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Certification</h4>
                      <p className="text-gray-300 text-sm">Become a certified partner with exclusive benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and success. 
                Contact us today to learn more about our partnership programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-4">
                  Have questions? Contact our partnership team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="mailto:partners@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    partners@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+1-302-464-0950"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1-302-464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
