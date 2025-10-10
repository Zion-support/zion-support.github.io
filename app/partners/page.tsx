'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/200x100/0078d4/ffffff?text=Microsoft',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://via.placeholder.com/200x100/ff9900/ffffff?text=AWS',
      description: 'Premier partner for AWS cloud infrastructure and services',
      category: 'Cloud Infrastructure',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: 'https://via.placeholder.com/200x100/4285f4/ffffff?text=Google+Cloud',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: 'https://via.placeholder.com/200x100/052fad/ffffff?text=IBM',
      description: 'Technology partner for enterprise AI and data solutions',
      category: 'AI & Data',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: 'https://via.placeholder.com/200x100/00a1e0/ffffff?text=Salesforce',
      description: 'CRM and business automation solutions partner',
      category: 'Business Solutions',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: 'https://via.placeholder.com/200x100/ff0000/ffffff?text=Oracle',
      description: 'Database and enterprise software solutions partner',
      category: 'Enterprise Software',
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: Star,
      title: 'Preferred Status',
      description: 'We maintain preferred partner status with top technology providers'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to dedicated partner support and resources'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successful implementations across various industries'
    }
  ];

  const tiers = [
    {
      name: 'Platinum',
      color: 'from-gray-400 to-gray-600',
      description: 'Highest level of partnership with exclusive benefits'
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Strong partnership with significant benefits'
    },
    {
      name: 'Silver',
      color: 'from-gray-300 to-gray-500',
      description: 'Established partnership with standard benefits'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Learn about our technology partnerships with leading providers like Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with leading technology providers to deliver the best solutions 
              for our clients. Our partnerships ensure access to cutting-edge technology 
              and expert support.
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Partner Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain"
                    />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      partner.tier === 'Platinum' ? 'bg-gray-400/20 text-gray-300' :
                      partner.tier === 'Gold' ? 'bg-yellow-400/20 text-yellow-300' :
                      'bg-gray-300/20 text-gray-300'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Interested in partnering with us? We're always looking for innovative 
              technology providers to join our ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;