'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, ArrowRight, Globe, Shield, Zap, Users, Cloud, Cpu, Building } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  benefits: string[];
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI solutions.',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      benefits: [
        'Azure cloud credits',
        'Co-marketing opportunities',
        'Technical support',
        'Joint product development'
      ]
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier AWS partner providing cloud infrastructure and AI services.',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      benefits: [
        'AWS credits and discounts',
        'Certified solutions architect support',
        'Marketplace listing',
        'Training and certification'
      ]
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Google Cloud Platform partner specializing in AI and machine learning.',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      benefits: [
        'GCP credits',
        'AI/ML expertise',
        'Co-innovation labs',
        'Go-to-market support'
      ]
    },
    {
      id: '4',
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'NVIDIA partner for GPU-accelerated AI and deep learning solutions.',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      benefits: [
        'GPU development kits',
        'Technical training',
        'Early access to new hardware',
        'Joint research projects'
      ]
    },
    {
      id: '5',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Salesforce partner for CRM integration and business automation.',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      benefits: [
        'Salesforce credits',
        'AppExchange listing',
        'Certified consultant support',
        'Co-selling opportunities'
      ]
    },
    {
      id: '6',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'IBM partner for enterprise AI and hybrid cloud solutions.',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      benefits: [
        'IBM Cloud credits',
        'Watson AI platform access',
        'Enterprise support',
        'Joint solution development'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners', icon: Globe },
    { id: 'Cloud & AI', name: 'Cloud & AI', icon: Cloud },
    { id: 'Cloud Infrastructure', name: 'Infrastructure', icon: Shield },
    { id: 'AI & ML', name: 'AI & ML', icon: Zap },
    { id: 'AI Hardware', name: 'Hardware', icon: Cpu },
    { id: 'CRM & Automation', name: 'CRM', icon: Users },
    { id: 'Enterprise AI', name: 'Enterprise', icon: Building }
  ];

  const partnershipBenefits = [
    {
      icon: CheckCircle,
      title: 'Technical Support',
      description: 'Access to dedicated technical resources and expertise from our partners.'
    },
    {
      icon: Zap,
      title: 'Co-innovation',
      description: 'Collaborate on cutting-edge solutions and joint product development.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Leverage our partners\' global presence to serve clients worldwide.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance through our partner ecosystem.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, strategic alliances, technology partners" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Explore our strategic partnerships with leading technology companies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We work with industry leaders to deliver cutting-edge solutions and provide our clients with access to the best technology platforms and services.
            </p>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {partner.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
