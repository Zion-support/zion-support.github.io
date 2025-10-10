'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ExternalLink, Building2, Cloud, Cpu, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning platform with cutting-edge tools',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing expertise',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'Hardware & AI',
      website: 'https://nvidia.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise database and cloud infrastructure solutions',
      category: 'Database & Cloud',
      website: 'https://oracle.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Revenue sharing opportunities',
    'Technical certification programs'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud & AI': return <Cloud className="w-5 h-5" />;
      case 'Cloud Computing': return <Cloud className="w-5 h-5" />;
      case 'AI & ML': return <Cpu className="w-5 h-5" />;
      case 'Enterprise AI': return <Building2 className="w-5 h-5" />;
      case 'Hardware & AI': return <Zap className="w-5 h-5" />;
      case 'Database & Cloud': return <Shield className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and unlock new opportunities." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, technology partnerships, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions and create mutual value for our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-3xl text-white/60">🏢</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-cyan-400 mb-3">
                      {getCategoryIcon(partner.category)}
                      <span className="text-sm font-medium">{partner.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 text-center">
                    {partner.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become Our Partner
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
