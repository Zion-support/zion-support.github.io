'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, ArrowRight, Users, Award, Globe, Shield, Zap } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  benefits: string[];
  featured: boolean;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services.',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      benefits: [
        'Azure cloud credits',
        'Co-marketing opportunities',
        'Technical support',
        'Joint solution development'
      ],
      featured: true
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier AWS partner delivering cloud-native solutions.',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      benefits: [
        'AWS credits and discounts',
        'Technical training',
        'Marketing support',
        'Solution architecture guidance'
      ],
      featured: true
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Google Cloud partner specializing in AI and data analytics.',
      category: 'AI & Data',
      website: 'https://cloud.google.com',
      benefits: [
        'Google Cloud credits',
        'AI/ML training',
        'Co-innovation projects',
        'Go-to-market support'
      ],
      featured: true
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Salesforce consulting partner for CRM and automation solutions.',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      benefits: [
        'Salesforce certifications',
        'Development sandboxes',
        'Partner enablement',
        'Joint customer success'
      ],
      featured: false
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Oracle partner for enterprise database and cloud solutions.',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      benefits: [
        'Oracle cloud credits',
        'Technical certifications',
        'Partner training',
        'Solution development support'
      ],
      featured: false
    },
    {
      id: 'ibm',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'IBM partner for AI, blockchain, and enterprise solutions.',
      category: 'AI & Blockchain',
      website: 'https://ibm.com',
      benefits: [
        'IBM cloud credits',
        'AI/ML tools access',
        'Technical workshops',
        'Co-marketing opportunities'
      ],
      featured: false
    }
  ];

  const partnerCategories = ['All', 'Cloud & AI', 'Cloud Computing', 'AI & Data', 'CRM & Automation', 'Enterprise Software', 'AI & Blockchain'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPartners = partners.filter(partner => 
    selectedCategory === 'All' || partner.category === selectedCategory
  );

  const featuredPartners = partners.filter(partner => partner.featured);

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, Salesforce, Oracle, IBM" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Strategic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Partnerships
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We partner with leading technology companies to deliver comprehensive solutions and unlock new opportunities for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships with industry leaders enable us to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPartners.map((partner) => (
                <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete partner ecosystem across different technology categories.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {partnerCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <img src={partner.logo} alt={partner.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                      <span className="text-cyan-400 text-sm">{partner.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    {partner.featured && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become a Partner
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Partner Network</h3>
                  <p className="text-gray-300 text-sm">Access to our global partner network and resources</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Certification</h3>
                  <p className="text-gray-300 text-sm">Get certified on our solutions and best practices</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Expand your business with our global presence</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
              >
                <Zap className="w-5 h-5 mr-2" />
                Become a Partner
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;