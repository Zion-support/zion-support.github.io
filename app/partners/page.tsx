'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: ['Azure integration', 'AI model deployment', 'Enterprise support']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Leading cloud infrastructure and machine learning platform',
      category: 'Cloud Infrastructure',
      benefits: ['AWS services', 'ML/AI tools', 'Global infrastructure']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'Advanced AI and data analytics solutions',
      category: 'AI & Analytics',
      benefits: ['TensorFlow', 'BigQuery', 'AI Platform']
    },
    {
      name: 'IBM',
      logo: '🔵',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      benefits: ['Watson AI', 'Quantum computing', 'Enterprise tools']
    },
    {
      name: 'NVIDIA',
      logo: '🎮',
      description: 'GPU acceleration and AI computing power',
      category: 'AI Hardware',
      benefits: ['GPU acceleration', 'CUDA platform', 'AI training']
    },
    {
      name: 'Salesforce',
      logo: '⚡',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      benefits: ['Salesforce integration', 'Customer insights', 'Sales automation']
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      title: 'Strategic Alliances',
      description: 'Partnerships with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-400" />,
      title: 'Collaborative Innovation',
      description: 'Joint development of innovative AI and IT solutions'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep expertise in partner technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Dedicated Support',
      description: 'Access to partner support teams and resources'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies. Microsoft, AWS, Google Cloud, IBM, NVIDIA, and Salesforce partnerships for enterprise solutions." />
        <meta name="keywords" content="technology partners, Microsoft partner, AWS partner, Google Cloud partner, IBM partner, enterprise partnerships" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships with leading technology companies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We partner with industry leaders to deliver cutting-edge AI and IT solutions. 
            Our strategic alliances ensure access to the latest technologies and best practices.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {partner.category}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
              
              <ul className="space-y-2 mb-6">
                {partner.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;