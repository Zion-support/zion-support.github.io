'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Handshake } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services.',
      logo: '/images/microsoft-logo.png'
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'Premier AWS consulting partner delivering scalable cloud solutions.',
      logo: '/images/aws-logo.png'
    },
    {
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning solutions on Google Cloud Platform.',
      logo: '/images/google-cloud-logo.png'
    },
    {
      name: 'Salesforce',
      category: 'CRM Partner',
      description: 'Custom Salesforce implementations and integrations for business growth.',
      logo: '/images/salesforce-logo.png'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling support',
    'Dedicated partner success manager',
    'Early access to new features and products'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We work with industry leaders to deliver the best AI and IT solutions to our clients.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700/70 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Star className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
              <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>
              <p className="text-gray-300 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-slate-700/50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Handshake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Partnership</h3>
              <p className="text-gray-300">Long-term collaboration for mutual growth and success.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Joint Solutions</h3>
              <p className="text-gray-300">Develop integrated solutions that benefit both our clients.</p>
            </div>
            <div className="text-center">
              <ArrowRight className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Market Expansion</h3>
              <p className="text-gray-300">Access new markets and opportunities together.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Partner With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Partner Success Stories */}
        <div className="bg-slate-700/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Partner Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Microsoft Partnership Success
              </h3>
              <p className="text-gray-300 mb-4">
                Through our strategic partnership with Microsoft, we've successfully migrated 
                50+ enterprise clients to Azure, resulting in 40% cost savings and improved performance.
              </p>
              <div className="flex items-center text-cyan-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">40% Cost Reduction</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AWS Collaboration Results
              </h3>
              <p className="text-gray-300 mb-4">
                Our partnership with AWS has enabled us to deliver scalable cloud solutions 
                to over 100 clients, achieving 99.9% uptime and exceptional customer satisfaction.
              </p>
              <div className="flex items-center text-cyan-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;