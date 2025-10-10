'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, Award, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Premier',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud & AI',
      tier: 'Premier',
      benefits: ['AWS credits', 'Training resources', 'Joint go-to-market']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      tier: 'Advanced',
      benefits: ['GCP credits', 'Technical training', 'Solution development']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Technology partner for GPU-accelerated AI computing',
      category: 'Hardware & AI',
      tier: 'Technology',
      benefits: ['Hardware discounts', 'Technical support', 'AI frameworks']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Partner for CRM and business automation solutions',
      category: 'Business Software',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'Training programs', 'Integration support']
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Partner for IT service management and workflow automation',
      category: 'IT Management',
      tier: 'Silver',
      benefits: ['Platform access', 'Training resources', 'Technical support']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Partner for enterprise AI and hybrid cloud solutions',
      category: 'Enterprise',
      tier: 'Gold',
      benefits: ['IBM Cloud credits', 'AI tools', 'Enterprise support']
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Partner for database and cloud infrastructure solutions',
      category: 'Database & Cloud',
      tier: 'Gold',
      benefits: ['Oracle Cloud credits', 'Database tools', 'Migration support']
    },
    {
      name: 'Docker',
      logo: '/images/partners/docker.png',
      description: 'Partner for containerization and DevOps solutions',
      category: 'DevOps',
      tier: 'Technology',
      benefits: ['Docker Hub access', 'Training materials', 'Technical support']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Certified Expertise',
      description: 'Our team holds advanced certifications from all major technology partners'
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Access to dedicated partner support channels and technical resources'
    },
    {
      icon: Users,
      title: 'Joint Solutions',
      description: 'Collaborative development of custom solutions tailored to your needs'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Implementation following vendor-recommended best practices and guidelines'
    },
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'Solutions designed with enterprise-grade security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Faster Implementation',
      description: 'Accelerated deployment through pre-built integrations and templates'
    }
  ];

  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management', 'Enterprise', 'Database & Cloud', 'DevOps'];

  const filteredPartners = selectedCategory === 'All' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Premier': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Gold': return 'text-yellow-600 bg-yellow-600/10 border-yellow-600/20';
      case 'Silver': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      case 'Technology': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Advanced': return 'text-green-400 bg-green-400/10 border-green-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>Technology Partners - Zion Tech Group | Strategic Alliances</title>
        <meta name="description" content="Discover our strategic technology partnerships with leading cloud providers, AI companies, and enterprise software vendors." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, Microsoft Azure, AWS, Google Cloud, enterprise partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with leading technology companies to deliver the best solutions for our clients. 
                Our strategic partnerships ensure access to cutting-edge tools, resources, and expertise.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🏢</div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {partner.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTierColor(partner.tier)}`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Benefits Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Why Partner with Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Partner CTA */}
            <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interested in Partnering with Us?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  View Partnership Tiers
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